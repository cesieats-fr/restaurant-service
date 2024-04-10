import express, { Router } from 'express';
import controller from '../controllers';
import { middleware } from '../middlewares';

const router: Router = express.Router();

router.use(middleware);

// Ajoute/créer un restaurant
router.post('/addRestaurant', controller.addRestaurant);

// Modifie un restaurant
router.put('/editRestaurant', controller.editRestaurant);

// Retourne un restaurant
router.get('/getRestaurantByAccountId', controller.getRestaurantByAccountId);

// Retourne tous les restaurants grâce à des filtres [title, description, closingTime, openingTime, deliveryPrice, telephone]
router.get('/getAllRestaurants', controller.getAllRestaurants);

// Supprime un restaurant
router.delete('/deleteRestaurant', controller.deleteRestaurant);

export default router;
