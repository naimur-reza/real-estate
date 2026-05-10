"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PropertyActions() {
  return (
    <div className="grid gap-3">
      <Dialog>
        <DialogTrigger render={<Button className="w-full bg-[#0A7EA4]" />}>Send Inquiry</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Send inquiry</DialogTitle>
            <DialogDescription>Share your question with the owner or assigned agent.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input defaultValue="Demo User" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea defaultValue="I am interested in this property. Please contact me." />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => toast.success("Inquiry sent!")} className="bg-[#0A7EA4]">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger render={<Button variant="outline" className="w-full" />}>Book a Visit</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book a visit</DialogTitle>
            <DialogDescription>Choose a demo visit slot for the presentation.</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <Label>Date</Label>
              <Input type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Time</Label>
              <Input type="time" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => toast.success("Visit booked!")} className="bg-[#0A7EA4]">
              Confirm Visit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
