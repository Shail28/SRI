// Dark theme
styles: [{
        elementType: "geometry",
        stylers: [{
            color: "#242f3e"
        }]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#242f3e"
        }]
    },
    {
        elementType: "labels.text.fill",
        stylers: [{
            color: "#746855"
        }]
    },
    {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#d59563"
        }]
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#d59563"
        }]
    },
    {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
            color: "#263c3f"
        }]
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#6b9a76"
        }]
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            color: "#38414e"
        }]
    },
    {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#212a37"
        }]
    },
    {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#9ca5b3"
        }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
            color: "#746855"
        }]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#1f2835"
        }]
    },
    {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#f3d19c"
        }]
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{
            color: "#2f3948"
        }]
    },
    {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#d59563"
        }]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#17263c"
        }]
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#515c6d"
        }]
    },
    {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#17263c"
        }]
    }
]

// Info Tooltip
var det1 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt1[i]
"</p>" +
"</div>" +
"</div>";

var det2 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt2[i]
"</p>" +
"</div>" +
"</div>";

var det3 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt3[i]
"</p>" +
"</div>" +
"</div>";

var det4 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt4[i]
"</p>" +
"</div>" +
"</div>";

var det5 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt5[i]
"</p>" +
"</div>" +
"</div>";

var det6 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt6[i]
"</p>" +
"</div>" +
"</div>";

var det7 =
    '<div id="content" style="width:80px;height:60px;">' +
    '<h5 id="firstHeading" >Canteen</h5>' +
    '<div id="bodyContent">' +
    "<p>Students: " + wt7[i]
"</p>" +
"</div>" +
"</div>";

var info1 = new google.maps.InfoWindow({
    content: det1,
    maxWidth: 200,
    maxHeight: 10,
});
var info2 = new google.maps.InfoWindow({
    content: det2,
    maxWidth: 200,
    maxHeight: 10,
});
var info3 = new google.maps.InfoWindow({
    content: det3,
    maxWidth: 200,
    maxHeight: 10,
});
var info4 = new google.maps.InfoWindow({
    content: det4,
    maxWidth: 200,
    maxHeight: 10,
});
var info5 = new google.maps.InfoWindow({
    content: det5,
    maxWidth: 200,
    maxHeight: 10,
});
var info6 = new google.maps.InfoWindow({
    content: det6,
    maxWidth: 200,
    maxHeight: 10,
});
var info7 = new google.maps.InfoWindow({
    content: det7,
    maxWidth: 200,
    maxHeight: 10,
});

var marker1 = new google.maps.Marker({
    position: Canteen,
    map: map,
    title: "Canteen",
});
var marker2 = new google.maps.Marker({
    position: CEP,
    map: map,
    title: "CEP",
});
var marker3 = new google.maps.Marker({
    position: Faculty,
    map: map,
    title: "Faculty",
});
var marker4 = new google.maps.Marker({
    position: Hostel,
    map: map,
    title: "Hostel",
});
var marker5 = new google.maps.Marker({
    position: LAB,
    map: map,
    title: "LAB",
});
var marker6 = new google.maps.Marker({
    position: LT,
    map: map,
    title: "LT",
});
var marker7 = new google.maps.Marker({
    position: RC,
    map: map,
    title: "RC",
});

info1.open(map, marker1);
info2.open(map, marker2);
info3.open(map, marker3);
info4.open(map, marker4);
info5.open(map, marker5);
info6.open(map, marker6);
info7.open(map, marker7);