import styles from "../styles/Palavra.module.css";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Router from "next/router";
import { showMessage } from "../messages/alerts";

export default function Palavra(props) {
  const [palavra, setPalavra] = useState();
  const [dica, setDica] = useState("");
  const [palavraDigitada, setPalavraDigitada] = useState("");
  const [palavraPassada, setPalavraPassada] = useState(false);
  const [semPalavra, setSemPalavra] = useState(false);

  const onChangeInput = (e, setState) => {
    let value = e.target.value;
    setState(value);
  };

  const definePalavra = (palavras) => {
    let palavraDoDia = palavras.filter((palavra) => {
      return new Date(palavra.data).getDate() === new Date(Date.now()).getDate();
    });
    setPalavra(palavraDoDia[0]);
    return palavraDoDia[0];
  };

  useEffect(() => {
    if (Router.query.auth != "true") {
      Router.push("/");
    }

    let palavras = process.env.palavras;

    if (definePalavra(palavras) !== undefined) {
      if (new Date(Date.now()).getHours() < 20) {
        setDica(`${definePalavra(palavras).dica}`);
      } else {
        setDica(`${definePalavra(palavras).palavra}`);
      }
    } else {
      setDica("Hoje não temos palavra do dia!");
      setSemPalavra(true);
    }

    let palavrasPassadas = JSON.parse(localStorage.getItem("palavras"));
    let checkPalavraAtual = palavrasPassadas?.filter((palavraAtual) => {
      return palavraAtual.palavra == definePalavra(palavras).palavra;
    });
    if (checkPalavraAtual != undefined)
      if (checkPalavraAtual[0] != undefined) {
        setPalavraPassada(true);
      }
  }, []);

  const verificarPalavra = async () => {
    if (String(palavra.palavra).toLowerCase() === String(palavraDigitada).toLowerCase()) {
      localStorage.setItem(
        "palavras",
        JSON.stringify([{ palavra: palavra.palavra, data: palavra.data }])
      );
      if (palavra.data == "2023-01-04 ") {
        Router.push(
          {
            pathname: "/frases",
            query: { auth: true },
          },
          "/frases"
        );
        return;
      }

      var audio = document.getElementById("audio");
      audio.play();
      await showMessage(
        "Você acertou a palavra do dia, Polski!",
        "success",
        "Volte amanhã para tentar acertar novamente."
      ).then(() => {
        Router.reload();
      });
    }else{
      await showMessage(
        "Você não acertou a palavra, Polski!",
        "error",
        "Nunca desista, pode tentar quantas vezes quiser."
      )
    }
  };

  return (
    <>
      <Head>
        <title>Portal dos Polskis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://kit.fontawesome.com/796432032e.js" crossorigin="anonymous"></Script>
      <section className={styles.mainContainer}>
        <span className={styles.dica}>{dica}</span>
        <div className={styles.palavraContainer} style={{ display: semPalavra ? "none" : "flex" }}>
          <span className={styles.label}>A palavra do dia é:</span>
          <div className={styles.divInputButon}>
            <input
              type="text"
              placeholder="Palavra do Dia"
              value={palavraPassada ? palavra.palavra : palavraDigitada}
              onChange={(e) => onChangeInput(e, setPalavraDigitada)}
              className={styles.inputPalavra}
              readOnly={palavraPassada}
            />
            <button
              className={styles.botaoPalavra}
              style={{ display: palavraPassada ? "none" : "block" }}
              onClick={() => {
                verificarPalavra();
              }}
            >
              <i style={{ scale: "1.5", color: 'white' }} className="fa-solid fa-arrow-right"></i>
              <audio id="audio" src="/static/audio-metro.mp3"></audio>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
