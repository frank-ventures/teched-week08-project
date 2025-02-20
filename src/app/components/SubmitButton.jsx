"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="p-2 border-2 rounded w-3/6 bg-yellow-400 shadow-md hover:bg-blue-800 hover:shadow-xl hover:border-yellow-400 hover:text-white"
    >
      Submit
    </button>
  );
}
