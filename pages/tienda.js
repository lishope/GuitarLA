import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css'
export default function Tienda({ guitarras }) {
  return (
    <Layout
      title={'Tienda'}
      descripcion={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}
    >
      <main className='contenedor'>
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
      </main>
    </Layout>
  );
}
export async function getStaticProps() {
  const respuesta = await fetch( `${process.env.API_URL}/guitarras?populate=imagen`)
  const {data:guitarras} = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}

// export async function getServerSideProps() {
//   const respuesta = await fetch( `${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras} = await respuesta.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

