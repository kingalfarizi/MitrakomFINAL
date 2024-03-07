import cloudinary from "../config/cloudinary.mjs";
import sql from "../config/sql.mjs";
import { v4 as uuidv4 } from "uuid";

export const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM `Barangs` ORDER BY createdAt DESC";

    sql
      .execute(query)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM `Barangs` WHERE id = ? LIMIT 1";

    sql
      .execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

export const createProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    const { id = uuidv4(), nama, deskripsi, harga, kategori, image } = product;

    // const query = `INSERT INTO Barangs (id, ItemName, ItemDesc, ItemPrice, Category, ItemImg) VALUES (?, ?, ?, ?, ?, ?)`;
    // const params = [id, nama, deskripsi, harga, kategori, "image"];
    // // console.log(params);

    // sql
    //   .execute(query, [...params])
    //   .then((result) => resolve(result))
    //   .catch((err) => reject(err));

    cloudinary.uploader.upload(
      image,
      {
        folder: "mitrakom",
      },
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          const query = `INSERT INTO Barangs (id, ItemName, ItemDesc, ItemPrice, Category, ItemImg) VALUES (?, ?, ?, ?, ?, ?)`;
          const params = [
            id,
            nama,
            deskripsi,
            harga,
            kategori,
            result.secure_url,
          ];
          // console.log(params);
          sql
            .execute(query, [...params])
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }
      }
    );
  });
};

export const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    const { ItemName, ItemDesc, ItemPrice, Category, ItemImg } = product;

    sql.execute("SELECT * FROM Barangs WHERE id = ?", [id]).then((result) => {
      if (result[0].ItemImg !== ItemImg) {
        cloudinary.uploader.upload(
          ItemImg,
          {
            folder: "mitrakom",
          },
          (err, result) => {
            if (err) {
              reject(err);
            }

            const query = `UPDATE Barangs SET ItemName = ?, ItemDesc = ?, ItemPrice = ?, Category = ?, ItemImg = ? WHERE id = ?`;
            const params = [
              ItemName,
              ItemDesc,
              ItemPrice,
              Category,
              result.secure_url,
              id,
            ];
            // resolve(params)

            sql
              .execute(query, [...params])
              .then((result) => resolve(result))
              .catch((err) => reject(err));
          }
        );
      } else {
        const query = `UPDATE Barangs SET ItemName = ?, ItemDesc = ?, ItemPrice = ?, Category = ?, ItemImg = ? WHERE id = ?`;
        const params = [ItemName, ItemDesc, ItemPrice, Category, ItemImg, id];
        // resolve(params)

        sql
          .execute(query, [...params])
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
  });
};

export const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM Barangs WHERE id = ?";

    sql
      .execute(query, [id])
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};
