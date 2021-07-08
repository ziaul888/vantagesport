import React from "react";
import workData from "./WorkData";

export const HowItWork = () => {
  return (
    <>
      <section className="how-it-work-section">
        <div className="container">
          <h1 className="title">How it Works</h1>
          <div className="row">
            {workData.map((data) => {
              const { title1, title2, text, image, id, number } = data;
              return (
                <div className="col-lg-6" key={id}>
                  <div
                    className={id === 1 ? "how-it-card active" : "how-it-card"}
                  >
                    <div className="card-top">
                      <div className="icon-holder">
                        <img src={image} alt="icon" />
                      </div>

                      <div className="title">
                        {title1}
                        <br />
                        {title2}
                      </div>
                    </div>

                    <div className="card-bottom">
                      <div className="no">{number}</div>

                      <div className="text">{text}</div>
                    </div>
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
