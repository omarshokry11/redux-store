import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from "../../features/slices/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NavigationButton() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();

  return (
    <div className="container text-center mx-auto">
      <div className="grid md:grid-cols-8 grid-cols-3 md:py-8 pt-8 pb-5 mx-auto justify-items-center">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4 ml-4 md:mb-0 mb-2">
              <Link to={"/filtredProducts/" + button}>
                <Button
                  style={{ width: "110px" }}
                  size="sm"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-gray-400 duration-300 ease-in-out border-gray-400 w-full"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 rounded-md mr-4 ml-4">
        <h3 className="text-red-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP 50%
        </h3>
      </div>
      <div className="py-4 mr-4 ml-4">
        <img
          className="md:h-[500px] md:w-[100%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        />
      </div>
    </div>
  );
}
