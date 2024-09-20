import { model, Schema, Types } from 'mongoose';

export type IBooking = {
    guest_id: Types.ObjectId;

    booked_date: Date;
    checked_id_date: Date;
    checked_out_date: Date;

    review?: string;
    rating?: number;
};

export const BookingSchema = new Schema<IBooking>({
    guest_id: Types.ObjectId,

    booked_date: { type: Date, required: true },
    checked_id_date: { type: Date, required: true },
    checked_out_date: { type: Date, required: true },

    review: String,
    rating: Number,
});

export const Booking = model<IBooking>('booking', BookingSchema, 'booking');
