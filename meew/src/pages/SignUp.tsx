
import { IonButton, IonContent, IonHeader, IonInput, IonNavLink, IonPage, IonTitle, IonToolbar,IonIcon, IonItem, IonLabel } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Home from './Home'


const SignUp:React.FC =() => {
    const [password, setPassword] = useState<"">();
    const [userName,setUserName] = useState<"">();
    

  return (

    <IonPage>
        <IonHeader>

      <IonToolbar>
        <IonTitle>Sign Up</IonTitle>
        <IonIcon icon='chevron-back-outline'/>
        <IonButton routerLink='/Home'>Back To Home</IonButton>
      </IonToolbar>

    </IonHeader>


    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Blank</IonTitle>
        </IonToolbar>
      </IonHeader>    


    <IonItem fill='solid'>
        <IonLabel position="floating">Name</IonLabel>
        <IonInput placeholder="Enter User Name"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">Password</IonLabel>
        <IonInput value={password} onIonChange={(e:any)=> setPassword(e.target.value)} placeholder="Choose a Password" type='password'></IonInput>
      </IonItem>

    <IonButton>Sign Up</IonButton>
    </IonContent>
     

      
    

  </IonPage>
  )
};

export default SignUp