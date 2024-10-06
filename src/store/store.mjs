import { configureStore } from "@reduxjs/toolkit";
import adminProductsSlice from "./admin/productSlice";
import authReducer from "./authSlice";
import commonFeatureSlice from "./commonSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    commonFeature: commonFeatureSlice,
  },
});

export default store;
