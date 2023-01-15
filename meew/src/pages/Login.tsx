import { IonButton, IonContent, IonHeader, IonInput, IonNavLink, IonPage, IonTitle, IonToolbar,IonIcon, IonItem, IonLabel, useIonRouter, IonRoute, IonRouterLink } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import { Route } from 'workbox-routing';
import Home from './Home'
import UserPage from './UserPage';




const Login:React.FC =() => {

    const [userName, setUserName] = useState<string>()
    const [userPassword, setUserPassword] = useState<string>()

    useEffect(() => {
    console.log(userName)
    }, [userName])

    useEffect(()=>{
        console.log(userPassword);
    },[userPassword])

    const loginUser=()=> {
        if(userName == "name" && userPassword == "Password"){
            return <IonRouterLink routerLink='./UserPage'/>
            }else 
            return alert("Hell no")
        }
    


  return(
    <IonPage>
        <IonHeader>

      <IonToolbar>
        <IonTitle>Login Page</IonTitle>
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
        <IonInput value={userName} onIonChange={(e:any)=> setUserName(e.target.value)} placeholder="Enter User Name"></IonInput>
      </IonItem>

      <IonItem fill="solid">
        <IonLabel position="floating">Password</IonLabel>
        <IonInput value={userPassword} onIonChange={(e:any)=> setUserPassword(e.target.value)} placeholder="Enter Password" type='password'></IonInput>
      </IonItem>
     <div>
            <IonButton onClick={loginUser}>Login</IonButton>

     </div>
     
           
    </IonContent>
     

      
    

  </IonPage>
  )
};

export default Login