import { Fragment } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { removeFromCart } from "../../features/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ openModal, setOpen }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 1 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col md:h-[450px] h-[400px] overflow-auto"
            >
              {cart.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div className="flex flex-row items-center py-3">
                      <div className="mr-4 h-[120px] w-[120px]">
                        <img
                          className="h-[100%] w-[100%] rounded-md"
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                      <div className="">
                        <h4 className="text-black md:text-base text-sm font-inter font-bold tracking-normal leading-none">
                          {item.name}
                        </h4>
                        <div className="max-w-md">
                          <p className="text-gray md:text-sm text-[10px] font-inter tracking-normal leading-none pt-1">
                            {item.text}
                          </p>
                          <p className="text-gray md:text-sm text-[10px] font-inter tracking-normal leading-none pt-1">
                            <span className="mr-2 md:mr-4 text-black font-bold md:text-[13px] font-inter">
                              Size: {item.size}
                            </span>
                            <span className="text-black font-bold md:text-[13px] font-inter tracking-normal leading-none p-2">
                              Color:
                              <span
                                style={{
                                  backgroundColor: item.color,
                                  display: "inline-block",
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  marginLeft: "5px",
                                }}
                              ></span>
                            </span>
                            <span className="mr-2 md:mr-4 text-black font-bold md:text-[13px] font-inter">
                              Amount: {item.amount}
                            </span>
                            <span className="mr-2 md:mr-4 text-black font-bold md:text-[13px] font-inter">
                              Price: {item.totalPrice}$
                            </span>
                          </p>
                          <div className="pt-4">
                            <Tooltip
                              content="Remove from the cart"
                              placement="bottom"
                            >
                              <Button
                                style={{
                                  width: "fit-content",
                                  height: "25px",
                                  padding: "0 25px",
                                  fontSize: "11px",
                                }}
                                color="red"
                                ripple={true}
                                variant="filled"
                                onClick={() => dispatch(removeFromCart(item))}
                              >
                                Remove
                              </Button>
                            </Tooltip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="font-inter text-md text-orange-900 font-bold">
              Total Price Of All Products: {totalPrice}$
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 1 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <div className="text-center pb-4">
                <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your bag is empty
                </h1>
                <p className="text-black text-base font-inter tracking-normal leading-none">
                  Add some products
                </p>
              </div>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
}
