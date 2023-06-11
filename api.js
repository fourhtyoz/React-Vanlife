import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCSWDeq_pRf9gxpOBUlQFqGIAmtEQhg6t0",
  authDomain: "vanlife-a3db2.firebaseapp.com",
  projectId: "vanlife-a3db2",
  storageBucket: "vanlife-a3db2.appspot.com",
  messagingSenderId: "443889584841",
  appId: "1:443889584841:web:692ae9e2ccc1a8d3b21b18"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')
const usersCollectionRef = collection(db, 'users')

export async function getVans(id) {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArray = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    return dataArray
}

export async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const querySnapshot = await getDoc(docRef)
    const data = querySnapshot.data()
    return data
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where('hostId', '==', 123)) 
    const querySnapshot = await getDocs(q)
    const dataArray = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    return dataArray
}

export async function getHostVan(id) {
    const docRef = doc(db, 'vans', id)
    const querySnapshot = await getDoc(docRef)
    const data = querySnapshot.data()
    console.log(data)
    return data
}

export async function loginUser(creds) {
    const res = await fetch(`/https://${firebaseConfig.projectId}.firebaseio.com/users.json`,
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    console.log(res)

    if (!res.ok) {
        localStorage.setItem('loggedin', false)
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    
    localStorage.setItem('loggedin', true)
    return data
}