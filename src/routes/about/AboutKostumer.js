import React from "react";
//images
import ImgOne from "../../assets/images/about-us/6.jpg";
import ImgTwo from "../../assets/images/about-us/2.jpg";
import ImgThree from "../../assets/images/about-us/3.jpg";

const AboutKostumer = () => {
  return (
    <article className="about-customers">
      <div className="images">
        <img src={ImgOne} alt="" aria-hidden="true" />
        <img src={ImgTwo} alt="" aria-hidden="true" />
        <img src={ImgThree} alt="" aria-hidden="true" />
      </div>
      <section className="content">
        <h2 className="sub-title">Kepuasan Pelanggan</h2>
        <h3>1000+ Kostumer yang Senang</h3>
        <p>
        Kami percaya bahwa kesuksesan kami adalah berkat komitmen kami untuk menyediakan barang berkualitas tinggi dan layanan yang luar biasa. Kami sangat berhati-hati untuk memastikan bahwa setiap layanan disiapkan dengan perhatian penuh terhadap detail, sehingga memberikan kepuasan kepada pelanggan.
          Kami sangat menekankan pada pemberian layanan yang luar biasa kepada setiap pelanggan yang datang ke restoran kami. Tim kami yang memiliki dedikasi berkomitmen untuk memberikan suasana yang hangat dan ramah yang membuat setiap pelanggan merasa menjadi bagian dari keluarga.
        </p>
      </section>
      <div className="img-glass"></div>
    </article>
  );
}


export default AboutKostumer;