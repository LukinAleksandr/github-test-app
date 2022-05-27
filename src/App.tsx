import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { UsersContainer, UserContainer } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/users" />} />
        <Route path="users" element={<UsersContainer />} />
        <Route path="users/:id" element={<UserContainer />} />

        <Route path="*" element={<Navigate replace to="/users" />} />
      </Route>
    </Routes>
  );
}

export default App;
