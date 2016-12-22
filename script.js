function GoogleMap() {
    var mapCanvas = document.getElementById("googlemap");
    var mapOptions = {
        center: new google.maps.LatLng(30.9, 121.94), zoom: 12
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

function BaiduMap() {
    var bdmap = new BMap.Map("baidumap");
    bdmap.centerAndZoom(new BMap.Point(121.94, 30.9), 12);
    // enable mouse scroll
    bdmap.enableScrollWheelZoom();
    bdmap.addEventListener("click",showInfo);
    function showInfo(e){
        alert("longitude："+e.point.lng+",latitude: "+e.point.lat);
    }  
}