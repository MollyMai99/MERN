import debug from "debug";
import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";

import { Route, Routes } from "react-router-dom";
import { getUser } from "../../utilities/users-service";

const log = debug("mern:pages:App:App");

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(getUser());
  log("user %o", user);

  if (!user) {
    return (
      <main className="App">
        <AuthPage setUser={setUser} />
      </main>
    );
  }

  return (
    <>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />

          <Route path="/orders2" element={<OrderHistoryPage />}>
            <Route path="new" element={<NewOrderPage />} />
            <Route path="simon" element={<p>Simon</p>} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
