import { IonButton, IonContent, IonHeader, IonInput, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import Home from './Home'



const Login:React.FC =() => {

    const [userName, setUserName] = useState<"">()

    useEffect(() => {
    console.log(userName)
    }, [userName])

  return(
    <IonPage>
    <IonHeader>

      <IonToolbar>
        <IonTitle>Blank maybe</IonTitle>
      </IonToolbar>

    </IonHeader>


    <IonContent fullscreen>

      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonInput value={userName} onIonChange={(e:any)=>(e.target.value)}></IonInput>
     
    <IonNavLink routerDirection="forward" component={() => <Home/>}>
        <IonButton>Login</IonButton>
    </IonNavLink>
    </IonContent>
     
   
   
    

  </IonPage>
  )
};

export default Login