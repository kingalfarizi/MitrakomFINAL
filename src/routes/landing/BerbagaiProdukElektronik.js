import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import ResetLocation from '../../helpers/ResetLocation'
import BerbagaiProdukElektronik from '../../data/BerbagaiProdukElektronik';



const PizzaMenuPreview = () => {
  return (
    <article className="section-4 flex-container flex-column" >
      <section className="section-4-info txt-center">
        <h2 className="pop-font txt-white">Berbagai Produk Elektronik</h2>
        <p className="section-description">
          Temukan apa yang kamu inginkan di toko Mitrakom!
        </p>
      </section>
      <section className="meals-grid flex-container flex-column" >
        {BerbagaiProdukElektronik.map((pizza, id) => (
          <motion.div
            key={id}
            className="meal-item flex-container"
            initial={{ opacity: 0, translateX: -300 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -300 }}
            transition={{ duration: 3 }}
          >
            <img
              src={pizza.img375}
              srcSet={`${pizza.img1440} 300w, ${pizza.img700} 450w, ${pizza.img375} 375w`}
              sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
              alt={pizza.name}
            />
            <section className="meal-item-details flex-container flex-column">
              <h3 className="txt-white">{pizza.name}</h3>
              <p>{pizza.description}</p>
              <section className="meal-item-order flex-container flex-row txt-center">
                <p>
                  <span>{pizza.currency}</span>
                  {pizza.price}
                </p>
              </section>
            </section>
          </motion.div>
        ))}
      </section>
      <Link
        onClick={ResetLocation}
        to="/menu"
        className="active-button-style txt-white"
      >
        Lainnya
      </Link>
    </article>

  )
}

export default PizzaMenuPreview;