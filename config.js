// ==========================================
// CONFIGURACIÓN COMPARTIDA - NubaraPlay
// ==========================================

// 1. Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAEw7jfxJxbF3r5YvftUD6yJwpyEMmg9tQ",
  authDomain: "nubaraplay.firebaseapp.com",
  projectId: "nubaraplay",
  storageBucket: "nubaraplay.firebasestorage.app",
  messagingSenderId: "873822057409",
  appId: "1:873822057409:web:f854a974f457eedd0c7540"
};

// Inicializar Firebase (solo si no está inicializado)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// 2. TMDB Config
const TMDB_API_KEY = "a85b85e615389ded96ae9e357c2f7ac1";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

// 3. Funciones de Autenticación de Admin
const ADMIN_PASSWORD = "1971";

function verificarAdmin() {
  if (localStorage.getItem('nubaraPlayAdmin') !== 'true') {
    window.location.href = 'index.html'; // Redirige al login si no está autenticado
  }
}

function iniciarSesionAdmin(password) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem('nubaraPlayAdmin', 'true');
    return true;
  }
  return false;
}

function cerrarSesionAdmin() {
  localStorage.removeItem('nubaraPlayAdmin');
  window.location.href = 'index.html';
}

// 4. Utilidad para fechas de Firestore
function convertirFecha(fecha) {
  if (!fecha) return new Date();
  if (fecha.toDate) return fecha.toDate();
  return new Date(fecha);
}
