import express, { Router, Request, Response } from 'express';
import controller from '../controllers';

const router: Router = express.Router();

// get le restaurant en fonction de plusieurs param envoyé dans le body
router.post('/getRestaurant', controller.getRestaurant); 

router.post('/createRestaurant', controller.createRestaurant);

router.post('/updateRestaurant/{idRestaurant}', controller.updateRestaurant);

router.delete('/deleteRestaurant/{idRestaurant}', controller.deleteRestaurant);

router.get('/getAllRestaurant', controller.getAllRestaurant);

export default router;
