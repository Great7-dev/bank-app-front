"use client";

import { useState } from "react";

import { X } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import { Button } from "./ui/button";

export function OtpHelpDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="text-xs text-[#084086]">
          Did not get the code?
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 h-6 w-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />

          <span className="sr-only">Close</span>
        </Button>

        <div className="px-8 py-10 text-center">
          <p className="text-sm text-[#084086]">
            If you have received OTP by mistake or have requested and unable to,
            please email us:{" "}
            <a
              href="mailto:customercare@iib-ag.com"
              className="text-[#E32213] hover:underline"
            >
              customercare@int-i-ag.com
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
