"use client";

import { useModalStore } from "@/store/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useEffect } from "react";

const BookCallModal = () => {
  const { isOpen, close } = useModalStore();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader className="hidden">
          <DialogTitle className="hidden">Book A Consultation</DialogTitle>
        </DialogHeader>

        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/0O7jMstyGNye3vKRgaJN"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            overflow: "hidden",
            minHeight: "600px",
          }}
          id="0O7jMstyGNye3vKRgaJN_1759268713895"
        />
      </DialogContent>
    </Dialog>
  );
};

export default BookCallModal;
