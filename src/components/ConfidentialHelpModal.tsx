import React, { useState } from "react";
import { X, ShieldAlert, PhoneCall, Lock, Heart, CheckCircle2, AlertOctagon, Copy, Check } from "lucide-react";
import { ROYAL_ORGANIZATION } from "../data/organizationData";

interface ConfidentialHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfidentialHelpModal: React.FC<ConfidentialHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "whatsapp",
    contactInfo: "",
    supportType: "gbv-safe-haven",
    safeTime: "Anytime",
    safeCodeWord: "",
    details: "",
    isSafeToReply: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `RS-SAFE-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(code);
  };

  const handleResetAndClose = () => {
    setReferenceId(null);
    setFormData({
      name: "",
      contactMethod: "whatsapp",
      contactInfo: "",
      supportType: "gbv-safe-haven",
      safeTime: "Anytime",
      safeCodeWord: "",
      details: "",
      isSafeToReply: true,
    });
    onClose();
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.co.za");
  };

  const handleCopyBrief = () => {
    const summary = [
      `Confidential Reference: ${referenceId}`,
      `Name / Pseudonym: ${formData.name}`,
      `Safe Channel: ${formData.contactMethod} (${formData.contactInfo})`,
      `Safe Time: ${formData.safeTime}`,
      `Safe Code Word: ${formData.safeCodeWord || "None specified"}`,
      `Support Type: ${formData.supportType}`,
      `Notes: ${formData.details || "N/A"}`,
    ].join("\n");
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confidential-help-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border-2 border-[#8B1E3F] flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#3B0C1A] text-white flex items-start justify-between border-b border-[#8B1E3F]">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>Confidential & Trauma-Informed Support Desk</span>
            </div>
            <h3 id="confidential-help-title" className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Request Emergency or Community Assistance
            </h3>
            <p className="text-xs text-stone-200 mt-0.5">
              Strictly confidential intake routed to Mid Ennerdale safe-space coordinators and Changing Life Ministries.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleQuickExit}
              className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-md text-xs font-bold flex items-center gap-1 cursor-pointer whitespace-nowrap"
              title="Leave site immediately"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Quick Exit</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close assistance modal"
              className="p-1.5 text-stone-300 hover:text-white rounded-md hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F1F1F]">
          {/* Immediate Helpline Callout */}
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 text-red-900 font-medium">
              <AlertOctagon className="w-4 h-4 text-red-700 shrink-0" />
              <span>If you are in immediate physical danger, call the 24/7 National GBV Command Centre:</span>
            </div>
            <a
              href="tel:0800428428"
              className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white font-bold rounded-md flex items-center gap-1.5 shrink-0 tabular-nums"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0800 428 428</span>
            </a>
          </div>

          {referenceId ? (
            <div className="p-6 bg-white rounded-lg border border-emerald-300 space-y-4">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>Support Intake Prepared · Reference {referenceId}</span>
              </div>
              <p className="text-xs text-stone-700 leading-relaxed">
                For immediate action by our Mid Ennerdale safe-space coordinators, reach out directly using a safe device or call our crisis line. If you specified a safe code word, mention it first.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                <a
                  href="tel:0813027763"
                  className="py-2.5 px-4 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-semibold rounded-md flex items-center justify-center gap-1.5 tabular-nums"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Princess Maggie: 081 302 7763</span>
                </a>
                <a
                  href={`mailto:${ROYAL_ORGANIZATION.contactEmail}?subject=${encodeURIComponent(
                    `Confidential Support Request ${referenceId}`
                  )}&body=${encodeURIComponent(
                    `Reference: ${referenceId}\nName/Alias: ${formData.name}\nSafe Contact: ${formData.contactMethod} - ${formData.contactInfo}\nSafe Time: ${formData.safeTime}\nCode Word: ${formData.safeCodeWord || "None"}\nSupport Needed: ${formData.supportType}\nDetails: ${formData.details}`
                  )}`}
                  className="py-2.5 px-4 bg-[#4A1525] hover:bg-[#340C18] text-white font-semibold rounded-md flex items-center justify-center gap-1.5"
                >
                  <span>Send via Safe Email</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleCopyBrief}
                  className="px-3 py-1.5 border border-stone-300 rounded-md text-xs font-medium text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSummary ? "Copied Summary" : "Copy Request Summary"}</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-md cursor-pointer"
                >
                  Clear Form & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Type of Assistance Required *
                </label>
                <select
                  value={formData.supportType}
                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
                >
                  <option value="gbv-safe-haven">Safe Haven Shelter / Emergency Domestic Relocation</option>
                  <option value="trauma-counseling">Trauma Counseling & Psychological Support (Pastoral/Social Work)</option>
                  <option value="legal-court">Court Accompaniment & Protection Order Guidance</option>
                  <option value="food-dignity">Emergency Food Parcel & Family Dignity Pack</option>
                  <option value="youth-mentorship">Youth At-Risk Outreach & Substance Abuse Referral</option>
                  <option value="general-welfare">General Royal House Welfare Assessment</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Name or Safe Pseudonym *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria or Sister M"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Safe Contact Number / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="082 123 4567"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Contact Method</label>
                  <select
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                  >
                    <option value="whatsapp">Discreet WhatsApp Message</option>
                    <option value="phone">Phone Call Only</option>
                    <option value="sms">Discreet SMS Only</option>
                    <option value="in-person">In-Person at Mid Ennerdale</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Safe Time Window</label>
                  <select
                    value={formData.safeTime}
                    onChange={(e) => setFormData({ ...formData, safeTime: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                  >
                    <option value="Anytime">Anytime (Safe)</option>
                    <option value="Morning">Mornings (08:00 - 12:00)</option>
                    <option value="Afternoon">Afternoons (12:00 - 17:00)</option>
                    <option value="Evening">Evenings (17:00 - 20:00)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Safe Code Word (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tulip"
                    value={formData.safeCodeWord}
                    onChange={(e) => setFormData({ ...formData, safeCodeWord: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brief Context (Avoid names if your device is monitored)
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Share what support you need or general area..."
                  className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs resize-none"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-stone-100 rounded-md border border-stone-200">
                <input
                  type="checkbox"
                  id="safetyCheck"
                  checked={formData.isSafeToReply}
                  onChange={(e) => setFormData({ ...formData, isSafeToReply: e.target.checked })}
                  className="rounded text-[#4A1525] focus:ring-[#4A1525]"
                />
                <label htmlFor="safetyCheck" className="text-xs text-stone-700 cursor-pointer">
                  I confirm it is safe to contact me via the details provided above.
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-amber-200" />
                  <span>Prepare Confidential Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
