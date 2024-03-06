import { createAppSlice } from "@/lib/createAppSlice";
import { fetchRetailSales, fetchProductData } from '@/lib/reducers/retailSales/retailSalesAPI'

const initialState = {
  retailData: [],
  productData: {}
};

//create reducer for retail data
export const retailSalesSplice = createAppSlice({
  name: "retailSales",
  initialState,
  reducers: (create) => ({ 
    getRetailData: create.asyncThunk(
      async () => {
        const response = await fetchRetailSales();
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.retailData = action.payload
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
    getProductData: create.asyncThunk(
      async () => {
        const response = await fetchProductData();
        return response;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.productData = action.payload
        },
        rejected: (state) => {
          state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectRetailData: (init) => init.retailData,
    selectProductData: (init) => init.productData,
  },
});

//export actions
export const { sortDataBy, getRetailData, getProductData } = retailSalesSplice.actions;

//export selectors
export const { selectRetailData, selectProductData } = retailSalesSplice.selectors;
