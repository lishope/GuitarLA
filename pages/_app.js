import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito'))?? [] : [];
  console.log(carritoLS)


  const [carrito, setCarrito] = useState(carritoLS);
  const [paginaLista, setPaginaLista] = useState(false);


  useEffect(() => {
  const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
  setCarrito(carritoLS);
  setPaginaLista(true);
}, []);
  

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito])


  const agregarCarrito =guitarra => {
    // Comprobar si la guitarra ya esta n el carrito
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // si no existe agregar la guitarra
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(producto => producto.id != id);
    setCarrito(carritoActualizado);
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad);
  }
  return guitarraState;
});
setCarrito(carritoActualizado)
window.localStorage.setItem('carrito', JSON.stringify(carrito));
}
  

  return paginaLista ? <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}

  />: null
}

export default MyApp
