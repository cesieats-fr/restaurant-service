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

export async function connectMongoose() {
  await mongoose.connect(`mongodb://${process.env.DB_URL}/`, {
    dbName: 'cesieats-service',
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD,
  });
  console.log('Connected to MongoDB ');
}
