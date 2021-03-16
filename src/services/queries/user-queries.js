import moment from "moment";

export const userQueries = {
  getAll: () => {
    return "SELECT * FROM Users";
  },
  getById: (id) => {
    return `SELECT * FROM Users WHERE Id = ${id}`;
  },
  add: (user) => {
    var utcnow = moment.utc().format("YYYY-MM-DD HH:mm");
    return `INSERT INTO users
      (name,phoneNumber,emailAddress,password,lastLogin,createDate,suspended)
      VALUES
      ('${user.name}','${user.phoneNumber}','${user.emailAddress}','${user.password}',
       '${utcnow}','${utcnow}',${user.suspended});
       SELECT * FROM users WHERE id = LAST_INSERT_ID()`;
  },
  update: (user) => {
    return `UPDATE users
    SET
    name = '${user.name}',
    phoneNumber =  '${user.phoneNumber}',
    emailAddress = '${user.emailAddress}',
    password = '${user.password}' ,
    suspended = ${user.suspended}
    WHERE id = ${user.id};
    SELECT * FROM Users WHERE id = ${user.id};
    `;
  },
  delete: (id) => {
    return `DELETE FROM Users WHERE Id = ${id}`;
  },
};
