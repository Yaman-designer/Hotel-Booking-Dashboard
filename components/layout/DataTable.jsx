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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function DataTable({ data: initialData, type = "rooms" }) {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [filter, setFilter] = useState("all");

  // للحقل الجديد لإضافة غرفة (لأن بيانات الحجوزات ما تحتاجه)
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    bedType: "",
    floor: "",
    facilities: "",
    rate: "",
    status: "Available",
  });

  // اختيار صف
  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  // تحديد/إلغاء تحديد الكل
  const toggleSelectAll = (checked) => {
    setSelectedRows(checked ? filteredData.map((d) => d.id) : []);
  };

  // حذف الصفوف المحددة
  const confirmDelete = () => {
    setData((prev) => prev.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]);
    setShowDeleteDialog(false);
  };

  // إضافة غرفة جديدة — فقط إذا النوع rooms
  const addRoom = () => {
    if (type !== "rooms") return;

    const maxId = data.length ? Math.max(...data.map((d) => d.id)) : 0;

    setData([
      ...data,
      {
        id: maxId + 1,
        image: "/room.jpg",
        roomNumber: `R-${maxId + 1}`,
        ...newRoom,
      },
    ]);

    setNewRoom({
      roomName: "",
      bedType: "",
      floor: "",
      facilities: "",
      rate: "",
      status: "Available",
    });

    setShowAddDialog(false);
  };

  // تبديل الحالة (Booked <-> Available)
  const toggleStatus = (id) => {
    setData((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status: row.status === "Available" ? "Booked" : "Available",
            }
          : row,
      ),
    );
  };

  // تصفية حسب الحالة
  const filteredData = data.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <div className="space-y-6">
      {/* الفلتر والأزرار */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Select onValueChange={setFilter} defaultValue="all" className="bg-white">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Booked">Booked</SelectItem>
            <SelectItem value="Available">Available</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex gap-3">
          {type === "rooms" && (
            <Button onClick={() => setShowAddDialog(true)}>Add Room</Button>
          )}
          {selectedRows.length > 0 && (
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
              className="bg-red-700 text-white"
            >
              Delete ({selectedRows.length})
            </Button>
          )}
        </div>
      </div>

      {/* جدول سطح المكتب */}
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <Checkbox
                checked={
                  selectedRows.length === filteredData.length &&
                  filteredData.length > 0
                }
                onCheckedChange={toggleSelectAll}
                aria-label="Select all rows"
              />
            </TableHead>
            {/* الأعمدة حسب النوع */}
            {type === "rooms" ? (
              <>
                <TableHead>Room Name</TableHead>
                <TableHead>Bed Type</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Facilities</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
              </>
            ) : (
              <>
                <TableHead>Guest Name</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Status</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onCheckedChange={() => toggleRow(row.id)}
                  aria-label={`Select row ${type === "rooms" ? row.roomName : row.guestName}`}
                />
              </TableCell>

              {/* محتوى الصف حسب النوع */}
              {type === "rooms" ? (
                <>
                  <TableCell className="font-medium">{row.roomName}</TableCell>
                  <TableCell>{row.bedType}</TableCell>
                  <TableCell>{row.floor}</TableCell>
                  <TableCell className="truncate max-w-xs">{row.facilities}</TableCell>
                  <TableCell>{row.rate}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(row.id)}
                      className={
                        row.status === "Available"
                          ? "text-green-700 border-green-300"
                          : "text-red-700 border-red-300"
                      }
                      aria-label={`Toggle status for ${row.roomName}`}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{row.guestName}</TableCell>
                  <TableCell>{row.room}</TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell>{row.checkOut}</TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleStatus(row.id)}
                      className={
                        row.status === "Available"
                          ? "text-green-700 border-green-300"
                          : "text-red-700 border-red-300"
                      }
                      aria-label={`Toggle status for ${row.guestName}`}
                    >
                      {row.status}
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* عرض الموبايل */}
      <div className="md:hidden space-y-4">
        {filteredData.map((row) => (
          <div
            key={row.id}
            className="border rounded-lg p-4 space-y-2 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">
                {type === "rooms" ? row.roomName : row.guestName}
              </h3>
              <Checkbox
                checked={selectedRows.includes(row.id)}
                onCheckedChange={() => toggleRow(row.id)}
                aria-label={`Select row ${type === "rooms" ? row.roomName : row.guestName}`}
              />
            </div>

            {type === "rooms" ? (
              <>
                <div className="text-sm text-muted-foreground">Bed: {row.bedType}</div>
                <div className="text-sm">Floor: {row.floor}</div>
                <div className="text-sm truncate">Facilities: {row.facilities}</div>
                <div className="text-sm">Rate: {row.rate}</div>
              </>
            ) : (
              <>
                <div>Room: {row.room}</div>
                <div>Check In: {row.checkIn}</div>
                <div>Check Out: {row.checkOut}</div>
              </>
            )}

            <Button
              size="sm"
              variant="outline"
              onClick={() => toggleStatus(row.id)}
              className={
                row.status === "Available"
                  ? "text-green-700 border-green-300"
                  : "text-red-700 border-red-300"
              }
              aria-label={`Toggle status for ${type === "rooms" ? row.roomName : row.guestName}`}
            >
              {row.status}
            </Button>
          </div>
        ))}
      </div>

      {/* Delete Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {type === "rooms" ? "rooms" : "bookings"}</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the selected {type === "rooms" ? "rooms" : "bookings"}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-700 text-white hover:bg-red-600"
            >
              Yes, delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Add Dialog (موجود فقط لغرف) */}
      {type === "rooms" && (
        <AlertDialog open={showAddDialog} onOpenChange={setShowAddDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Add new room</AlertDialogTitle>
            </AlertDialogHeader>

            <div className="space-y-3 p-2">
              <Input
                placeholder="Room name"
                value={newRoom.roomName}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, roomName: e.target.value })
                }
              />
              <Input
                placeholder="Bed type"
                value={newRoom.bedType}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, bedType: e.target.value })
                }
              />
              <Input
                placeholder="Floor"
                value={newRoom.floor}
                onChange={(e) => setNewRoom({ ...newRoom, floor: e.target.value })}
              />
              <Input
                placeholder="Facilities"
                value={newRoom.facilities}
                onChange={(e) =>
                  setNewRoom({ ...newRoom, facilities: e.target.value })
                }
              />
              <Input
                placeholder="Rate"
                value={newRoom.rate}
                onChange={(e) => setNewRoom({ ...newRoom, rate: e.target.value })}
              />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={addRoom}>Add</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
}
