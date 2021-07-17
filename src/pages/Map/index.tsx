import React from 'react'
import { Link } from 'react-router-dom'
import MapMarker from '../../assets/map-marker.svg'
import { FiPlus } from 'react-icons/fi'

import { Container, SideBar, LinkPlus } from './styles'

const Map: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={MapMarker} alt="MapMarker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita </p>
        </header>

        <footer>
          <strong>Genève</strong>
          <span>Suisse</span>
        </footer>
      </SideBar>
      <div>Map</div>
      <LinkPlus>
        <Link to="/" className="link">
          <FiPlus size={32} color="#fff" />
        </Link>
      </LinkPlus>
    </Container>
  )
}

export default Map
