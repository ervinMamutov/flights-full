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
      if (result.length > 0) {
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
  }
};

export default flightControllers;
