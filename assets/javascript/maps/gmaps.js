// Implementacion Api google maps
function initMap() {

    const coords= { 
      lat:-38.016820, 
      lng:-57.529451
    };

    let map = new google.maps.Map(document.getElementById("maps"), {
    center: coords,
    zoom: 17
    });

    let marker = new google.maps.Marker({
      position: coords,
      map,
      title:'Axelios Space'
    })

};

initMap();

