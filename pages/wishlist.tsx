import MainLayout from "../src/layouts/mainLayout";
import styles from "../styles/history.module.sass";
import { Button } from "../src/components/buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import LoveButton from "../src/components/buttons/loveButton";
import BackButton from "../src/components/buttons/backButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { route } from "../src/helpers/route";
import { useState } from "react";
import { CardProduct } from "../src/components/cards/cardProduct";
import { setProductDetailsData } from "../redux/actions/productActions";
import { CardImageWithTitle } from "../src/components/cards/cardImageWithTitle";
import { HeaderWithArrow } from "../src/components/headerWithArrow";
import { useCurrentURL } from "../src/hooks/route";

interface IProducts {
  price: string;
  imageUrl: string;
  description: string;
  id: string;
  loved: number;
  title: string;
}

export default function ProductDetailPage() {
  const currentURL = useCurrentURL();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productReducer)
    .wishlistProducts;
  return (
    <MainLayout currentURL={currentURL}>
      <div className={styles.container}>
        <HeaderWithArrow title="Wishlist Products" />
        <div className={styles.content}>
          <div>
            {productData.length === 0 && (
              <CardImageWithTitle
                imageTitle="empty data"
                imageUrl="/assets/icons/empty-folder.svg"
                title="You haven't added product to wishlist yet"
              />
            )}
            {productData.map((result: IProducts) => {
              return (
                <CardProduct
                  title={result.title}
                  price={result.price}
                  imageUrl={result.imageUrl}
                  key={result.id}
                  onClickProduct={() => {
                    dispatch(
                      setProductDetailsData({
                        title: result.title,
                        imageUrl: result.imageUrl,
                        price: result.price,
                        description: result.description,
                        id: result.id,
                      })
                    );
                    route("/product-detail");
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
