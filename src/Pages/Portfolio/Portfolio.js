/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Portfolio.css'
import PortfolioItem from '../../components/Shared/PorfolioItem/PortfolioItem'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All Projects
              </li>
              <li data-filter=".filter-web">Website</li>
              <li data-filter=".filter-gProject">Group Project</li>
              <li data-filter=".filter-freelance">Freelance</li>
              <li data-filter=".filter-graphicDsign">Grapic Design</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <PortfolioItem
            imgLink="../../img/portfolio/note-taker.jpg"
            projectName="Note Taker"
            description="The application is built with an express backend and save and retrieve note data
          from a JSON file. The app can be used to write, save, and delete notes and keep track of tasks need
          to complete."
          livePageName="Live Page" repoLinkName="Respository"
            livepageLink="https://notetaker-xpress.herokuapp.com"
            repoLink="https://github.com/rattanakleng/Note-Taker"
          />

          <PortfolioItem
            imgLink="../../img/portfolio/pizza-logger.jpg"
            projectName="Pizza Logger"
            description="The application is built with an express backend and save
            and retrieve note data from a JSON file. The app can be used
            to write, save, and delete notes and keep track of tasks
            need to complete."
            livePageName="Live Page" repoLinkName="Respository"
            livepageLink="https://pizza-logger.herokuapp.com/"
            repoLink="https://github.com/rattanakleng/Pizza-Logger"
          />

          <PortfolioItem
            imgLink="../../img/portfolio/weather-dashboard.jpg"
            projectName="Weather Dashboard"
            description="The app allows users to check current and future weather
            conditions, temperature, humidity, wind speed, and the UV
            index for cities. This app is develope with Server-Side
            APIs: Weather Dashboard (OpenWeather API,
            https://openweathermap.org/api)."
            livePageName="Live Page" repoLinkName="Respository"
            livepageLink="https://rattanakleng.github.io/Weather-Dashboard/"
            repoLink="https://github.com/rattanakleng/Weather-Dashboard"
          />

          <PortfolioItem
            imgLink="../../img/freelance/ratana-website.jpg"
            projectName="Architectural Portfolio"
            description="A freelance project built for an Architect. This webiste was built for an architect using Bootrap and
            JavaScript."
            livePageName="Live Page"
            livepageLink="http://ratanasuon.website/index.html"
          />

  <PortfolioItem
            imgLink="../../img/interior-design/cover.jpg"
            projectName="Interior Design Portfolio"
            description=" Portfolio is a collection of interior design projects. The
            portfolio was designed with Adobe Indesign, Photoshop, and
            Illustrator."
            livePageName="Live Page"
            livepageLink="https://issuu.com/rattanakleng/docs/rattanak_leng_portfolio"
          />
         
        </div>
      </div>
    </section>
  )
}

export default Portfolio
