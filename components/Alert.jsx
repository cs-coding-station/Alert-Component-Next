"use client";
import { AlertCircle, CheckCircle2, InfoIcon, X, XCircle } from "lucide-react";
import { useState } from "react";

const bgColorTypes = {
  undefined: "bg-gray-100",
  info: "bg-blue-100",
  success: "bg-green-100",
  warning: "bg-yellow-100",
  error: "bg-red-100",
};

const textColor = {
  undefined: "text-gray-800",
  info: "text-blue-800",
  success: "text-green-800",
  warning: "text-yellow-800",
  error: "text-red-800",
};

const iconComponent = {
  undefined: "",
  info: <InfoIcon size="20" className="mr-3" />,
  success: <CheckCircle2 size="20" className="mr-3" />,
  warning: <AlertCircle size="20" className="mr-3" />,
  error: <XCircle size="20" className="mr-3" />,
};

const hover = {
  undefined: "hover:bg-gray-200",
  info: "hover:bg-blue-200",
  success: "hover:bg-green-200",
  warning: "hover:bg-yellow-200",
  error: "hover:bg-red-200",
};
export default function Alert({ type, text, closable }) {
  const [close, setClose] = useState("");

  function closeAlert() {
    setClose("hidden");
  }
  return (
    <div
      className={`flex  rounded-lg p-4 ${textColor[type]} ${bgColorTypes[type]} ${close}`}
    >
      {iconComponent[type]}

      <div className="text-sm font-medium">{text}</div>

      {closable && (
        <button
          onClick={() => closeAlert()}
          type="button"
          className={`ml-auto h-8 w-8 -mx-1.5 inline-flex -my-1.5 rounded-lg p-1.5 ${hover[type]}`}
        >
          <X size="20" />
        </button>
      )}
    </div>
  );
}
