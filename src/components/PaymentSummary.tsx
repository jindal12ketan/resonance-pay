import PaymentSummaryLogo from "../assets/PaymentSummaryLogo.svg";

const PaymentSummary: React.FC = () => {
  return (
    <div className="text-white pl-2 py-2 pr-4 md:w-3/10">
      <div className="flex items-center mb-4">
        <img
          src="https://storage.googleapis.com/a1aa/image/yL8TEFrvdj3jhfuSjGw22-x9m-N0Nu5kzLNK5OnBmWc.jpg"
          alt="Company Logo"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <div className="text-md font-bold">100005605986062</div>
          <div className="text-xs">BMW Hornsy</div>
        </div>
      </div>

      <div className="bg-[#eef3fb] text-sm text-gray-800 p-2 rounded-lg mb-2">
        <div className="text-md font-semibold mb-3">
          Price Summary{" "}
          <span className="italic text-gray-500 text-sm font-normal cursor-pointer">
            (See <span className="underline">Invoice</span>)
          </span>
        </div>
        <div className="flex text-xs justify-between">
          <span className="text-gray-600">Amount</span>
          <span>$1005.20</span>
        </div>

        <div className="flex text-xs justify-between mb-2">
          <span className="text-gray-600">Surcharge</span>
          <span>$2.80</span>
        </div>

        <div className="flex justify-between font-bold text-md text-black mt-2">
          <span>Total</span>
          <span>$1008.40</span>
        </div>
      </div>

      <div className="bg-white text-black p-2 rounded-lg">
        <div className="mb-2">
          <span className="font-bold">Customer:</span> John Brown
        </div>
        <div>
          <span className="font-bold">Product:</span> 15 000 Log book
        </div>
      </div>

      <img
        src={PaymentSummaryLogo}
        className="hidden md:block absolute bottom-0 right-7/10"
        alt="React logo"
      />
    </div>
  );
};

export default PaymentSummary;
