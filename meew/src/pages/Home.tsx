import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonNav, IonNavLink } from '@ionic/react';
import Welcome from '../components/Welcome';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

const Home: React.FC = () => {
  return (
    <IonPage>
     <IonHeader>
        <IonToolbar>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page One</h1>
      <Welcome/>
        <IonNavLink routerDirection='root' component={() => <Login />}>
          <IonButton>Go to Page Two</IonButton>
        </IonNavLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;
