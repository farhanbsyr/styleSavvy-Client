import { configureStore } from "@reduxjs/toolkit";
import adminProductsSlice from "./admin/productSlice";

import adminOrderSlice from "./admin/orderSlice";
import authReducer from "./authSlice";
import commonFeatureSlice from "./commonSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,
    commonFeature: commonFeatureSlice,
  },
});

export default store;
