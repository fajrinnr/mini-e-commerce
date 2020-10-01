export const setProductDetailsData = (productDetailsData) => ({
  type: "SET_PRODUCT_DETAILS_DATA",
  payload: productDetailsData,
});

export const setProductData = (productData) => ({
  type: "SET_PRODUCT_DATA",
  payload: productData,
});

export const setPurchaseHistory = (product) => ({
  type: "SET_PURCHASE_HISTORY",
  payload: product,
});

export const setWishProduct = (product) => ({
  type: "SET_WISH_PRODUCT",
  payload: product,
});

export const setUnwishProduct = (product) => ({
  type: "SET_UNWISH_PRODUCT",
  payload: product,
});
