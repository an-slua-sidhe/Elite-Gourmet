// function initMap() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 5.5,
//         center: {
//             lat: 53.4,
//             lng: -7.9
//         }
//     });

//     var labels = "123456";

//     var locations = [
//         { lat: 51.898235, lng: -8.479812 },
//         { lat: 51.948722, lng: -7.715142 },
//         { lat: 53.336221, lng: -6.248599 },
//         { lat: 54.599905, lng: -5.921911 },
//         { lat: 53.269726, lng: -9.061157 },
//         { lat: 52.138684, lng: -10.270297 }
//     ];

//     var markers = locations.map(function (location, i) {
//         return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//         });
//     });

//     var markerCluster = new MarkerClusterer(map, markers,
//         { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

// }

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 53.4, lng: -7.9},
      zoom: 5.5
    });
 
    var request = {
      placeId: 'PzjLBVjC3aCHr8gq5',
      fields: ['name', 'formatted_address', 'place_id', 'geometry']
    };

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function(place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address + '</div>');
          infowindow.open(map, this);
        });
      }
    });
  }