import moment from "moment";

export const userQueries = {
  getAll: () => {
    return "SELECT * FROM users";
  },
  getById: (id) => {
    return `SELECT * FROM users WHERE Id = ${id}`;
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
    SELECT * FROM users WHERE id = ${user.id};
    `;
  },
  delete: (id) => {
    return `DELETE FROM users WHERE Id = ${id}`;
  },
};
