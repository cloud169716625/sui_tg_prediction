import { useEffect, useState } from "react";
import Prediction from "./components/Prediction";

function App() {
  const [user, setUser] = useState<WebAppUser>();

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // Fetch user info from Telegram context if available
    const initDataUnsafe = tg.initDataUnsafe;
    if (initDataUnsafe.user) {
      setUser(initDataUnsafe.user);
    }
  }, []);

  return (
    <div className="App">
      <h1>Prediction App</h1>
      {user && <h2>Welcome, {user.first_name}!</h2>}
      <Prediction />
      <button onClick={() => window.Telegram.WebApp.close()}>Close App</button>
    </div>
  );
}

export default App;
