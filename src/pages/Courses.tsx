import {
  IonButton,
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonMenu,
  IonCardContent,
} from "@ionic/react";
import React from "react";
// import { useHistory } from "react-router-dom";

const COURSE_DATA = [
  {id: 'c1', title: 'Ionic + React - The practical guide'},
  {id: 'c2', title: 'React.js - The Complete guide'},
  {id: 'c3', title: 'JavaScript - The Complete guide'},

];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push("/course-goals");
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map(course => (
            <IonRow key={course.id}>
            <IonCol size-md="4" offset-md="4">
              <IonCard>
                <IonCardContent>
                  <h2 className="ion-text-center">{course.title}</h2>
                  <IonButton routerLink="">View course goals</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
