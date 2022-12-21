import styles from "../styles/PrimeiroDia.module.css";
import Head from "next/head";

export default function primeiroDia() {
  return (
    <>
      <Head>
        <title>Portal dos Polskis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.mainContainer}>
        <img className={styles.primeiraImagem} src="/static/eu-e-vc.png" alt="" />
        <img className={styles.segundaImagem} src="/static/na-nossa.png" alt="" />
        <img className={styles.terceiraImagem} src="/static/viagem.png" alt="" />
      </section>
    </>
  );
}
