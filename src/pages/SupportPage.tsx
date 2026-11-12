import React, { useState } from "react";
import { ShieldAlert, PhoneCall, Lock, Heart, CheckCircle2, AlertTriangle, ExternalLink, HelpCircle, FileText, MapPin } from "lucide-react";
import { EMERGENCY_HELPLINES, ROYAL_ORGANIZATION } from "../data/organizationData";

export const SupportPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* High-Contrast Emergency Banner */}
      <section className="bg-[#6B142D] text-white py-12 px-4 sm:px-6 border-b-4 border-[#C59B27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/30 text-amber-200 text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-300" />
              <span>Immediate Life-Threatening Danger Hotline</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
              GBV Emergency & Survivor Safe Desk
            </h1>
            <p className="text-sm text-neutral-200 max-w-2xl leading-relaxed">
              If you or someone you know is in immediate peril, call the 24/7 toll-free national helplines immediately. You are not alone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:0800428428"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#6B142D] hover:bg-neutral-100 font-extrabold text-sm uppercase tracking-wider rounded-lg shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-red-700" />
              <span>0800 428 428 (Toll-Free)</span>
            </a>

            <button
              onClick={handleQuickExit}
              className="w-full sm:w-auto px-5 py-3.5 bg-black/40 hover:bg-black/60 border border-white/40 text-amber-300 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer"
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
                <span className="text-[10px] font-mono uppercase font-bold text-[#8B1E3F] block">
                  {line.type}
                </span>
                <h3 className="font-cinzel text-base font-bold text-stone-900 mt-1">
                  {line.name}
                </h3>
                <span className="text-xs text-stone-500 block mt-0.5">{line.hours}</span>
                <p className="text-[11px] text-stone-600 mt-2">{line.alt}</p>
              </div>

              <a
                href={`tel:${line.phone.replace(/\s+/g, "")}`}
                className="mt-4 w-full py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold rounded flex items-center justify-center gap-1.5 transition-colors"
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
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8B1E3F] uppercase tracking-wider mb-2">
              <Lock className="w-4 h-4" />
              <span>Confidential Community Intake</span>
            </div>
            <h2 className="font-cinzel text-2xl font-bold text-[#4A1525]">
              Request Discreet Assistance or Safe Relocation
            </h2>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed">
              Our caseworkers in Mid Ennerdale and Johannesburg respect your privacy and will never place you at risk. We only respond via your designated safe communication preference.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-stone-900 text-lg">Confidential Intake Queued</h3>
                <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                  A trauma-informed pastoral caseworker will reach out strictly during your indicated safe window. Please consider clearing your browser history if you share this device.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Nature of Support Needed *
                  </label>
                  <select
                    value={formData.supportType}
                    onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded border border-stone-300 text-xs focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
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
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Discreet Channel</label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                      placeholder="e.g. 'Sunflower'"
                      value={formData.safeCodeWord}
                      onChange={(e) => setFormData({ ...formData, safeCodeWord: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
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
                    placeholder="Describe your situation or the location where assistance is needed..."
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#8B1E3F] hover:bg-[#6D1530] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-amber-200" />
                  <span>Submit Confidential Safe Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Safety Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Safety Plan Checklist */}
            <div className="bg-[#FAF5EE] rounded-2xl border border-[#C59B27]/40 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#C59B27]" />
                <span>Survivor Emergency Safety Plan</span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#4A1525]">
                Immediate Steps If Planning to Leave
              </h3>
              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Identify a Safe Haven:</strong> Know where you can go at a moment's notice—a trusted neighbour, church, or our Mid Ennerdale safe house.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Keep an Emergency Grab-Bag:</strong> ID books, birth certificates of children, clinic cards, medication, and duplicate house/car keys.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Establish a Code Word:</strong> Agree on a secret word with a family member or friend that signals you need police called immediately.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#4A1525] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    <strong>Digital Footprint:</strong> Clear your browser history, log out of shared Google accounts, or browse in incognito mode.
                  </span>
                </li>
              </ul>
            </div>

            {/* Mid Ennerdale Physical Desk */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#8B1E3F]" />
                <span>Mid Ennerdale Community Hub</span>
              </div>
              <h4 className="font-cinzel text-base font-bold text-[#4A1525]">
                In-Person Walk-In Desk
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                2445 5th Avenue, Mid Ennerdale, Johannesburg, 1830. Open weekdays 08:30 – 16:30 for discreet intake, food parcels, and trauma support.
              </p>
              <div className="pt-2">
                <span className="text-[11px] font-mono text-[#8B1E3F]">
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
