import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDfazf824WuSkXWHsMKRl81PPcraAMUTkE",
    authDomain: "projecmemory2025vr.firebaseapp.com",
    projectId: "projecmemory2025vr",
    storageBucket: "projecmemory2025vr.firebasestorage.app",
    messagingSenderId: "793927417003",
    appId: "1:793927417003:web:bf971e20fddbf7b9fb8bee",
    measurementId: "G-9B8DWW7HYV"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Save Game Result
export function saveResult(game, score) {
    const player = JSON.parse(localStorage.getItem("playerInfo")) || {};
    const resultsRef = ref(db, "results/");
    push(resultsRef, {
        game: game,
        score: score,
        player: player,
        time: Date.now()
    });
}

// Save User Info separately
export function saveUserInfo(name, year, branch, age) {
    const usersRef = ref(db, "users/");
    push(usersRef, {
        name: name,
        year: year,
        branch: branch,
        age: age,
        time: Date.now()
    });
}
