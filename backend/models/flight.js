import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  flight_number: { type: String, required: true },
  airline: { type: String, required: true },
  departure_city: { type: String, required: true },
  departure_airport: { type: String, required: true },
  arrival_city: { type: String, required: true },
  arrival_airport: { type: String, required: true },
  departure_time: { type: Date, default: Date.now },
  arrival_time: { type: Date, default: Date.now },
  duration: { type: String, default: '0' },
  price: { type: Number, default: 0 }
});

export default mongoose.model('Flight', flightSchema);
