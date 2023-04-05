var map; // The map object
var markers = []; // Array to store markers

function fetchData() {
    // The map object and the center point and zoom level 
    map = L.map('map').setView([40.28, 47.87], 7);

    // Load tiles from open street map 
    L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data ©OpenStreetMap contributors, CC-BY-SA, Imagery ©CloudMade',
        maxZoom: 18
        // Add the basetiles to the map object	
    }).addTo(map);
// icon for museums
    var iconMus = L.icon({
        iconUrl: 'assets/museum.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for historic places
    var iconHist = L.icon({
        iconUrl: 'assets/historic.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for parks
    var iconPark = L.icon({
        iconUrl: 'assets/park.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for religious places
    var iconRelig = L.icon({
        iconUrl: 'assets/religious.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for minerals location
    var iconVolc = L.icon({
        iconUrl: 'assets/petroleum.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for lakes
    var iconLake = L.icon({
        iconUrl: 'assets/lake.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for arenas
    var iconArena = L.icon({
        iconUrl: 'assets/arena.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for skyscrappers
    var iconSkysc = L.icon({
        iconUrl: 'assets/building.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for palace and castles
    var iconCast = L.icon({
        iconUrl: 'assets/tower.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });
// icon for resort
    var iconResort = L.icon({
        iconUrl: 'assets/resort.png',
        iconSize: [35, 35],
        iconAnchor: [20, 35], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76]
    });

    // Loop through the marker data and create markers for each one
    for (var i = 0; i < markerData.length; i++) {
        var marker;
        if (markerData[i].type === "museum") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconMus }).addTo(map);
        } else if (markerData[i].type === "history") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconHist }).addTo(map);
        } else if (markerData[i].type === "park") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconPark }).addTo(map);
        } else if (markerData[i].type === "religious") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconRelig }).addTo(map);
        } else if (markerData[i].type === "volcano") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconVolc }).addTo(map);
        } else if (markerData[i].type === "lake") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconLake }).addTo(map);
        } else if (markerData[i].type === "arena") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconArena }).addTo(map);
        } else if (markerData[i].type === "skyscraper") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconSkysc }).addTo(map);
        } else if (markerData[i].type === "palace") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconCast }).addTo(map);
        } else if (markerData[i].type === "resort") {
            marker = L.marker([markerData[i].lat, markerData[i].lng], { icon: iconResort }).addTo(map);
        }

        marker.bindPopup("<div class=infowindow><h3>" +
            markerData[i].name + "</h3><p> " +
            "<img src='" + markerData[i].pic + "'>" +
            markerData[i].info + "</p></div>");

        markers.push(marker); // Add marker to the markers array
    
    }
    // Add event listeners to buttons
    document.getElementById("BtnMuseum").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "museum") {
                markers[i].addTo(map);
            }
        }
    });

    document.getElementById("BtnHist").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "history") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnPark").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "park") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnRelig").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "religious") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnVolc").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "volcano") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnLake").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "lake") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnArena").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "arena") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnSkysc").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "skyscraper") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnCast").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "palace") {
                markers[i].addTo(map);
            }
        }
    });
    document.getElementById("BtnResort").addEventListener("click", function () {
        clearMarkers();
        for (var i = 0; i < markers.length; i++) {
            if (markerData[i].type === "resort") {
                markers[i].addTo(map);
            }
        }
    });

    // Function to clear all markers from the map
    function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
            markers[i].remove();
        }
    }

    document.getElementById("BtnAll").addEventListener("click", function() {
        // Loop through all the markers and add them to the map if they're not already displayed
        for (var i = 0; i < markers.length; i++) {
            if (!map.hasLayer(markers[i])) {
                map.addLayer(markers[i]);
            }
        }
    });
    
}