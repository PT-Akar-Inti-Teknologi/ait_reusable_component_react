export type BaseResponse<T> = {
  response_schema?: {
    response_code?: string
    response_message?: Translation
  }
  response_output?: T
}

export type Translation = {
  en?: string
  id?: string
}

export type PaginateModel = {
  page?: number
  total?: number
  size?: number
  total_pages?: number
  checked?: number
}

export type Pagination<T> = {
  list?: ResponseList<T>
}

export type ResponseList<T> = {
  content?: T
  pagination?: PaginateModel
}

export type Response<T> = {
  detail?: T
}

export type ResponseFieldError = {
  errors: {
    field?: string
    message?: Translation
  }[]
}
