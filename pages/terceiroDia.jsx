import styles from "../styles/TerceiroDia.module.css";
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
      <span className={styles.terceiroDiaTitulo}>TERCEIRO DIA</span>
      <div className={styles.divEsquerda}>
         <img className={styles.balao} src="/static/passeios/balao.png" alt="" />
         <div className={styles.divEsquerdaSpans}>
            <span>Passeio de Balão</span>
            <span>Uma aventura ao amanhecer dos polskis nas alturas!</span>
         </div>
      </div>
      <div className={styles.divTirolesa}>
      <span className={styles.spanTirolesa1}>Rancho da Tirolesa</span>
        <span className={styles.spanTirolesa2}>A gente é radical!</span>
        <img className={styles.tirolesa} src="/static/passeios/tirolesaa.jpg" alt="" />
      </div>
      <div className={styles.divDireita}>
        <img className={styles.cavalo} src="/static/passeios/passeio de cavalo.jpg" alt="" />
        <span className={styles.spanCavalo1}>Passeio de Cavalo</span>
        <span className={styles.spanCavalo2}>Polskis highlanders!</span>
        <img className={styles.represa} src="/static/passeios/represa das palmeiras.jpg" alt="" />
        <span className={styles.spanRepresa1}>Represa das Palmeiras</span>
        <span className={styles.spanRepresa2}>Ao cair da tarde.</span>
    </div>
    <button
              className={styles.botao}
              onClick={() => {
                Router.push(
                  {
                    pathname: "/frases",
                    query: { auth: true },
                  },
                  "/frases"
                );
              return;
              }}
            >
              <i style={{ scale: "1.5", color: 'white'  }} className="fa-solid fa-arrow-left"></i>
          </button>
      </section>
    </>
    )
}