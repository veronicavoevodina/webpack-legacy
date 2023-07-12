import React from "react";
import Tour from "./Tour";
import { tours } from "../Data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((link) => {
          return <Tour {...link} key={link.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
