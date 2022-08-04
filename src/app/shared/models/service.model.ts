export interface IServiceResponse<T> {
    data: T,
    title: string
    status: number
    message: string
    search: any
}