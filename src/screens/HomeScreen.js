import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import Rating from "../components/Rating";
import Local from "./../assets/localização.png";

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const category = props.match.params.id ? props.match.params.id : "";
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <>
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <Link to={"/product/" + product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt="product"
                  />
                </Link>
                <div className="product-price">${product.price}</div>
                <div className="product-name">
                  <Link to={"/product/" + product.id}>{product.name}</Link>
                </div>

                <div className="product-rating">
                  <Rating
                    value={product.rating}
                    text={product.numReviews + " reviews"}
                    />
                </div>
                <div> <img className="imgLocalização" src={Local} alt="logo delocalização"/>City: {product.address.city}</div>
              </div>
            </li>
          ))}
        </ul>
    </>
  );
}
export default HomeScreen;
