import app from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

import firebaseConfig from "./config"

class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
        this.app = app;
        this.auth = app.auth();
        this.db = app.firestore();
    }
}

const firebase = new Firebase();
export default firebase;