import styles from "../styles/Frases.module.css";
import Head from "next/head";
import Router from "next/router";
import Script from "next/script";
import { useEffect } from "react";

export default function Frases() {

  useEffect(()=>{
  
    // if (Router.query.auth != "true") {
    //   Router.push("/");
    // }

    let parenteses = document.getElementById('parenteses')
    let segundaImagem = document.getElementById('segundaImagem')
    let terceiraImagem = document.getElementById('terceiraImagem')
    setTimeout(()=>{
      parenteses.style.display = 'block'
    },1000)
    setTimeout(()=>{
      segundaImagem.style.display = 'block'
    },500)
    setTimeout(()=>{
      terceiraImagem.style.display = 'block'
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
        <img id={'segundaImagem'} className={styles.segundaImagem} src="/static/na-nossa.png" alt="" />
        <img id={'terceiraImagem'} className={styles.terceiraImagem} src="/static/viagem.png" alt="" />
        <img id={'parenteses'} className={styles.parenteses} src="/static/parenteses.png" alt="" />
        <button
              className={styles.botao}
              onClick={() => {
                Router.push(
                  {
                    pathname: "/primeiroDia",
                    query: { auth: true },
                  },
                  "/primeiroDia"
                );
              return;
              }}
            >
              <i style={{ scale: "1.5", color: 'white'  }} className="fa-solid fa-arrow-right"></i>
          </button>
      </section>
    </>
  );
}
