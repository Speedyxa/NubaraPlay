// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAEw7jfxJxbF3r5YvftUD6yJwpyEMmg9tQ",
  authDomain: "nubaraplay.firebaseapp.com",
  projectId: "nubaraplay",
  storageBucket: "nubaraplay.firebasestorage.app",
  messagingSenderId: "873822057409",
  appId: "1:873822057409:web:f854a974f457eedd0c7540"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// TMDB API
const TMDB_API_KEY = "a85b85e615389ded96ae9e357c2f7ac1";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

// Verificar autenticación de admin
function verificarAdmin() {
  const adminAuth = localStorage.getItem('nubaraPlayAdmin');
  if (adminAuth !== 'true') {
    window.location.href = 'index.html';
  }
}

// Cerrar sesión
function cerrarSesionAdmin() {
  localStorage.removeItem('nubaraPlayAdmin');
  window.location.href = 'index.html';
}

// Iniciar sesión
function iniciarSesionAdmin(password) {
  if (password === "1971") {
    localStorage.setItem('nubaraPlayAdmin', 'true');
    return true;
  }
  return false;
}
