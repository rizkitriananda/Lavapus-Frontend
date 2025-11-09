"use client";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("her we go");

const ToasterDemo = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default ToasterDemo;
