import { Outlet } from "react-router-dom";
import ShoppingHeader from "./shoppingHeader";
import CheckAuth from "../common/CheckAuth";

function ShoppingLayout() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayout;
