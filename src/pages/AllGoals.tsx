import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
// import { useHistory } from "react-router-dom";

const AllGoals: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push("/course-goals");
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - All goals Page</h2>
        
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
