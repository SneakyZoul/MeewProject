import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonNav, IonNavLink } from '@ionic/react';
import Welcome from '../components/Welcome'
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Login from './Login';

let userName:string;

const UserPage: React.FC = () => (
  <IonPage>
    <IonHeader>
    
      <IonToolbar>
        <IonTitle>This is The User Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
      <h1>{userName}</h1>

    </IonContent>
  </IonPage>
);

export default UserPage;
