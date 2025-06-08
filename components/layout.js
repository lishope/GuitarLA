import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({children, title='', descripcion=''}) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={descripcion} />
      </Head>

      <Header />

        {children}

        <Footer />
    </>
  )
}
