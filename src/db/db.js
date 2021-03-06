import config from './config';
import firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');
export const FieldValue = require('firebase').firestore.FieldValue;

firebase.initializeApp(config);
const settings = { timestampsInSnapshots: true };
firebase.firestore().settings(settings);

const db = firebase.firestore();

export const auth = firebase.auth();
export default db;
