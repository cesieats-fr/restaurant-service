import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

router.post('/addRestaurant', controller.addRestaurant);

router.post('/updateRestaurant', controller.updateRestaurant);

router.get('/getRestaurant/:id', controller.getRestaurant); 

router.get('/getAllRestaurant', controller.getAllRestaurant);

router.delete('/deleteRestaurant', controller.deleteRestaurant);

export default router;
