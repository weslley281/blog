import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.coment}>
      <Avatar hasBorder={false} image="https://github.com/weslley281.png" />

      <div className={styles.comentBox}>
        <div className={styles.comentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Weslley Ferraz</strong>
              <time
                title="11 de maio de 2022 as 08:13:45"
                dateTime="2022-05-11 08:13:45"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom parabéns!!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> Curtir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
