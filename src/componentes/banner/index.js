import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola Mundo
                </h1>
                <p>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='circuloColorido'
                />
                <img
                    className={styles.minhaFoto}
                    src='https://github.com/RogerioPradoo.png'
                    alt="Foto do Rogerio Junior"
                />
            </div>
        </div>
    )
}