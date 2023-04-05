// this part is for carousel element
$('#carousel').carousel({
  interval: 3000,
  pause: 'hover', // Set to 'hover' to pause the carousel on mouseover
  wrap: true, // Set to false to disable looping back to the beginning of the carousel
  keyboard: true // Set to false to disable keyboard navigation
})
var map; // The map object

function fetchData() {
    // Create the map object and set the center point and zoom level 
    map = L.map('map').setView([40.28, 47.87], 7);

    // Load tiles from open street map (you maybe have mapbox tiles here- this is fine) 
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data ©OpenStreetMap contributors, CC-BY-SA, Imagery ©CloudMade',
        maxZoom: 18
        // Add the basetiles to the map object	
    }).addTo(map);
    var redIcon = L.icon({
        iconUrl: 'assets/maps-and-flags.png',
        iconSize: [30, 30],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]

    });
    // Loop through the marker data and create markers for each one
    for (var i = 0; i < markerData.length; i++) {
        var marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: redIcon }).addTo(map);
        marker.bindPopup("<div class=infowindow><h3>" +
            markerData[i].name + "</h3><p> " +
            "<img src='" + markerData[i].pic + "'>" +
            markerData[i].info + "</p></div>");
    }
    }



