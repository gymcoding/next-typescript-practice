import type { NextPage } from 'next'
import { useEffect } from 'react'
import PostList from '../components/posts/PostList'

interface Post {
  userId: number,
  id: string,
  title: string,
  body: string
}

interface HomeProps {
  posts: Post[]
}

// const Home: NextPage
const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  console.log('Home: ', posts)
  return (
    <div>
      <h1>Welcome To My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home

// export const getServerSideProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
}
