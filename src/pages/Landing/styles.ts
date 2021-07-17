import styled from 'styled-components'

import LandinImage from '../../assets/landing.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: linear-gradient(
    329.54deg,
    var(--primary) 0%,
    var(--primary-effect) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background-image: url(${LandinImage});
  background-repeat: no-repeat;
  background-position: 70% center;
  background-size: 45%;

  main {
    max-width: 380px;
  }

  main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`

export const LogoWrapper = styled.div`
  height: 100%;
  width: 100%;

  max-height: 5rem;
  max-width: 6.4em;
`

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0%;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    font-weight: 800;
  }
`

export const LinkButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0%;

  height: 80px;
  width: 80px;
  background: var(--button);

  border: 0;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: #96feff;
  }
`
