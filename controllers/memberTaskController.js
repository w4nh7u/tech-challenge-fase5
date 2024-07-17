import firebase from '../firebase.js';
// import Member from '../models/memberTaskModel.js';
import { FireSQL } from 'firesql';
// import 'firesql/rx';
import {
  firestore,
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firestore);
// const docRef = firebase.firestore().doc('members_tasks');

const fireSQL = new FireSQL(db);
export const getGroupByMember = async (req, res, next) => {
  try {
    res.status(200).send('ok');
    // const members = await getDocs(collection(db, 'member_task'));
    // const members = this.fireSQL.query('SELECT 
    //     member,
    //     task
    //   FROM 
    //     members_tasks
    //   GROUP BY
    //     member');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
