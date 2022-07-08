
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, getDoc, doc, query, where, collection, setDoc, addDoc, Timestamp} from "firebase/firestore"


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

export async function exportDataToFirestore() {
    const productos = [
        {
            id: 1,
            name: "Funko Alakazam",
            price: 5000,
            stock: 2,
            img: "https://i.ibb.co/XbTZqy4/funko-alakazam.png",
            description:  "Funko Pop! Pokémon: Alakazam #855",
            category: "Figuras",
        },
        {
            id: 2,
            name: "Funko Charizard",
            price: 5500,
            stock: 1,
            img: "https://i.ibb.co/YL45HDh/funko-charizard.png",
            description:  "lorem",
            category: "Figuras",
        },
        {
            id: 3,
            name: "Funko Pidgeotto",
            price: 5000,
            stock: 5,
            img: "https://i.ibb.co/41CrNkf/funko-pidgeotto.jpg",
            description:  "lorem",
            category: "Figuras",
        },
        {
            id: 4,
            name: "Pokemon Azul GB",
            price: 12500,
            stock: 2,
            img: "https://i.ibb.co/vhDVSZC/pkmn-blue.jpg",
            description: "lorem" ,
            category: "Videojuegos",
        },
        {
            id: 5,
            name: "Pokemon Ruby GBA",
            price: 10000,
            stock: 3,
            img: "https://i.ibb.co/f2Jbmyt/pkmn-ruby.png",
            description: "lorem" ,
            category: "Videojuegos",
        },
        {
            id: 6,
            name: "Charizard TCG Original",
            price: 49000,
            stock: 2,
            img: "https://i.ibb.co/ZJ3Cghj/charizard-card.png",
            description: "lorem" ,
            category: "Cartas Coleccionables",
        },
        {
            id: 7,
            name: "Alakazam TCG Original",
            price: 15000,
            stock: 4,
            img: "https://i.ibb.co/s2qwYD4/alakazam-card.jpg",
            description: "lorem" ,
            category: "Cartas Coleccionables",
        },
    ];
    const itemsCollection = collection(appFirestore, "catalogo")

    productos.forEach(item => {
        const newDoc = doc(itemsCollection);
        setDoc(newDoc, item)
        .then(res=>{
            console.log("Documento agregado", newDoc.id)
        })
        .catch((error=> console.log("Error obteniendo los datos:", error)))
    })
}

const ordersCollectionRef = collection(appFirestore,'orders');

export async function createBuyOrder(dataOrder){

    const dateTimeStamp = Timestamp.now();
    const orderWithDate = {
        buyer:dataOrder.buyer,
        items: dataOrder.items,
        total: dataOrder.total,
        date: dateTimeStamp
    }
    
    const orderCreated = await addDoc(ordersCollectionRef, orderWithDate);
    
    console.log(orderWithDate)

    return orderCreated
}


export default appFirestore
