import { useState } from 'react';
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';

export default function Producto({ guitarra, agregarCarrito }) {

  const [cantidad, setCantidad] = useState(0);

  if (!guitarra) return <p>No se encontró la guitarra</p>;

  const { nombre, descripcion, imagen, precio } = guitarra;

  const textoDescripcion = Array.isArray(descripcion)
    ? descripcion
        .map(parrafo => parrafo.children?.map(child => child.text).join(''))
        .join(' ')
    : descripcion;

  const imagenUrl = imagen?.url || '';


  const handleSubmit = e => {
    e.preventDefault();
    
    if (cantidad < 1) {
      alert('Debes seleccionar una cantidad mayor a 0');
      return
    }
    // Construir un objeto seleccionado
    const guitarraSeleccionada ={
      id: guitarra.id,
      imagen: imagenUrl,
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    }
    // Pasando la información al contex
    agregarCarrito(guitarraSeleccionada)
    
  }


  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <img src={imagenUrl} alt={`Imagen guitarra ${nombre}`} width={600} height={400} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{textoDescripcion || 'Descripción no disponible'}</p>
          <p className={styles.precio}>${precio}</p>

          <form 
            onSubmit={handleSubmit}
            className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select id="cantidad"
                    onChange={e => setCantidad(+e.target.value)}
            >
              <option value="0">------Seleccione------</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input 
              type="submit"
              value="Añadir al carrito"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const { data } = await respuesta.json()

    const paths = data.map(guitarra => ({
        params: { url: guitarra.url },
    }))

    console.log(paths)
    return {
        paths,
        fallback: false,
    }
  }

export async function getStaticProps({ params: { url } }) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const { data } = await respuesta.json()

    console.log('Datos que llegan del API:', data)  // <--- aquí

    return {
      props: {
        guitarra: data?.[0] || null,
      },
    }
 
}


// export async function getServerSideProps({ query: { url } }) {

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const { data } = await respuesta.json()

//     console.log('Datos que llegan del API:', data)  // <--- aquí

//     return {
//       props: {
//         guitarra: data?.[0] || null,
//       },
//     }
 
// }
