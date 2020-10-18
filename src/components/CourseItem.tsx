import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import React from "react";

const CourseItem: React.FC<{
  title: string;
  enrolmentDate: Date;
  id: string;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>
          Enrolled on{" "}
          {props.enrolmentDate.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <div className='ion-text-right'>
          <IonButton
            fill='clear'
            color='secondary'
            routerLink={`/courses/${props.id}`}
          >
            View Course Goals
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default CourseItem;
