import Link from 'next/link';
import Layout from '../components/layout';


export default function Pagina404() {
  return (
    <Layout
        title="Página No encontrada"
    >
        <p className='error'>La página que buscas no existe</p>
        <Link className='error-enlace' href='/'>Ir a inicio</Link>
    </Layout>
  )
}
