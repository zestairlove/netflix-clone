import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from '../seed';

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: 'AIzaSyAWH6wJBhP0CKBVUu0S1bJ02FL-Sp8OZfc',
  authDomain: 'netflix-8263a.firebaseapp.com',
  databaseURL: 'https://netflix-8263a.firebaseio.com',
  projectId: 'netflix-8263a',
  storageBucket: 'netflix-8263a.appspot.com',
  messagingSenderId: '679211919627',
  appId: '1:679211919627:web:a89eadeeb72661e31d9a0e',
};

const firebase = Firebase.initializeApp(config);

// firebase에 dummy data 추가 (1회만 실행)
// seedDatabase(firebase);

export { firebase };
