
//pasar un valor específico para el nivel de zoom 14
function Map({lat, lon}) {
const zoom = 15

  return (
    <div className="aspect-square rounded-lg overflow-hidden">
        <iframe 
        src={`https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}&output=embed`}
        allowFullScreen=''
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        ></iframe>
    </div>
  )
}

export default Map