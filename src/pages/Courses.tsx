import React from 'react';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';
// import { useHistory } from 'react-router-dom';

export const COURSE_DATA = [
  {
    id: 'c1', 
    title: 'Ionic + React - The Practical Guide', 
    enrolled: new Date('10/17/2020'),
    goals: [
      {id: 'c1g1', text: 'Finish course 1!'},
      {id: 'c1g2', text: 'Learn a lot in course 1'},
    ] },
  { id: 'c2', title: 'React.js - The Complete Guide', enrolled: new Date('10/18/2020'),
    goals: [
      {id: 'c2g1', text: 'Finish course 2!'},
      {id: 'c2g2', text: 'Learn a lot in course 2'},
    ]  },
  { id: 'c3', title: 'JavaScript - The Complete Guide', enrolled: new Date('10/19/2020'),
    goals: [
      {id: 'c3g1', text: 'Finish course 3!'},
      {id: 'c3g2', text: 'Learn a lot in course 3'},
    ]  }
];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push('/course-goals');
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
                  <IonCardHeader>
                    <IonCardTitle>
                      {course.title}
                    </IonCardTitle>
                    <IonCardSubtitle>
                      Enrolled on {course.enrolled.toLocaleDateString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'})}
                    </IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <div className="ion-text-right">
                      <IonButton fill="clear" color="secondary" routerLink={`/courses/${course.id}`}>
                      View Course Goals
                    </IonButton>
                    </div>
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
