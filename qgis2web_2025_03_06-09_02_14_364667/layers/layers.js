ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([78.089839, 17.240514, 78.926707, 17.651023]);
var wms_layers = [];


        var lyr_GoogleMapsIndia_0 = new ol.layer.Tile({
            'title': 'Google Maps (India)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.co.in/maps/vt?lyrs=m@189&gl=in&x={x}&y={y}&z={z}'
            })
        });
var format_Trafficchokepoints_1 = new ol.format.GeoJSON();
var features_Trafficchokepoints_1 = format_Trafficchokepoints_1.readFeatures(json_Trafficchokepoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Trafficchokepoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trafficchokepoints_1.addFeatures(features_Trafficchokepoints_1);
var lyr_Trafficchokepoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trafficchokepoints_1, 
                style: style_Trafficchokepoints_1,
                popuplayertitle: 'Traffic choke points',
                interactive: true,
                title: '<img src="styles/legend/Trafficchokepoints_1.png" /> Traffic choke points'
            });
var group_HMDARegion = new ol.layer.Group({
                                layers: [lyr_GoogleMapsIndia_0,],
                                fold: "open",
                                title: 'HMDA Region'});
var group_ghmcarea = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'ghmc-area'});

lyr_GoogleMapsIndia_0.setVisible(true);lyr_Trafficchokepoints_1.setVisible(true);
var layersList = [group_HMDARegion,lyr_Trafficchokepoints_1];
lyr_Trafficchokepoints_1.set('fieldAliases', {'Traffic Congestion': 'Traffic Congestion', 'Traffic PS': 'Traffic PS', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Trafficchokepoints_1.set('fieldImages', {'Traffic Congestion': 'TextEdit', 'Traffic PS': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Trafficchokepoints_1.set('fieldLabels', {'Traffic Congestion': 'inline label - always visible', 'Traffic PS': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', });
lyr_Trafficchokepoints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});