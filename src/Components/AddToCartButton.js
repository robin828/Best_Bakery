import React from "react";

const AddToCartButton = () => {
  return (
    <button
      className="w-4/5 bg-accent-100 text-textColor font-body font-bold p-2 rounded-md absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 border-textColor border hover:bg-textColor hover:text-accent-100 transition-colors !duration-500"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
