import { EMPLOYEE_UPDATE } from './types';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeDetails = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
