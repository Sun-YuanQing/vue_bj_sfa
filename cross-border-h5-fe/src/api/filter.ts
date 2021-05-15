import * as Cookies from 'js-cookie';
import AuthOA from '@/utils/auth/usr';

/**
 * 是否需要判断登录态
 * @param to
 * @param from
 * @param next
 */
export const isNeedLogin = async (to: any, from: any, next: any) => {
  const token = Cookies.get('token');
  if (token) {
    next();
  } else {
    new AuthOA(to, from, next);
  }
};
