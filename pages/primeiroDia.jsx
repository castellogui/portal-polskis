import styles from "../styles/Frases.module.css";
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
      </Head>
      <Script src="https://kit.fontawesome.com/796432032e.js" crossorigin="anonymous"></Script>
      <section className={styles.mainContainer}>
        <img src="/static" alt="" />
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
    )
}