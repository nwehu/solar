import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ManageServices from "./pages/ManageServices";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AdminContacts from "./pages/AdminContacts";
import ServicesPage from "./pages/ServicesPage";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/manage-services" element={<ManageServices />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/news" element={<News />} />
      
<Route path="/admin/dashboard" element={<Dashboard />} />

<Route path="/admin/contacts" element={<AdminContacts />} />

    </Routes>
  );
}

export default App;