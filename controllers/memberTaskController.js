import firebase from '../firebase.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

// Inicialize o Firestore
const db = getFirestore(firebase);

export const getGroupByMember = async (req, res, next) => {
  try {
    // Buscar todos os membros
    const membersSnapshot = await getDocs(collection(db, 'members'));
    const members = membersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Buscar todas as tarefas
    const tasksSnapshot = await getDocs(collection(db, 'tasks'));
    const tasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Agrupar tarefas por membro
    const groupedData = members.map(member => {
      return {
        member: member,
        tasks: tasks.filter(task => task.memberId === member.id)
      };
    });

    res.status(200).send(groupedData);
  } catch (error) {
    res.status(400).send(error.message);
  }
};