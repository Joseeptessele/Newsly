import React from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonList, IonItem, IonIcon, IonLabel, IonRow, IonCol, IonButton, IonGrid } from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader'
import LargeHeader from '../../components/Header/LargeHeader'
import { toast } from "../../helpers/toast";
import firebase from "../../firebase";
import UserContext from "../../context/UserContext";
import { personCircleOutline, mailOutline } from 'ionicons/icons';


const Profile = (props) => {
    const { user } = React.useContext(UserContext);

    async function logoutUser(){
        try{
            await firebase.logout();
            props.history.push("/");
            toast("you have logged out successfully.")
        } catch(err){
            console.error("logout error", err);
            toast(err.message)
        }
    }
    return (
        <IonPage>
            <SmallHeader title="Profile"/>
            <IonContent fullscreen>
                <LargeHeader title="Profile"/>
                {user ? (
                    <>
                        <IonCard>
                            <IonCardContent>
                                <IonList lines="none">
                                    <IonItem>
                                        <IonIcon icon={personCircleOutline} slot="start"></IonIcon>
                                        <IonLabel>
                                            <strong>{user.displayName}</strong>
                                            <p>username</p>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={mailOutline} slot="start"></IonIcon>
                                        <IonLabel>
                                            <strong>{user.email}</strong>
                                            <p>Email</p>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" routerLink={'/edit-profile'} color="primary" fill="outline">
                                    edit profile
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="block" onClick={logoutUser}>
                                    log out
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </>
                    ) : (
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonButton expand="block" routerLink={'/register'} color="primary">
                                        Login
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                )
            }
            </IonContent>
        </IonPage>
    )
}

export default Profile;