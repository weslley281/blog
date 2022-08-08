import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title="11 de maio de 2022 as 08:13:45"
          dateTime="2022-05-11 08:13:45"
        >
          Pubicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <strong>Lorem Ipsum</strong> é simplesmente um texto fictício da
          indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto
          fictício padrão da indústria desde os anos 1500, quando um impressor
          desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um
          livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos,
          mas também o salto para a composição eletrônica, permanecendo
          essencialmente inalterado. Foi popularizado na década de 1960 com o
          lançamento de folhas Letraset contendo passagens de Lorem Ipsum e,
          mais recentemente, com software de editoração eletrônica como Aldus
          PageMaker, incluindo versões de{' '}
          <a href="https://www.lipsum.com/">Lorem Ipsum</a>.{' '}
        </p>
      </div>
    </article>
  );
}
