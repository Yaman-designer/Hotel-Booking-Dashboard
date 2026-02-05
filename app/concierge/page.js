"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

export default function ConciergeRequests() {
  const initialRequests = [
    {
      id: 1,
      guest: "Sarah Ahmed",
      room: "101",
      request: "Extra towels",
      status: "Pending",
    },
    {
      id: 2,
      guest: "Omar Khaled",
      room: "203",
      request: "Restaurant booking",
      status: "Completed",
    },
    {
      id: 3,
      guest: "Lina Noor",
      room: "305",
      request: "Late checkout",
      status: "In Progress",
    },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // تغيير الحالة بتسلسل دائري
  const toggleStatus = (id) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status:
                r.status === "Pending"
                  ? "Completed"
                  : r.status === "Completed"
                  ? "In Progress"
                  : "Pending",
            }
          : r
      )
    );
  };

  // حذف طلب بناءً على id
  const confirmDelete = () => {
    setRequests((prev) => prev.filter((r) => r.id !== deleteId));
    setDeleteId(null);
    setShowDeleteDialog(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-6">Concierge Requests</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Request</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {requests.map((req) => (
            <TableRow key={req.id} className="hover:bg-gray-50">
              <TableCell>{req.guest}</TableCell>
              <TableCell>{req.room}</TableCell>
              <TableCell>{req.request}</TableCell>
              <TableCell>
                <StatusBadge status={req.status} />
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toggleStatus(req.id)}
                >
                  Toggle Status
                </Button>

                {/* زر الحذف مع AlertDialog */}
                <AlertDialog open={showDeleteDialog && deleteId === req.id} onOpenChange={setShowDeleteDialog}>
                  <AlertDialogTrigger asChild>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setDeleteId(req.id);
                        setShowDeleteDialog(true);
                      }}
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                      <AlertDialogDescription>
                        هل أنت متأكد من حذف طلب الكونسييرج هذا؟ لا يمكن التراجع عن هذا الإجراء.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>إلغاء</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-red-600 hover:bg-red-700"
                        onClick={confirmDelete}
                      >
                        حذف
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

// كومبوننت Badge لحالة الطلب مع ألوان حسب الحالة
function StatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    "In Progress": "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-800"}`}
    >
      {status}
    </span>
  );
}
