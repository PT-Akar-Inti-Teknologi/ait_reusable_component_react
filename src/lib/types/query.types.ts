import {
  UseMutationResult,
  UseQueryResult
} from "@tanstack/react-query";
import {
  AxiosError
} from "axios";
import {
  BaseResponse,
  Response,
  ResponseFieldError
} from "~/models";

export type MutationErrorType<T = ResponseFieldError> = AxiosError<BaseResponse<T>>;
export type MutationType = UseMutationResult<any, MutationErrorType, any, unknown>;

export type QueryErrorType<T = any> = AxiosError<BaseResponse<Response<T>>>;
export type QueryType<T> = UseQueryResult<T | undefined, QueryErrorType>;
