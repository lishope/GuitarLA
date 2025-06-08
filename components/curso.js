import styles from '../styles/curso.module.css'

export default function curso({curso}) {
    const { contenido, imagen, titulo} = curso

    const textoContenido = Array.isArray(contenido)
    ? contenido
        .map(parrafo =>
          parrafo.children?.map(child => child.text).join('')
        )
        .join('\n')
    : 'Contenido no disponible';

  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>{`
        .curso {
            background-image: linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .7)),url(${imagen?.url});
        }
        `}

        </style>
        <div className={`contenido ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p>{textoContenido}</p>
            </div>
        </div>
    </section>
  )
}
