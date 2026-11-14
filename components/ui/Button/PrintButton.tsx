"use client";

export default function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
    >
      Print / Save PDF
    </button>
  );
}