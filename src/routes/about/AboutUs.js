import React from 'react'
//images
import SlideOne from '../../assets/images/about-us/4.jpg'
import SlideTwo from '../../assets/images/about-us/1.jpg'
import SlideThree from '../../assets/images/about-us/5.jpg'
import SlideFour from '../../assets/images/about-us/6.jpg'


const AboutUs = () => {
  return (
    <article className="about-us">
      <section className="content">
        <h2>About us</h2>
        <h3 className='sub-title'>Professional</h3>
        <p>
        Mitrakom adalah toko komputer yang telah melayani pelanggan dengan jasa service dan penjualan berbagai produk komputer sejak tahun 2015. Kami berkomitmen untuk memberikan solusi terbaik bagi semua kebutuhan komputer dan teknologi Anda. Dengan tim ahli yang berpengalaman dan peralatan mutakhir, Mitrakom telah menjadi destinasi terpercaya untuk perangkat keras, perangkat lunak, dan layanan terkait. Toko Komputer kami adalah destinasi utama bagi para pecinta teknologi di Jalan Godean. Toko kami menawarkan produk-produk terkini, serta layanan service yang andal dan cepat. 
        </p>
        <div className="section-one-glass"></div>
      </section>
      <section className="images">
        <img src={SlideOne} alt="" aria-hidden="true" />
        <img src={SlideTwo} alt="" aria-hidden="true" />
        <img src={SlideThree} alt="" aria-hidden="true" />
        <img src={SlideFour} alt="" aria-hidden="true" />
      </section>
    </article>
  )
}

export default AboutUs;