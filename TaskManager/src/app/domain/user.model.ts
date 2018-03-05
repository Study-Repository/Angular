/**
 * 证件类型
 */
export enum IdentityType {
  IdCard = 0,
  Insurance,
  Passport,
  Military,
  Other
}

/**
 * 地址
 */
export interface Address {
  id?: number;
  province: string;
  city: string;
  district: string;
  street?: string;
}

/**
 * 证件
 */
export interface Identity {
  identityNo: string;
  identityType: IdentityType;
}

/**
 * 用户
 */
export interface UserModel {
  id?: string;
  email: string;
  name?: string;
  password?: string;
  avatar?: string;
  projectIds?: string[];
  taskIds?: string[];
  address?: Address;
  dateOfBirth?: string;
  identity?: Identity;
}
