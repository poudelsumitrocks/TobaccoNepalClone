"use client";
import { BiSolidError } from "react-icons/bi";
import { useState } from "react";


export default function Ageristrict({ onVerify }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <section className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg text-white text-center flex flex-col items-center w-80">

        <div className="text-yellow-400 text-2xl mb-4">
          <BiSolidError />
        </div>

        <h1 className="text-2xl mb-4">Age verification</h1>

        {!showMessage ? (
          <>
            <p className="w-64 text-md font-semibold mb-4">
              You must be 21 years or older to enter Tobacco Nepal. Are you of legal age?
            </p>

            <div className="flex gap-4">
              <button
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
                onClick={onVerify}
              >
                Yes, I am 21+
              </button>

              <button
                className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                onClick={() => setShowMessage(true)}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <h1  onClick={() => window.location.reload()}
  className="cursor-pointer text-yellow-400 hover:underline mb-2">Go back</h1>
            <p className="text-red-400 font-semibold">
              Sorry! You are not allowed to use this page.
            </p>
          </>
        )}

      </div>
    </section>
  );
}
