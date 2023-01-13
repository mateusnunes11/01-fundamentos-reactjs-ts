import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mateusnunes11.png',
      name: 'Mateus Nunes',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
     publishedAt: new Date('2022-11-11 12:09:00')
  },
  {
    id: 2,
    author: {
    avatarUrl: 'https://i.pinimg.com/originals/02/17/0c/02170c26caf370d78196884e8a66d9e3.jpg',
    name: 'LeBron James',
    role: 'Web Developer'
  },
  content: [
    { type: 'paragraph', content: 'Hey guys' },
    { type: 'paragraph', content: 'I got injured and I am going to join RocketSeat to learn more from these good events 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'}
   ],
   publishedAt: new Date('2022-11-09 09:00:00')
},
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt= {post.publishedAt}
            />
          )
        })}
        </main>
      </div>
    </div>
  )
}

