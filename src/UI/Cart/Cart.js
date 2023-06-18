/* eslint-disable */
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { set_products_data } from "../../Redux/actions/actions";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const reduxStateData = useSelector((state) => state.ProductData.products);
  const [products, setProducts] = useState(
    reduxStateData !== null ? reduxStateData : []
  );
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartArray, setCartArray] = useState(0);

  const AddItemToCart = (id) => {
    const UpdatedCart = products.map((item) => {
      if (item.id === id) {
        item.count = item.count + 1;
      }
      return item;
    });
    setProducts(UpdatedCart);
    dispatch(set_products_data(UpdatedCart));
  };

  const DeleteItemFromCart = (id) => {
    const UpdatedCart = products.map((item) => {
      if (item.id === id) {
        if (item.count === 0) {
          item.alreadAdded = false;
          toast.error("Add items first", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          item.count = item.count - 1;
          if (item.count === 0) {
            item.alreadAdded = false;
          }
        }
      }
      return item;
    });
    setProducts(UpdatedCart);
    dispatch(set_products_data(UpdatedCart));
  };

  const RemoveItemFromCart = (id) => {
    const UpdatedCart = products.map((item) => {
      if (item.id === id) {
        item.count = 0;
        item.alreadAdded = false;
      }
      return item;
    });
    setProducts(UpdatedCart);
    dispatch(set_products_data(UpdatedCart));
  };
  useEffect(() => {
    let pricecount = 0;
    let itemcount = 0;
    let cartProducts = [];
    if (reduxStateData !== null) {
      reduxStateData.map((item) => {
        if (item.alreadAdded) {
          cartProducts.push(item);
          itemcount = itemcount + item.count;
          pricecount =
            pricecount + parseFloat(item.price) * parseFloat(item.count);
        }
      });
    }
    setCartArray(cartProducts);
    setTotal(pricecount);
    setCartCount(itemcount);
  }, [reduxStateData]);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex my-10">
        <div className="w-full px-10 py-10 bg-lightbrown">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-bold text-textcolor text-3xl">Cart</h1>
            <h2 className="font-bold text-textcolor text-3xl">{cartCount} Items</h2>
          </div>
          <div className="flex items-center font-bold justify-between text-textcolor text-lg uppercase p-10">
            <p>
              Product
            </p>
            <p>
              Quantity
            </p>
            <p>
              Total
            </p>
          </div>
          {}
          {reduxStateData?.map((item) => {
            return (
              <>
                {" "}
                {item.alreadAdded && (
                  <>
                    <div className="flex shadow-md flex-shrink-0 items-center justify-between px-10 m-2 bg-cardbackground ">
                      <div className="flex items-center text-textcolor">
                        <img src={item.image} className="w-10 h-10 p-2" />
                        <p className="text-textcolor font-heading font-bold text-3lg" >{item.name}</p>
                      </div>

                      <div className="flex items-center justify-between p-7 min-w-[25%] ">
                        <div
                          class="text-3xl text-textcolor cursor-pointer"
                          onClick={() => DeleteItemFromCart(item?.id)}
                        >
                          {" "}
                          <span className="">-</span>{" "}
                        </div>
                        <span class="text-2xl bg-textcolor text-cardbackground rounded-full p-1 h-10 w-10">
                          {item?.count}
                        </span>
                        <div
                          class="text-3xl text-textcolor cursor-pointer"
                          onClick={() => AddItemToCart(item?.id)}
                        >
                          {" "}
                          <span className="">+</span>{" "}
                        </div>
                        <div
                          onClick={() => RemoveItemFromCart(item?.id)}
                          className="flex cursor-pointer flex-row gap-3 place-items-center	"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLineJoin="round"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </div>
                      </div>

                      <div>
                        <span class="text-center w-1/5 font-semibold text-sm">
                          ${item?.price} * {item?.count} = $
                          {item?.price * item?.count}
                        </span>
                      </div>

                    </div>
                  </>
                )}
              </>
              
            );
          })}
          {/* <Link to="/" class="flex cursor-pointer font-semibold text-indigo-600 text-sm mt-10">
                        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </Link> */}

<div className="flex items-center font-bold justify-between text-textcolor text-lg uppercase p-10">
                    <button onClick={() => { console.log(cartArray) }} className="bg-textcolor text-cardbackground p-3 rounded-md" >Checkout</button>
                    <div class="flex font-bold justify-between py-6 text-3xl uppercase">
                        {total ? (<span>${total + 10}</span>
                        ) : (<span>${0}</span>
                        )}
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
