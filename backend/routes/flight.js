import express from 'express';

const router = express.Router();

import flightControllers from '../controllers/flight.js';
import verifyToken from '../middleware/verifyToken.js';

// routes
router.get('/', flightControllers.getFlights);
router.get('/:id', flightControllers.getFlight);
router.post('/add-flight', flightControllers.addFlight);
router.put('/update/:id', flightControllers.updateFlight);

export default router;
