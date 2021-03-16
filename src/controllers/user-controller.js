import userService from "../services/user-service";
import Response from "../common/response";

var response = new Response();

export default class UserController {
  static async getAll(req, res) {
    userService
      .getAll()
      .then((result) => {
        response.setSuccess(200, "all users fetched successfully.", result[0]);
        return response.send(res);
      })
      .catch((error) => {
        response.setError(500, "fetching all users failed!");
        return response.send(res);
      });
  }

  static async getById(req, res) {
    var id = req.params.id;
    userService
      .getById(id)
      .then((result) => {
        response.setSuccess(200, "the user fetched successfully.", result[0]);
        return response.send(res);
      })
      .catch((error) => {
        response.setError(500, "fetching the user failed!");
        return response.send(res);
      });
  }

  static async add(req, res) {
    var user = req.body;
    userService
      .add(user)
      .then((result) => {
        console.log(`result`, result);
        response.setSuccess(200, "user added successfully.", result[0]);
        return response.send(res);
      })
      .catch((error) => {
        response.setError(500, "adding user failed!");
        return response.send(res);
      });
  }
  static async update(req, res) {}
  static async delete(req, res) {}
}
