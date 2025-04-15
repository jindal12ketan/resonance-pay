import PaymentTabs from "./PaymentTab";
import { useState } from "react";
import { PaymentTab, DebitCardDetails } from "../types/payment";
import DebitCardForm from "./PaymentModes/DebitCardForm";
import NetbankingForm from "./PaymentModes/NetBankingForm";
import WalletsForm from "./PaymentModes/WalletForm";

const PaymentOptions: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<PaymentTab>("debitCard");
  const [debitCardDetails, setCardDetails] = useState<DebitCardDetails>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });
  const handleCardChange = (field: keyof DebitCardDetails, value: string) => {
    setCardDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handlePay = () => {
    alert(
      "Processing payment with: " + JSON.stringify(debitCardDetails, null, 2)
    );
  };
  const renderForm = () => {
    switch (selectedTab) {
      case "debitCard":
        return (
          <DebitCardForm
            debitCardDetails={debitCardDetails}
            onChange={handleCardChange}
            onContinue={handlePay}
            buttonLabel="PAY"
          />
        );
      case "netBanking":
        return <NetbankingForm />;
      case "wallets":
      default:
        return <WalletsForm />;
    }
  };
  return (
    <div className="bg-[#ffffff] md:w-7/10 rounded-lg">
      <h2 className="text-md font-bold text-center p-2 border-b border-b-[#f1f2f2]">
        Payment Options
      </h2>
      <div className="h-[425px] grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <PaymentTabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
        </div>
        <div className="md:col-span-2">{renderForm()}</div>
      </div>
      <div className="bg-orange-100 text-orange-600 text-center py-2 text-xs rounded-b-lg">
        This page will timeout in 9:34 minutes
      </div>
    </div>
  );
};

export default PaymentOptions;
