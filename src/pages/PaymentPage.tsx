import PaymentOptions from "../components/PaymentOptions";
import PaymentSummary from "../components/PaymentSummary";

const PaymentPage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative">
        <div className="bg-blue-500 flex flex-col md:flex-row p-2">
          <PaymentSummary />
          <PaymentOptions />
        </div>
        <div className="absolute bottom-2 left-2 text-xs text-white">
          Secured by <span className="italic font-bold">Resonance</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
