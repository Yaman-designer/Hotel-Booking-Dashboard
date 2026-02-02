"use client";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

import { ChevronRight } from "lucide-react";

const bookings = [
  {
    id: 1,
    guest: "Sarah Ahmed",
    room: "101",
    date: "2026-02-01",
    status: "Confirmed",
  },
  {
    id: 2,
    guest: "Omar Khaled",
    room: "203",
    date: "2026-02-02",
    status: "Pending",
  },
  {
    id: 3,
    guest: "Lina Noor",
    room: "305",
    date: "2026-02-03",
    status: "Cancelled",
  },
];

export default function RecentBookings() {
  const handleDelete = (id) => {
    console.log("Delete booking", id);
  };
  const [selectedBooking, setSelectedBooking] = useState(null);
  return (
    <>
      <div className="w-full flex justify-between items-center pt-5">
        <h1 className="text-xl font-bold">Recent Bookings</h1>
        <button className="group flex items-center gap-2 bg-slate-0 text-gray-500 font-medium text-lg">
          see all
          <ChevronRight className="w-6 h-6 transition-all duration-300 ease-in-out group-hover:translate-x-1.5" />
        </button>
      </div>

      {/* Table */}
      <div className="mt-5 overflow-x-auto bg-white rounded-md shadow-md p-3">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings.map((booking) => (
              <TableRow
                key={booking.id}
                className="hover:bg-gray-50 transition"
              >
                <TableCell className="font-medium">{booking.guest}</TableCell>

                <TableCell>{booking.room}</TableCell>

                <TableCell className="text-sm text-gray-500">
                  {booking.date}
                </TableCell>

                <TableCell>
                  <StatusBadge status={booking.status} />
                </TableCell>

                {/* Actions column */}
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <MoreHorizontal className="w-5 h-5 cursor-pointer text-gray-500" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      {/* handleview Diyalog */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                          >
                            View
                          </DropdownMenuItem>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Booking Details</DialogTitle>
                          </DialogHeader>

                          <div className="space-y-2 text-sm">
                            <p>
                              <span className="font-medium">Guest:</span>{" "}
                              {booking.guest}
                            </p>
                            <p>
                              <span className="font-medium">Room:</span>{" "}
                              {booking.room}
                            </p>
                            <p>
                              <span className="font-medium">Date:</span>{" "}
                              {booking.date}
                            </p>
                            <p>
                              <span className="font-medium">Status:</span>{" "}
                              <StatusBadge status={booking.status} />
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* handleDelete Diyalog */}
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            className="text-red-600"
                          >
                            Delete
                          </DropdownMenuItem>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete this booking.
                            </AlertDialogDescription>
                          </AlertDialogHeader>

                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>

                            <AlertDialogAction
                              className="bg-red-600 hover:bg-red-700"
                              onClick={() => handleDelete(booking.id)}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
function StatusBadge({ status }) {
  const styles = {
    Confirmed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
