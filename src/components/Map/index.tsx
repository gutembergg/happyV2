import React from 'react'
import { Marker, Popup, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

import MapMarcker from '../../assets/map-marker.svg'

import { Container } from './styles'

const markerIcon = Leaflet.icon({
  iconUrl: MapMarcker,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

const MapComponent: React.FC = () => {
  return (
    <Container
      center={[46.8358449, 7.658535]}
      zoom={13}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
      <Marker icon={markerIcon} position={[46.8358449, 7.658535]}>
        <Popup
          closeButton={false}
          minWidth={240}
          maxHeight={240}
          className="map-popup"
        >
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Container>
  )
}

// mapbox://styles/mapbox/satellite-streets-v11 mapbox://styles/mapbox/light-v10

export default MapComponent
