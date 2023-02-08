function Formulario () {
  return (
    <form>
      <fieldset className='row'>
        <p className='form-group col-md-8'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Ejemplo: Futbol..'
          />
        </p>

        <p className='form-group col-md-4'>
          <input
            type='text'
            className='btn btn-lg btn-danger btn-block'
            value='Buscar'
          />
        </p>
      </fieldset>
    </form>
  )
}

export default Formulario
