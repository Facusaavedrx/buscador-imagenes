import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'

function App () {
  const [search, saveSearch] = useState('')
  useEffect(() => {
    const consultarApi = async () => {
      if (search === '') return;
      const imagesPages = 30
      const key = '33477199-8844cf1a91a83c3c1bdefdd21'
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPages}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      saveSearch(resultado)
    }
    consultarApi()
  }, [search])

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
      </article>
    </main>
  )
}

export default App
