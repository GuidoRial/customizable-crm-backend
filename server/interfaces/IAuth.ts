export interface ISignUpUserDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ILoginUserDTO {
  email: string;
  password: string;
}
