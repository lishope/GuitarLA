import Image from 'next/image';
import Link from 'next/link';
import { formatearFecha } from '../utils/helpers';
import styles from '../styles/blog.module.css'

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
    <article>
      {imagenUrl ? (
        <Image
          src={imagenUrl}
          alt={`Imagen del post ${titulo}`}
          width={600}
          height={400}
        />
      ) : null}

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{textoContenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>Leer más</Link>
      </div>
    </article>
  );
}
