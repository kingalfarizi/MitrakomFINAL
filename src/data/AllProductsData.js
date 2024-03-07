// Komputer & Laptop
import RazerKeyboard from '../assets/images/komputer-images/1.jpg'
import MouseGamingLogitech from '../assets/images/komputer-images/2.jpg'
import Ryzen from '../assets/images/komputer-images/3.jpg'
import SpeakerJBL from '../assets/images/komputer-images/4.jpg'
import GamepadLogitech from '../assets/images/komputer-images/5.png'
import MouseLogitech from '../assets/images/komputer-images/7.jpg'
import KeyboardLogitech from '../assets/images/komputer-images/8.jpg'
import FlashdiskSandisk64GB from '../assets/images/komputer-images/9.jpg'
import KabelHDMIVention from '../assets/images/komputer-images/6.jpeg'

// Smartphone
import HeadsetVivan from '../assets/images/smartphone-images/1.jpeg'
import KabelAnker from '../assets/images/smartphone-images/2.jpeg'
import ChargerAnker from '../assets/images/smartphone-images/3.jpeg'
import HeadsetRobot from '../assets/images/smartphone-images/4.jpeg'
import HeadsetVivo from '../assets/images/smartphone-images/5.jpg'

// Lainnya
import PrinterEpson from '../assets/images/lainnya-images/1.jpg'
import KabelPower from '../assets/images/lainnya-images/2.jpeg'
import RouterTPLink from '../assets/images/lainnya-images/3.jpg'

const fetchBarang = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const data = await response.json();
  return data;
};



export const allProductsData = [
  
  //1
  {
    id: 'RazerKeyboard',
    ItemImg: RazerKeyboard,
    ItemName: 'Razer Keyboard',
    ItemDesc: 'Keyboard gaming yang solid dari razer untuk memenangkan kepuasan kamu.',
    ItemPrice: (1200).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'MouseGamingLogitech',
    ItemImg: MouseGamingLogitech,
    ItemName: 'Mouse Gaming Logitech',
    ItemDesc: 'Mosue gaming yang sangat ringan dan presisi.',
    ItemPrice: (630).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'Ryzen',
    ItemImg: Ryzen,
    ItemName: 'Ryzen',
    ItemDesc: 'Processor dari AMD yang sangat kuat untuk sekarang.',
    ItemPrice: (1540).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'SpeakerJBL',
    ItemImg: SpeakerJBL,
    ItemName: 'Speaker JBL',
    ItemDesc: 'Mendengar musik, menonton film jadi lebih seru dengan suara JBL.',
    ItemPrice: (132).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'GamepadLogitech',
    ItemImg: GamepadLogitech,
    ItemName: 'Gamepad Logitech',
    ItemDesc: 'Kenyamanan dalam genggaman gamepad dari merk Logitech.',
    ItemPrice: (160).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'MouseLogitech',
    ItemImg: MouseLogitech,
    ItemName: 'Mouse Logitech',
    ItemDesc: 'Mouse berkualitas bagus memakai kabel sebagai konektivitas. Memiliki daya tahan yang bagus untuk pemakaian sehari hari.',
    ItemPrice: (54).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'KeyboardLogitech',
    ItemImg: KeyboardLogitech,
    ItemName: 'Keyboard Logitech',
    ItemDesc: 'Ingin mendapatkan sensasi mengetik yang bagus? keyboard dari merk logitech solusinya.',
    ItemPrice: (80).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'FlashdiskSandisk64GB',
    ItemImg: FlashdiskSandisk64GB,
    ItemName: 'Flashdisk Sandisk 64GB',
    ItemDesc: 'Penyimpanan data untuk menunjang produktivitas. Sandisk merupakan merk yang sangat dipercaya.',
    ItemPrice: (72).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  {
    id: 'KabelHDMIVention',
    ItemImg: KabelHDMIVention,
    ItemName: 'Kabel HDMI Vention',
    ItemDesc: 'Kabel untuk menghubungkan HDMI dengan menggunakan PVC cable dan Gold Plated.',
    ItemPrice: (49).toFixed(3),
    Category: 'Komputer & Laptop',
    attributes: [],
  },
  

  //2
  {
    id: 'HeadsetVivan',
    ItemImg: HeadsetVivan,
    ItemName: 'Headset Vivan',
    ItemDesc: 'Headset yang sangat terjangkau tetapi memiliki suara dan daya tahan yang cukup untuk kebutuhan.',
    ItemPrice: (44).toFixed(3),
    Category: 'Smartphone',
    attributes: [],
  },

  {
    id: 'KabelAnker',
    ItemImg: KabelAnker,
    ItemName: 'Kabel Anker',
    ItemDesc: 'Kecepatan yang luar biasa untuk harga yang terjangkau.',
    ItemPrice: (118).toFixed(3),
    Category: 'Smartphone',
    attributes: [],
  },
  {
    id: 'ChargerAnker',
    ItemImg: ChargerAnker,
    ItemName: 'Charger Anker',
    ItemDesc: 'Memiliki ampere yang tinggi sehingga kecepatan bertambah drastis.',
    ItemPrice: (135).toFixed(3),
    Category: 'Smartphone',
    attributes: [],
  },
 
  {
    id: 'HeadsetRobot',
    ItemImg: HeadsetRobot,
    ItemName: 'Headset Robot',
    ItemDesc: 'Ringan dan memiliki suara yang jelas.',
    ItemPrice: (79).toFixed(3),
    Category: 'Smartphone',
    attributes: [],
  },
  {
    id: 'HeadsetVivo',
    ItemImg: HeadsetVivo,
    ItemName: 'Headset Vivo',
    ItemDesc: 'Bass yang sangat memukau untuk mendengarkan musik favorit kamu.',
    ItemPrice: (73).toFixed(3),
    Category: 'Smartphone',
    attributes: [],
  },


  //3
  {
    id: 'PrinterEpson',
    ItemImg: PrinterEpson,
    ItemName: 'Printer Epson',
    ItemDesc: 'Kejelasan dan kecepatan dalam mencetak menjadi nilai tambah printer ini.',
    ItemPrice: (2287).toFixed(3),
    Category: 'Lainnya',
    attributes: [],
  },
  {
    id: 'KabelPower',
    ItemImg: KabelPower,
    ItemName: 'Kabel Power',
    ItemDesc: 'Kabel universal untuk menghidupkan device kamu.',
    ItemPrice: (29).toFixed(3),
    Category: 'Lainnya',
    attributes: [],
  },
  {
    id: 'RouterTPLink',
    ItemImg: RouterTPLink,
    ItemName: 'Router TPLink',
    ItemDesc: 'Mengeluarkan sinyal yang sangat luas untuk koneksi device yang kamu miliki.',
    ItemPrice: (854).toFixed(3),
    Category: 'Lainnya',
    attributes: [],
  },
]