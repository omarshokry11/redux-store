import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";

export default function ProductSectionItem({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div>
      <Card className="w-96 mb-4 relative">
        <Typography
          variant="h4"
          className="mb-2 absolute -rotate-45 top-12 right-8 z-10 text-red-700 font-bold text-lg"
        >
          SALE%
        </Typography>
        <CardHeader floated={false} className="h-80">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {text}
          </Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography color="red" className="font-bold text-sm" textGradient>
              Default Size:
              <span className="text-gray-500 font-medium text-sm ml-1">
                {defaultSize}
              </span>
            </Typography>
            <Typography color="gray" className="font-bold text-sm" textGradient>
              Default Color:{" "}
              <span
                className="ml-1"
                style={{
                  backgroundColor: defaultColor,
                  display: "inline-block",
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Add to cart" placement="bottom">
            <Button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    img: img,
                    text: text,
                    amount: 1,
                    price: price,
                    totalPrice: totalPrice,
                    name: name,
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
              }
              size="md"
              color="gray"
              variant="outlined"
              ripple={true}
            >
              Add To Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}
