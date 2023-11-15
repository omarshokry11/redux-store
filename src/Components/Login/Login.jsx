import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const initalState = {
    name: "",
    password: "",
  };
  const [values, setValues] = useState(initalState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dispatch = useDispatch();

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Card className="md:w-96 w-[350px]">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid md:h-28 h-20 place-items-center"
        >
          <Typography>Sign In</Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <Typography variant="small" className="text-gray-400">
            Use in password: (A-Za-z0-9!@#$%^&*)
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={() => dispatch(login(values))}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
