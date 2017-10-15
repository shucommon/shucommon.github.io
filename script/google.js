function GoogleMap() {
    var mapCanvas = document.getElementById("googlemap");
    var mapOptions = {
        center: new google.maps.LatLng(30.9, 121.94), zoom: 12
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
