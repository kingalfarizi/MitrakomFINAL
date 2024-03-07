import sql from "../config/sql.mjs";

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users";
    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getUsersExceptAdmin = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users WHERE role != "admin"';
    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE id = ?";
    sql
      .execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createUser = (user) => {
  return new Promise((resolve, reject) => {
    const { id, email, password, fullname, address, number } = user;
    let query;
    let params;
    let role = "user";

    if (address === "" && number === "") {
      query =
        "INSERT INTO users (id, email, password, fullname, role) VALUES (?, ?, ?, ?, ?)";
      params = [id, email, password, fullname, role];
    } else if (address === "") {
      query =
        "INSERT INTO users (id, email, password, fullname, number, role) VALUES (?, ?, ?, ?, ?, ?)";
      params = [id, email, password, fullname, number, role];
    } else if (number === "") {
      query =
        "INSERT INTO users (id, email, password, fullname, address, role) VALUES (?, ?, ?, ?, ?, ?)";
      params = [id, email, password, fullname, address, role];
    } else {
      query =
        "INSERT INTO users (id, email, password, fullname, address, number, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
      params = [id, email, password, fullname, address, number, role];
    }

    sql
      .execute(query, [...params])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    const { email, password, fullname, address, number } = user;
    let query;
    let params;
    params = [email, password, fullname, address, number];
    query =
      "UPDATE users SET email = ?, password = ?, fullname = ?, address = ?, number = ? WHERE id = ?";
    sql
      .execute(query, [...params, id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM users WHERE id = ?";
    sql
      .execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
