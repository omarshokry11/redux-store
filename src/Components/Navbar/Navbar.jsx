import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/slices/authSlice";
import { Avatar, Typography } from "@material-tailwind/react";

export default function Navbar() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = useState(false);
  const [signOut, setsignOut] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-inter text-2xl font-bold tracking-normal leading-none text-center">
          Welcome ALL
        </h3>
      </div>
      <div className="container mx-auto">
        <div
          className="flex flex-row items-center justify-between h-20"
          style={{ overflow: "hidden" }}
        >
          <Link to="/">
            <img className="h-[100px] w-[100px]" src={logo} alt="store" />
          </Link>
          <div className="flex flex-row items-center">
            <button
              onClick={() => dispatch(logout())}
              className="font-inter md:text-base md:text-[14px] font-bold text-[12px] tracking-normal leading-none md:text-right md:mr-4 mr-2"
            >
              Logout
            </button>
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center cursor-pointer mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="md:block hidden font-inter text-base md:text-[14px] font-bold text-[12px] tracking-normal leading-none text-center">
                  Whish List
                </p>
              </div>
              <div
                className="flex flex-row items-center cursor-pointer md:mr-0 mr-4 relative"
                onClick={handleOpen}
              >
                <span className="rounded-full  w-[20px] h-[20px] text-center font-inter text-sm mr-1 absolute top-[-10px] left-[-10px] bg-gray-200">
                  {totalAmount}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="md:block hidden md:mr-2 display-none font-inter text-base md:text-[14px] font-bold tracking-normal leading-none text-center text-[12px]">
                  Shopping bag
                </p>
                <div>{open && <Cart setOpen={setOpen} openModal={open} />}</div>
              </div>
              <div
                className="flex flex-row items-center cursor-pointer mr-2 relative"
                onClick={() => setsignOut(!signOut)}
              >
                {image ? (
                  <Avatar src={image} alt="avatar" size="sm" className="mr-2" />
                ) : (
                  <Avatar src="./user.jpg" className="mr-1 w-[30px] h-[30px]" />
                )}
                <div>
                  <p className="font-inter text-sm font-medium tracking-normal leading-none">
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </p>
                </div>
                <div className="absolute md:top-5 z-10 md:right-0 top-[20px] right-[-11px] h-[50px]  px-2">
                  {signOut && (
                    <Typography
                      variant="h6"
                      color="white"
                      className="text-center p-1 bg-gray-500 rounded-md"
                      style={{ width: "100px" }}
                      onClick={() => dispatch(logout())}
                    >
                      Sign Out
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black grid md:grid-cols-3 w-full justify-around">
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center mt-4 mb-4">
          50& OFF
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center mt-4 mb-4">
          Free shipping and returns
        </div>
        <div className="text-white font-inter text-base font-medium tracking-normal leading-none text-center mt-4 mb-4">
          Diffrent payment methods
        </div>
      </div>
    </>
  );
}
