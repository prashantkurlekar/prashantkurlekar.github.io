import './Intro.css';

import React from 'react';

const Intro: React.FC = () => (
  <div>
    <h1 className="ion-text-wrap">Hey, I'm Prashant</h1>
    <div className="center-img">
      <img src="assets/img/profile-image.png" alt="Prashant Kurlekar"></img>
    </div>
    <div className="ion-padding-start ion-padding-end">
      <h2 className="ion-text-wrap">I build things for the mobile and web.</h2>
      <h4 className="ion-text-wrap">Full Stack(.NET) / Mobile Developer based in Sydney, Australia.</h4>
    </div>
  </div>
);

export default Intro;
