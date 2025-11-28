"use client";

import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  children,
}) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 z-50 transition-opacity ease-in-out duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-0 -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 w-full max-w-md z-50 max-h-[90vh] overflow-y-auto transition-all ease-in-out duration-300 opacity-0 data-[state=open]:opacity-100 data-[state=open]:top-1/2 data-[state=open]:-translate-y-1/2">
          <div className="flex items-center justify-between mb-4">
            <DialogPrimitive.Title className="text-xl font-bold text-gray-900">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Close className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Cross2Icon className="w-5 h-5" />
            </DialogPrimitive.Close>
          </div>
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
