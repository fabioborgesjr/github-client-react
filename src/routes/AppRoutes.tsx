import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home/index";
import { UserSearchList } from "@/pages/users/search";
import { ReposList } from "@/pages/repos/list";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserSearchList />} />
      <Route path="/repos" element={<ReposList />} />
    </Routes>
  </Router>
);

export default AppRoutes;
