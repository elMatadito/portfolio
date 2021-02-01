import React from 'react'
import portfolio from '../../data/portfolio.json'
import { Header, Main, Footer } from './styled'
import { VscCloudDownload, VscMenu } from "react-icons/vsc";
import { CardLink } from '../../components/CardLink/';
import { Tag } from '../../components/Tag/';
import moment from 'moment'

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
        <div>
          {portfolio.skills.map(skill => {
            return (
              <Tag {...skill} />
            )
          })}
        </div>
        <h3>Work Experience</h3>
        <div>
          {portfolio.jobs.sort((a, b) => moment(b.start_date) - moment(a.start_date)).map(job => {
            const cardInfo = {
              title: job.position,
              subtitle: job.company,
              extra_info: job.start_date,
              image: job.logo
            }
            return (<CardLink {...cardInfo} />)
          })}
        </div>
        <h3>Projects and Labs</h3>
        <div>
          {portfolio.projects.map(project => {
            const cardInfo = {
              title: project.name,
              subtitle: project.type,
              extra_info: project.link
            }
            return (<CardLink {...cardInfo} />)
          })}
        </div>
      </Main>
      {/* <Footer>
        <a href="">
          <VscCloudDownload /> Download Resume
        </a>
        <VscMenu className="menu" />
      </Footer> */}
    </>
  )
}