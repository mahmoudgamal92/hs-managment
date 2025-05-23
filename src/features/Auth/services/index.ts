import { request } from '@network';

export const signIn = async (userName:string , Password :string) => {
  const res = request({
    method:'get',
    path :'/User/SignIn',
    params:{userName , Password}
  }
  );
  return res;
};