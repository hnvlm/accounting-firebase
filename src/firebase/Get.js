import { firestore } from './connection';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export const getDocument = async ()=>{
  const docRef = doc(firestore, "cities", "LA");
  let docSnap = null;

  try {
    docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.error(error);
  }

  return docSnap;
}

export const getCollection = async ()=>{
  let querySnapshot = null;
  try {
    querySnapshot = await getDocs(collection(firestore, "cities"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    }); 
  } catch (error) {
    console.error(error);
  }
  return querySnapshot;
}