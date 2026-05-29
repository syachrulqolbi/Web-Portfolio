import React, { useState } from "react";

const QualificationItem = ({ item, index, isLast }) => {
  const [showModal, setShowModal] = useState(false);

  const renderModalDetails = (details) => {
    if (!details) return null;
    return details.map((detail, idx) => {
      if (typeof detail === "string") {
        return (
          <p key={idx} className="qualification__modal-text">
            {detail}
          </p>
        );
      } else if (detail.type === "image") {
        return (
          <img
            key={idx}
            src={detail.src}
            alt={detail.alt}
            className="qualification__modal-image"
          />
        );
      } else if (detail.type === "list") {
        return (
          <ul key={idx} className="qualification__modal-services grid">
            {detail.items.map((item, i) => (
              <li key={i} className="qualification__modal-service">
                <i className="uil uil-check-circle qualification__modal-icon"></i>
                <p className="qualification__modal-info">{item}</p>
              </li>
            ))}
          </ul>
        );
      } else if (detail.type === "caption") {
        return (
          <p key={idx} className="qualification__modal-caption">
            {detail.text}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="qualification__data">
      {index % 2 === 0 ? (
        <>
          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i> {item.date}
            </div>
            <span
              className="qualification__view-button"
              onClick={() => setShowModal(true)}
            >
              View Details
              <i className="uil uil-arrow-right qualification__view-button-icon"></i>
            </span>
          </div>
          <div>
            <span className="qualification__rounder"></span>
            {!isLast && <span className="qualification__line"></span>}
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            {!isLast && <span className="qualification__line"></span>}
          </div>
          <div>
            <h3 className="qualification__title">{item.title}</h3>
            <span className="qualification__subtitle">{item.subtitle}</span>
            <div className="qualification__calender">
              <i className="uil uil-calendar-alt"></i> {item.date}
            </div>
            <span
              className="qualification__view-button"
              onClick={() => setShowModal(true)}
            >
              View Details
              <i className="uil uil-arrow-right qualification__view-button-icon"></i>
            </span>
          </div>
        </>
      )}

      {/* Modal */}
      <div
        className={`qualification__modal ${showModal ? "active-modal" : ""}`}
        onClick={() => setShowModal(false)}
      >
        <div
          className="qualification__modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <i
            onClick={() => setShowModal(false)}
            className="uil uil-times qualification__modal-close"
          ></i>
          <h3 className="qualification__modal-title">{item.title}</h3>
          <p className="qualification__modal-description">
            {item.subtitle} <br />
            {item.date}
          </p>
          <div className="qualification__modal-details">
            {renderModalDetails(item.details)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualificationItem;
