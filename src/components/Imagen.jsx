function Imagen ({ imagen }) {
  const { largueImageURL, likes, previewURL, tags, views } = imagen
  
  return (
    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
      <img src={previewURL} alt={tags} className='card-img-top' />
    </div>
  )
}

export default Imagen
