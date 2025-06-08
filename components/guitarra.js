import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'

export default function Guitarra({ guitarra }) {
  if (!guitarra) return null;

  const { nombre, descripcion, precio, imagen, url } = guitarra;

  const textoDescripcion = Array.isArray(descripcion)
    ? descripcion
        .map(parrafo => parrafo.children?.map(child => child.text).join(''))
        .join(' ')
    : descripcion;

  const imagenUrl = imagen?.url || '';

  return (
    <div className={styles.guitarra}>
      <img src={imagenUrl} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />
      <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{textoDescripcion || 'Descripción no disponible'}</p>
          <p className={styles.precio}>${precio}</p>
          <Link href={`guitarras/${url}`} className={styles.enlace}>Ver más información</Link>
      </div>
    </div>
  );
}
