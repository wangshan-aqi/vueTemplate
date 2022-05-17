export interface ResponseData <T = any> {
    status: number,
    msg: string,
    data: T
  }
export interface IUserRegister {
    token: string,
    username: string,
}
export interface IUserRegisters {
    data: ResponseData<IUserRegister>
}
export interface IBanner {
    id: number,
    imgUrl: string
}
export interface IBannerList {
    data: IBanner[]
}
