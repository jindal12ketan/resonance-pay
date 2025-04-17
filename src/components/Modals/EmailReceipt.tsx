import Dialog from "../../shared/dialog";
import { useState } from "react";

const EmailReciept = ({
  show = false,
  onClose = () => {},
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState("");

  return (
    <Dialog show={show} onClose={onClose}>
      <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-500 rounded-full p-2">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13L10 18L20 6"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold">Email Receipt</h2>
        <p className="mt-2 text-gray-700 font-medium">
          Please enter your <span className="font-semibold">email</span> address
          below to send the receipt.
        </p>

        <div className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition"
            onClick={onClose}
          >
            Send
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Powered by <span className="font-medium">Resonance Australia</span>
        </p>
      </div>
    </Dialog>
  );
};

export default EmailReciept;
