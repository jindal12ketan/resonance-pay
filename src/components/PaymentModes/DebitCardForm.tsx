import React, { useState } from "react";
import { DebitCardDetails } from "../../types/payment";

interface Props {
  debitCardDetails: DebitCardDetails;
  onChange: (field: keyof DebitCardDetails, value: string) => void;
  onContinue: () => void;
  buttonLabel: string;
}

const DebitCardForm: React.FC<Props> = ({
  debitCardDetails,
  onChange,
  onContinue,
  buttonLabel,
}) => {
  const [errors, setErrors] = useState<{
    [key in keyof DebitCardDetails]?: string;
  }>({});

  const formatCardNumber = (value: string): string => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1-")
      .replace(/-$/, "");
  };

  const handleCVVChange = (value: string) => {
    if (/^\d{0,3}$/.test(value)) {
      onChange("cvv", value);
    }
  };

  const handleExpiryChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 4);
    let formatted = numericValue;
    if (numericValue.length > 2) {
      formatted = numericValue.slice(0, 2) + "/" + numericValue.slice(2);
    }
    onChange("expiry", formatted);
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    const cardNum = debitCardDetails.cardNumber.replace(/\s/g, "");
    if (!/^\d{16}$/.test(cardNum)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(debitCardDetails.expiry)) {
      newErrors.expiry = "Expiry must be in MM/YY format.";
    }

    if (!/^\d{3}$/.test(debitCardDetails.cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    if (!debitCardDetails.nameOnCard.trim()) {
      newErrors.nameOnCard = "Name is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onContinue();
    }
  };

  return (
    <div className="h-full p-4">
      <div className="pb-6">
        <input
          type="text"
          placeholder="Card Number"
          value={formatCardNumber(debitCardDetails.cardNumber)}
          onChange={(e) => {
            const rawValue = e.target.value.replace(/\D/g, "").slice(0, 16); // Keep only digits, max 16
            onChange("cardNumber", rawValue);
          }}
          className="w-full border-l border-r border-t px-4 py-2 border-[#eaeaea] rounded-t-lg"
          maxLength={19} // 16 digits + 3 dashes
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}

        <div className="flex">
          <input
            type="text"
            placeholder="MM / YY"
            value={debitCardDetails.expiry}
            onChange={(e) => handleExpiryChange(e.target.value)}
            className="w-1/2 border-l border-t border-r border-[#eaeaea] px-4 py-2"
            maxLength={5}
          />
          <input
            type="password"
            placeholder="CVV"
            value={debitCardDetails.cvv}
            onChange={(e) => handleCVVChange(e.target.value)}
            className="w-1/2 border-t border-r border-[#eaeaea] px-4 py-2"
            maxLength={3}
          />
        </div>
        {(errors.expiry || errors.cvv) && (
          <div className="flex text-red-500 text-sm">
            <div className="w-1/2">{errors.expiry}</div>
            <div className="w-1/2">{errors.cvv}</div>
          </div>
        )}

        <input
          type="text"
          placeholder="Enter name on card"
          value={debitCardDetails.nameOnCard}
          onChange={(e) => onChange("nameOnCard", e.target.value)}
          className="w-full border px-4 py-2 border-[#eaeaea] rounded-b-lg"
        />
        {errors.nameOnCard && (
          <p className="text-red-500 text-sm">{errors.nameOnCard}</p>
        )}
      </div>

      <button
        className="w-full bg-black text-white py-2 rounded-lg"
        onClick={handleSubmit}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default DebitCardForm;
