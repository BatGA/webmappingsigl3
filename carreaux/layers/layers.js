ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([119388.699362, 5383314.807216, 205112.175934, 5441813.941887]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_part_men_pauvre_xpo_1 = new ol.format.GeoJSON();
var features_part_men_pauvre_xpo_1 = format_part_men_pauvre_xpo_1.readFeatures(json_part_men_pauvre_xpo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_part_men_pauvre_xpo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_part_men_pauvre_xpo_1.addFeatures(features_part_men_pauvre_xpo_1);
var lyr_part_men_pauvre_xpo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_part_men_pauvre_xpo_1, 
                style: style_part_men_pauvre_xpo_1,
                popuplayertitle: 'part_men_pauvre_xpo',
                interactive: true,
    title: 'part_men_pauvre_xpo<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_0.png" /> 0 - 3,4<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_1.png" /> 3,4 - 10,3<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_2.png" /> 10,3 - 17,5<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_3.png" /> 17,5 - 26,1<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_4.png" /> 26,1 - 40,1<br />\
    <img src="styles/legend/part_men_pauvre_xpo_1_5.png" /> 40,1 - 77,7<br />' });
var group_Bati_imp = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Bati_imp'});
var group_Buffer = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Buffer'});

lyr_OSMStandard_0.setVisible(true);lyr_part_men_pauvre_xpo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_part_men_pauvre_xpo_1];
lyr_part_men_pauvre_xpo_1.set('fieldAliases', {'GEO': 'GEO', 'GEO_OBJECT': 'GEO_OBJECT', 'OBS_STATUS': 'OBS_STATUS', 'lcog_geo': 'lcog_geo', 'ind': 'ind', 'men': 'men', 'men_pauv': 'men_pauv', 'men_1ind': 'men_1ind', 'men_5ind': 'men_5ind', 'men_prop': 'men_prop', 'men_fmp': 'men_fmp', 'ind_snv': 'ind_snv', 'men_surf': 'men_surf', 'men_coll': 'men_coll', 'men_mais': 'men_mais', 'log_soc': 'log_soc', 'ind_inc': 'ind_inc', 'log': 'log', 'ind_0_17': 'ind_0_17', 'ind_65p': 'ind_65p', 'id': 'id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'EXPO': 'EXPO', 'men_pauv_e': 'men_pauv_e', 'pct_pauv_e': 'pct_pauv_e', });
lyr_part_men_pauvre_xpo_1.set('fieldImages', {'GEO': 'TextEdit', 'GEO_OBJECT': 'TextEdit', 'OBS_STATUS': 'TextEdit', 'lcog_geo': 'TextEdit', 'ind': 'TextEdit', 'men': 'TextEdit', 'men_pauv': 'TextEdit', 'men_1ind': 'TextEdit', 'men_5ind': 'TextEdit', 'men_prop': 'TextEdit', 'men_fmp': 'TextEdit', 'ind_snv': 'TextEdit', 'men_surf': 'TextEdit', 'men_coll': 'TextEdit', 'men_mais': 'TextEdit', 'log_soc': 'TextEdit', 'ind_inc': 'TextEdit', 'log': 'TextEdit', 'ind_0_17': 'TextEdit', 'ind_65p': 'TextEdit', 'id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'EXPO': 'TextEdit', 'men_pauv_e': 'TextEdit', 'pct_pauv_e': 'TextEdit', });
lyr_part_men_pauvre_xpo_1.set('fieldLabels', {'GEO': 'hidden field', 'GEO_OBJECT': 'hidden field', 'OBS_STATUS': 'hidden field', 'lcog_geo': 'hidden field', 'ind': 'hidden field', 'men': 'hidden field', 'men_pauv': 'hidden field', 'men_1ind': 'hidden field', 'men_5ind': 'hidden field', 'men_prop': 'hidden field', 'men_fmp': 'hidden field', 'ind_snv': 'hidden field', 'men_surf': 'hidden field', 'men_coll': 'hidden field', 'men_mais': 'hidden field', 'log_soc': 'hidden field', 'ind_inc': 'hidden field', 'log': 'hidden field', 'ind_0_17': 'hidden field', 'ind_65p': 'hidden field', 'id': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'EXPO': 'inline label - always visible', 'men_pauv_e': 'inline label - always visible', 'pct_pauv_e': 'inline label - always visible', });
lyr_part_men_pauvre_xpo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});