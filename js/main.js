var slideIndex = 0;

function showSlides() {

      var images = ['Photos/img1.jpg', 'Photos/img2.jpg', 'Photos/img3.jpg'];
      var titleElement = document.getElementsByClassName('title')[0];

      titleElement.style.backgroundImage = "url('" + images[slideIndex]  + "')";

      if (slideIndex == images.length - 1) {
        slideIndex = 0;
      } else {
        slideIndex++;
      }
}

setInterval(showSlides, 5000);

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16.5,
    center: {lat: 53.380353, lng: -1.476816},
    styles: [
      {elementType: "geometry", stylers: [{color: "#f5f5f5"}]},
      {elementType: "labels.icon", stylers: [{visibility: "off"}]},
      {elementType: "labels.text.fill", stylers: [{color: "#616161"}]},
      {elementType: "labels.text.stroke", stylers: [{color: "#f5f5f5"}]},
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{color: "#bdbdbd"}]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{color: "#eeeeee"}]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{color: "#757575"}]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{color: "#e5e5e5"}]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{color: "#9e9e9e"}]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{color: "#ffffff"}]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{color: "#757575"}]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{color: "#dadada"}]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{color: "#616161"}]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{color: "#9e9e9e"}]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{color: "#e5e5e5"}]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{color: "#eeeeee"}]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{color: "#c9c9c9"}]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{color: "#9e9e9e"}]
      }]
  });
  setMarkers(map);
}
var locations = [
  ['BBs Italian', 53.379449, -1.476928, 14, "http://www.bbsrestaurant.co.uk/"],
  ['Lucky Fox', 53.379769, -1.475903, 13, "http://www.theluckyfox.com/"],
  ['Steam Yard', 53.379412, -1.476086, 12, "http://steamyard.co.uk/"],
  ['Tamper Coffee', 53.380457, -1.476736, 11, "https://tampercoffee.co.uk/"],
  ['Pieminister', 53.379778, -1.474912, 10, "https://www.pieminister.co.uk/restaurants/sheffield/"],
  ['Nandos', 53.380479, -1.477231, 9, "https://www.nandos.co.uk/restaurants/sheffield-west-street?utm_source=googlemaps&utm_medium=organic&utm_content=SheffieldWestStreet&utm_campaign=local"],
  ['Bungalows and Bears', 53.379926, -1.475059, 8, "https://www.bungalowsandbears.com/"],
  ['Revolución de Cuba', 53.3805,  -1.4790, 7, "https://www.revoluciondecuba.com/bar/sheffield/"],
  ['Forum', 53.379347, -1.477485, 6, "https://www.forumsheffield.co.uk/"],
  ['The Wick at Both Ends',  53.380156, -1.479040, 5, "https://www.thewickatbothends.com/"],
  ['Bloo88', 53.380581, -1.477937, 4, "https://www.thewickatbothends.com/"],
  ['Tiger Works', 53.380943, -1.476217, 3, "http://www.tiger-works.co.uk/"],
  ['The Great Gatsby', 53.379738, 53.379738, 2, "http://www.thegatsbybar.co.uk/"],
  ['Soyo', 53.380668, -1.475611, 1, "http://soyo.me/"]
];

function setMarkers(map) {
  for (var i=0; i < locations.length; i++){
    var location = locations[i];
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      map: map,
      title: location[0],
      zIndex: location[3]
    });
    map.setCenter(marker.getPosition())

    google.maps.event.addListener(marker, 'mouseover', (function(marker) {
      return function(){
        infowindow.setContent(content);
        infowindow.open(map, marker);
      };
    }) (marker));
  }
}
