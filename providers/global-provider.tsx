import BookCallModal from "@/components/book-call-modal";
import React, { ReactNode } from "react";

const GlobalProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <>
        <BookCallModal />
      </>
      {children}
    </>
  );
};

export default GlobalProviderWrapper;
