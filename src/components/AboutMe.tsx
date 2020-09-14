import { IonItem, IonLabel, IonList } from '@ionic/react';

import React from 'react';

const AboutMe: React.FC = () => (
  <IonList lines="none">
    <IonItem>
      <IonLabel className="ion-text-wrap">
        A developer with more than 17 years of experience, I have worked at large software consulting organisations as well as small startups. Proficient in
        Full Stack (.NET) development, my expertise lies in building mobile applications and mobile first websites with scalable backend APIs.
      </IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel className="ion-text-wrap">I have been a Technical Architect for Microsoft Azure and .NET based applications.</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel className="ion-text-wrap">I have experience of working in Agile / Scrum methodology, and have also played the role of a Scrum Master.</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel className="ion-text-wrap">
        I have worked on projects for diverse domains like Social Networking, Telecom, e-Commerce, HealthCare and Media Distribution
      </IonLabel>
    </IonItem>
  </IonList>
);

export default AboutMe;
