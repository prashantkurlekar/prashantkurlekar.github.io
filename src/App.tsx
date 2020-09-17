/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './App.css';

import React from 'react';

import { IonApp, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import AboutMe from './components/AboutMe';
import Intro from './components/Intro';
import Skills from './components/Skills';

const App: React.FC = () => {
  const myName = 'Prashant Kurlekar';

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{myName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{myName}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Intro></Intro>
          <Skills></Skills>
          <AboutMe></AboutMe>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
