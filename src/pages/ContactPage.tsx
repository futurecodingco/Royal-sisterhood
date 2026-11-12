import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Crown, ShieldAlert, Clock, Building, Compass } from "lucide-react";
import { ROYAL_ORGANIZATION } from "../data/organizationData";

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [formData, setFormData] = useState({
    category: "csi-funding",
    name: "",
    organization: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#340B18] via-[#4A1525] to-[#2D0B16] text-white py-16 px-4 sm:px-6 border-b border-[#C59B27]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-heritage-pattern opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-[#F3C969] text-xs font-semibold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Royal Secretariat & Operational Headquarters</span>
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Connect With the Royal House
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-3xl leading-relaxed font-light">
            Headquartered in Mid Ennerdale, Johannesburg. Reach the Royal Princesses, our strategic co-delivery directors, or the emergency community desk.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Location & Office on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-8 shadow-sm">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8B1E3F]">
              Direct Inquiries
            </span>
            <h2 className="font-cinzel text-2xl font-bold text-[#4A1525] mt-1 mb-2">
              Secretariat Inquiry Intake
            </h2>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed">
              Inquiries are reviewed daily by the executive secretariat and routed directly to the appropriate directorate.
            </p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-stone-900 text-lg">Inquiry Received by Royal Secretariat</h3>
                <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                  Thank you for contacting Royal Sisterhood AK 1 to 4 Bloodline. A formal response will be dispatched to your email address within 24 to 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Inquiry Classification *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
                  >
                    <option value="csi-funding">Corporate CSI / Foundation Grant Due Diligence</option>
                    <option value="strategic-partnership">Strategic Coalition Partnership (MoU)</option>
                    <option value="royal-liaison">Royal House & Traditional Council Liaison</option>
                    <option value="gbv-support">Confidential GBV / Community Welfare Assistance</option>
                    <option value="media-press">Media, Academic Research & Press Inquiries</option>
                    <option value="volunteer-youth">Volunteer & Youth Tech Skills Enrollment</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Standard Bank / Anglo / NGO"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@domain.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 (0)11 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief summary of your inquiry..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide full background context, proposed dates, or partnership objectives..."
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-bold text-xs uppercase tracking-wider rounded shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#F3C969]" />
                  <span>Transmit Inquiry to Secretariat</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Location & Secretariat Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Profile */}
            <div className="bg-[#FAF5EE] rounded-2xl border border-[#C59B27]/40 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                <Building className="w-4 h-4 text-[#C59B27]" />
                <span>Headquarters & Community Hall</span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#4A1525]">
                Mid Ennerdale Executive Secretariat
              </h3>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Physical Domicile:</strong>
                    <span>{ROYAL_ORGANIZATION.headquarters.address}</span>
                    <span className="block">{ROYAL_ORGANIZATION.headquarters.city}, {ROYAL_ORGANIZATION.headquarters.province}, {ROYAL_ORGANIZATION.headquarters.postalCode}</span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">Region G, City of Johannesburg Metropolitan Municipality</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Official Electronic Mail:</strong>
                    <a href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`} className="underline hover:text-[#4A1525]">
                      {ROYAL_ORGANIZATION.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Secretariat Switchboard:</strong>
                    <span>{ROYAL_ORGANIZATION.secretariatPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Operating Hours:</strong>
                    <span>Monday – Friday: 08:30 – 16:30</span>
                    <span className="block text-[11px] text-stone-500">Emergency GBV desk operational 24/7/365</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Representation */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-800">
                  <Compass className="w-4 h-4 text-[#4A1525]" />
                  <span>Johannesburg South / Mid Ennerdale Hub</span>
                </div>
                <span className="text-[10px] font-mono text-[#8B1E3F] font-bold">1830 GP</span>
              </div>

              {/* Stylized Map View */}
              <div className="h-48 bg-stone-200 relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
                
                {/* Visual landmark pin */}
                <div className="relative text-center p-4 bg-white/95 rounded-xl shadow-lg border border-stone-300 max-w-xs backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-[#4A1525] text-[#C59B27] flex items-center justify-center mx-auto mb-1.5 shadow">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-[#4A1525]">
                    2445 5th Ave, Mid Ennerdale
                  </h4>
                  <p className="text-[11px] text-stone-600 mt-0.5">
                    Central hub for food distribution, women's tech labs, and royal council assemblies.
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[#4A1525]">
                Quarterly Royal Impact Gazette
              </h4>
              <p className="text-xs text-stone-600">
                Receive audited progress reports on our 6 flagship programmes and national Griqua unification updates.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-100 text-emerald-800 rounded text-xs font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed successfully to the quarterly gazette.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter official email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#4A1525] text-white text-xs font-bold rounded hover:bg-[#340C18] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
