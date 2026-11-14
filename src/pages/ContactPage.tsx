import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Crown, Clock, Building, Copy, Check } from "lucide-react";
import { ROYAL_ORGANIZATION } from "../data/organizationData";
import { PageHeroBanner } from "../components/PageHeroBanner";

export const ContactPage: React.FC = () => {
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);
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
    setReferenceId(`RS-SEC-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${ROYAL_ORGANIZATION.headquarters.address}, ${ROYAL_ORGANIZATION.headquarters.city}, ${ROYAL_ORGANIZATION.headquarters.province}, ${ROYAL_ORGANIZATION.headquarters.postalCode}`
    );
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const inquiryMailto = `mailto:${ROYAL_ORGANIZATION.contactEmail}?subject=${encodeURIComponent(
    `[${referenceId || "INQUIRY"}] ${formData.subject || "Secretariat Inquiry"}`
  )}&body=${encodeURIComponent(
    `Reference: ${referenceId}\nCategory: ${formData.category}\nName: ${formData.name}\nOrganisation: ${formData.organization || "Individual"}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nDetails:\n${formData.message}`
  )}`;

  return (
    <div className="space-y-16 pb-20">
      <PageHeroBanner
        kickerIcon={<Crown className="w-4 h-4 shrink-0" />}
        kickerText="Royal Secretariat & Operational Headquarters"
        title="Connect With the Royal House"
        subtitle="Headquartered in Mid Ennerdale, Johannesburg. Reach the Founding Royal Princesses, our strategic co-delivery directors, or the emergency community desk."
      />

      {/* Main Grid: Form on Left, Location & Office on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8B1E3F]">
              Direct Inquiries
            </span>
            <h2 className="font-cinzel text-2xl font-bold text-[#4A1525] mt-1 mb-2">
              Secretariat Inquiry Intake
            </h2>
            <p className="text-xs text-stone-600 mb-6 leading-relaxed">
              Prepare a structured inquiry for the executive secretariat, or reach our directors directly by telephone.
            </p>

            {referenceId ? (
              <div className="p-6 bg-[#FAF8F5] rounded-lg border border-emerald-300 space-y-4">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <span>Secretariat Brief Prepared · {referenceId}</span>
                </div>
                <p className="text-xs text-stone-700 leading-relaxed">
                  Click below to transmit your inquiry directly to{" "}
                  <strong className="text-[#4A1525]">{ROYAL_ORGANIZATION.contactEmail}</strong> via your email client, or call Princess Maggie Kok Gibbs (081 302 7763) / Princess Cornelia Eva Julius (066 586 2829).
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={inquiryMailto}
                    className="px-5 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-semibold rounded-md inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#F3C969]" />
                    <span>Open & Send Email</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setReferenceId(null)}
                    className="px-4 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-medium rounded-md cursor-pointer"
                  >
                    Edit or Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Inquiry Classification *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white rounded-md border border-stone-300 text-xs font-medium focus:ring-2 focus:ring-[#4A1525] focus:outline-none"
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
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Organisation / Company (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Standard Bank / NGO"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
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
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 11 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs tabular-nums"
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
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
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
                    placeholder="Provide background context, proposed dates, or partnership objectives..."
                    className="w-full px-3 py-2 bg-white rounded-md border border-stone-300 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#4A1525] hover:bg-[#340C18] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#F3C969]" />
                  <span>Prepare Inquiry for Secretariat</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Location & Secretariat Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F3EFE7] rounded-xl border border-[#C59B27]/40 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A1525] uppercase tracking-wider">
                <Building className="w-4 h-4 text-[#C59B27]" />
                <span>Headquarters & Community Hall</span>
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#4A1525]">
                Mid Ennerdale Executive Secretariat
              </h3>

              <div className="space-y-3.5 text-xs text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <strong className="block text-stone-900">Physical Domicile</strong>
                    <span>{ROYAL_ORGANIZATION.headquarters.address}</span>
                    <span className="block tabular-nums">
                      {ROYAL_ORGANIZATION.headquarters.city}, {ROYAL_ORGANIZATION.headquarters.province}, {ROYAL_ORGANIZATION.headquarters.postalCode}
                    </span>
                    <span className="text-stone-500 text-[11px] block mt-0.5">
                      Region G, City of Johannesburg Metropolitan Municipality
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-stone-300 rounded text-[11px] font-medium text-stone-700 hover:bg-stone-50 cursor-pointer"
                    >
                      {copiedAddress ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedAddress ? "Address Copied" : "Copy Physical Address"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-300/70">
                  <Mail className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Official Electronic Mail</strong>
                    <a href={`mailto:${ROYAL_ORGANIZATION.contactEmail}`} className="underline hover:text-[#4A1525]">
                      {ROYAL_ORGANIZATION.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-300/70">
                  <Phone className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div className="space-y-1 tabular-nums">
                    <strong className="block text-stone-900">Founding Directors Direct Contact</strong>
                    <a href="tel:0813027763" className="block hover:text-[#4A1525] underline">
                      Princess Maggie Kok Gibbs: 081 302 7763
                    </a>
                    <a href="tel:0665862829" className="block hover:text-[#4A1525] underline">
                      Princess Cornelia Eva Julius: 066 586 2829
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-stone-300/70">
                  <Clock className="w-4 h-4 text-[#8B1E3F] shrink-0 mt-0.5" />
                  <div className="tabular-nums">
                    <strong className="block text-stone-900">Operating Hours</strong>
                    <span>Monday – Friday: 08:30 – 16:30</span>
                    <span className="block text-[11px] text-stone-500">
                      Emergency GBV desk operational 24/7/365
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gazette / Direct Updates */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-3">
              <h4 className="font-cinzel text-sm font-bold text-[#4A1525]">
                Quarterly Royal Impact Gazette
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Receive programme updates across our 6 national flagship initiatives and Griqua unification assemblies.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-md text-xs font-medium flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Gazette request prepared for {newsletterEmail}</span>
                  </span>
                  <a
                    href={`mailto:${ROYAL_ORGANIZATION.contactEmail}?subject=${encodeURIComponent(
                      "Quarterly Royal Impact Gazette Subscription"
                    )}&body=${encodeURIComponent(`Please add ${newsletterEmail} to the Quarterly Royal Impact Gazette distribution list.`)}`}
                    className="underline font-semibold whitespace-nowrap"
                  >
                    Confirm via Email
                  </a>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter official email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white rounded-md border border-stone-300 text-xs"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded-md hover:bg-[#340C18] transition-colors cursor-pointer whitespace-nowrap"
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
