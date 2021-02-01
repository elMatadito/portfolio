import styled from 'styled-components'

export const Header = styled.header`
  padding: 20px;

  .top{
    display: grid;
    grid-template-columns: 80px auto;
    grid-gap: 23px;

    img{
      width: 80px;
      height: 80px;
      border-radius: 8px;
    }

    h1{
      margin: 0;
      font-size: 18px;
    }

    h3{
      margin: 0;
      font-size: 14px;
    }

    p{
      margin: 0;
    }

    .profile-details{
      p{
        color: #868686;
      }
    }
  }
`

export const Main = styled.main`
  padding: 20px;
`

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  background: #020C1B;
  padding: 7px 20px;
  max-width: 500px;
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;

  a{
    display: flex;
    align-items: center;
    color: #F8F8F8;
    text-decoration: none;
    
    svg{
      margin-right: 8px;
    }
  }

  svg{
    width: 36px;
    height: 36px;
  }

  .menu{
    position: absolute;
    right: 20px;
  }
`