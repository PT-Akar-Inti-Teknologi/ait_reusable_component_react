import {
  useEffect
} from "react";
import {
  UseFormReturn
} from "react-hook-form";
import {
  MutationType,
  QueryType
} from "~/types";

export interface UseQueryFieldsParams<T> {
  mutation?: MutationType,
  query?: QueryType<T>,
  form: UseFormReturn<any, any, undefined>
}

export function useQueryFields<T>(params: UseQueryFieldsParams<T>) {

  useEffect(() => {
    if (!!params.mutation && Array.isArray(params.mutation.error?.response?.data.response_output?.errors)) {
      params.mutation.error?.response?.data.response_output?.errors.forEach((item) => {
        params.form.setError(item.field!, {
          message: item.message?.en,
          type: 'serverError'
        });
      })
    }
  }, [params.mutation?.isError]);


  useEffect(() => {
    if (!!params.query && params.query.isFetchedAfterMount) {
      const entries = Object.entries(params.query.data || {}) as { [key: string]: any }
      entries.forEach(([key, value]: [string, any]) => {
        if (value !== undefined) {
          if (typeof value === "string") {
            value = value.trim()
          }
          params.form.setValue<any>(key, value);
        }
      });
    }
  }, [params.query?.isFetchedAfterMount]);
}
