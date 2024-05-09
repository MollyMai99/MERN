import debug from "debug";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { Route, Routes } from "react-router-dom";

const log = debug("mern:pages:App:App");

function App() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState("a");
  log("user %o", user);

  if (!user) {
    return (
      <main className="App">
        <AuthPage />
      </main>
    );
  }

  return (
    <>
      <main className="App">
        <Routes>
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/orders/:id" element={<OrderHistoryPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
