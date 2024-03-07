import { useEffect } from "react";
import refundsContent from "../../data/refundsContent";

const Refunds = () => {
    useEffect(() => {
        document.title = "Pengembalian Uang";
    }, []);
    return (
        <main className="terms">
            <h2>Pengembalian Uang</h2>
            <p>Kebijakan Pengembalian Dana ("Kebijakan") ini menguraikan syarat dan ketentuan untuk meminta pengembalian dana untuk layanan pertumbuhan  yang disediakan oleh Mitrakom ("Mitrakom", "kami", "milik kami", atau "kita"). Dengan menggunakan layanan kami, Anda ("Anda," "milik Anda," atau "pengguna") setuju untuk mematuhi Kebijakan ini terkait permintaan pengembalian dana.</p>
            {refundsContent.map((content) =>
                <section key={content.title}>
                    <h3>{content.id}. {content.title}:</h3>
                    <p>{content.content}</p>
                </section>)}
        </main>
    )
}

export default Refunds;