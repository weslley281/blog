import styles from './Siderbar.module.css';
import imgProfile from '../assets/profile.jpg';
import coding from '../assets/coding.jpg';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Siderbar() {
  return (
    <aside className={styles.siderbar}>
      <img className={styles.cover} src={coding} />

      <div className={styles.profile}>
        <Avatar hasBorder={true} image="https://github.com/weslley281.png" />

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
