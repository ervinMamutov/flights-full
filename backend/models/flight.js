import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  flight_number: { type: String, require: true },
  airline: { type: String, require: true },
  departure_city: { type: String, require: true },
  departure_airport: { type: String, require: true },
  arrival_city: { type: String, require: true },
  arrival_airport: { type: String, require: true },
  departure_time: { type: Date, default: Date.now },
  arrival_time: { type: Date, default: Date.now },
  duration: { type: Number, default: 0 },
  price: { type: Number, default: 0 }
});

export default mongoose.model('Flight', flightSchema);
