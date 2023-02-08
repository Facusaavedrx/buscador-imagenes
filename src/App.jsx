import Formulario from './components/Formulario'

function App () {
  return (
    <main className='App'>
      <article className='container'>
        <section className='jumbotron'>
          <div className='lead text-center'>
            <p>Buscador de imagenes</p>
            <Formulario />
          </div>
        </section>
      </article>
    </main>
  )
}

export default App
