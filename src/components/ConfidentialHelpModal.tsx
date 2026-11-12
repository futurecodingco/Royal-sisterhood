import React, { useState } from "react";
import { X, ShieldAlert, PhoneCall, Lock, Heart, CheckCircle2, AlertOctagon } from "lucide-react";
import { EMERGENCY_HELPLINES } from "../data/organizationData";

interface ConfidentialHelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfidentialHelpModal: React.FC<ConfidentialHelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "whatsapp",
    contactInfo: "",
    province: "Gauteng",
    locationDetail: "Mid Ennerdale / Region G",
    supportType: "gbv-safe-haven",
    safeTime: "Anytime",
    safeCodeWord: "",
    details: "",
    isSafeToReply: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleQuickExit = () => {
    window.location.replace("https://www.google.co.za");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border-2 border-[#8B1E3F] flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="p-5 bg-[#3B0C1A] text-white flex items-start justify-between border-b border-[#8B1E3F]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>Confidential & Trauma-Informed Support Desk</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Request Emergency or Community Assistance
            </h3>
            <p className="text-xs text-neutral-300 mt-0.5">
              Strictly confidential. Handled by accredited pastoral social workers and community safe-space coordinators.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickExit}
              className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-bold flex items-center gap-1 shadow cursor-pointer"
              title="Leave site immediately"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Quick Exit</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-neutral-300 hover:text-white rounded hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F1F1F]">
          {/* Quick Immediate Helpline Callout */}
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-red-900 font-medium">
              <AlertOctagon className="w-4 h-4 text-red-600 shrink-0" />
              <span>If you are in immediate physical danger, call the National GBV Command Centre:</span>
            </div>
            <a
              href="tel:0800428428"
              className="px-3 py-1 bg-red-700 hover:bg-red-800 text-white font-bold rounded flex items-center gap-1 shrink-0 ml-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>0800 428 428</span>
            </a>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-stone-900 text-lg">Your Request Has Been Securely Queued</h4>
              <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                Our support team will contact you using strictly your indicated safe channel and preferred time window. If you specified a safe code word, our caseworker will use it before stating the purpose of the contact.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded hover:bg-[#340C18]"
                >
                  Close & Clear Session
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Type of Assistance Required *
                </label>
                <select
                  value={formData.supportType}
                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                  className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
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
                    placeholder="e.g. Maria or 'Sister M'"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Contact Method</label>
                  <select
                    value={formData.contactMethod}
                    onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                    placeholder="e.g. 'Tulip' or 'Church'"
                    value={formData.safeCodeWord}
                    onChange={(e) => setFormData({ ...formData, safeCodeWord: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Brief Context / Urgency (Do not include sensitive names if monitored)
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Share what support you need or current location in Mid Ennerdale / Johannesburg..."
                  className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs resize-none"
                />
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-stone-100 rounded border border-stone-200">
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
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 text-amber-200" />
                  <span>Submit Confidential Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
