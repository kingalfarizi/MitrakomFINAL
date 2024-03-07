import React from 'react'

import PizzaOne from '../../assets/images/welcome-section/1.png'
import PizzaTwo from '../../assets/images/welcome-section/2.png'
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <article className="welcome-section" >
      <section className="section-2-info flex-container flex-column txt-center pop-font">
        <motion.img
          src={PizzaTwo} alt="" className=" pizza-two"
          initial={{ opacity: 0, translateX: -200 }}
          whileInView={{
            opacity: 1, translateX: -100
          }}
          transition={{ duration: 5 }}
        />
        <motion.img
          src={PizzaOne} alt="" className=" pizza-one"
          initial={{ opacity: 0, translateX: 200 }}
          whileInView={{
            opacity: 1, translateX: 100
          }}
          transition={{ duration: 5 }}
        />
        <h2 className="txt-white">
          Toko <span>Mitrakom</span> 
        </h2>
        <p align="justify">
          Didirikan pada tahun 2015, kami membawa produk dan layanan jasa ke tingkat berikutnya!
          Kami memahami apa yang orang inginkan dan mengubah keinginan
          menjadi pengalaman yang nyaman dan menyenangkan. Kepuasan, keaslian, dan kualitas terbaik adalah
          hanya sebagian kecil dari prioritas kami. Biaya yang terjangkau, berlokasi
          strategis, sistem operasional yang luar biasa untuk memenuhi kebutuhan anda. Di Mitrakom kami peduli dengan Anda!
        </p>
      </section>
     
    </article>
  )
}

export default WelcomeSection;