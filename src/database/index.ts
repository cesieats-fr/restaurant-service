import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import mongoose, { Schema, model } from 'mongoose';

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  deliveryPrice: { type: Number, required: true },
  telephone: { type: String, required: true },
  idAccount: { type: String, required: true },
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
