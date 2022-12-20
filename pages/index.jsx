import Head from "next/head";
import styles from "../styles/Home.module.css";
import heart from "../public/heart.png";
import litaAvataresNic from "../public/static/avatares/nic/listaArquivos.json";
import litaAvataresGui from "../public/static/avatares/gui/listaArquivos.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { showMessage } from "../messages/alerts";

export default function Index() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(Number);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();
  const gerarNumeroInteiroAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const login = (e) => {
    e.preventDefault();
    let login = process.env.LOGINS.filter((login) => {
      return login == usuario;
    });
    let loginIndex = process.env.LOGINS.indexOf(login[0]);
    let userAutenticado = process.env.SENHAS[loginIndex] == senha;
    if (userAutenticado) {
      router.push("/palavra");
    } else {
      showMessage("Login incorreto.", "error", "Tente novamente ou chame o Polski.");
    }
  };

  const onChangeInput = (e, setState) => {
    let value = e.target.value;
    setState(value);
  };

  useEffect(() => {
    let numeroAleatorio = gerarNumeroInteiroAleatorio(0, 21);
    setNumeroAleatorio(numeroAleatorio);
  }, []);

  return (
    <>
      <Head>
        <title>Portal dos Polskis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.divCoracao}>
          <img src={heart.src} alt="coracao" />
        </div>
        <div className={styles.loginContainer}>
          <form className={styles.login} onSubmit={login}>
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => onChangeInput(e, setUsuario)}
              className={styles.inputLogin}
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => onChangeInput(e, setSenha)}
              className={styles.inputLogin}
            />
            <button type="submit" className={styles.buttonLogin}>
              Entrar
            </button>
          </form>
        </div>
        <div className={styles.avataresContainer}>
          {numeroAleatorio != 0 ? (
            <>
              <img
                src={`/static/avatares/gui/${litaAvataresGui[numeroAleatorio]}`}
                alt="avatar-gui"
              />
              <img
                src={`/static/avatares/nic/${litaAvataresNic[numeroAleatorio]}`}
                alt="avatar-gui"
              />
            </>
          ) : null}
        </div>
      </main>
    </>
  );
}
