import React from 'react';
import Title from './Title';
import Tour from './Tour';
import { tours } from '../Data';
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {tours.map((link) => {
          return <Tour {...link} key={link.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
