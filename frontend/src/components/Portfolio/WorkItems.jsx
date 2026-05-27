import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      {/* View Details button */}
      <span className="work__view-button" onClick={openModal}>
        View Details
        <i className="uil uil-arrow-right work__view-button-icon"></i>
      </span>

      {item.demo && item.href_demo && (
        <a
          href={item.href_demo}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}

      {item.repo && item.href_repo && (
        <a
          href={item.href_repo}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "0.5rem" }}
        >
          Github Repo
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      )}

      {/* Modal always in DOM, toggle class for fade in/out */}
      <div
        className={`work__modal ${showModal ? "active-modal" : ""}`}
        onClick={closeModal}
      >
        <div
          className="work__modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <i
            onClick={closeModal}
            className="uil uil-times work__modal-close"
          ></i>
          <h3 className="work__modal-title">{item.title}</h3>
          <p className="work__modal-description">
            Category: {item.category}
          </p>

          {item.details &&
            item.details.map((detail, idx) => {
              if (typeof detail === "string") {
                return (
                  <p key={idx} className="work__modal-text">
                    {detail}
                  </p>
                );
              } else if (detail.type === "paragraph") {
                return (
                  <p key={idx} className="work__modal-text">
                    {detail.text}
                  </p>
                );
              } else if (detail.type === "list") {
                return (
                  <ul key={idx} className="work__modal-services grid">
                    {detail.items.map((item, i) => (
                      <li key={i} className="work__modal-service">
                        <i className="uil uil-check-circle work__modal-icon"></i>
                        <p className="work__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                );
              } else if (detail.type === "image") {
                return (
                  <img
                    key={idx}
                    src={detail.src}
                    alt={detail.alt}
                    className="work__modal-image"
                  />
                );
              } else if (detail.type === "caption") {
                return (
                  <p key={idx} className="work__modal-caption">
                    {detail.text}
                  </p>
                );
              }
              return null;
            })}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
