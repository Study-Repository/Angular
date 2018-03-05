export interface ErrorModel {
  timestamp?: Date;
  status?: number;
  error?: string;
  exception?: string;
  message?: string;
  path?: string;
}
