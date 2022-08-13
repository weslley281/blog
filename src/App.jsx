import { useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';
import { Siderbar } from './components/Siderbar';

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        name: 'Diego Fernandes',
        role: 'CTO @ Rocketseat',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker,',
        },
        { type: 'link', content: 'incluindo versões de Lorem Ipsum' },
      ],
      publishedAt: new Date('2022-05-03 20:00:05'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @ Rocketseat',
      },
      content: [
        {
          type: 'paragraph',
          content:
            'Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker,',
        },
        { type: 'link', content: 'incluindo versões de Lorem Ipsum' },
      ],
      publishedAt: new Date('2022-08-06 07:45:56'),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
