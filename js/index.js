function initialize(event) {

    var j = event.value;

    // Coordinates Of All Places //23.188223, 72.628458
    var DAIICT = new google.maps.LatLng(23.188369, 72.628126);

    var Canteen = new google.maps.LatLng(23.188699, 72.626822);
    var CEP = new google.maps.LatLng(23.188423, 72.627863);
    var Faculty = new google.maps.LatLng(23.189420, 72.628106);
    var Hostel = new google.maps.LatLng(23.187614, 72.626900);
    var LAB = new google.maps.LatLng(23.187012, 72.628018);
    var LT = new google.maps.LatLng(23.186538, 72.628701);
    var RC = new google.maps.LatLng(23.188919, 72.628559);

    for (var i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function () {

                // Display DA-IICT Map
                map = new google.maps.Map(document.getElementById('map'), {
                    center: DAIICT,
                    zoom: 17.2,
                    // mapTypeId: 'satellite',
                    mapTypeControl: false,
                    streetViewControl: false,
                    rotateControl: true,
                    zoomControl: false,
                    fullscreenControl: false,
                    // mapTypeId: google.maps.MapTypeId.HYBRID,
                    styles: [{
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{
                            visibility: "off"
                        }]
                    }]
                });

                //Define The Heat Regions (Wifi Regions) on DA-IICT Map (Location, Weight)
                var heatMapData1 = [{
                    location: Canteen,
                    weight: wt1[j][i],
                }];
                var heatMapData2 = [{
                    location: CEP,
                    weight: wt2[j][i],
                }];
                var heatMapData3 = [{
                    location: Faculty,
                    weight: wt3[j][i],
                }];
                var heatMapData4 = [{
                    location: Hostel,
                    weight: wt4[j][i],
                }];
                var heatMapData5 = [{
                    location: LAB,
                    weight: wt5[j][i],
                }];
                var heatMapData6 = [{
                    location: LT,
                    weight: wt6[j][i],
                }];
                var heatMapData7 = [{
                    location: RC,
                    weight: wt7[j][i],
                }];

                // Heat Map Region Properties (Data, Max Intensity, Size)
                // Canteen
                var heatmap1 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData1,
                    maxIntensity: 50,
                    radius: 60,
                });
                // CEP
                var heatmap2 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData2,
                    maxIntensity: 50,
                    radius: 60,
                });
                // Faculty
                var heatmap3 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData3,
                    maxIntensity: 50,
                    radius: 60,
                });
                // Hostel
                var heatmap4 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData4,
                    maxIntensity: 50,
                    radius: 100,
                });
                // LAB
                var heatmap5 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData5,
                    maxIntensity: 50,
                    radius: 50,
                });
                // LT
                var heatmap6 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData6,
                    maxIntensity: 50,
                    radius: 60,
                });
                // RC
                var heatmap7 = new google.maps.visualization.HeatmapLayer({
                    data: heatMapData7,
                    maxIntensity: 50,
                    radius: 40,
                });

                // Plot the Data Region on the Map
                heatmap1.setMap(map);
                heatmap2.setMap(map);
                heatmap3.setMap(map);
                heatmap4.setMap(map);
                heatmap5.setMap(map);
                heatmap6.setMap(map);
                heatmap7.setMap(map);

                var x1 = document.getElementById("det1");
                var x2 = document.getElementById("det2");
                var x3 = document.getElementById("det3");
                var x4 = document.getElementById("det4");
                var x5 = document.getElementById("det5");
                var x6 = document.getElementById("det6");
                var x7 = document.getElementById("det7");
                var x8 = document.getElementById("ts");

                x1.innerHTML = wt1[j][i].toString();
                x2.innerHTML = wt2[j][i].toString();
                x3.innerHTML = wt3[j][i].toString();
                x4.innerHTML = wt4[j][i].toString();
                x5.innerHTML = wt5[j][i].toString();
                x6.innerHTML = wt6[j][i].toString();
                x7.innerHTML = wt7[j][i].toString();
                x8.innerHTML = timeslot[i];

                var det1 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >Canteen</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt1[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det2 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >CEP</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt2[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det3 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >Faculty</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt3[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det4 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >Hostel</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt4[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det5 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >LAB</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt5[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det6 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >LT</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt6[j][i]
                "</p>" +
                "</div>" +
                "</div>";

                var det7 =
                    '<div id="content" style="width:80px;height:60px;">' +
                    '<h5 id="firstHeading" >RC</h5>' +
                    '<div id="bodyContent">' +
                    "<p>Students: " + wt7[j][i]
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
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker2 = new google.maps.Marker({
                    position: CEP,
                    map: map,
                    title: "CEP",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker3 = new google.maps.Marker({
                    position: Faculty,
                    map: map,
                    title: "Faculty",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker4 = new google.maps.Marker({
                    position: Hostel,
                    map: map,
                    title: "Hostel",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker5 = new google.maps.Marker({
                    position: LAB,
                    map: map,
                    title: "LAB",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker6 = new google.maps.Marker({
                    position: LT,
                    map: map,
                    title: "LT",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });
                var marker7 = new google.maps.Marker({
                    position: RC,
                    map: map,
                    title: "RC",
                    icon: '../marker.png',
                    animation: google.maps.Animation,
                });

                marker1.addListener('mouseover', function () {
                    info1.open(map, marker1);
                });
                marker2.addListener('mouseover', function () {
                    info2.open(map, marker2);
                });
                marker3.addListener('mouseover', function () {
                    info3.open(map, marker3);
                });
                marker4.addListener('mouseover', function () {
                    info4.open(map, marker4);
                });
                marker5.addListener('mouseover', function () {
                    info5.open(map, marker5);
                });
                marker6.addListener('mouseover', function () {
                    info6.open(map, marker6);
                });
                marker7.addListener('mouseover', function () {
                    info7.open(map, marker7);
                });

                marker1.addListener('mouseout', function () {
                    info1.close();
                });
                marker2.addListener('mouseout', function () {
                    info2.close();
                });
                marker2.addListener('mouseout', function () {
                    info2.close();
                });
                marker3.addListener('mouseout', function () {
                    info3.close();
                });
                marker4.addListener('mouseout', function () {
                    info4.close();
                });
                marker5.addListener('mouseout', function () {
                    info5.close();
                });
                marker6.addListener('mouseout', function () {
                    info6.close();
                });
                marker7.addListener('mouseout', function () {
                    info7.close();
                });

            }, 2000 * i);
        })(i);
    }
}