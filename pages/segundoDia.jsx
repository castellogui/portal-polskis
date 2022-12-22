import styles from "../styles/SegundoDia.module.css";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";

export default function primeiroDia(){
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
      <span className={styles.segundoDiaTitulo}>SEGUNDO DIA</span>
      <div className={styles.divTobo}>
        <img className={styles.tobo} src="/static/aqua/tobo.jpg" alt="" />
        <div className={styles.divToboSpan}>
          <span>Thermas Water Park</span>
          <span>Um outro thermas pra você conhecer!</span>
        </div>
      </div>
      <img className={styles.piscina} src="/static/aqua/piscina.jpg" alt="" />
      <img className={styles.geral} src="/static/aqua/geral.jpg" alt="" />
        <button
              className={styles.botao}
              onClick={() => {
                Router.push("/segundoDia");
              return;
              }}
            >
              <i style={{ scale: "1.5", color: 'white'  }} className="fa-solid fa-arrow-right"></i>
          </button>
      </section>
    </>
    )
}