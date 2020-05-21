// Javascript to initialise Google Maps and add the 6 restaurant markers and their information below. 
// This is based on code I found in the Google Maps API documentation (https://developers.google.com/maps/documentation/javascript/examples/place-details). 

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 53.4, lng: -7.9 },
    zoom: 5.5
  });

  placeIDs = [
    // Ichigo Ichie
    'ChIJQY0TFBeQREgRRBsH96D5y-M',
    // Cliff House
    'ChIJiaHPag4SQ0gRPUUXBkU8krw',
    // L'Ecrivain
    'ChIJ6SxgM5YOZ0gRrXEyYxPQHZU',
    // Ox
    'ChIJtYvu31QIYUgRLtFOFF5F6hM',
    // Kai
    'ChIJEb6cPPmWW0gRYHEPLdhRcJM',
    // Chart House
    'ChIJTeNQycf7T0gRcsBRZ_W1Eo0'
  ]

  var infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);

  function addMarker(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: 'assets/images/marker.png'
      });
      google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + '<br>' +
          '<strong>Place ID:</strong> ' + place.place_id + '<br>' + '<br>' +
          '<strong>Address:</strong> ' + place.formatted_address + '</div>');
        infowindow.open(map, this);
      });
    }
  }

  for (var i = 0; i < placeIDs.length; i++) {
    service.getDetails({ placeId: placeIDs[i] }, addMarker);
  }

}