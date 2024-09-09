import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center  items-center w-full lg:mx-w-7xl mx-auto h-screen">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 w-1/2 lg:w-1/3 p-4 border-2 rounded-md border-gray-400 "
        >
          <h1 className="text-3xl font-semibold text-center">Login</h1>

          <div className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="lutforrahmanseu@gmail.com"
              onChange={changeHandler}
              value={input.email}
              name="email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Password"
              onChange={changeHandler}
              value={input.password}
              name="password"
            />
          </div>
          <div className="flex  justify-between items-center">
            <RadioGroup className="flex items-center gap-5 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="student"
                  name="role"
                  className="cursor-pointer"
                  onChange={changeHandler}
                  checked={input.role === "student"}
                />
                <Label>Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  value="student"
                  name="role"
                  className="cursor-pointer"
                  onChange={changeHandler}
                  checked={input.role === "recruiter"}
                />
                <Label>Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button  className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 w-full ">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 w-full "
            >
              Login
            </Button>
          )}

          <span className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#6A38C2] font-semibold ">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
