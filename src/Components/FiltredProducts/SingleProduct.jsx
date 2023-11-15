import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";

export default function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);

  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];

  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);

  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="md:flex md:items-center md:justify-center md:py-10 p-3"
            >
              <div className="md:pl-40 md:grow-[2]">
                <img
                  className="md:h-[650px] h-[400px] rounded-lg md:w-[500px] w-full"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="p-4 md:text-left text-center md:grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none pb-3">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 text-[17px] font-inter font-bold tracking-normal leading-none pb-3">
                    15% OFF
                  </p>
                  <p className="text-gray-600 text-[17px] font-inter font-bold tracking-normal leading-none pb-3">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none p-2.5 dark:border-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          id="size"
                          disabled={true}
                          name="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none p-2.5 dark:border-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="pb-4">
                      <label
                        htmlFor="color"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a color
                      </label>
                      <select
                        id="color"
                        name="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none p-2.5 dark:border-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.color.map((color, index) => {
                          return (
                            <option key={index} value={color}>
                              {color}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <Tooltip content="Add to cart" placement="bottom">
                        <Button
                          color="gray"
                          size="lg"
                          variant="outlined"
                          ripple={true}
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: item.id,
                                name: item.name,
                                img: item.img,
                                text: item.text,
                                size: size,
                                color: color,
                                price: item.price,
                                amount: 1,
                                totalPrice: item.price,
                              })
                            )
                          }
                        >
                          Add to cart
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
