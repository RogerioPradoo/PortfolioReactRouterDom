
import styles from './Menu.module.css'
import Menulink from '../menuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <Menulink to="/">
                    Inicio
                </Menulink>
                <Menulink to="/sobremim">
                    Sobre mim
                </Menulink>
            </nav>
        </header>
    )
}