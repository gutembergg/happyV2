import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;

  display: flex;
`

export const SideBar = styled.aside`
  width: 440px;
  background: linear-gradient(
    329.54deg,
    var(--primary) 0%,
    var(--primary-effect) 100%
  );

  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }

  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;
  }

  footer strong {
    font-weight: 800;
  }
`

export const LinkPlus = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 999;

  width: 64px;
  height: 64px;

  background: #15c3d6;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20px;

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
