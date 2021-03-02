let map;

function initMap() {
    let hull = {lat: 53.7664164, lng: 0.3670049};

    let map = new google.maps.Map(document.getElementById("map"), {
        center:hull,
        zoom: 9,
    });
    
}