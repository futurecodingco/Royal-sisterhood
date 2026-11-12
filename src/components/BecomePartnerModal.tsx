import React, { useState } from "react";
import { X, Handshake, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import { STRATEGIC_PARTNERS, ROYAL_ORGANIZATION } from "../data/organizationData";

interface BecomePartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BecomePartnerModal: React.FC<BecomePartnerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactPerson: "",
    roleTitle: "",
    email: "",
    phone: "",
    partnerCategory: "corporate-csi",
    selectedPillar: "all",
    investmentCapacity: "R 250k - R 1M",
    proposals: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-xl shadow-2xl border border-[#C59B27]/40 flex flex-col overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="p-6 bg-[#4A1525] text-white flex items-start justify-between border-b border-[#C59B27]/30">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#F3C969] uppercase tracking-wider">
              <Handshake className="w-4 h-4" />
              <span>National Strategic Coalition Alliance</span>
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold mt-1 text-white">
              Join the Sovereign Implementation Ecosystem
            </h3>
            <p className="text-xs text-white/80 mt-0.5">
              Partner with Royal Sisterhood AK 1 to 4 Bloodline and our accredited delivery consortium
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#1F1F1F]">
          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-lg border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-stone-900 text-lg">Partnership Submission Received</h4>
              <p className="text-xs text-stone-700 leading-relaxed max-w-md mx-auto">
                Thank you for reaching out to the Royal Sisterhood Secretariat. Our Strategic Partnerships Director and lead coordinators will review your organizational profile and schedule an introductory briefing within 2 business days.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2 bg-[#4A1525] text-white text-xs font-semibold rounded hover:bg-[#340C18]"
                >
                  Return to Ecosystem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 bg-stone-100 rounded-lg border border-stone-200 text-xs text-stone-700">
                Current anchor partners include <strong>Changing Life Ministries</strong>, <strong>Future Coding Corp</strong>, <strong>Young Investments Holdings and Consulting</strong>, and <strong>RSBC Trading</strong>.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Organization / Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anglo American CSI / Standard Bank"
                    value={formData.organizationName}
                    onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Partner Category *
                  </label>
                  <select
                    value={formData.partnerCategory}
                    onChange={(e) => setFormData({ ...formData, partnerCategory: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  >
                    <option value="corporate-csi">Corporate CSI / ESG Funder</option>
                    <option value="tech-academic">Technology / Academic Institute</option>
                    <option value="foundation-grant">Philanthropic Foundation / NLC</option>
                    <option value="government-dept">Government Department / Municipal Liaison</option>
                    <option value="traditional-council">Traditional Royal Council / House</option>
                    <option value="logistics-supply">Logistics & Supply Chain Ally</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="corporate@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Direct Telephone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 (0)11 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Primary Pillar Alignment</label>
                  <select
                    value={formData.selectedPillar}
                    onChange={(e) => setFormData({ ...formData, selectedPillar: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  >
                    <option value="all">Comprehensive Multi-Pillar Strategic MoU</option>
                    <option value="gbv">Safe Haven & GBV Rapid Response Network</option>
                    <option value="tech">Digital Literacy & Coding Labs (Future Coding Corp)</option>
                    <option value="enterprise">SMME Development (Young Investments)</option>
                    <option value="food">Food Security & Logistics (RSBC Trading)</option>
                    <option value="spiritual">Trauma Healing (Changing Life Ministries)</option>
                    <option value="heritage">Griqua Lineage & National Imbizo Unification</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Investment / Co-Funding Range</label>
                  <select
                    value={formData.investmentCapacity}
                    onChange={(e) => setFormData({ ...formData, investmentCapacity: e.target.value })}
                    className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs"
                  >
                    <option value="R 50k - R 250k">R 50,000 – R 250,000 (Programme Sponsor)</option>
                    <option value="R 250k - R 1M">R 250,000 – R 1,000,000 (Strategic Co-Deliverer)</option>
                    <option value="R 1M - R 5M">R 1,000,000 – R 5,000,000 (Anchor Provincial Funder)</option>
                    <option value="R 5M+">R 5,000,000+ (National Multi-Year Partner)</option>
                    <option value="In-Kind">In-Kind Equipment / Infrastructure / Technology</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Proposed Strategic Contribution / Scope of Collaboration
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.proposals}
                  onChange={(e) => setFormData({ ...formData, proposals: e.target.value })}
                  placeholder="Outline your strategic objectives, intended geographic footprint, and alignment with the Royal Sisterhood's mission..."
                  className="w-full px-3 py-2 bg-white rounded border border-stone-300 text-xs resize-none"
                />
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
                  className="px-6 py-2.5 bg-[#4A1525] hover:bg-[#340C18] text-white text-xs font-bold uppercase tracking-wider rounded shadow transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Handshake className="w-3.5 h-3.5 text-[#F3C969]" />
                  <span>Submit Partnership Proposal</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
