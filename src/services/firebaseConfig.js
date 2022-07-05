
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, query, where, collection} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCnqcraqIlVQmkGHd0NTG60-YKesP2hFLE",
    authDomain: "coderhouse-react37070.firebaseapp.com",
    projectId: "coderhouse-react37070",
    storageBucket: "coderhouse-react37070.appspot.com",
    messagingSenderId: "724086372240",
    appId: "1:724086372240:web:49bf8396641ddcb7bb2515"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)


export async function getItems() {
    // Obtenemos la referencia a la colección (appFirestore + Nombre de la Colección)
    const itemsColletcion = collection(appFirestore, "catalogo")
    // Obtenemos los documentos con getDocs(variable que contiene la colección)
    const itemsSnapshot = await getDocs(itemsColletcion)
    //Mapeamos los documentos, que serian los items.
    let response = itemsSnapshot.docs.map(
        doc => {
            return{
                ...doc.data(),
                id: doc.id
            }
        }
    ) 
    return response
}

export async function getItemsForCategory(categoryId) {
    const itemsCollection = collection(appFirestore, "catalogo")
    const q = query(itemsCollection, (where("category", "==", categoryId )))
    const itemsSnapshot = await getDocs(q)
    let response = itemsSnapshot.docs.map(
        doc => {
            return{
                ...doc.data(),
                id: doc.id
            }
        }
    ) 
    return response
}

export async function getItem(itemId) {
    const docRef = doc(appFirestore, "catalogo", itemId)
    
    const docData =  await getDoc(docRef)


    return{
        id:docData.id, ...docData.data()
    }
}

export default appFirestore
