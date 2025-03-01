ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([78.892117, 13.336930, 79.988714, 13.874844]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tirupati_rural_1 = new ol.format.GeoJSON();
var features_Tirupati_rural_1 = format_Tirupati_rural_1.readFeatures(json_Tirupati_rural_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tirupati_rural_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tirupati_rural_1.addFeatures(features_Tirupati_rural_1);
var lyr_Tirupati_rural_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tirupati_rural_1, 
                style: style_Tirupati_rural_1,
                popuplayertitle: 'Tirupati_(rural)',
                interactive: true,
                title: '<img src="styles/legend/Tirupati_rural_1.png" /> Tirupati_(rural)'
            });
var format_Chandragiri_2 = new ol.format.GeoJSON();
var features_Chandragiri_2 = format_Chandragiri_2.readFeatures(json_Chandragiri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Chandragiri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chandragiri_2.addFeatures(features_Chandragiri_2);
var lyr_Chandragiri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chandragiri_2, 
                style: style_Chandragiri_2,
                popuplayertitle: 'Chandragiri',
                interactive: true,
                title: '<img src="styles/legend/Chandragiri_2.png" /> Chandragiri'
            });
var format_Renigunta_3 = new ol.format.GeoJSON();
var features_Renigunta_3 = format_Renigunta_3.readFeatures(json_Renigunta_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Renigunta_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Renigunta_3.addFeatures(features_Renigunta_3);
var lyr_Renigunta_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Renigunta_3, 
                style: style_Renigunta_3,
                popuplayertitle: 'Renigunta',
                interactive: true,
                title: '<img src="styles/legend/Renigunta_3.png" /> Renigunta'
            });
var format_Tirupati_Municipal_Corpgeojson_4 = new ol.format.GeoJSON();
var features_Tirupati_Municipal_Corpgeojson_4 = format_Tirupati_Municipal_Corpgeojson_4.readFeatures(json_Tirupati_Municipal_Corpgeojson_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tirupati_Municipal_Corpgeojson_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tirupati_Municipal_Corpgeojson_4.addFeatures(features_Tirupati_Municipal_Corpgeojson_4);
var lyr_Tirupati_Municipal_Corpgeojson_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tirupati_Municipal_Corpgeojson_4, 
                style: style_Tirupati_Municipal_Corpgeojson_4,
                popuplayertitle: 'Tirupati_Municipal_Corp.geojson',
                interactive: true,
                title: '<img src="styles/legend/Tirupati_Municipal_Corpgeojson_4.png" /> Tirupati_Municipal_Corp.geojson'
            });
var format_TPTCSVLocs_5 = new ol.format.GeoJSON();
var features_TPTCSVLocs_5 = format_TPTCSVLocs_5.readFeatures(json_TPTCSVLocs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TPTCSVLocs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPTCSVLocs_5.addFeatures(features_TPTCSVLocs_5);
var lyr_TPTCSVLocs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPTCSVLocs_5, 
                style: style_TPTCSVLocs_5,
                popuplayertitle: 'TPT CSVLocs',
                interactive: true,
                title: '<img src="styles/legend/TPTCSVLocs_5.png" /> TPT CSVLocs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Tirupati_rural_1.setVisible(true);lyr_Chandragiri_2.setVisible(true);lyr_Renigunta_3.setVisible(true);lyr_Tirupati_Municipal_Corpgeojson_4.setVisible(true);lyr_TPTCSVLocs_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tirupati_rural_1,lyr_Chandragiri_2,lyr_Renigunta_3,lyr_Tirupati_Municipal_Corpgeojson_4,lyr_TPTCSVLocs_5];
lyr_Tirupati_rural_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_Chandragiri_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_Renigunta_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_Tirupati_Municipal_Corpgeojson_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_TPTCSVLocs_5.set('fieldAliases', {'Places': 'Places', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Tirupati_rural_1.set('fieldImages', {'OBJECTID': 'Range', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'sdtcode11': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'stname': 'TextEdit', 'dtname': 'TextEdit', 'sdtname': 'TextEdit', 'Subdt_LGD': 'Range', 'Dist_LGD': 'Range', 'State_LGD': 'Range', });
lyr_Chandragiri_2.set('fieldImages', {'OBJECTID': '', 'stcode11': '', 'dtcode11': '', 'sdtcode11': '', 'Shape_Length': '', 'Shape_Area': '', 'stname': '', 'dtname': '', 'sdtname': '', 'Subdt_LGD': '', 'Dist_LGD': '', 'State_LGD': '', });
lyr_Renigunta_3.set('fieldImages', {'OBJECTID': '', 'stcode11': '', 'dtcode11': '', 'sdtcode11': '', 'Shape_Length': '', 'Shape_Area': '', 'stname': '', 'dtname': '', 'sdtname': '', 'Subdt_LGD': '', 'Dist_LGD': '', 'State_LGD': '', });
lyr_Tirupati_Municipal_Corpgeojson_4.set('fieldImages', {'OBJECTID': 'Range', 'stcode11': 'TextEdit', 'dtcode11': 'TextEdit', 'sdtcode11': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'stname': 'TextEdit', 'dtname': 'TextEdit', 'sdtname': 'TextEdit', 'Subdt_LGD': 'Range', 'Dist_LGD': 'Range', 'State_LGD': 'Range', });
lyr_TPTCSVLocs_5.set('fieldImages', {'Places': '', 'Latitude': '', 'Longitude': '', });
lyr_Tirupati_rural_1.set('fieldLabels', {'OBJECTID': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'sdtcode11': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'stname': 'no label', 'dtname': 'no label', 'sdtname': 'no label', 'Subdt_LGD': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', });
lyr_Chandragiri_2.set('fieldLabels', {'OBJECTID': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'sdtcode11': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'stname': 'no label', 'dtname': 'no label', 'sdtname': 'no label', 'Subdt_LGD': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', });
lyr_Renigunta_3.set('fieldLabels', {'OBJECTID': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'sdtcode11': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'stname': 'no label', 'dtname': 'no label', 'sdtname': 'no label', 'Subdt_LGD': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', });
lyr_Tirupati_Municipal_Corpgeojson_4.set('fieldLabels', {'OBJECTID': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'sdtcode11': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'stname': 'no label', 'dtname': 'no label', 'sdtname': 'no label', 'Subdt_LGD': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', });
lyr_TPTCSVLocs_5.set('fieldLabels', {'Places': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_TPTCSVLocs_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});