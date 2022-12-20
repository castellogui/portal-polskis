import Head from 'next/head'
import styles from '../styles/Home.module.css'
import heart from '../public/heart.png'
import avatar1 from '../public/avatares/gui/0afc84e8-cf6d-4484-ae81-48b0c543be5f.webp'
import avatar2 from '../public/avatares/nic/0bf832c9-904d-4c64-8d01-5a99360b5288.webp'

export default function Home() {
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
          <form className={styles.login}>
            <input type="text" placeholder='Usuário' className={styles.inputLogin} />
            <input type="password" placeholder='Senha' className={styles.inputLogin} />
            <button className={styles.buttonLogin}>Entrar</button>
          </form>
        </div>
        <div className={styles.avataresContainer}>
          <img src={avatar1.src} alt="avatar-gui" />
          <img src={avatar2.src} alt="avatar-gui" />
        </div>
      </main>
    </>
  )
}
