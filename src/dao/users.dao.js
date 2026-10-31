import { User } from "../models/User.js";

export class UsersDAO {
  //Busca un usuario por su email
  static findByEmail = async (email) => {
    return await User.findOne({ email });
  };
  //Guarda un nuevo documente de usuario en MongoDB
  static create = async (userData) => {
    return await User.create(userData);
  };
}
