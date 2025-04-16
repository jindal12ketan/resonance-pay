import Dialog from "../shared/dialog";

const PaymentSuccessModal = ({
  show = false,
  onClose = () => {},
}: {
  show: boolean;
  onClose: () => void;
}) => (
  <Dialog show={show} onClose={onClose}>
    <div
      className="bg-white rounded-xl w-[320px] sm:w-[320px] p-6 shadow-xl text-center"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src="/your-logo.png"
        alt="logo"
        className="w-12 h-12 mx-auto rounded-full"
      />
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="bg-green-600 text-white rounded-full p-3 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mt-2">Payment Successful</h3>
      </div>

      <div className="text-sm text-left mt-4 space-y-2">
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Transaction ID</span>
          <span>1234567890</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Date</span>
          <span>April 3, 2024</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Merchant</span>
          <span>BMW Hornsy</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Customer</span>
          <span>John Brown</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Product</span>
          <span>15,000 Log Book</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Amount</span>
          <span>$1,005.20</span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Surcharge</span>
          <span>$2.80</span>
        </div>
        <div className="flex text-xs justify-between font-semibold">
          <span className="text-gray-600">Total Paid</span>
          <span>$1,008.40</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {/* Filled Button */}
        <button className="bg-[#1a56db] hover:bg-[#174fc4] text-white py-2 rounded-lg text-sm font-medium transition">
          Go to Merchant Website
        </button>

        {/* Outlined Button */}
        <button className="border border-[#1a56db] text-[#1a56db] hover:bg-[#f0f5ff] py-2 rounded-lg text-sm font-medium transition">
          Email Receipt
        </button>
      </div>
      <hr className="my-4 border-t border-gray-200" />
      <p className="text-xs text-gray-800 mt-4">
        Powered by Resonance Australia
      </p>
    </div>
  </Dialog>
);

export default PaymentSuccessModal;
