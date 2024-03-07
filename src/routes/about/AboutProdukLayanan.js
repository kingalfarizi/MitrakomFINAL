import React from "react";
import OfficeTwo from "../../assets/images/about-us/5.jpg";


const AboutProdukLayanan = () => {
  return (
    <article className="about-careers">
      <section className="content">
        <h2 className="sub-title">Berkualitas</h2>
        <h3>Produk & Layanan</h3>
        <p>

        Kami menyediakan berbagai merek dan model laptop dan desktop terkemuka. Mulai dari perangkat yang cocok untuk penggunaan sehari-hari hingga perangkat khusus untuk gaming dan desain.
        Di toko kami, Anda dapat menemukan berbagai aksesoris seperti mouse, keyboard, monitor, headset, dan banyak lagi.
        Kami juga menyediakan beragam komponen komputer seperti prosesor, kartu grafis, RAM, dan hard drive. Kami juga menjual suku cadang untuk perbaikan dan peningkatan sistem Anda.

        </p>
        <p>

        Tim ahli kami siap membantu Anda dengan segala jenis perbaikan dan pemeliharaan komputer. Kami mengatasi masalah perangkat keras dan perangkat lunak.
        Jika Anda ingin meningkatkan kinerja komputer Anda, kami dapat membantu Anda memilih komponen yang tepat dan melakukan upgrade sesuai kebutuhan.
        Tim kami bersedia memberikan konsultasi profesional terkait spesifikasi, kebutuhan, atau rekomendasi perangkat terbaru.

        </p>
      </section>
      <img src={OfficeTwo} alt="" aria-hidden="true" />
    </article>
  );
}
export default AboutProdukLayanan;
