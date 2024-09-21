import { model, Schema } from 'mongoose';
import { BookingSchema, IBooking } from './booking.model';

export type IProperty = {
    type: string;
    name: string;
    tel?: string;
    price: number;
    space?: number;
    max_allowed?: number;
    condition?: string;
    is_available: boolean;
    bookings?: IBooking[];
};

export const PropertySchema = new Schema<IProperty>({
    type: { type: String, required: true },
    name: { type: String, required: true },
    tel: String,
    price: { type: Number, required: true },
    space: Number,
    max_allowed: Number,
    condition: { type: String, default: 'Good' },
    is_available: { type: Boolean, required: true },
    bookings: [BookingSchema],
});

export const Property = model<IProperty>(
    'property',
    PropertySchema,
    'property',
);
