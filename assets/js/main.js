
import {
    getAuth,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup
} from 
"https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { initializeApp } from "firebase/app";

const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById("google-login");
if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            alert("Login com Google: " + user.email);
            closeModal();
        }
        catch (error) {
            document.getElementById("login-error").textContent = error.message;
        }
    });
}
