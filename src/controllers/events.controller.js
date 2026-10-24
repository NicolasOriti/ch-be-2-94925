import { Event } from '../models/Event.js';

export class EventsController {
  static getAll = async (req, res) => {
    try {
      const events = await Event.find();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
