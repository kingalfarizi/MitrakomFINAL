import sql from "../config/sql.mjs";
import { v4 as uuidv4 } from "uuid";
import midtransClient from "midtrans-client";

export const createOrder = (order) => {
  return new Promise((resolve, reject) => {
    const {
      id = uuidv4(),
      idUser,
      userDetail,
      barang,
      cartDetail,
      metodePengiriman,
      metodePembayaran,
      idCard,
      promoCode,
      status = "pending",
    } = order;

    let subTotal = barang.reduce((total, item) => {
      return total + item.quantity * item.ItemPrice;
    }, 0);
    subTotal *= 1000;

    // TABEL ORDERS
    const query = `INSERT INTO orders (id, idUser, metodePengiriman, metodePembayaran, idCard, promoCode, subTotal, statusOrder) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    let params = [
      id,
      idUser,
      metodePengiriman,
      metodePembayaran,
      idCard || null,
      promoCode || null,
      subTotal,
      status,
    ];

    if (metodePembayaran === "card") {
      const { firstname, lastname, cardNumber, cvv, month, year } = order.card;
      const id = uuidv4();

      const cekCard = `SELECT * FROM cardDetails WHERE cardNumber = ?`;
      sql
        .execute(cekCard, [idCard])
        .then((result) => {
          if (result[0].length === 0) {
            const queryCard = `INSERT INTO cardDetails (id, firstname, lastname, cardNumber, cvv, month, year) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            const paramsCard = [
              id,
              firstname,
              lastname,
              cardNumber,
              cvv,
              month,
              year,
            ];
            sql
              .execute(queryCard, [...paramsCard])
              .then((result) => console.log(result))
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }

    sql
      .execute(query, [...params])
      .then((result) => {
        midtransTransaction({
          id,
          subTotal,
          barang,
          userDetail,
          cartDetail,
        }).then((result) => {
          resolve({ id, ...result });
        });
      })
      .catch((err) => reject(err));

    // TABEL ORDERDETAILS

    // binding sesuai jumlah barang (item)
    const placeHoldOrderDetail = Array.from(
      { length: barang.length },
      () => "(?, ?, ?, ?, ?)"
    ).join(", ");

    let params2;

    const query2 = `INSERT INTO orderDetails (id, idOrder, idBarang, kuantitas, totalHarga) VALUES ${placeHoldOrderDetail}`;

    if (barang.length > 1) {
      // Jika panjang idBarang lebih dari 1, gunakan map atau forEach untuk membuat params
      params2 = barang.map((item) => [
        uuidv4(),
        id,
        item.id,
        item.quantity,
        item.quantity * item.ItemPrice * 1000,
      ]);
    } else {
      // Jika panjang idBarang hanya 1, buat params seperti biasa
      params2 = [
        uuidv4(),
        id,
        barang[0].id, // Mengambil idBarang pertama jika panjangnya hanya 1
        barang[0].quantity,
        barang[0].quantity * barang[0].ItemPrice * 1000,
      ];
    }

    const flattenedValues = params2.flat();

    sql
      .execute(query2, [...flattenedValues])
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    // return resolve(flattenedValues);
  });
};

const midtransTransaction = async (transactionData) => {
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  let parameter = {
    transaction_details: {
      order_id: "TRX-" + transactionData.id,
      gross_amount: transactionData.subTotal,
    },
    item_details: transactionData.cartDetail.map((item) => ({
      id: item.id,
      price: parseInt(item.ItemPrice) * 1000,
      quantity: item.quantity,
      name: item.ItemName,
    })),
    customer_details: {
      first_name: transactionData.userDetail.fullname,
      email: transactionData.userDetail.email,
      phone: transactionData.userDetail.number || 0,
      shipping_address: {
        first_name: transactionData.userDetail.fullname,
        email: transactionData.userDetail.email,
        phone: transactionData.userDetail.number || 0,
        address: transactionData.userDetail.address || "",
      },
    },
  };

  try {
    let hasil = await snap.createTransaction(parameter);
    return hasil;
  } catch (error) {
    return error.message;
  }
};

export const getOrderByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT orders.id, orders.metodePengiriman, orders.metodePembayaran, orders.idCard, orders.promoCode, orders.subTotal, orders.statusOrder,
      orderDetails.idBarang, orderDetails.kuantitas, barangs.ItemName, barangs.ItemImg, orderDetails.totalHarga
      FROM orders
      JOIN orderDetails ON orders.id = orderDetails.idOrder
      JOIN barangs ON orderDetails.idBarang = barangs.id
      JOIN users ON orders.idUser = users.id
      WHERE orders.idUser = ?
    `;

    sql
      .execute(query, [userId])
      .then((result) => {
        resolve(result[0]); // Assuming result is an array of orders
      })
      .catch((error) => {
        console.error("Error fetching orders by user ID:", error);
        reject(error);
      });
  });
};

export const getAllOrders = () => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT orders.id, orders.idUser, users.fullname, IFNULL(users.address, '-') as userAddress, orders.metodePengiriman, orders.metodePembayaran, orders.idCard, orders.promoCode, orders.subTotal, orders.statusOrder,
      orderDetails.idBarang, orderDetails.kuantitas, barangs.ItemName, barangs.ItemImg, orderDetails.totalHarga
      FROM orders
      JOIN orderDetails ON orders.id = orderDetails.idOrder
      JOIN barangs ON orderDetails.idBarang = barangs.id
      JOIN users ON orders.idUser = users.id
      ORDER BY orders.createdAt DESC
    `;

    sql
      .execute(query)
      .then((result) => {
        resolve(result[0]); // Assuming result is an array of orders
      })
      .catch((error) => {
        console.error("Error fetching all orders:", error);
        reject(error);
      });
  });
};

export const getOrderById = (orderId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT orders.id, orders.idUser, users.fullname, IFNULL(users.address, '-') as userAddress, orders.metodePengiriman, orders.metodePembayaran, orders.idCard, orders.promoCode, orders.subTotal, orders.statusOrder,
      orderDetails.idBarang, orderDetails.kuantitas, barangs.ItemName, barangs.ItemImg, orderDetails.totalHarga
      FROM orders
      JOIN orderDetails ON orders.id = orderDetails.idOrder
      JOIN barangs ON orderDetails.idBarang = barangs.id
      JOIN users ON orders.idUser = users.id
      WHERE orders.id = ?
      LIMIT 1
    `;

    sql
      .execute(query, [orderId])
      .then((result) => {
        resolve(result[0]); // Assuming result is an array of orders
      })
      .catch((error) => {
        console.error("Error fetching order by ID:", error);
        reject(error);
      });
  });
};

export const updateOrderStatus = (orderId, newStatus) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE orders SET statusOrder = ? WHERE id = ?`;

    sql
      .execute(query, [newStatus, orderId])
      .then((result) => {
        resolve(result[0]); // Assuming result is an array of orders
      })
      .catch((error) => {
        console.error("Error updating order status:", error);
        reject(error);
      });
  });
};
