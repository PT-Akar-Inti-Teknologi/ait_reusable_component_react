import { createContext, useContext, useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { Button } from "~/components/Button";
import { QueryStateContent } from "~/components/react-query";
import { LoadingIcon } from "~/components/react-query/QueryState/Icons";
import { useQueryFields } from "~/hooks";
import { hasArray } from "~/utils";
import { Theme } from "./HookForm.theme";
import { HookFormContextValue, HookFormProviderProps } from "./HookForm.types";

const HookFormContext = createContext<HookFormContextValue>({} as HookFormContextValue);

export function HookFormProvider<T>({
  mutation,
  disables,
  children,
  enables,
  query,
  form
}: Readonly<HookFormProviderProps<T>>) {

  useQueryFields({ mutation, query, form });

  const value = useMemo<HookFormContextValue>(
    () => ({ disables, enables }),
    [
      JSON.stringify(disables),
      JSON.stringify(enables)
    ]
  );

  return (
    <HookFormContext.Provider value={value}>
      <FormProvider {...form}>
        <HookFormContent {...{ children, query, form }} />
      </FormProvider>
    </HookFormContext.Provider>
  );
}

function HookFormContent<T>({
  children,
  query
}: Readonly<HookFormProviderProps<T>>) {

  if (query?.isFetching) {
    return (
      <>
        {children}
        <div className={twMerge(Theme.mask)}>
          <LoadingIcon />
        </div>
      </>
    );
  }

  if (query?.isError) {
    const errorMessage = query.error.response?.data.response_schema?.response_message?.en ?? query?.error.message;
    return (
      <QueryStateContent title="Error" description={errorMessage || "Interal server error"}>
        <Button onClick={() => query?.refetch()}>
          Reload
        </Button>
      </QueryStateContent>
    );
  }

  return <>{children}</>;
}

export function useHookFormContext() {

  const context = useContext(HookFormContext);

  return context;
}

export function useDisabledField(name: string) {

  const context = useHookFormContext();

  if (hasArray(context.enables) && !context.enables.includes(name)) {
    return true;
  }
  if (hasArray(context.disables) && context.disables.includes(name)) {
    return true;
  }
  return false;
}
