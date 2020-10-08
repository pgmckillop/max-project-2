import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

const Courses: React.FC = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - Courses Page</h2>
      </IonContent>
    </React.Fragment>
  );
};

export default Courses;
