import React from "react";
import benefitData from "./benefitData";
export const Benefits = () => {
  return (
    <>
      <section className="benefits-section">
        <div className="container">
          <h1 className="title">Benefits</h1>
          <div className="card-container">
            {benefitData.map((item) => {
              const { ima, text, title, id } = item;

              return (
                <div className="benefit-card" key={id}>
                  <div className="icon-holder">
                    <img src={ima} alt="icon" />
                  </div>

                  <div className="card-content">
                    <h1 className="title-text">{title}</h1>
                    <div className="text">{text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
