import { useEffect } from "react";
import termsContent from "../../data/termsContent";

const Terms = () => {
    useEffect(() => {
        document.title = "Ketentuan";
    }, []);
    return (
        <main className="terms">
            <h2>Syarat & Ketentuan</h2>
            <p>Selamat datang di Mitrakom. Syarat dan Ketentuan ini menguraikan peraturan dan panduan untuk menggunakan situs web dan layanan kami. Dengan mengakses atau menggunakan situs web kami, Anda setuju untuk mematuhi persyaratan ini. Harap baca dengan seksama sebelum melanjutkan.</p>
            {termsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Terms;