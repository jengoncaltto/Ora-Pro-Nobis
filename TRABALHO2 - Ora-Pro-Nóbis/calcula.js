
//posicionado na curiosidades

var latP = -22.93375164533833;
var lonP = -43.23145834091897;

var x = document.getElementById("demo");
function getLocation()
{
    
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
  }else{
    x.innerHTML="Geolocation não é suportado pelo seu nevagador.";
  }
}
 
  function showPosition(position)
  {
   
    let distanceKM = distance(latP, lonP, position.coords.latitude, position.coords.longitude, "K");
    x.innerHTML= "A distância entre você e da planta é:  " + distanceKM;
  }

 
function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      x.innerHTML="Usuário rejeitou a solicitação de Geolocalização."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML="Localização indisponível."
      break;
    case error.TIMEOUT:
      x.innerHTML="O tempo da requisição expirou."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML="Algum erro desconhecido aconteceu."
      break;
    }
  }


function distance(lat1, lon1, lat2, lon2, unit) {
    const radlat1 = Math.PI * lat1/180;
    const radlat2 = Math.PI * lat2/180;
    const radlon1 = Math.PI * lon1/180;
    const radlon2 = Math.PI * lon2/180;
    const theta = lon1-lon2;
    const radtheta = Math.PI * theta/180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") { dist = dist * 1.609344 }
    return dist;


}


