import { Request, Response } from 'express';

// Permet de récuperer un restaurant en fonction de plusieurs param envoyé dans le body
const getRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

// Permet de créer un restaurant 
const createRestaurant = (req: Request, res: Response) => {
  res.status(201).json({ message: 'Hello, world!' });
};

// Permet de modifier un restaurant
const updateRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

// Permet de supprimer un restaurant
const deleteRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};

const getAllRestaurant = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello, world!' });
};
const controller = {
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getAllRestaurant
};

export default controller;
