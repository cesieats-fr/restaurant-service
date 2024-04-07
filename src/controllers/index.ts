import { Request, Response } from 'express';
import { IRestaurant } from 'cesieats-service-types/src/restaurant';
import { Restaurant } from '../database';

// Ajoute/créer un restaurant
const addRestaurant = async (req: Request, res: Response) => {
  try{
    const restaurant: IRestaurant = {
      title: req.body.address,
      description: req.body.description,
      address: req.body.address,
      closingTime: req.body.closingTime,
      openingTime: req.body.openingTime,
      deliveryPrice: req.body.deliveryPrice,
      telephone: req.body.telephone,
    };
    const result = await Restaurant.create(restaurant);
    console.log('restaurant: ' + restaurant);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[RESTAURANT-SERVICE] addRestaurant error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Modifie un restaurant
const editRestaurant = async (req: Request, res: Response) => {
  try {
    const update = { 
      title: req.body.address,
      description: req.body.description,
      address: req.body.address,
      closingTime: req.body.closingTime,
      openingTime: req.body.openingTime,
      deliveryPrice: req.body.deliveryPrice,
      telephone: req.body.telephone,
    };
    const result = await Restaurant.findByIdAndUpdate(req.body.id, update);
    console.log('update: ' + update);
    console.log('result after update: ' + result);
    res.status(200).json(result);
  }  catch (error) {
    console.log('[RESTAURANT-SERVICE] editRestaurant error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne un restaurant
const getRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await Restaurant.findById(req.params.id);
    console.log('id: ' + req.params.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[RESTAURANT-SERVICE] getRestaurant error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Retourne tous les restaurants grâce à des filtres [title, description, closingTime, openingTime, deliveryPrice, telephone]
const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const filter = {
      title: (String)(req.query.title),
      description: (String)(req.query.description),
      address: (String)(req.query.address),
      closingTime: req.query.closingTime,
      openingTime: req.query.openingTime,
      deliveryPrice: req.query.deliveryPrice,
      telephone: req.query.telephone,
    };
    const result = await Restaurant.find(filter);
    console.log('filter: ' + filter);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[RESTAURANT-SERVICE] getAllRestaurants error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

// Supprime un restaurant
const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const result = await Restaurant.findByIdAndDelete(req.body.id);
    console.log('id: ' + req.body.id);
    console.log('result: ' + result);
    res.status(200).json(result);
  } catch (error) {
    console.log('[RESTAURANT-SERVICE] deleteRestaurant error: ' + error);
    res.status(400).json({message: 'an unexpected error occurred'});
  }
};

const controller = {
  addRestaurant,
  editRestaurant,
  getRestaurant,
  getAllRestaurants,
  deleteRestaurant,
};

export default controller;
