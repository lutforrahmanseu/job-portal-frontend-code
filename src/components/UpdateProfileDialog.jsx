// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Loader2 } from "lucide-react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { setUser } from "@/redux/authSlice";
// import { toast } from "sonner";

// export default function UpdateProfileDialog({ open, setOpen }) {
//   const [loading, setLoading] = useState(false);
//   const { user } = useSelector((store) => store.auth);
//   const [input, setInput] = useState({
//     fullName: user?.fullName||"",
//     email: user?.email || "",
//     phoneNumber: user?.phoneNumber || "",
//     bio: user?.profile?.bio || "",
//     skills: user?.profile?.skills?.map((skill) => skill)    || "",
//     file: user?.profile?.resume || "",
//   });

//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const fileChangeHandler = (e) => {
//     const file = e.target.files?.[0];
//     setInput({ ...input, file });
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("fullName", input.fullName);
//     formData.append("email", input.email);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("bio", input.bio);
//     formData.append("skills", input.skills);
    
//     if (input.file) {
//       formData.append("file", input.file);
//     }
//     try {
//       setLoading(true);
//       const res = await axios.post(
//         `${USER_API_END_POINT}/profile/update`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );
//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         // setOpen(false);
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//     finally{
//       setLoading(false);
//     }
//     setOpen(false);
//     console.log(input);
//   };
//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader className="text-center">
//           <DialogTitle className="text-center">Update Profile</DialogTitle>
//         </DialogHeader>
//         <form  onSubmit={submitHandler}>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={input.fullName}
//                 placeholder="Full name"
//                 className="col-span-3"
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={input.email}
//                 placeholder="Email"
//                 className="col-span-3"
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="number">Number</Label>
//               <Input
//                 id="number"
//                 name="number"
//                 type="number"
//                 value={input.phoneNumber}
//                 placeholder="Phone"
//                 className="col-span-3"
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="bio">Bio</Label>
//               <Input
//                 id="bio"
//                 name="bio"
//                 type="text"
//                 placeholder="bio"
//                 value={input.bio}
//                 className="col-span-3"
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="skills">Skills</Label>
//               <Input
//                 id="skills"
//                 name="skills"
//                 placeholder="skills"
//                 type="text"
//                 value={input.skills}
//                 className="col-span-3"
//                 onChange={changeEventHandler}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap4">
//               <Label htmlFor="file">Resume</Label>
//               <Input
//                 id="file"
//                 name="file"
//                 type="file"
//                 accept="application/pdf"
//                 placeholder="file"
//                 className="col-span-3"
//                 onChange={fileChangeHandler}
//               />
//             </div>
//           </div>
//           <DialogFooter>
//             {loading ? (
//               <Button className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 w-full ">
//                 <Loader2 className="w-4 h-4 animate-spin mr-2" />
//                 Please wait
//               </Button>
//             ) : (
//               <Button
//                 type="submit"
//                 className="bg-[#6A38C2] hover:bg-[#6A38C2]/90 w-full "
//               >
//                 Update
//               </Button>
//             )}
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// }


import React from 'react'

export default function UpdateProfileDialog() {
  return (
    <div>UpdateProfileDialog</div>
  )
}
