"use strict";

/** @type {import('sequelize-cli').Migration} */

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Barangs",
      [
        {
          id: "RazerKeyboard",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927504/mitrakom/p3agvlbqlqqba3y3mrtd.jpg",
          ItemName: "Razer Keyboard",
          ItemDesc:
            "Keyboard gaming yang solid dari razer untuk memenangkan kepuasan kamu.",
          ItemPrice: (1200).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseGamingLogitech",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927506/mitrakom/lp4hrvahfin8wcc9axab.jpg",
          ItemName: "Mouse Gaming Logitech",
          ItemDesc: "Mosue gaming yang sangat ringan dan presisi.",
          ItemPrice: (630).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "Ryzen",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927504/mitrakom/glvogsdvafifwlcc8w0y.jpg",
          ItemName: "Ryzen",
          ItemDesc: "Processor dari AMD yang sangat kuat untuk sekarang.",
          ItemPrice: (1540).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "SpeakerJBL",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927504/mitrakom/xwhjg2w0shwy3zeegl5n.jpg",
          ItemName: "Speaker JBL",
          ItemDesc:
            "Mendengar musik, menonton film jadi lebih seru dengan suara JBL.",
          ItemPrice: (132).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "GamepadLogitech",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927504/mitrakom/pcbafhla4fkfpdmy5gyu.png",
          ItemName: "Gamepad Logitech",
          ItemDesc: "Kenyamanan dalam genggaman gamepad dari merk Logitech.",
          ItemPrice: (160).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "MouseLogitech",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927505/mitrakom/fwl84hayhrkvif8trgz5.jpg",
          ItemName: "Mouse Logitech",
          ItemDesc:
            "Mouse berkualitas bagus memakai kabel sebagai konektivitas. Memiliki daya tahan yang bagus untuk pemakaian sehari hari.",
          ItemPrice: (54).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KeyboardLogitech",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927505/mitrakom/zend6wmmtzhrf1b2k5t7.jpg",
          ItemName: "Keyboard Logitech",
          ItemDesc:
            "Ingin mendapatkan sensasi mengetik yang bagus? keyboard dari merk logitech solusinya.",
          ItemPrice: (80).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "FlashdiskSandisk64GB",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927505/mitrakom/i8r2ufk1slojfnyvhyjz.jpg",
          ItemName: "Flashdisk Sandisk 64GB",
          ItemDesc:
            "Penyimpanan data untuk menunjang produktivitas. Sandisk merupakan merk yang sangat dipercaya.",
          ItemPrice: (72).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "KabelHDMIVention",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706927504/mitrakom/zbe0pxzcso8tm7uooewf.jpg",
          ItemName: "Kabel HDMI Vention",
          ItemDesc:
            "Kabel untuk menghubungkan HDMI dengan menggunakan PVC cable dan Gold Plated.",
          ItemPrice: (49).toFixed(3),
          Category: "Komputer & Laptop",
          attributes: "",
        },
        {
          id: "HeadsetVivan",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928724/mitrakom/losxnpwdbtjhx0phluow.jpg",
          ItemName: "Headset Vivan",
          ItemDesc:
            "Headset yang sangat terjangkau tetapi memiliki suara dan daya tahan yang cukup untuk kebutuhan.",
          ItemPrice: (44).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "KabelAnker",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928725/mitrakom/wmkh9xnfpj9aqnnphziy.jpg",
          ItemName: "Kabel Anker",
          ItemDesc: "Kecepatan yang luar biasa untuk harga yang terjangkau.",
          ItemPrice: (118).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "ChargerAnker",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928725/mitrakom/rkrjwhyqrsf3x586fadc.jpg",
          ItemName: "Charger Anker",
          ItemDesc:
            "Memiliki ampere yang tinggi sehingga kecepatan bertambah drastis.",
          ItemPrice: (135).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetRobot",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928724/mitrakom/bbtlosum42rz88rkw3wh.jpg",
          ItemName: "Headset Robot",
          ItemDesc: "Ringan dan memiliki suara yang jelas.",
          ItemPrice: (79).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "HeadsetVivo",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928725/mitrakom/trdwvtf2cdvcycdizenk.jpg",
          ItemName: "Headset Vivo",
          ItemDesc:
            "Bass yang sangat memukau untuk mendengarkan musik favorit kamu.",
          ItemPrice: (73).toFixed(3),
          Category: "Smartphone",
          attributes: "",
        },
        {
          id: "PrinterEpson",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928753/mitrakom/oqg75qx6hjgaoimaaros.jpg",
          ItemName: "Printer Epson",
          ItemDesc:
            "Kejelasan dan kecepatan dalam mencetak menjadi nilai tambah printer ini.",
          ItemPrice: (2287).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "KabelPower",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928754/mitrakom/eodrud2ttkhk8c4qzdbu.jpg",
          ItemName: "Kabel Power",
          ItemDesc: "Kabel universal untuk menghidupkan device kamu.",
          ItemPrice: (29).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
        {
          id: "RouterTPLink",
          ItemImg:
            "https://res.cloudinary.com/dsz678mwx/image/upload/v1706928754/mitrakom/ojkmsq7hpmzqxihlpljv.jpg",
          ItemName: "Router TPLink",
          ItemDesc:
            "Mengeluarkan sinyal yang sangat luas untuk koneksi device yang kamu miliki.",
          ItemPrice: (854).toFixed(3),
          Category: "Lainnya",
          attributes: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
