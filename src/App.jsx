import { useState } from 'react';
import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';
import styles from './App.module.css';
import { Siderbar } from './components/Siderbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post
            title="Nada, nada e nada"
            author="Weslley Henrique Vieira Ferraz"
            content="A sei lá, vou falar qualquer coisa mesmo, mesmo sabendo que não vai dar em nada ningem vai ler mesmo"
          />
          <Post
            title="A sei lá"
            author="Weslley Henrique Vieira Ferraz"
            content="A sei lá, vou falar qualquer coisa mesmo, mesmo sabendo que não vai dar em nada ningem vai ler mesmo"
          />
        </main>
      </div>
    </div>
  )
}

export default App