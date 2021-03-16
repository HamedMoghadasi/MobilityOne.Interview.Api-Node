import { connection } from "../common/database";
import moment from "moment";

export default class UserService {
  static async getAll() {
    try {
      return connection.promise().query("SELECT * FROM Users");
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      return connection
        .promise()
        .query("SELECT * FROM Users WHERE `Id` = ?", [id]);
    } catch (error) {
      throw error;
    }
  }

  static async add(user) {
    try {
      var utcnow = moment.utc().format("YYYY-MM-DD HH:mm");
      var query = `INSERT INTO users
        (name,phoneNumber,emailAddress,password,lastLogin,createDate,suspended)
        VALUES
        ('${user.name}','${user.phoneNumber}','${user.emailAddress}','${user.password}',
         '${utcnow}','${utcnow}',${user.suspended});
         SELECT * FROM users WHERE id = LAST_INSERT_ID()`;
      console.log(`query -- `, query);

      return connection
        .promise()
        .query(query)
        .then((result) => {
          return result[0][1]; // 'Cuz we run two statement in query, as a result it'll return a 2 dim array.
        })
        .catch((er) => console.log(`er`, er));
    } catch (error) {
      throw error;
    }
  }
  static async update(req, res) {}
  static async delete(req, res) {}
}
