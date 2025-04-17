import React from "react";
import { PaymentTab } from "../types/payment";

interface Props {
  selectedTab: PaymentTab;
  onTabChange: (tab: PaymentTab) => void;
}

const PaymentTabs: React.FC<Props> = ({ selectedTab, onTabChange }) => {
  return (
    <div className="flex rounded-bl-lg md:flex-col bg-[#f0f4ff] h-full">
      {[
        { id: "debitCard", label: "Debit/Card" },
        { id: "wallets", label: "Wallets" },
        // { id: "netBanking", label: "Netbanking" },
      ].map((tab) => {
        const isSelectedTab = selectedTab === tab.id;
        return (
          <div className={`p-2 ${isSelectedTab && "bg-white"}`} key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id as PaymentTab)}
              className={`px-4 py-2 text-left w-full transition-all duration-200 hover:bg-white rounded-lg`}
            >
              {tab.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PaymentTabs;
