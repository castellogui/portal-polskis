import styles from "../styles/Frases.module.css";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import { useEffect } from "react";

export default function frases() {

  useEffect(()=>{
    let parenteses = document.getElementById('parenteses')
    setTimeout(()=>{
      parenteses.style.display = 'block'
    },1000)
  })

  return (
    <>
      <Head>
        <title>Portal dos Polskis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/796432032e.js" crossorigin="anonymous"></Script>
      <section className={styles.mainContainer}>
        <img className={styles.primeiraImagem} src="/static/eu-e-vc.png" alt="" />
        <img className={styles.segundaImagem} src="/static/na-nossa.png" alt="" />
        <img className={styles.terceiraImagem} src="/static/viagem.png" alt="" />
        <img id={'parenteses'} className={styles.parenteses} src="/static/parenteses.png" alt="" />
        <button
              className={styles.botao}
              onClick={() => {
                Router.push("/primeiroDia");
              return;
              }}
            >
              <i style={{ scale: "1.5" }} className="fa-solid fa-arrow-right"></i>
          </button>
      </section>
    </>
  );
}
