import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

export default function AppliedJobsTable() {
  return (
    <div>
      <Table>
        <TableCaption>A List of applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3].map((item, index) => (
            <TableRow key={index}>
              <TableCell>9/10/2022</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right"><Badge variant="secondary">Applied</Badge></TableCell>



            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
