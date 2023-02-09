import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App () {
  const [search, saveSearch] = useState('')
  const [images, saveImages] = useState([])
  const [currentPage, saveCurrentPage] = useState(1)
  const [totalPages, saveTotalPages] = useState(1)
  useEffect(() => {
    const consultarApi = async () => {
      if (search === '') return
      const imagesPages = 30
      const key = '33477199-8844cf1a91a83c3c1bdefdd21'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPages}&page=${currentPage}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      saveImages(resultado.hits)
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagesPages)
      saveTotalPages(calcularTotalPaginas)
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    consultarApi()
  }, [search, currentPage])

  const paginaAnterior = () => {
    const nuevaPaginaActual = currentPage - 1
    if (nuevaPaginaActual === 0) return
    saveCurrentPage(nuevaPaginaActual)
  }
  const paginaSiguiente = () => {
    const nuevaPaginaActual = currentPage + 1
    if (nuevaPaginaActual > totalPages) return
    saveCurrentPage(nuevaPaginaActual)
  }
  return (
    <main className='App'>
      <article className='container'>
        <section className='jumbotron'>
          <div className='lead text-center'>
            <p>Buscador de imagenes</p>
            <Formulario
              saveSearch={saveSearch}
            />
          </div>
        </section>
        <section className='row justify-content-center'>
          <ListadoImagenes
            imagenes={images}
          />

          {(currentPage === 1)
            ? null
            : (
              <button
                type='button'
                className='bbtn btn-info mr-1'
                onClick={paginaAnterior}
              > &laquo; Anterior
              </button>
              )}
          {(currentPage === totalPages)
            ? null
            : (
              <button
                type='button'
                className='bbtn btn-info'
                onClick={paginaSiguiente}
              > Siguiente &raquo;
              </button>
              )}

        </section>
      </article>
    </main>
  )
}

export default App
