import MainLayout from "../src/layouts/mainLayout";
import styles from "../styles/productDetails.module.sass";
import { Button } from "../src/components/buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import LoveButton from "../src/components/buttons/loveButton";
import {
  faFacebookSquare,
  faWhatsappSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  setPurchaseHistory,
  setUnwishProduct,
  setWishProduct,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { HeaderWithArrow } from "../src/components/headerWithArrow";
import {
  WhatsappShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Modal } from "../src/components/modal";
import { setStatuModal } from "../redux/actions/modalActions";
import { useEffect, useRef, useState } from "react";
import { useCurrentURL } from "../src/hooks/route";

export default function ProductDetailPage() {
  const currentURL = useCurrentURL();
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.productReducer)
    .productDetails;
  const wishlistProducts = useSelector((state) => state.productReducer)
    .wishlistProducts;
  const statusModal = useSelector((state) => state.modalReducer);
  let resultsRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: resultsRef.current.offsetTop,
    });
  }, [resultsRef]);
  const titleShare = `Sell ${productData.title} | Mini E-Commerce`;
  return (
    <MainLayout currentURL={currentURL}>
      <div className={styles.container} ref={resultsRef}>
        {statusModal && (
          <Modal
            modalTitle="Share"
            onClickXButton={() => dispatch(setStatuModal(false))}
          >
            <WhatsappShareButton
              url={currentURL}
              title={titleShare}
              separator=""
            >
              <FontAwesomeIcon
                icon={faWhatsappSquare}
                style={{ width: "50px", height: "50px" }}
              />
            </WhatsappShareButton>
            <FacebookShareButton url={currentURL} title={titleShare}>
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ width: "50px", height: "50px" }}
              />
            </FacebookShareButton>
            <TwitterShareButton url={currentURL} title={titleShare}>
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ width: "50px", height: "50px" }}
              />
            </TwitterShareButton>
            <LinkedinShareButton url={currentURL} title={titleShare}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ width: "50px", height: "50px" }}
              />
            </LinkedinShareButton>
          </Modal>
        )}
        <HeaderWithArrow title={productData.title} />
        <div className={styles.content}>
          <div>
            <img src={productData.imageUrl} alt={productData.title} />
          </div>
          <div className={styles.titleProduct}>
            <h3>{productData.title}</h3>
            <LoveButton
              customStyles={{
                width: "25px",
                height: "25px",
                marginRight: "15px",
                color: wishlistProducts.find(
                  (wishProduct) => wishProduct.id === productData.id
                )
                  ? "red"
                  : "",
              }}
              loved={wishlistProducts.find(
                (wishProduct) => wishProduct.id === productData.id
              )}
              onClick={() =>
                wishlistProducts.find(
                  (wishProduct) => wishProduct.id === productData.id
                )
                  ? dispatch(setUnwishProduct(productData))
                  : dispatch(setWishProduct(productData))
              }
            />
          </div>
          <p>{productData.description}</p>
        </div>
        <div className={styles.footer}>
          <FontAwesomeIcon
            icon={faShareAlt}
            style={{
              width: "30px",
              height: "30px",
              marginRight: "15px",
              color: "#333333",
            }}
            onClick={(e) => {
              e.preventDefault();
              dispatch(setStatuModal(true));
            }}
          />
          <div className={styles.buyOption}>
            <span>{productData.price}</span>
            <Button
              title="Buy Now"
              onClick={() => dispatch(setPurchaseHistory(productData))}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
