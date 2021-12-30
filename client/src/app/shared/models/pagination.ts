import { IProduct } from "./product";

export interface IPagintation {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: IProduct[];
}
