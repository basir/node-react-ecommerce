import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct, saveProductReview } from "../actions/productActions";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_SAVE_RESET } from "../constants/productConstants";
import Local from "./../assets/localização.png"; 
import SeloQualidade  from './../assets/selo_eco_verde.png';
import ReactHtmlParser from "react-html-parser";

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSaveSuccess) {
      alert("Review submitted successfully.");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [productSaveSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      <div className="back-to-result">
        <Link to="/"> ← Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <>
          <div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <a href="#reviews">
                    <Rating
                      value={product.rating}
                      text={product.numReviews + " reviews"}
                    />
                  </a>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>                
              </ul>
            </div>
            <div className="details-info">
              <img src={SeloQualidade} class="selo-qualidade"/>
            </div>
            <div className="details-action">
              <ul>
                <li className="price"><h4>R$ {product.price}</h4></li>
                <li>
                  <input type="number" placeholder="Qtd" class="details-action-input"></input>
                </li>                
                <li className="details-location">
                <div> <img className="imgLocalização" src={Local} alt="logo delocalização"/>City: Gwenborough</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="details">
            <div className="details-image">
              <img src="https://farm66.staticflickr.com/65535/49395980976_34e3a23325_o.jpg" alt="Dona Maria"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <span className="bio-title">Esse produto foi produzido pela <span className="bio-name">Dona Maria</span> em Sobral-CE</span>
                </li>
                
                <li>
                  {ReactHtmlParser(product.bio)}
                </li>
              </ul>
            </div>
            <div className="details-action remove-border">
              <ul>
                <li>
                  <img src="data:image/jpeg;base64,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"  className="details-image-location"/>
                </li>                                
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;
