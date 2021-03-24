import { ResponseModel } from "./responseModel";

export interface DetailResponseModel<T> extends ResponseModel{
    data:T
}