$(window).ready(function() {
    var $map = $('#map');

    var uluru = {
        lat: 49.1355194,
        lng: 33.4431111
    };

    var map = new google.maps.Map($map[0], {
        zoom: 17,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'My Home'
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    const cities = {
        Kremenchuk: { lat: 49.059315, lng: 33.42251 },
        Poltava: { lat: 49.591553, lng: 34.551396 },
        Kyiv: { lat: 50.460933, lng: 30.515164 },
        London: { lat: 51.5306, lng: -0.12906 }
    };
    
    $('#cities').change(function() {
        const $this = $(this);
        var city = $this.val();
        map.setCenter(cities[city]);
        marker.setPosition(cities[city]);
    });
});