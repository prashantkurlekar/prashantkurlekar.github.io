import React from 'react';

import './Intro.css';

const Intro: React.FC = () => (
  <>
    <h1 className="ion-text-wrap">Hey, I'm Prashant</h1>
    <div className="center-img">
      <img src="assets/img/profile-image.png" alt="prashant"></img>
    </div>
    <div className="ion-padding-start ion-padding-end">
      <h4 className="ion-text-wrap">Full Stack(.NET) / Mobile Developer based in Sydney, Australia.</h4>
      <h2 className="ion-text-wrap">I build things for the mobile and web.</h2>
    </div>
  </>
);

export default Intro;
