ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([79.178421, 13.606513, 79.508144, 13.766439]);
var wms_layers = [];

var format_Tirupati_urban_0 = new ol.format.GeoJSON();
var features_Tirupati_urban_0 = format_Tirupati_urban_0.readFeatures(json_Tirupati_urban_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tirupati_urban_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tirupati_urban_0.addFeatures(features_Tirupati_urban_0);
var lyr_Tirupati_urban_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tirupati_urban_0, 
                style: style_Tirupati_urban_0,
                popuplayertitle: 'Tirupati_(urban)',
                interactive: true,
                title: '<img src="styles/legend/Tirupati_urban_0.png" /> Tirupati_(urban)'
            });
var format_Tirumala_CSV_1 = new ol.format.GeoJSON();
var features_Tirumala_CSV_1 = format_Tirumala_CSV_1.readFeatures(json_Tirumala_CSV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Tirumala_CSV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tirumala_CSV_1.addFeatures(features_Tirumala_CSV_1);
var lyr_Tirumala_CSV_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tirumala_CSV_1, 
                style: style_Tirumala_CSV_1,
                popuplayertitle: 'Tirumala_CSV',
                interactive: true,
                title: '<img src="styles/legend/Tirumala_CSV_1.png" /> Tirumala_CSV'
            });

lyr_Tirupati_urban_0.setVisible(true);lyr_Tirumala_CSV_1.setVisible(true);
var layersList = [lyr_Tirupati_urban_0,lyr_Tirumala_CSV_1];
lyr_Tirupati_urban_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'stcode11': 'stcode11', 'dtcode11': 'dtcode11', 'sdtcode11': 'sdtcode11', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'stname': 'stname', 'dtname': 'dtname', 'sdtname': 'sdtname', 'Subdt_LGD': 'Subdt_LGD', 'Dist_LGD': 'Dist_LGD', 'State_LGD': 'State_LGD', });
lyr_Tirumala_CSV_1.set('fieldAliases', {'Places': 'Places', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Tirupati_urban_0.set('fieldImages', {'OBJECTID': '', 'stcode11': '', 'dtcode11': '', 'sdtcode11': '', 'Shape_Length': '', 'Shape_Area': '', 'stname': '', 'dtname': '', 'sdtname': '', 'Subdt_LGD': '', 'Dist_LGD': '', 'State_LGD': '', });
lyr_Tirumala_CSV_1.set('fieldImages', {'Places': '', 'Lat': '', 'Long': '', });
lyr_Tirupati_urban_0.set('fieldLabels', {'OBJECTID': 'no label', 'stcode11': 'no label', 'dtcode11': 'no label', 'sdtcode11': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'stname': 'no label', 'dtname': 'no label', 'sdtname': 'no label', 'Subdt_LGD': 'no label', 'Dist_LGD': 'no label', 'State_LGD': 'no label', });
lyr_Tirumala_CSV_1.set('fieldLabels', {'Places': 'inline label - always visible', 'Lat': 'no label', 'Long': 'no label', });
lyr_Tirumala_CSV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});