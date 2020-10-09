import {
  IonButton,
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
// import { useHistory } from "react-router-dom";

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
        <h2>This works - Courses Page</h2>
        <div>
          <IonButton routerLink='/course-goals'>To Course Goals</IonButton>
          {/* <IonButton onClick={changePageHandler}>To Course Goals</IonButton> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
