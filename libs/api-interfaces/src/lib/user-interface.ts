export interface IUser {
  userName: string;
  password: string;
  contactNumber?: string;
  email: string;
  createdByID?: number;
  createdOn?: Date;
  updatedByID?: number;
  updatedOn?: Date;
}
