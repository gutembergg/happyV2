import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={[46.8358449, 7.658535]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Marker position={[46.8358449, 7.658535]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

// mapbox://styles/mapbox/satellite-streets-v11

export default MapComponent
