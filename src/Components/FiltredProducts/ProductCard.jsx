import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

export default function ProductCard({ id, name, text, img, price, colors }) {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filtredProducts/${type}/` + id}>
      <Card onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="product-img" className="w-full h-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                />
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}
