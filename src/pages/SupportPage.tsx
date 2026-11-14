import React, { useState } from "react";
import { ShieldAlert, PhoneCall, Lock, Heart, CheckCircle2, FileText, MapPin, Copy, Check } from "lucide-react";
import { EMERGENCY_HELPLINES, ROYAL_ORGANIZATION } from "../data/organizationData";

export const SupportPage: React.FC = () => {
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "whatsapp",
    contactInfo: "",
    supportType: "gbv-safe-haven",
    urgency: "urgent",
    safeTime: "Anytime",
    safeCodeWord: "",
    message: "",
  });

  const handleQuickExit = () => {
    window.location.replace("https://www.google.co.za");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReferenceId(`RS-CARE-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  const handleCopySummary = () => {
    const text = [
      `Support Reference: ${referenceId}`,
      `Safe Name: ${formData.name}`,
      `Channel: ${formData.contactMethod} (${formData.contactInfo})`,
      `Urgency: ${formData.urgency}`,
      `Safe Code Word: ${formData.safeCodeWord || "None"}`,
      `Support Needed: ${formData.supportType}`,
      `Details: ${formData.message || "N/A"}`,
    ].join("\n");
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleClearForm = () => {
    setReferenceId(null);
    setFormData({
      name: "",
      contactMethod: "whatsapp",
      contactInfo: "",
      supportType: "gbv-safe-haven",
      urgency: "urgent",
      safeTime: "Anytime",
      safeCodeWord: "",
      message: "",
    });
  };

  return (
    <div className="space-y-16 pb-20">
      {/* High-Contrast Emergency Banner */}
      <section className="bg-[#6B142D] text-white py-12 px-4 sm:px-6 border-b-2 border-[#C59B27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-200 text-xs font-semibold tracking-wide">
              <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Immediate Life-Threatening Danger Hotline</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white text-balance">
              GBV Emergency & Survivor Safe Desk
            </h1>
            <p className="text-sm text-stone-100 max-w-2xl leading-relaxed font-normal">
              If you or someone you know is in immediate peril, call the 24/7 toll-free national helplines immediately. You are not alone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:0800428428"
              className="w-full sm:w-auto px-5 py-3 bg-white text-[#6B142D] hover:bg-stone-100 font-bold text-sm rounded-md shadow-lg flex items-center justify-center gap-2 transition-colors cursor-pointer tabular-nums whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-red-700" />
              <span>0800 428 428 (Toll-Free)</span>
            </a>

            <button
              type="button"
              onClick={handleQuickExit}
              className="w-full sm:w-auto px-5 py-3 bg-black/45 hover:bg-black/65 border border-white/40 text-amber-200 font-semibold text-xs uppercase tracking-wider rounded-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Quick Exit to Google</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 Emergency Helplines Direct Dial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EMERGENCY_HELPLINES.map((line, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm hover:border-[#8B1E3F] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-[#8B1E3F] block">
                  {line.type}
                </span>
                <h3 className="font-cinzel text-base font-bold text-stone-900 mt-1">
                  {line.name}
                </h3>
                <span className="text-xs text-stone-500 block mt-0.5">{line.hours}</span>
                <p className="text-[11px] text-stone-600 mt-2 tabular-nums">{line.alt}</p>
              </div>

              <a
                href={`tel:${line.phone.replace(/\s+/g, "")}`}
                className="mt-4 w-full py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md flex items-center justify-center gap-1.5 transition-colors tabular-nums"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F3C969]" />
                <span>Call {line.phone}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Main Support Grid: Form on Left, Safety Checklist on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1E3F] mb-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span>Confidential Community Intake</span>
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
              Request Discreet Assistance or Safe Relocation
            </h2>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed mt-1">
              Our coordinators in Mid Ennerdale and Johannesburg respect your privacy and respond strictly via your designated safe communication channel.
            </p>

            {referenceId ? (
              <div className="p-6 bg-[#FAF8F5] rounded-lg border border-emerald-300 space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Confidential Intake Prepared · {referenceId}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Your support request summary is ready. For rapid response from our Mid Ennerdale welfare desk, call Princess Maggie Kok Gibbs directly on{" "}
                  <a href="tel:0813027763" className="font-semibold text-[#4A1525] underline tabular-nums">
                    081 302 7763
                  </a>{" "}
                  or dispatch via a safe email account.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`mailto:${ROYAL_ORGANIZATION.contactEmail}?subject=${encodeURIComponent(
                      `Confidential Intake ${referenceId}`
                    )}&body=${encodeURIComponent(
                      `Reference: ${referenceId}\nName/Alias: ${formData.name}\nChannel: ${formData.contactMethod} (${formData.contactInfo})\nUrgency: ${formData.urgency}\nCode Word: ${formData.safeCodeWord || "None"}\nSupport Needed: ${formData.supportType}\nMessage: ${formData.message}`
                    )}`}
                    className="px-4 py-2.5 bg-[#8B1E3F] hover:bg-[#6D1530] text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    Send via Safe Email
                  </a>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="px-3.5 py-2.5 bg-white border border-stone-300 text-stone-800 text-xs font-medium rounded-md hover:bg-stone-50 flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSummary ? "Copied" : "Copy Summary"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleClearForm}
                    className="px-4 py-2.5 bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold rounded-md cursor-pointer"
                  >
                    Clear Form Data
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nature of Support Needed *
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-md border border-stone-300 text-xs focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
                  >
                    <option value="gbv-safe-haven">Safe Haven Shelter / Emergency Domestic Relocation</option>
                    <option value="trauma-counseling">Pastoral Trauma Counseling & Family Reconciliation (Changing Life)</option>
                    <option value="court-accompaniment">Court Accompaniment & Protection Order Processing</option>
                    <option value="food-dignity">Emergency Food Parcel & Sanitary Dignity Pack</option>
                    <option value="substance-abuse">Youth Substance Abuse & Gang Intervention</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Safe Name or Pseudonym *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sister T / Anonymous"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Safe Contact Info (Phone / WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="082 000 0000"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Discreet Channel</label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    >
                      <option value="whatsapp">Discreet WhatsApp</option>
                      <option value="phone">Direct Phone Call</option>
                      <option value="sms">SMS Text</option>
                      <option value="in-person">In-Person (Mid Ennerdale)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Urgency Level</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    >
                      <option value="immediate">Immediate Danger (Within 1 Hour)</option>
                      <option value="today">Today (Within 6 Hours)</option>
                      <option value="routine">Routine Support / Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Safe Code Word</label>
                    <input
                      type="text"
                      placeholder="e.g. Sunflower"
                      value={formData.safeCodeWord}
                      onChange={(e) => setFormData({ ...formData, safeCodeWord: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Message / Current Circumstances (Keep names anonymous if unsafe)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your situation or the general area where assistance is needed..."
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-amber-200" />
                  <span>Prepare Confidential Safe Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Safety Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F3EFE7] rounded-xl border border-[#C59B27]/40 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#C59B27]" />
                <span>Survivor Emergency Safety Plan</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525]">
                Immediate Steps If Planning to Leave
              </h3>
              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 tabular-nums">
                    1
                  </span>
                  <span>
                    <strong>Identify a Safe Haven:</strong> Know where you can go at a moment’s notice—a trusted neighbour, church, or our Mid Ennerdale safe house.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 tabular-nums">
                    2
                  </span>
                  <span>
                    <strong>Keep an Emergency Grab-Bag:</strong> ID books, birth certificates of children, clinic cards, medication, and duplicate house or car keys.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 tabular-nums">
                    3
                  </span>
                  <span>
                    <strong>Establish a Code Word:</strong> Agree on a secret word with a family member or friend that signals you need police called immediately.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 tabular-nums">
                    4
                  </span>
                  <span>
                    <strong>Digital Footprint:</strong> Clear your browser history, log out of shared accounts, or browse in private/incognito mode.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1E3F]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Mid Ennerdale Community Hub</span>
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#4A1525]">
                In-Person Walk-In Desk
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed tabular-nums">
                2445 5th Avenue, Mid Ennerdale, Johannesburg, 1830. Open weekdays 08:30 – 16:30 for discreet intake, food parcels, and trauma support.
              </p>
              <div className="pt-2 border-t border-stone-100 text-xs text-stone-700 space-y-1 tabular-nums">
                <a href="tel:0813027763" className="block font-semibold text-[#4A1525] hover:underline">
                  Community Welfare Desk: 081 302 7763
                </a>
                <span className="text-[11px] text-stone-500 block">
                  Coordinated with Changing Life Ministries pastoral field officers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
