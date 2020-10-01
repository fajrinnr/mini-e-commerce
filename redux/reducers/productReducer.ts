import { toastAlert } from "../../src/helpers/utils";

const intialState = {
  productDetails: {
    title: "",
    imageUrl: "",
    description: "",
    price: "",
    id: "",
  },
  allProducts: [],
  wishlistProducts: [],
  purchaseHistory: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT_DETAILS_DATA":
      return {
        ...state,
        productDetails: {
          title: action.payload.title,
          imageUrl: action.payload.imageUrl,
          description: action.payload.description,
          price: action.payload.price,
          id: action.payload.id,
        },
      };
    case "SET_PRODUCT_DATA":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "SET_PURCHASE_HISTORY":
      toastAlert(`Successfully purchase ${action.payload.title}`);
      return {
        ...state,
        purchaseHistory: [...state.purchaseHistory, action.payload],
      };
    case "SET_WISH_PRODUCT":
      toastAlert(`Successfully added ${action.payload.title} to wishlist`);
      return {
        ...state,
        wishlistProducts: [...state.wishlistProducts, action.payload],
      };
    case "SET_UNWISH_PRODUCT":
      toastAlert(`Successfully remove ${action.payload.title} to wishlist`);
      return {
        ...state,
        wishlistProducts: state.wishlistProducts.filter((product) => {
          return product.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default productReducer;
