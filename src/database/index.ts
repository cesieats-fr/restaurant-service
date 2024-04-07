import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import mongoose, { Schema, model } from 'mongoose';

const restaurantSchema = new Schema<IRestaurant>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  openingTime: { type: Number, required: true },
  closingTime: { type: Number, required: true },
  deliveryPrice: { type: Number, required: true },
  telephone: { type: Number, required: true },
});

export const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);

export const connectMongoose = () => {
  mongoose
    .connect('mongodb://192.168.2.30:32000/', {
      dbName: 'cesieats-service',
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
    })
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.log(err);
    });
};