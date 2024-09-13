import {
  UseMutationResult,
  UseQueryResult
} from "@tanstack/react-query";
import {
  UseFormReturn
} from "react-hook-form";
import {
  AxiosError,
  AxiosResponse
} from "axios";
import {
  useEffect
} from "react";

import {
  BaseResponse,
  Response,
  ResponseFieldError
} from "~/models";


export interface UseQueryFieldsParams<T> {
  mutation?: UseMutationResult<AxiosResponse<BaseResponse<Response<T>>>, AxiosError<BaseResponse<ResponseFieldError>>, any>,
  query?: UseQueryResult<T | undefined, AxiosError<BaseResponse<Response<any>>>>,
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
