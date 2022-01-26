import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Submit from "./components/Submit";
import { ref, set, onValue } from "firebase/database";
import db from "./firebase";
var newUser = null,
  data = null,
  userId = null;

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    const fpPromise = import("https://openfpcdn.io/fingerprintjs/v3").then(
      (FingerprintJS) => FingerprintJS.load()
    );
    fpPromise
      .then((fp) => fp.get())
      .then((result) => {
        userId = result.visitorId;
      })
      .then(() => {
        const refer = ref(db, "story/" + userId);
        onValue(refer, (snapshot) => {
          newUser = snapshot.val() !== null;

          if (newUser) {
            console.log("old user");
            const refer = ref(db, "story");
            onValue(refer, (snapshot) => {
              data = snapshot.val();
              navigate(`/home`);
              //console.log(data);
            });
          } else {
            console.log("new user");
            navigate(`/submit`);
          }
        });
      });
  }, []);
  return (
    <Routes>
      <Route index element={<div>Loading...</div>} />
      <Route path="/home" element={<Home data={data} />} />
      <Route path="/submit" element={<Submit userId={userId} />} />
    </Routes>
  );
}

export default App;
