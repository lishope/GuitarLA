import Image from 'next/image'
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'nosotros'}
      descripcion={'Sobre nosotros, GuitarLA, tienda de música'}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            src='/img/nosotros.jpg'
            alt='imagen sobre nosotros'
            width={1000}
            height={800}
          />
          <div className='texto'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua...
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
