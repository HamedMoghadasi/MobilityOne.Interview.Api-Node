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
        if (result[0].length > 0) {
          response.setSuccess(200, "the user fetched successfully.", result[0]);
          return response.send(res);
        } else {
          response.setError(404, "the user not founded!");
          return response.send(res);
        }
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
        response.setSuccess(200, "user added successfully.", result[0]);
        return response.send(res);
      })
      .catch((error) => {
        response.setError(500, "adding user failed!", error);
        return response.send(res);
      });
  }
  static async update(req, res) {
    var user = req.body;
    userService
      .update(user)
      .then((result) => {
        response.setSuccess(200, "user updated successfully.", result[0]);
        return response.send(res);
      })
      .catch((error) => {
        response.setError(500, "updating user failed!", error);
        return response.send(res);
      });
  }
  static async delete(req, res) {
    var id = req.params.id;
    userService
      .delete(id)
      .then((result) => {
        if (result[0].affectedRows > 0) {
          response.setSuccess(200, "user deleted successfully.");
          return response.send(res);
        } else {
          response.setError(404, "user not founded.");
          return response.send(res);
        }
      })
      .catch((error) => {
        response.setError(500, "deleting user failed!", error);
        return response.send(res);
      });
  }
}
