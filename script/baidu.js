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
