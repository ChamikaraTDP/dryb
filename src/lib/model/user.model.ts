import { Schema, model } from 'mongoose';

export type IUser = {
    name: string;
    address: Record<string, unknown>;
    tel: string;
};

export const UserSchema = new Schema<IUser>({
    name: String,
    address: Object,
    tel: String,
});

export const User = model<IUser>('user', UserSchema, 'user');
