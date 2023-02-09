import Imagen from './Imagen'

function ListadoImagenes ({ imagenes }) {
  return (
    <div className='col-s12 p-5 row'>
      {imagenes.map(imagen => {
        return (
          <Imagen
            key={imagen.id}
            imagen={imagen}
          />
        )
      })}
    </div>
  )
}

export default ListadoImagenes
