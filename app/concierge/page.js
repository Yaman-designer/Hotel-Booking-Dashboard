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
    { id: 1, guest: "Sarah Ahmed", room: "101", request: "Extra towels", status: "Pending" },
    { id: 2, guest: "Omar Khaled", room: "203", request: "Restaurant booking", status: "Completed" },
    { id: 3, guest: "Lina Noor", room: "305", request: "Late checkout", status: "In Progress" },
  ];

  const [requests, setRequests] = useState(initialRequests);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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

  const confirmDelete = () => {
    setRequests((prev) => prev.filter((r) => r.id !== deleteId));
    setDeleteId(null);
    setShowDeleteDialog(false);
  };

  return (
    <div className="p-6 text-foreground">
      <h1 className="text-xl font-bold mb-6 text-foreground">
        Concierge Requests
      </h1>

      <div className="bg-card text-card-foreground border border-border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">Guest</TableHead>
              <TableHead className="text-muted-foreground">Room</TableHead>
              <TableHead className="text-muted-foreground">Request</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests.map((req) => (
              <TableRow key={req.id} className="hover:bg-muted border-border">
                <TableCell className="text-foreground">{req.guest}</TableCell>
                <TableCell className="text-foreground">{req.room}</TableCell>
                <TableCell className="text-foreground">{req.request}</TableCell>
                <TableCell>
                  <StatusBadge status={req.status} />
                </TableCell>

                <TableCell className="text-right space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(req.id)}
                    className="border-border"
                  >
                    Toggle Status
                  </Button>

                  <AlertDialog
                    open={showDeleteDialog && deleteId === req.id}
                    onOpenChange={setShowDeleteDialog}
                  >
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

                    <AlertDialogContent className="bg-popover text-popover-foreground border-border">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                        <AlertDialogDescription className="text-muted-foreground">
                          هل أنت متأكد من حذف طلب الكونسييرج هذا؟ لا يمكن التراجع عن هذا الإجراء.
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel className="border-border">
                          إلغاء
                        </AlertDialogCancel>

                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
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
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Pending: "bg-yellow-500/15 text-yellow-700 border border-yellow-500/25",
    Completed: "bg-green-500/15 text-green-600 border border-green-500/25",
    "In Progress": "bg-blue-500/15 text-blue-600 border border-blue-500/25",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
        colors[status] || "bg-muted text-muted-foreground border border-border"
      }`}
    >
      {status}
    </span>
  );
}
