import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';



import { useCollectionData } from 'react-firebase-hooks/firestore';
const firestore = firebase.firestore();
const analytics = firebase.analytics();

firebase.initializeApp({
  apiKey: "AIzaSyDJzhFVt_bNVwTPN39AzhsfjdLgSsOH154",
  authDomain: "chatapp-ca315.firebaseapp.com",
  projectId: "chatapp-ca315",
  storageBucket: "chatapp-ca315.appspot.com",
  messagingSenderId: "305705043137",
  appId: "1:305705043137:web:764f327c0c3ebb033e0040",
  measurementId: "G-1DHYQ46WMB"
})

const auth = firebase.auth();

export {firestore, firebase, auth, useCollectionData}
