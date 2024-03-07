import React from "react";
import OfficeTwo from "../../assets/images/about-us/1.jpg";

const AboutAlamat = () => {
  return (
    <article className="about-collaboration">
      <img src={OfficeTwo} alt="" aria-hidden="true" />
      <section className="content">
        <h2 className="sub-title">Strategis</h2>
        <h3>Kunjungi Kami</h3>
        <p>
        Kami mengundang Anda untuk mengunjungi toko kami di Jalan Godean km4,5 untuk merasakan pengalaman belanja yang berkualitas. Jika Anda memiliki pertanyaan atau butuh bantuan, jangan ragu untuk menghubungi kami melalui mitrakomcs@gmail.com. Kami berkomitmen untuk memberikan solusi teknologi terbaik untuk kebutuhan Anda. Terima kasih telah memilih Mitrakom sebagai mitra teknologi Anda.
        </p>
      </section>
    </article>
  );
}

export default AboutAlamat;