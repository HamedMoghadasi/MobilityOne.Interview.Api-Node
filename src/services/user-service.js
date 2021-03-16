import { connection } from "../common/database";
import { userQueries } from "./queries/user-queries";

export default class UserService {
  static async getAll() {
    try {
      return connection.promise().query(userQueries.getAll());
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
  static async getById(id) {
    try {
      return connection.promise().query(userQueries.getById(id));
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
  static async add(user) {
    try {
      return connection
        .promise()
        .query(userQueries.add(user))
        .then((result) => {
          return result[0][1]; // 'Cuz we run two statement in query, as a result it'll return a 2 dim array.
        });
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
  static async update(user) {
    try {
      return connection
        .promise()
        .query(userQueries.update(user))
        .then((result) => {
          return result[0][1]; // 'Cuz we run two statement in query, as a result it'll return a 2 dim array.
        });
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
  static async delete(id) {
    try {
      return connection.promise().query(userQueries.delete(id));
    } catch (error) {
      console.log(`error`, error);
      throw error;
    }
  }
}
