import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

export default function SignUp() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    const formData = new FormData();
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeHandlerFile = (e) => {
    e.preventDefault();
    setInput({ ...input, file: e.target.files?.[0] });
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center  items-center w-full lg:mx-w-7xl mx-auto h-screen">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 w-1/2 lg:w-1/3 p-4 border-2 rounded-md border-gray-400 "
        >
          <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
          <div className="flex flex-col gap-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="Full Name"
              onChange={changeHandler}
              value={input.fullName}
              name="fullName"
            />
          </div>
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
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="01609085903"
              onChange={changeHandler}
              value={input.phoneNumber}
              name="phoneNumber"
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
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeHandlerFile}
              />
            </div>
          </div>
          <Button type="submit" className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 ">
            Sign Up
          </Button>
          <span className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6A38C2] font-semibold ">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
