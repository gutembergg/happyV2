import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  ContentWrapper,
  LogoWrapper,
  Location,
  LinkButton
} from './styles'

import { FiArrowRight } from 'react-icons/fi'

import LogoApp from '../../assets/Logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <LogoWrapper>
          <img src={LogoApp} alt="logo" />
        </LogoWrapper>
        <main>
          <h1>Amenez du bonheur au monde</h1>
          <p>Visitez les orphelinat et changez les jours des enfants.</p>
        </main>

        <Location>
          <strong>Genève</strong>
          <span>Suisse</span>
        </Location>

        <Link to="/map" className="link">
          <LinkButton>
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </LinkButton>
        </Link>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
