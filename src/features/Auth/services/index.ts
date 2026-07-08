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

export const updateNotificationToken = async (userId: string, token: string) => {
  const res = request({
    method: 'post',
    path: '/User/AssignNotificationToken',
    params: { userId, token },
  });
  return res;
};