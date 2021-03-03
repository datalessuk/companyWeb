let map;

function initMap() {
    let locarion = {lat: 53.7664164, lng: 0.3670049};

    let map = new google.maps.Map(document.getElementById("map"), {
        center:locarion,
        zoom: 9,
    });
    
}

