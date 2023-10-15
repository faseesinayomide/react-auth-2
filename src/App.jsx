import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Navbar from "./component/Layouts/Navbar";
import Home from "./pages/Home";
import ConnectWallet from "./pages/connect-wallet";
import Confirmation from "./pages/confirmation";
import SubmitWallet from "./pages/submit";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/submit" element={<SubmitWallet />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
