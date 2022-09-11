import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ConversationSidebar } from "./components/conversations/ConversationSidebar";
import { ConversationChannelPage } from "./pages/ConversationChannelPage";
import { ConversationsPage } from "./pages/ConversationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="conversations" element={<ConversationsPage />}>
          <Route path=":id" element={<ConversationChannelPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
