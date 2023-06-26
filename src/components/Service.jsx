import React from 'react';
import { services } from '../Data';

const Service = () => {
  return (
    <div className="section-center services-center">
      {services.map((link) => {
        const { id, icon, title, text } = link;
        return (
          <article className="service" key={id}>
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">{text}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Service;
