import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => setToggleState(index);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i can do</span>

      <div className="services__container container grid">
        {/* Data Scientist */}
        <div className="services__content">
          <div>
            <i className="uil uil-atom services__icon"></i>
            <h3 className="services__title">
              Data <br /> Scientist
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "services__modal active-modal" : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div
              className="services__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Data Scientist</h3>
              <p className="services__modal-description">
                Over 2 years of experience providing high-quality work to clients and
                companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Analyzing data to identify trends and extract actionable insights.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing machine learning models to solve complex business
                    problems.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Visualizing data for clear, impactful presentations and reports.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Building data pipelines for efficient data processing and analysis.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborating with stakeholders to deliver data-driven strategies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Analyst */}
        <div className="services__content">
          <div>
            <i className="uil uil-analytics services__icon"></i>
            <h3 className="services__title">
              Data <br /> Analyst
            </h3>
          </div>
          <span onClick={() => toggleTab(2)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "services__modal active-modal" : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div
              className="services__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Data Analyst</h3>
              <p className="services__modal-description">
                With over 2 years of experience as a Data Scientist, I deliver
                high-quality work to clients and companies, occasionally taking on data
                analysis tasks as part of my projects.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Analyzing data to uncover actionable insights.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Creating clear and informative data visualizations.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Cleaning and organizing data for accurate reporting.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Building dashboards and reports for data-driven decisions.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Supporting stakeholders with data analysis and insights.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Machine Learning Engineer */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Machine Learning <br /> Engineer
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "services__modal active-modal" : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div
              className="services__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">Machine Learning Engineer</h3>
              <p className="services__modal-description">
                Over 2 years of experience as a Data Scientist, consistently delivering
                high-quality work to clients and companies. I also handle machine
                learning engineering tasks as needed, developing and deploying models to
                solve real-world challenges.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Developing and fine-tuning machine learning models.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Implementing ML pipelines to automate data workflows.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conducting experiments and model evaluations.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Deploying models for real-time or batch inference.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborating with teams to deliver ML-powered solutions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;