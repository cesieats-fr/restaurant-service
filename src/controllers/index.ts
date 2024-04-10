import { Request, Response } from 'express';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { Restaurant } from '../database';

// Ajoute/créer un restaurant
const addRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant: IRestaurant = {
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      closingTime: req.body.closingTime,
      openingTime: req.body.openingTime,
      deliveryPrice: req.body.deliveryPrice,
      telephone: req.body.telephone,
      idAccount: res.locals.account._id,
    };
    const result = await Restaurant.create(restaurant);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Modifie un restaurant
const editRestaurant = async (req: Request, res: Response) => {
  try {
    const update: IRestaurant = {
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      closingTime: req.body.closingTime,
      openingTime: req.body.openingTime,
      deliveryPrice: req.body.deliveryPrice,
      telephone: req.body.telephone,
    };
    const result = await Restaurant.findOneAndUpdate({ idAccount: res.locals.account._id }, update);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne un restaurant
const getRestaurantByAccountId = async (req: Request, res: Response) => {
  try {
    const result = await Restaurant.findOne({ idClient: res.locals.account._id }).exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Retourne tous les restaurants grâce à des filtres [title, description, closingTime, openingTime, deliveryPrice, telephone]
const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const result = await Restaurant.find().exec();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

// Supprime un restaurant
const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await Restaurant.findByIdAndDelete(req.body.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'an unexpected error occurred' });
  }
};

const controller = {
  addRestaurant,
  editRestaurant,
  getRestaurantByAccountId,
  getAllRestaurants,
  deleteRestaurant,
};

export default controller;
