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
              Descubre la guitarra de tus sueños en nuestra tienda online, donde encontrarás una amplia selección de los mejores modelos acústicos, eléctricos y clásicos de marcas líderes como Fender, Gibson, Yamaha e Ibanez. Desde opciones económicas ideales para principiantes hasta instrumentos profesionales para músicos avanzados, todas nuestras guitarras incluyen envíos seguros a todo el país, garantía de 12 meses y asesoramiento especializado para que elijas el modelo perfecto. Aprovecha nuestras ofertas exclusivas y facilidades de pago para comenzar tu viaje musical hoy mismo con el instrumento que mejor se adapte a tu estilo y presupuesto.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
