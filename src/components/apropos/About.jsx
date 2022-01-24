import React from "react";
import "./about.scss";
import { Today } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About</h1>
      <div className="about-desc">
        <h3>
          I'm Feriel Jabri and I'm a <span>Fullstack Js Web Developer</span>
        </h3>
        <p>
          I am a Fullstack JS (MERN) developer. Passionate about the world of
          the web, design and new technologies, I aim to make my contribution
          through my creative and innovative solutions.🤗
        </p>
      </div>
      <div className="about-personal-info">
        <div className="info">
          <div className="info-section">
            <div className="info-item-container">
              <div className="item-info">
                <p>
                  Birthday : <span>17 Juin 1988</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Age : <span>33</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Email : <span>feriel.jabri@yahoo.fr</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Degree : <span>Engineer</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Phone : <span>(+216) 21 122 439)</span>
                </p>
              </div>
              <div className="item-info">
                <p>
                  Freelance : <span>Available</span>
                </p>
              </div>
            </div>
            <div className="btn-about">
              <a href="cv/feriel-EN.pdf" download="feriel-CV-EN">
                <button>Download CV EN</button>
              </a>
              <button>
                <Link className="link" to="/contact">
                  Hire me
                </Link>
              </button>
              <a href="cv/feriel-FR.pdf" download="feriel-CV-FR">
                <button>Download CV FR</button>
              </a>
            </div>
          </div>
          <div className="about-skills">
            <div className="skill-item">
              <div className="text">
                <h5>HTML & CSS</h5>
                <h5>82%</h5>
              </div>
              <div className="progress">
                <div className="in-progress" style={{ width: "82%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>JSX</h5>
                <h5>75%</h5>
              </div>
              <div className="progress">
                <div className="in-progress" style={{ width: "75%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>React js & Redux</h5>
                <h5>85%</h5>
              </div>
              <div className="progress">
                <div className="in-progress" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Node Js</h5>
                <h5>91%</h5>
              </div>
              <div className="progress">
                <div className="in-progress" style={{ width: "91%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="text">
                <h5>Wordpress</h5>
                <h5>75%</h5>
              </div>
              <div className="progress">
                <div className="in-progress" style={{ width: "75%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-resume">
          <div className="education">
            <h2>Education</h2>
            <div className="education-section">
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> August-December 2021
                </h3>
                <h4 className="timeline-title">
                  FULL-STACK JS Bootcamp (GOMYCODE)
                </h4>
                <p class="timeline-text">Create web pages with HTML and CSS.</p>
                <p className="timeline-text">
                  {" "}
                  Create and maintain a complete website:
                </p>
                <p className="timeline-text">- Front: React Js , React Redux</p>
                <p className="timeline-text">
                  {" "}
                  - Back: Node Js ,Rest API, MongoDB, Mongoose, Express
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> Juin-July 2021
                </h3>
                <h4 className="timeline-title">
                  Bootcamp Get Into Tech (Inco-Academy & Minassa)
                </h4>
                <p class="timeline-text">
                  Create web sites and showcase site on WordPress.
                </p>
                <p className="timeline-text">
                  {" "}
                  Create web pages with HTML and CSS.
                </p>
                <p className="timeline-text">
                  Establish a digital marketing strategy and make a Facebook
                  advertising sheet for a product.
                </p>
                <p className="timeline-text"> Develop a personal monoboard..</p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2009-2012
                </h3>
                <h4 className="timeline-title">
                  Higher School of Rural Equipment Engineers, Medjz Elbab
                  (Tunisia)
                </h4>
                <p class="timeline-text">
                  NATIONAL ENGINEER DIPLOMA IN HYDRAULICS AND FITTINGS -CES
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2007-2009
                </h3>
                <h4 className="timeline-title"> ISSAT Gabes (Tunisia)</h4>
                <p class="timeline-text">
                  National competition for entry to engineering schools tunisia
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2007
                </h3>
                <h4 className="timeline-title">
                  Pilote High School Gabes (Tunisie){" "}
                </h4>
                <p class="timeline-text">
                  Scientific baccalaureat: experimental science
                </p>
              </div>
            </div>
          </div>
          <div className="education">
            <h2>Experience</h2>
            <div className="education-section">
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> August-December 2021
                </h3>
                <h4 className="timeline-title">
                  Full Stack Developpement (Freelance)
                </h4>
                <p class="timeline-text">
                  Create, design and deploy a complete MERN website{" "}
                </p>
                <p className="timeline-text">
                  Implement the different functionalities in the different
                  microservices (Backend: nodejs frameworks).
                </p>
                <p className="timeline-text">
                  Preparation of the NoSQL database: mongoDB{" "}
                </p>
                <p className="timeline-text">
                  {" "}
                  Development of Frontend interfaces (ReactJS)
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2017-2021
                </h3>
                <h4 className="timeline-title">
                  Construction Manager: STHB-gabes
                </h4>
                <p class="timeline-text">
                  Plan, organize, carry out and control the work of creating
                  hydraulic structures.
                </p>
                <p className="timeline-text"> Supervise a team of 20 workers</p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> January-Juin 2016
                </h3>
                <h4 className="timeline-title">
                  Teleoperator : Mediaphone-Gabes
                </h4>
                <p class="timeline-text">
                  Prospecting customers for a customer portfolio.
                </p>
                <p className="timeline-text">
                  Convince customers and make appointments.
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> 2014-2015
                </h3>
                <h4 className="timeline-title">
                  Data Entry Technician: DMR Production-Tunis
                </h4>
                <p class="timeline-text">
                  Process and capture information and computer data (satellite
                  images, shapefiles...) on arcgis and arcmap
                </p>
              </div>
              <div className="timeline-item">
                <div className="circle-dot"></div>

                <h3 className="timeline-date">
                  <Today className="icon-about" /> July-December 2012
                </h3>
                <h4 className="timeline-title">
                  Trainee Assistant: Protectrice Assurance-Gabes
                </h4>
                <p class="timeline-text">Establishing insurance contracts</p>
                <p className="timeline-text">
                  Produce claims and recoveries documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
