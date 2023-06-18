/* eslint-disable */
import { data } from "../../Data/Items";
import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { set_products_data } from "../../Redux/actions/actions";
function Landing() {
  const reduxStateData = useSelector((state) => state.ProductData.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState(
    reduxStateData !== null ? reduxStateData : data
  );

  const AddToCart = (id) => {
    const UpdatedCart = products.map((item) => {
      if (item.id === id) {
        item.alreadAdded = true;
        console.log(item.count)
        item.count = item.count + 1;
      }
      return item;
    });
    setProducts(UpdatedCart);
    dispatch(set_products_data(UpdatedCart));
  };

  const AddItemToCart = (id) => {
    const UpdatedCart = products.map((item) => {
          item.count = item.count + 1;
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

  useEffect(() => {}, [products]);

  return (
    <div class="container mx-auto mt-10 bg-white">
      <div class="flex  m-10">
        <div>
          <div class="grid lg:grid-cols-3 p-8 gap-8">
            {data.map((item, key) => {
              return (
                <div className=" p-2 hover:scale-110 ease-in duration-500 shadow-m rounded-lg bg-cardbackground"   key={item?.id}>
                  <div className=" flex justify-center align-middle lg:flex lg:max-w-lg rounded-lg" >
                    <img src={item.image} className="rounded-lg w-1/1 lg:w-1/2 p-2" />
                  </div>
                  <div className="mt-2" >
                        <h5 className="text-xl font-semibold text-textcolor" >{item.name}</h5>
                        <p className="mt-1 text-3xl font-bold font-heading text-textcolor" >{item.description}</p>
                        <div className="flex justify-between p-4 items-center" >
                        <span className="mt-3 font-bold text-lg  text-textcolor" >{item.price }$</span>
                        {
                           item.alreadAdded ? <div className='flex flex-row justify-evenly items-center min-w-[50%] '>
                            <div class="text-3xl text-textcolor cursor-pointer" onClick={() => DeleteItemFromCart(item?.id)}> <span className=''>-</span> </div>
                                <span class="text-2xl bg-textcolor text-cardbackground rounded-full p-1 h-10 w-10">{item?.count}</span>
                                <div class="text-3xl text-textcolor cursor-pointer" onClick={() => AddItemToCart(item?.id)}> <span className=''>+</span> </div>
                            <div onClick={() => RemoveItemFromCart(item?.id)} className="flex cursor-pointer flex-row gap-3 place-items-center	">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path strokeLinecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                        </div>  : <button onClick={() => AddToCart(item?.id)} className="font-bold border-solid border-textcolor border-2	p-2 bg-textcolor text-cardbackground">Add to cart</button>

                        }
                        </div>
                        
                    </div>  
                </div>
              );
            })}
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>{" "}
    </div>
  );
}

export default Landing;