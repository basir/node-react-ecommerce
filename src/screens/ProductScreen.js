import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct, saveProductReview } from "../actions/productActions";
import Rating from "../components/Rating";
import { PRODUCT_REVIEW_SAVE_RESET } from "../constants/productConstants";
import Local from "./../assets/localização.png"; 

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
          <div className="history">
            <div className="history-wrapper">
            <div className="history-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="history-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <div className="history-seller-bio">{product.description}</div>
                </li>

              </ul>
            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default ProductScreen;
