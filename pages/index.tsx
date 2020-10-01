import MainLayout from "../src/layouts/mainLayout";
import styles from "../styles/home.module.sass";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import { CardCategory } from "../src/components/cards/cardCategory";
import { CardProductLarge } from "../src/components/cards/cardProduct";
import {
  setProductDetailsData,
  setProductData,
  setWishProduct,
  setUnwishProduct,
} from "../redux/actions/productActions";
import LoveButton from "../src/components/buttons/loveButton";
import { route } from "../src/helpers/route";
import { useCurrentURL } from "../src/hooks/route";

interface IPageProps {
  dataResponse: {
    category: {
      id: number;
      imageUrl: string;
      name: string;
    }[];
    productPromo: {
      description: string;
      id: string;
      imageUrl: string;
      loved: number;
      price: string;
      title: string;
    }[];
  };
}

export const config = { amp: "hybrid" };

export default function LoginPage(props: IPageProps) {
  const currentURL = useCurrentURL();
  const dispatch = useDispatch();
  const wishlistProducts = useSelector((state) => state.productReducer)
    .wishlistProducts;
  useEffect(() => {
    dispatch(setProductData(props.dataResponse.productPromo));
    if (!localStorage._TU) {
      route("/login");
    }
  }, []);
  let resultsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: resultsRef.current.offsetTop,
    });
  }, [resultsRef]);

  return (
    <MainLayout currentURL={currentURL}>
      <div className={styles.container} ref={resultsRef}>
        <div className={styles.header}>
          <LoveButton
            loved
            customStyles={{
              width: "40px",
              height: "40px",
              marginRight: "7px",
              color: "red",
            }}
            onClick={() => route("/wishlist")}
          />
          <div
            className={`inputBox ${styles.searchBox}`}
            onClick={() => route("/search")}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                width: "20px",
                height: "20px",
                marginRight: "7px",
                marginLeft: "7px",
              }}
            />
            <input type="text" placeholder="Enter product name" />
          </div>
        </div>
        <div className={styles.content}>
          <h1>Mini E-Commerce</h1>
          <h2>Categories</h2>
          <div className={styles.categoryBox}>
            {props.dataResponse.category.map((category) => {
              return (
                <CardCategory
                  key={category.id}
                  imageUrl={category.imageUrl}
                  title={category.name}
                />
              );
            })}
          </div>
          <h2>Products</h2>
          <div className={styles.productsBox}>
            {props.dataResponse.productPromo.map((product) => {
              return (
                <CardProductLarge
                  key={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  loved={wishlistProducts.find(
                    (wishProduct) => wishProduct.id === product.id
                  )}
                  onClickLove={() =>
                    wishlistProducts.find(
                      (wishProduct) => wishProduct.id === product.id
                    )
                      ? dispatch(setUnwishProduct(product))
                      : dispatch(setWishProduct(product))
                  }
                  onClickProduct={() => {
                    dispatch(
                      setProductDetailsData({
                        title: product.title,
                        imageUrl: product.imageUrl,
                        price: product.price,
                        description: product.description,
                        id: product.id,
                      })
                    );
                    route("/product-detail");
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.footer}>
          <Link href="/">
            <p>Home</p>
          </Link>
          <p>Feed</p>
          <Link href="/history">
            <p>Cart</p>
          </Link>
          <Link href="/wishlist">
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async (
  ctx
) => {
  // Fetch data from external API

  const res = await fetch(
    `https://private-4639ce-ecommerce56.apiary-mock.com/home`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { dataResponse: data[0].data } };
};
