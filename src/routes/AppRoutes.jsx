import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthScreenLayout, DashboardLayout } from "../layouts";
import { Contacts, ForgotPassword, Home, SignIn, SignUp, SystemDesign } from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<Home />} />
          <Route path="system-design" element={<SystemDesign />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="/" element={<AuthScreenLayout />} >
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;