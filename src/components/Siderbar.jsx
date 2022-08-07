import styles from './Siderbar.module.css';
import imgProfile from '../assets/profile.jpg';
import coding from '../assets/coding.jpg';
import { PencilLine } from 'phosphor-react';

export function Siderbar() {
    return(
        <aside className={styles.siderbar}>
            <img
                className={styles.cover} 
                src={coding}
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://github.com/weslley281.png"
                />

                <strong>Weslley Ferraz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}