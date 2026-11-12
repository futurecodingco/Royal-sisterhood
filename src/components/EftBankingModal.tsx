import React, { useState } from "react";
import { X, Copy, Check, Building, QrCode, ShieldCheck, Heart } from "lucide-react";
import { ROYAL_ORGANIZATION } from "../data/organizationData";

interface EftBankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount?: number;
}

export const EftBankingModal: React.FC<EftBankingModalProps> = ({
  isOpen,
  onClose,
  defaultAmount,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedMethod, setSelectedMethod] = useState<"eft" | "snapscan" | "payfast">("eft");
  const [donationAmount, setDonationAmount] = useState<string>(
    defaultAmount ? defaultAmount.toString() : "1000"
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentCompleted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F3C969] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Account · Non-Profit Public Benefit</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Support the Royal Sisterhood
            </h3>
            <p className="text-xs text-white/80 mt-0.5">
              Direct institutional disbursement into verified project treasury
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Method selector tabs */}
        <div className="flex border-b border-stone-200 bg-stone-100 p-1.5">
          <button
            onClick={() => {
              setSelectedMethod("eft");
              setPaymentCompleted(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded transition-colors ${
              selectedMethod === "eft"
                ? "bg-white text-[#4A1525] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Direct EFT / Bank Transfer
          </button>
          <button
            onClick={() => {
              setSelectedMethod("snapscan");
              setPaymentCompleted(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded transition-colors ${
              selectedMethod === "snapscan"
                ? "bg-white text-[#4A1525] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            SnapScan / Zapper
          </button>
          <button
            onClick={() => {
              setSelectedMethod("payfast");
              setPaymentCompleted(false);
            }}
            className={`flex-1 py-2 text-xs font-semibold rounded transition-colors ${
              selectedMethod === "payfast"
                ? "bg-white text-[#4A1525] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            PayFast / Card
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F1F1F]">
          {selectedMethod === "eft" && (
            <div className="space-y-4">
              <p className="text-xs text-stone-600">
                For corporate CSI grants, trust disbursements, and individual donations. Please use your organization or surname as the transaction reference.
              </p>

              <div className="space-y-2.5">
                {[
                  { label: "Account Name", value: ROYAL_ORGANIZATION.bankingDetails.accountName },
                  { label: "Bank", value: ROYAL_ORGANIZATION.bankingDetails.bankName },
                  { label: "Account Number", value: ROYAL_ORGANIZATION.bankingDetails.accountNumber },
                  { label: "Branch Code", value: ROYAL_ORGANIZATION.bankingDetails.branchCode },
                  { label: "Account Type", value: ROYAL_ORGANIZATION.bankingDetails.accountType },
                  { label: "SWIFT / BIC Code", value: ROYAL_ORGANIZATION.bankingDetails.swiftCode },
                  { label: "Recommended Reference", value: "SURNAME - AK1TO4" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded border border-stone-200 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-medium">
                        {item.label}
                      </span>
                      <span className="font-mono font-semibold text-stone-900 text-sm">
                        {item.value}
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="px-2.5 py-1.5 text-xs text-stone-600 hover:text-[#4A1525] hover:bg-stone-50 rounded border border-stone-300 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      {copiedField === item.label ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold text-[11px]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-stone-100 rounded text-xs text-stone-600 leading-relaxed border border-stone-200">
                Please email proof of payment (POP) to{" "}
                <a href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`} className="text-[#8B1E3F] font-semibold underline">
                  {ROYAL_ORGANIZATION.contactEmail}
                </a>{" "}
                to receive an official institutional letter of acknowledgment and Section 18A tax documentation.
              </div>
            </div>
          )}

          {selectedMethod === "snapscan" && (
            <div className="text-center py-4 space-y-4">
              <div className="inline-block p-4 bg-white rounded-xl shadow-inner border-2 border-[#4A1525]">
                {/* Simulated SnapScan QR code */}
                <div className="w-48 h-48 bg-stone-900 rounded-lg flex flex-col items-center justify-center text-white p-4 mx-auto relative">
                  <QrCode className="w-28 h-28 text-white mb-2" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F3C969]">
                    AK 1 TO 4 / SNAP
                  </span>
                  <div className="absolute inset-0 border-4 border-dashed border-[#C59B27]/40 rounded-lg pointer-events-none" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-stone-900">Scan with SnapScan or Zapper App</p>
                <p className="text-xs text-stone-600 max-w-sm mx-auto mt-1">
                  Supports all major South African banking apps (Standard Bank, FNB, Absa, Nedbank, Capitec).
                </p>
              </div>
              <div className="flex justify-center gap-2">
                {["R 100", "R 350", "R 500", "R 1,500", "R 5,000"].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setDonationAmount(amt.replace(/[^\d]/g, ""))}
                    className="px-3 py-1.5 text-xs bg-stone-100 hover:bg-[#4A1525] hover:text-white rounded border border-stone-300 font-medium transition-colors"
                  >
                    {amt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedMethod === "payfast" && (
            <div>
              {paymentCompleted ? (
                <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <Check className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-stone-900 text-lg">Thank You for Your Sovereign Support!</h4>
                  <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                    Your contribution of <strong>ZAR {donationAmount}</strong> has been received by Royal Sisterhood AK 1 to 4 Bloodline. A formal receipt and impact update will be transmitted to your email.
                  </p>
                  <button
                    onClick={() => {
                      setPaymentCompleted(false);
                      onClose();
                    }}
                    className="px-4 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSimulatePayment} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                      Donation / Grant Amount (ZAR)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 font-bold text-stone-500">R</span>
                      <input
                        type="number"
                        min="50"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        required
                        className="w-full pl-8 pr-4 py-2 bg-white rounded border border-stone-300 text-stone-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#4A1525]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Donor Name / Org</label>
                      <input
                        type="text"
                        placeholder="e.g. Standard Bank CSI"
                        required
                        className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="treasury@domain.co.za"
                        required
                        className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Designated Programme</label>
                    <select className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs">
                      <option>General Institutional Operating Fund</option>
                      <option>Programme 03: Safe Haven & GBV Rapid Response Network</option>
                      <option>Programme 04: Women’s Digital & Agri-Business Hub</option>
                      <option>Programme 05: Rural & Peri-Urban Food Security & Dignity</option>
                      <option>Programme 01: Griqua Royal Houses Unification</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-bold rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <Heart className="w-4 h-4 text-[#F3C969]" />
                    <span>{isProcessing ? "Connecting to PayFast Secure Gateway..." : `Confirm Donation of R ${donationAmount}`}</span>
                  </button>
                  <p className="text-[11px] text-stone-500 text-center">
                    Simulated secure payment terminal · PCI-DSS 256-bit encrypted checkout
                  </p>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span>Registration: {ROYAL_ORGANIZATION.registrationNumber}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
