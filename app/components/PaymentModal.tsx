"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (method: string) => void;
}

export default function PaymentModal({
  isOpen,
  onClose,
  onSelect,
}: Props) {
  const [selected, setSelected] = useState("");

  if (!isOpen) return null;

  const paymentMethods = [
    {
      id: "jazzcash",
      name: "JazzCash",
    },
    {
      id: "easypaisa",
      name: "Easypaisa",
    },
    {
      id: "card",
      name: "Visa / Mastercard",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-2xl">
        
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            Select Payment Method
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X />
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelected(method.id)}
              className={`w-full rounded-2xl border p-4 text-left transition-all ${
                selected === method.id
                  ? "border-blue-500 bg-blue-500/20"
                  : "border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              <p className="text-lg font-semibold text-white">
                {method.name}
              </p>
            </button>
          ))}
        </div>

        <button
          disabled={!selected}
          onClick={() => onSelect(selected)}
          className="mt-6 w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          Continue Payment
        </button>
      </div>
    </div>
  );
}