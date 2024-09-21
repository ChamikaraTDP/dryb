import { Schema, Types, model } from 'mongoose';

export type IUser = {
    name: string;
    address: string;
    tel: string;
    property_ids: Types.ObjectId[];
};

export const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    address: { type: String, required: true },
    tel: { type: String, required: false },
    property_ids: [{ type: Types.ObjectId, required: true }],
});

export const User = model<IUser>('user', UserSchema, 'user');
