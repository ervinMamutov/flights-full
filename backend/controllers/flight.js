import mongoose from 'mongoose';
import Flight from '../models/flight.js';

const flightControllers = {
  getFlights: async (req, res) => {
    try {
      const result = await Flight.find();
      if (result.length > 0) {
        res.status(200).json({
          success: true,
          flights: result
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Flights not found'
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message
      });
    }
  },
  getFlight: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Flight.findOne({ _id: id });
      if (result) {
        res.status(200).json({
          success: true,
          flight: result
        });
      } else {
        return res.status(404).json({
          success: false,
          message: 'Flight not found'
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message
      });
    }
  },
  addFlight: async (req, res) => {
    try {
      const {
        flight_number,
        airline,
        departure_city,
        departure_airport,
        arrival_city,
        arrival_airport,
        departure_time,
        arrival_time,
        duration,
        price
      } = req.body;

      const newFlight = {
        flight_number,
        airline,
        departure_city,
        departure_airport,
        arrival_city,
        arrival_airport,
        departure_time,
        arrival_time,
        duration,
        price
      };

      if (
        !flight_number ||
        !airline ||
        !departure_city ||
        !departure_airport ||
        !arrival_airport ||
        !arrival_city
      ) {
        return res.status(401).json({
          success: false,
          message: 'Please fill in all fields'
        });
      } else {
        const result = await Flight.create(newFlight);
        return res.status(201).json({
          success: true,
          message: `New Flight number ${flight_number} successfully created`,
          flight: result
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message || 'Flight information was not added'
      });
    }
  },
  updateFlight: async (req, res) => {
    try {
      const { id } = req.params;
      const {
        flight_number,
        airline,
        departure_city,
        departure_airport,
        arrival_city,
        arrival_airport,
        departure_time,
        arrival_time,
        duration,
        price
      } = req.body;

      const updateFlight = {
        flight_number,
        airline,
        departure_city,
        departure_airport,
        arrival_city,
        arrival_airport,
        departure_time,
        arrival_time,
        duration,
        price
      };
      if (
        !flight_number ||
        !airline ||
        !departure_city ||
        !departure_airport ||
        !arrival_airport ||
        !arrival_city
      ) {
        return res.status(401).json({
          success: false,
          message: 'Please add all information'
        });
      } else {
        const result = await Flight.updateOne({ _id: id }, updateFlight);
        if (result.matchedCount > 0) {
          return res.status(201).json({
            success: true,
            message: `Flight information for N ${flight_number} successfully updated`
          });
        } else {
          return res.status(404).json({
            success: false,
            message: `Flight information for N ${flight_number} not updated`
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message || 'Flight information was not updated'
      });
    }
  },
  deleteFlight: async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
          success: false,
          message:
            'Invalid ObjectId format for flight ID. Please enter a valid ID'
        });
      }

      const result = await Flight.deleteOne({ _id: id });
      if (result.deletedCount > 0) {
        return res.status(200).json({
          success: true,
          message: `Flight ${id} has been successfully deleted`
        });
      } else {
        return res.status(404).json({
          success: false,
          message: `Flight ${id} not found`
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        err: err.message || `Flight ${id} not found`
      });
    }
  }
};

export default flightControllers;
