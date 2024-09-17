import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "../ui/label";
import AppliedJobsTable from "../AppliedJobsTable";
import UpdateProfileDialog from "../UpdateProfileDialog";
import { useSelector } from "react-redux";

export default function Profile() {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const isResume = true;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white my-5 p-8 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
            </Avatar>
            <div>
              <h1 className="text-xl font-medium">{user?.fullName}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            {" "}
            <Pen /> Edit Profile
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-2 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-2 my-2">
            <Contact />
            {user?.phoneNumber}
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex flex-wrap gap-2 my-2">
            {user?.profile?.skills && user.profile.skills.length !== 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <Badge> No Skills</Badge>
            )}
          </div>
        </div>
        <div className="my-5 items-center grid w-full max-w-sm gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <Button className="text-right w-1/2" variant="outline">
              <a
                href="https://github.com/lutforrahmanseu?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          ) : (
            <p className="text-sm">No Resume</p>
          )}
        </div>
      </div>
      <div className="my-5 max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-xl font-bold my-5">Applied Jobs</h1>
        {/* application table */}
        <AppliedJobsTable />
      </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}
