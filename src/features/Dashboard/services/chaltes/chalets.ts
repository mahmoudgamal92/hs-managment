import { request } from '@network';

export const GetUserChalets = async (UserId :string) => {
 const  params =  {'UserId' : UserId}
  const res = request({
    method:'get',
    path :'/Chalet/GetByUserId',
    params:{UserId}
  }
  );
  return res;
};