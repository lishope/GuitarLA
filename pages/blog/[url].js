import Image from 'next/image';
import Layout from '../../components/layout';
import Link from 'next/link';
import { formatearFecha } from '../../utils/helpers';
import styles from '../../styles/blog.module.css';

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;

  const imagenUrl = imagen?.url || '';

  const textoContenido = Array.isArray(contenido)
    ? contenido
        .map(parrafo =>
          parrafo.children?.map(child => child.text).join('')
        )
        .join('\n')
    : 'Contenido no disponible';

  return (
    <Layout
        title={`${titulo}`}
    >
        <article className={`${styles.post} ${styles ['mt-3']}`}>
            {imagenUrl && (
            <Image
                src={imagenUrl}
                alt={`Imagen del post ${titulo}`}
                width={1000}
                height={600}
            />
            )}

        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.text}>{textoContenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Leer más</Link>
        </div>
        </article>
    </Layout>
  );
}


export async function getServerSideProps({ query: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    const { data } = await respuesta.json()

    console.log('Datos que llegan del API:', data)  // <--- aquí

    return {
      props: {
        post: data?.[0] || null,
      },
    }
 
}

