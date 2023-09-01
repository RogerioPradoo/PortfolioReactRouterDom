import BotaoPrincipal from "componentes/botaoPrincipal";
import styles from "./Notfound.module.css";
import erro404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom";

export default function Notfound() {
    const navegar = useNavigate()


    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>
                <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
                <p className={styles.paragrafo}> Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>

                <div onClick={() => navegar(-1)} className={styles.botaoContainer}>
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    alt="imagemCachorroNotFound"
                    src={erro404}
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}