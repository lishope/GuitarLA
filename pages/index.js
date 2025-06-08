import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import Curso from '../components/curso';
import styles from '../styles/grid.module.css'
import Post from '../components/post';

export default function Home({ guitarras, posts, curso }) {

  return (
    <>
      <Layout
        title={'inicio'}
        descripcion={'Blog de música , venta de guitarras y más'}
      >
        <main>
          <section className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>
            <div className={styles.grid}>
          {guitarras?.length > 0 ? (
            guitarras.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))
          ) : (
            <p>No hay guitarras disponibles</p>
          )}
            </div>
          </section>

          <Curso 
            curso={curso} />


          <section className='contenedor'>
            <h2 className='heading'>Blog</h2>
            <div className={styles.grid}>
            {posts.map(post =>( 
              <Post 
                key={post.id} 
                post={post} />
            ))}
          </div>
          </section>
        </main>

      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`


  const [resGuitarras, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])

  const [{data: guitarras}, {data: posts}, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPost.json(),
    resCurso.json()
  ])


  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}
