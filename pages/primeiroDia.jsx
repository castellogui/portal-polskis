import styles from "../styles/PrimeiroDia.module.css";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import { useEffect } from "react";

export default function primeiroDia(){

  useEffect(() => {
    if (Router.query.auth != "true") {
      Router.push("/");
    }})

    return(
        <>
      <Head>
        <title>Portal dos Polskis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <Script src="https://kit.fontawesome.com/796432032e.js" crossorigin="anonymous"></Script>
      <section className={styles.mainContainer}>
        <span className={styles.primeiroDiaTitulo}>PRIMEIRO DIA</span>
        <div className={styles.divItaliano}>
          <img className={styles.italiano} src="/static/restaurantes/italiano.png" alt="" />
          <div className={styles.divSpanItaliano}>
            <span>Villa Tardivelli | 12:15</span>
            <span>Restaurante Italiano</span>
          </div>
        </div>
        <div className={styles.divHorto}>
          <img className={styles.horto2} src="/static/passeios/parque.webp" alt="" />
          <img className={styles.horto1} src="/static/passeios/minihorto.jpg" alt="" />
          <span>Passeios pela cidade | 14:15</span>
          <span>Mini Horto e Casa de Santiago</span>
        </div>
        <div className={styles.divParrilla}>
          <span>Parrilla Monte Alegre | 19:00</span>
          <span>Steakhouse e comida argentina</span>
          <img className={styles.parrilla} src="/static/restaurantes/restaurante-parrilla.jpg" alt="" />
        </div>
        <button
              className={styles.botao}
              onClick={() => {
                Router.push(
                  {
                    pathname: "/segundoDia",
                    query: { auth: true },
                  },
                  "/segundoDia"
                );
              return;
              }}
            >
              <i style={{ scale: "1.5", color: 'white'  }} className="fa-solid fa-arrow-right"></i>
          </button>
      </section>
    </>
    )
}