import { useState } from 'react'
import Error from './Error'

function Formulario ({ saveSearch }) {
  const [words, saveWords] = useState('')
  const [error, saveError] = useState(false)
  const inputOnChange = e => saveWords(e.target.value)
  const searchImages = e => {
    e.preventDefault()
    if (words.trim() === '') {
      return saveError(true)
    }
    saveSearch(words)
    saveError(false)
  }

  return (
    <form
      onSubmit={searchImages}
    >
      <fieldset className='row'>
        <p className='form-group col-md-8'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Café, futbol, plantas..'
            onChange={inputOnChange}
          />
        </p>

        <p className='form-group col-md-4'>
          <input
            type='submit'
            className='btn btn-lg btn-danger btn-block'
            value='Buscar'
          />
        </p>
      </fieldset>
      {error ? <Error mensaje='Agrega un termino de busqueda' /> : null}
    </form>
  )
}

export default Formulario
