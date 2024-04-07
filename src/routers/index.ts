import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// Ajoute/créer un restaurant
router.post('/addRestaurant', controller.addRestaurant);

// Modifie un restaurant
router.post('/updateRestaurant', controller.updateRestaurant);

// Retourne un restaurant
router.get('/getRestaurant/:id', controller.getRestaurant); 

// Retourne tous les restaurants grâce à des filtres [title, description, closingTime, openingTime, deliveryPrice, telephone]
router.get('/getAllRestaurant', controller.getAllRestaurant);

// Supprime un restaurant
router.delete('/deleteRestaurant', controller.deleteRestaurant);

export default router;
