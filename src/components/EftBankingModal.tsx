import React, { useEffect, useState } from "react";
import { X, Copy, Check, ShieldCheck, Download, Mail, Printer } from "lucide-react";
import { ROYAL_ORGANIZATION, FLAGSHIP_PROGRAMMES } from "../data/organizationData";

interface EftBankingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAmount?: number;
  defaultProgramme?: string;
}

export const EftBankingModal: React.FC<EftBankingModalProps> = ({
  isOpen,
  onClose,
  defaultAmount,
  defaultProgramme,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<"eft" | "pledge">("eft");
  const [donationAmount, setDonationAmount] = useState<string>(
    defaultAmount ? defaultAmount.toString() : "2500"
  );
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [designatedProgramme, setDesignatedProgramme] = useState(
    defaultProgramme || "General Institutional Operating Fund"
  );
  const [pledgeReference, setPledgeReference] = useState<string | null>(null);

  useEffect(() => {
    if (defaultAmount) {
      setDonationAmount(defaultAmount.toString());
    }
    if (defaultProgramme) {
      setDesignatedProgramme(defaultProgramme);
    }
  }, [defaultAmount, defaultProgramme, isOpen]);

  if (!isOpen) return null;

  const bankingRows = [
    { label: "Account Name", value: ROYAL_ORGANIZATION.bankingDetails.accountName },
    { label: "Bank", value: ROYAL_ORGANIZATION.bankingDetails.bankName },
    { label: "Account Number", value: ROYAL_ORGANIZATION.bankingDetails.accountNumber },
    { label: "Universal Branch Code", value: ROYAL_ORGANIZATION.bankingDetails.branchCode },
    { label: "Account Type", value: ROYAL_ORGANIZATION.bankingDetails.accountType },
    { label: "SWIFT / BIC Code", value: ROYAL_ORGANIZATION.bankingDetails.swiftCode },
    { label: "Recommended Reference", value: pledgeReference || "DONOR-NAME-AK14" },
  ];

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCopyAll = () => {
    const summary = bankingRows.map((r) => `${r.label}: ${r.value}`).join("\n");
    copyToClipboard(
      `Royal Sisterhood AK 1 to 4 Bloodline (Reg: ${ROYAL_ORGANIZATION.registrationNumber})\n${summary}\nProof of Payment Email: ${ROYAL_ORGANIZATION.contactEmail}`,
      "ALL_BANKING"
    );
  };

  const handleDownloadSlip = () => {
    const content = [
      "ROYAL SISTERHOOD AK 1 TO 4 BLOODLINE (NPC)",
      `CIPC Registration: ${ROYAL_ORGANIZATION.registrationNumber} (${ROYAL_ORGANIZATION.cipcCode})`,
      "==================================================================",
      "OFFICIAL CAPITEC BANK EFT PARTICULARS",
      ...bankingRows.map((r) => `${r.label}: ${r.value}`),
      "",
      `Proof of Payment / Section 18A Inquiry: ${ROYAL_ORGANIZATION.contactEmail}`,
      `Executive Directors Telephone: ${ROYAL_ORGANIZATION.secretariatPhone}`,
      `Physical Office: ${ROYAL_ORGANIZATION.headquarters.address}, ${ROYAL_ORGANIZATION.headquarters.city}, ${ROYAL_ORGANIZATION.headquarters.postalCode}`,
      "==================================================================",
    ].join("\n");

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Royal_Sisterhood_Capitec_EFT_Details.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleGeneratePledgeReference = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSlug = (donorName || "DONOR")
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 6);
    const rand = Math.floor(1000 + Math.random() * 9000);
    setPledgeReference(`AK14-${cleanSlug}-${rand}`);
  };

  const mailtoPledgeHref = `mailto:${ROYAL_ORGANIZATION.contactEmail}?subject=${encodeURIComponent(
    `Grant / Donation Reference ${pledgeReference || "AK14"} - ${donorName || "Supporter"}`
  )}&body=${encodeURIComponent(
    `Dear Royal Sisterhood Secretariat,\n\nI am registering a contribution / CSI grant pledge:\n- Donor / Organization: ${donorName}\n- Contact Email: ${donorEmail}\n- Amount (ZAR): R ${donationAmount}\n- Designated Programme: ${designatedProgramme}\n- EFT Reference Used: ${pledgeReference}\n\nPlease issue an acknowledgment letter and due diligence confirmation upon receipt into Capitec Account ${ROYAL_ORGANIZATION.bankingDetails.accountNumber}.\n`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="eft-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[92vh] bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#F3C969]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Verified Institutional Treasury · Reg {ROYAL_ORGANIZATION.registrationNumber}</span>
            </div>
            <h3 id="eft-modal-title" className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Support the Royal Sisterhood
            </h3>
            <p className="text-xs text-stone-200 mt-0.5">
              Direct Capitec Bank EFT & CSI grant reference registration
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close banking modal"
            className="p-1.5 text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Authentic 2-Tab Selector */}
        <div className="flex border-b border-stone-200 bg-stone-100 p-1.5 gap-1">
          <button
            type="button"
            onClick={() => setSelectedTab("eft")}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedTab === "eft"
                ? "bg-white text-[#4A1525] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Direct Capitec EFT
          </button>
          <button
            type="button"
            onClick={() => setSelectedTab("pledge")}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
              selectedTab === "pledge"
                ? "bg-white text-[#4A1525] shadow-sm"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Register Pledge & Reference
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F1F1F]">
          {selectedTab === "eft" && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-stone-600 max-w-sm">
                  Use these verified Capitec Bank details for CSI grants, trust disbursements, and individual EFT deposits.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyAll}
                    className="px-3 py-1.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedField === "ALL_BANKING" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#F3C969]" />
                        <span>All Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#F3C969]" />
                        <span>Copy All</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadSlip}
                    className="px-3 py-1.5 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 text-xs font-semibold rounded-md flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5 text-[#4A1525]" />
                    <span>Save Slip</span>
                  </button>
                </div>
              </div>

              <div className="divide-y divide-stone-200 bg-white rounded-lg border border-stone-200">
                {bankingRows.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 flex items-center justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <span className="text-[11px] text-stone-500 block font-medium">
                        {item.label}
                      </span>
                      <span className="font-mono font-semibold text-stone-900 text-sm tabular-nums break-all">
                        {item.value}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(item.value, item.label)}
                      className="px-2.5 py-1.5 text-xs text-stone-700 hover:text-[#4A1525] hover:bg-stone-50 rounded-md border border-stone-300 flex items-center gap-1 transition-colors shrink-0 cursor-pointer"
                    >
                      {copiedField === item.label ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                          <span className="text-emerald-700 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-[#F3EFE7] rounded-lg text-xs text-stone-700 leading-relaxed border border-[#C59B27]/30">
                Please send your proof of payment (POP) to{" "}
                <a
                  href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`}
                  className="text-[#4A1525] font-semibold underline"
                >
                  {ROYAL_ORGANIZATION.contactEmail}
                </a>{" "}
                or confirm via{" "}
                <span className="font-semibold tabular-nums">081 302 7763</span> (Princess Maggie Kok Gibbs) to receive an official institutional acknowledgment letter.
              </div>
            </div>
          )}

          {selectedTab === "pledge" && (
            <div>
              {pledgeReference ? (
                <div className="p-6 space-y-4 bg-white rounded-lg border border-[#C59B27]/40">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs">
                    <Check className="w-4 h-4" />
                    <span>Official EFT Payment Reference Generated</span>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded-lg border border-stone-200 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-stone-500 block">Use This EFT Reference</span>
                      <span className="font-mono text-lg font-bold text-[#4A1525] tabular-nums">
                        {pledgeReference}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(pledgeReference, "REF_CODE")}
                      className="px-3 py-1.5 bg-white border border-stone-300 rounded-md text-xs font-semibold text-stone-800 hover:bg-stone-50 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedField === "REF_CODE" ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedField === "REF_CODE" ? "Copied" : "Copy"}</span>
                    </button>
                  </div>

                  <dl className="text-xs space-y-1.5 text-stone-700 border-t border-stone-200 pt-3">
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Donor / Organisation:</dt>
                      <dd className="font-semibold text-stone-900">{donorName}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Designated Amount:</dt>
                      <dd className="font-semibold text-stone-900 tabular-nums">R {Number(donationAmount || 0).toLocaleString()}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Programme Allocation:</dt>
                      <dd className="font-semibold text-stone-900 text-right">{designatedProgramme}</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-stone-500">Capitec Account:</dt>
                      <dd className="font-mono font-semibold text-[#4A1525] tabular-nums">
                        {ROYAL_ORGANIZATION.bankingDetails.accountNumber} (Branch {ROYAL_ORGANIZATION.bankingDetails.branchCode})
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <a
                      href={mailtoPledgeHref}
                      className="flex-1 py-2.5 px-4 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F3C969]" />
                      <span>Email Pledge & Request Invoice</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedTab("eft")}
                      className="py-2.5 px-4 bg-[#C59B27] hover:bg-[#B08920] text-stone-950 text-xs font-bold rounded-md transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Capitec EFT Details
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setPledgeReference(null)}
                    className="text-xs text-stone-500 hover:text-stone-800 underline cursor-pointer"
                  >
                    Create another pledge reference
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGeneratePledgeReference} className="space-y-4">
                  <p className="text-xs text-stone-600">
                    Generate an official tracking reference before initiating your Capitec EFT transfer or requesting a CSI grant invoice.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Contribution / Grant Amount (ZAR)
                    </label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {["350", "2500", "5000", "25000", "100000"].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setDonationAmount(amt)}
                          className={`px-3 py-1.5 text-xs rounded-md border font-medium tabular-nums transition-colors cursor-pointer ${
                            donationAmount === amt
                              ? "bg-[#4A1525] text-white border-[#4A1525]"
                              : "bg-white text-stone-700 border-stone-300 hover:border-stone-400"
                          }`}
                        >
                          R {Number(amt).toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 font-semibold text-stone-500">R</span>
                      <input
                        type="number"
                        min="50"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        required
                        className="w-full pl-8 pr-4 py-2 bg-white rounded-md border border-stone-300 text-stone-900 font-semibold tabular-nums focus:outline-none focus:ring-2 focus:ring-[#4A1525]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Donor / Organisation Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Standard Bank CSI"
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="treasury@domain.co.za"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Designated Programme
                    </label>
                    <select
                      value={designatedProgramme}
                      onChange={(e) => setDesignatedProgramme(e.target.value)}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    >
                      <option value="General Institutional Operating Fund">
                        General Institutional Operating Fund
                      </option>
                      {FLAGSHIP_PROGRAMMES.map((prog) => (
                        <option key={prog.id} value={`Programme ${prog.number}: ${prog.title}`}>
                          Programme {prog.number}: {prog.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-semibold rounded-md text-xs tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Generate EFT Reference & Pledge Brief</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
          <span className="tabular-nums">CIPC Reg: {ROYAL_ORGANIZATION.registrationNumber}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-3 py-1.5 bg-white hover:bg-stone-50 border border-stone-300 text-stone-700 rounded-md font-medium inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-md font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
