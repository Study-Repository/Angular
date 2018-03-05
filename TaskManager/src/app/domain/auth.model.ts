import {UserModel} from './user.model';
import {ErrorModel} from './error.model';

/**
 * 认证信息
 */
export interface AuthModel {
  user?: UserModel;
  userId?: string;
  error?: ErrorModel;
  token?: string;
}
