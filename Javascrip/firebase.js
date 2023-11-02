
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDPL-stOdAU3LBkSR5gI2-sKdzVMO0cjGo",
    authDomain: "casadeafeitados-2135b.firebaseapp.com",
    projectId: "casadeafeitados-2135b",
    storageBucket: "casadeafeitados-2135b.appspot.com",
    messagingSenderId: "794942479230",
    appId: "1:794942479230:web:53d8bfc4daa711807bf12f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();


  export const registrarServicio = (servicio,moneda,descripcion) => {
    try {
  
      const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false, // Usar formato de 24 horas
      };
      let fecha = new Date().toLocaleString("es-ES", options);
  
      
      
      addDoc(collection(db,"caja"),{
        servicio,
        moneda,
        descripcion,
        fecha
      });
  
      console.log("Servicio Registrado");
    }
    catch {
      console.error('Error al registrar servicio', error)
    }
  }