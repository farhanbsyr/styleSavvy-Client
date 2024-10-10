import { configureStore } from "@reduxjs/toolkit";
import adminProductsSlice from "./admin/productSlice";
import adminOrderSlice from "./admin/orderSlice";
import authReducer from "./authSlice";
import commonFeatureSlice from "./commonSlice";
import shopCartSlice from "./shop/cartSlice";
import shopReviewSlice from "./reviewSlice";
import shopProductsSlice from "./shop/productSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProducts: adminProductsSlice,
    adminOrder: adminOrderSlice,
    commonFeature: commonFeatureSlice,

    // shop
    shopProducts: shopProductsSlice,
    shopCart: shopCartSlice,
    shopReview: shopReviewSlice,
  },
});

export default store;
