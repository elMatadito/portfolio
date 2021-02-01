import React from 'react'
import portfolio from '../../data/portfolio.json'
import { Header, Main, Footer } from './styled'
import { VscCloudDownload, VscMenu } from "react-icons/vsc";

export const Home = () => {
  return (
    <>
      <Header>
        <div className="top">
          <img src={portfolio.picture} alt={portfolio.name} />
          <div className="profile-details">
            <h1>{portfolio.name}</h1>
            <h3>{portfolio.title}</h3>
            <p>{portfolio.location}</p>
          </div>
        </div>

        <div className="profile-overview">
          {portfolio.overview}
        </div>
      </Header>
      <Main>
        <h3>Skills</h3>
        <p><em>Coming soon...</em></p>
        <h3>Work Experience</h3>
        <p><em>Coming soon...</em></p>
        <h3>Projects and Labs</h3>
        <p><em>Coming soon...</em></p>
      </Main>
      <Footer>
        <a href="">
          <VscCloudDownload /> Download Resume
        </a>
        <VscMenu className="menu" />
      </Footer>
    </>
  )
}