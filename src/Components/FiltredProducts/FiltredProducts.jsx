import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import ProductCard from "./ProductCard";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filteredBySize,
} from "../../features/slices/productsSlice";

export default function FiltredProducts() {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className="md:px-20 px-3">
      <div className="pt-10">
        <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none mb-4">
          {type}
        </h1>
        <div className="py-2 relative">
          <div className="grid md:grid-cols-10 grid-cols-3 md:gap-4 gap-1">
            {genderButtons.map((item, index) => {
              return (
                <div key={index} className="md:mb-0 mb-4">
                  <Button
                    style={{ height: "35px", width: "112px" }}
                    color="gray"
                    size="sm"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                    onClick={() => dispatch(filterGender(item))}
                  >
                    {item}
                  </Button>
                </div>
              );
            })}
            <Button
              style={{ height: "35px", width: "112px" }}
              color="gray"
              size="sm"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out"
              onClick={() => dispatch(sortByPrice())}
            >
              High Price
            </Button>
            <Menu>
              <MenuHandler>
                <Button
                  style={{ height: "35px", width: "112px" }}
                  color="gray"
                  size="sm"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                >
                  Color
                </Button>
              </MenuHandler>
              <MenuList>
                {colorButtons.map((item, index) => {
                  return (
                    <MenuItem
                      key={index}
                      style={{ color: item }}
                      onClick={() => dispatch(filterByColor(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button
                  disabled={(type === "Bags", type === "Shoes")}
                  style={{ height: "35px", width: "112px" }}
                  color="gray"
                  size="sm"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                >
                  Size
                </Button>
              </MenuHandler>
              <MenuList>
                {sizeButtons.map((item, index) => {
                  return (
                    <MenuItem
                      key={index}
                      onClick={() => dispatch(filteredBySize(item))}
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
          </div>
          <div className="absolute md:right-5 right-0 md:bottom-0 bottom-2">
            <Button
              color="gray"
              size="sm"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out"
              onClick={() => dispatch(filterProducts(type))}
            >
              Clear Filter
            </Button>
          </div>
        </div>
      </div>
      {error ? (
        <Error />
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:max-w-8xl mx-auto  justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    colors={product.color}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
