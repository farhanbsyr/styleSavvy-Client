import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/adminView/Layout";
import AdminDashboard from "./pages/adminView/Dashboard";
import AdminProduct from "./pages/adminView/Product";
import AdminOrders from "./pages/adminView/Orders";
import ShoppingLayout from "./components/shoppingView/layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        <Route path="/" element={<ShoppingLayout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
