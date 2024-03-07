import React from "react";
import { motion } from "framer-motion";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [-7.779450, 110.341990];


const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="map"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
        <MapContainer
          id="map"
          center={position}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </motion.div>
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Hubungi Kami</h3>
        <p>Ada pertanyaan, saran, atau hanya ingin menyapa? Kami ingin sekali mendengar pendapat Anda!</p>
        <section>
          <h4>Customer Support :</h4>
          <p>Tim dukungan pelanggan kami yang berdedikasi siap membantu Anda dengan pertanyaan apa pun yang Anda miliki.</p>
          <ul>
            <li>- Email: mitrakomcs@gmail.com</li>
            <li>- Telepon: +62 852-8146-8516</li>
            <li>- Jadwal: Setiap Hari, 8:00 - 23:00</li>
          </ul>
        </section>
        <section>
          <h4>Pertanyaan Umum :</h4>
          <p>Jika Anda memiliki pertanyaan umum tentang perusahaan kami, kemitraan, atau apa pun, jangan ragu untuk menghubungi kami.</p>
          <ul>
            <li>- Email: mitrakomfaq@gmail.com</li>
          </ul>
        </section>
        <section>
          <h4>Umpan Balik dan Saran :</h4>
          <p>Kami menghargai umpan balik Anda dan selalu berusaha untuk meningkatkannya. Jika Anda memiliki saran, komentar, atau ide tentang bagaimana kami dapat meningkatkan penawaran kami, beri tahu kami.</p>
          <ul>
            <li>- Email: feedbackmitrakom@gmail.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
}

export default ContactLanding;