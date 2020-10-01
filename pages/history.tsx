import MainLayout from "../src/layouts/mainLayout";
import styles from "../styles/history.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { route } from "../src/helpers/route";
import { CardProduct } from "../src/components/cards/cardProduct";
import { setProductDetailsData } from "../redux/actions/productActions";
import { CardImageWithTitle } from "../src/components/cards/cardImageWithTitle";
import { HeaderWithArrow } from "../src/components/headerWithArrow";
import { useEffect, useRef } from "react";
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
    .purchaseHistory;
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
        <HeaderWithArrow title="Purchase History" />
        <div className={styles.content}>
          <div>
            {productData.length === 0 && (
              <CardImageWithTitle
                imageTitle="trolley"
                imageUrl="/assets/icons/trolley.svg"
                title="You haven't purchased anything yet"
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
