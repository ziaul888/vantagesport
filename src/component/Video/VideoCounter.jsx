import React from "react";
import data from "./CounterData";
import { Video } from "./Video";

export const VideoCounter = () => {
  return (
    <div>
      <section className="counter-section">
        <div className="container">
          <h1 className="title">Welcome to Vantage!</h1>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="text">
                Vantage is a marketplace where current college athletes host
                training sessions for aspiring college athletes and sell access
                to instructional videos.
              </div>
            </div>

            <div className="col-lg-9 mx-auto">
              <div className="counter-container">
                {data.map((item) => {
                  const { icon, title, number, id } = item;
                  return (
                    <div className="counter-content" key={id}>
                      <div className="icon">
                        <img src={icon} alt="icon" />
                      </div>

                      <div className="content">
                        <div className="count">{number}</div>
                        <div className="lbl">{title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Video />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
