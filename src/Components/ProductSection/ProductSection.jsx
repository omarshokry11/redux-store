import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";

export default function ProductSection() {
  return (
    <div className="">
      <div className="bg-black p-2 md:w-[68%] w-[87%] mt-4 mb-4 mx-auto rounded-md">
        <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SUMMER T-Shirt SALE 30%
        </h2>
      </div>
      <div className="md:grid md:grid-cols-3 justify-items-center md:py-8 md:p-0 md:gap-4 mx-auto md:max-w-7xl px-2">
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <ProductSectionItem
                id={product.id}
                img={product.img}
                name={product.name}
                text={product.text}
                price={product.price}
                totlaPrice={product.totlaPrice}
                color={product.color}
                size={product.size}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
