import "./App.css";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

import { app } from "./firebase";
const auth = getAuth(app);

function App() {
  const googleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        console.log(user, ">>>>>>>user");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(errorCode, ">>>> error code in catch");
        console.log(errorMessage, ">>>> errormessage in catch");
        console.log(email, ">>>> email in catch");
        console.log(credential, ">>>> credential in catch");
      });
  };

  return (
    <div className="App">
      <h1>This Is App Component</h1>

      <button onClick={googleSignin}>Google SignIn</button>
    </div>
  );
}

export default App;
