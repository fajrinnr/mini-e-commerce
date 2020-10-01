import MainLayout from "../src/layouts/mainLayout";
import styles from "../styles/search.module.sass";
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
import { useCurrentURL } from "../src/hooks/route";

interface IProducts {
  price: string;
  imageUrl: string;
  description: string;
  id: string;
  loved: number;
  title: string;
}

export const config = { amp: "hybrid" };

export default function ProductDetailPage() {
  const currentURL = useCurrentURL();
  const router = useRouter();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productReducer).allProducts;
  const [resultSearch, setResultSearch] = useState<IProducts[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <MainLayout currentURL={currentURL}>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackButton
            customStyles={{
              width: "30px",
              height: "30px",
              marginRight: "15px",
            }}
            onClick={() => router.back()}
          />
          <div className={`inputBox ${styles.searchBox}`}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                width: "20px",
                height: "20px",
                marginRight: "7px",
                marginLeft: "7px",
              }}
            />
            <input
              type="text"
              autoFocus
              placeholder="Enter product name"
              onChange={(e) => {
                setSearchValue(e.target.value);
                let result = productData.filter((product: IProducts) =>
                  product.title
                    .toLowerCase()
                    .includes(
                      e.target.value === ""
                        ? null
                        : e.target.value.toLowerCase()
                    )
                );
                setResultSearch(result);
              }}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div>
            {searchValue === "" && (
              <CardImageWithTitle
                imageTitle="search icon"
                imageUrl="/assets/icons/search.svg"
                title="What are you looking for?"
              />
            )}
            {resultSearch.length === 0 && searchValue !== "" && (
              <CardImageWithTitle
                imageTitle="data not found"
                imageUrl="/assets/icons/data-not-found.svg"
                title="Whoops, we couldn't find what you were looking for"
              />
            )}
            {resultSearch.map((result) => {
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
