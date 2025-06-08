import Layout from '../components/layout';
import Post from '../components/post';
import styles from '../styles/grid.module.css'


export default function Blog({posts}) {
  console.log(posts)
  return (
    <Layout
        title={'Blog'}
        descripcion={'blog de música, venta de guitarras, consejos, cursos, GuitarLA'}
    
    >
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>

          <div className={styles.grid}>
            {posts.map(post =>( 
              <Post 
                key={post.id} 
                post={post} />
            ))}
          </div>

        </main>
    </Layout>
  )
}
export async function getStaticProps() {
  const respuesta = await fetch( `${process.env.API_URL}/posts?populate=imagen`)
  const {data:posts} = await respuesta.json()

  return {
    props: {
      posts
    }
  }
}
