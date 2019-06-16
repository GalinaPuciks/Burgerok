function initMap () {
    var pos = {lat: 59.715529, lng: 10.838702};
    var opt = {
        center: pos,
        zoom: 18,
};

var myMap = new google.maps.Map(document.getElementById("map"), opt);

var marker = new google.maps.Marker ({
    position: pos,
    map: myMap,
    title: "Her kan du kjøpe burger!",
    icon : './img/img_map/map-marker.png'

});

var marker = new google.maps.Marker ({
    position: {lat:59.714850, lng:10.837068},
    map: myMap,
    title: "Her kan du kjøpe burger!",
    icon : './img/img_map/map-marker.png'

});
}