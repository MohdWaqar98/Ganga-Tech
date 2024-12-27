import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import Feature from "ol/Feature";
import { Point } from "ol/geom";
import { Style, Fill, Stroke, Circle as CircleStyle } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import Overlay from "ol/Overlay";
import locations from "../data/GangaLocations"; // Location coordinates array
import DataMatch from "../components/DataMatch"; // Import the DataMatch component

const MapComp = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const popupRef = useRef(null); // Popup reference
  const [mergedData, setMergedData] = useState([]); // Stores merged location and data info
  const [todayData, setTodayData] = useState(null); // Stores today's data from DataMatch

  // Merge location data with today's data from DataMatch
  useEffect(() => {
    if (!todayData) return;

    const merged = locations.map((location) => ({
      ...location,
      ...todayData, // Add ph, bod, do, totalColiform to location
    }));
    setMergedData(merged);
  }, [todayData]);

  // Initialize Map
  useEffect(() => {
    if (!mapRef.current || mapInstance.current || mergedData.length === 0) return;

    // Create Map instance
    mapInstance.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [85.0, 25.0], // Default center for Ganga region
        zoom: 6,
        projection: "EPSG:4326",
      }),
    });

    // Add Markers
    const features = mergedData.map((location) => {
      const marker = new Feature({
        geometry: new Point([location.longitude, location.latitude]),
        name: location.name,
        ph: location.ph,
        do: location.do,
        bod: location.bod,
        totalColiform: location.totalColiform,
      });

      marker.setStyle(
        new Style({
          image: new CircleStyle({
            radius: 8,
            fill: new Fill({
              color: location.ph > 7.5 || location.bod > 2.5 ? "red" : "green", // Dynamic color
            }),
            stroke: new Stroke({ color: "black", width: 1 }),
          }),
        })
      );

      return marker;
    });

    const vectorSource = new VectorSource({ features });
    const vectorLayer = new VectorLayer({ source: vectorSource });

    mapInstance.current.addLayer(vectorLayer);

    // Create Popup
    const popup = new Overlay({
      element: popupRef.current,
      positioning: "bottom-center",
      stopEvent: true,
      offset: [0, -10],
    });
    mapInstance.current.addOverlay(popup);

    // Add Popup on Click
    mapInstance.current.on("click", (event) => {
      const feature = mapInstance.current.forEachFeatureAtPixel(event.pixel, (f) => f);
      if (feature) {
        const props = feature.getProperties();
        const coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);

        // Update popup content
        popupRef.current.innerHTML = `
          <div style="background: white; padding: 8px; border-radius: 4px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">
            <strong>${props.name}</strong><br />
            PH: ${props.ph}<br />
            DO: ${props.do}<br />
            BOD: ${props.bod}<br />
            Total Coliform: ${props.totalColiform}
          </div>
        `;
      } else {
        popup.setPosition(undefined); // Hide popup
      }
    });
  }, [mergedData]);

  return (
    <div className="flex justify-center">
      <DataMatch setTodayData={setTodayData} /> {/* Get dynamic data */}
      <div
        id="map"
        ref={mapRef}
        style={{
          width: "90%",
          height: "480px",
          border: "2px solid black",
        }}
      ></div>
      <div ref={popupRef} id="popup"></div> {/* Popup container */}
    </div>
  );
};

export default MapComp;
