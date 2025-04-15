import { FaGooglePay, FaApplePay } from "react-icons/fa";

const WalletsForm: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="text-sm font-bold mb-2">Select a Wallet</div>
      <button className="w-full bg-gray-200 text-black py-2 rounded flex items-center justify-center">
        <FaGooglePay className="text-4xl" />
      </button>
      <button className="w-full bg-gray-200 text-black py-2 rounded flex items-center justify-center">
        <FaApplePay className="text-4xl" />
      </button>
    </div>
  );
};

export default WalletsForm;
