import { doc, setDoc } from "firebase/firestore";
import { firestore } from './connection';


export const handleSubmit = async (collection, key, data) =>{

  try {
    await setDoc(doc(firestore, collection, key), data);
  } catch (error) {
    console.error(error);
  }
  
};
