import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "GDPR Compliance | MH Digital Solutions",
  description:
    "Learn about MH Digital Solutions GDPR compliance and how we protect your personal data in accordance with European data protection regulations.",
  canonical: "https://www.mhdigitalsolution.com/gdpr",
}

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-light-pink to-light-orange">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-coral hover:text-deep-purple transition-colors mb-8 animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-coral" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-deep-purple to-coral bg-clip-text text-transparent">
                GDPR Compliance
              </h1>
            </div>

            <div className="prose prose-lg max-w-none text-text-gray space-y-8">
              <p className="text-lg leading-relaxed">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <section className="animate-fade-in animation-delay-200">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6" />
                  Our Commitment to GDPR
                </h2>
                <p>
                  MH Digital Solutions is committed to protecting your personal data and respecting your privacy rights
                  in accordance with the General Data Protection Regulation (GDPR). This page explains how we comply
                  with GDPR requirements and what rights you have regarding your personal data.
                </p>
              </section>

              <section className="animate-fade-in animation-delay-400">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Legal Basis for Processing</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-light-pink/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Legitimate Interest</h3>
                    <p className="text-sm">Processing necessary for our legitimate business interests</p>
                  </div>
                  <div className="bg-light-orange/30 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Consent</h3>
                    <p className="text-sm">When you explicitly agree to data processing</p>
                  </div>
                  <div className="bg-cream/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Contract Performance</h3>
                    <p className="text-sm">Processing necessary to fulfill our services</p>
                  </div>
                  <div className="bg-gradient-to-r from-coral/10 to-deep-purple/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-coral mb-2">Legal Obligation</h3>
                    <p className="text-sm">When required by law or regulation</p>
                  </div>
                </div>
              </section>

              <section className="animate-fade-in animation-delay-600">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4 flex items-center gap-2">
                  <UserCheck className="w-6 h-6" />
                  Your GDPR Rights
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-coral pl-4">
                    <h3 className="font-semibold text-coral mb-1">Right to Access</h3>
                    <p>You can request a copy of the personal data we hold about you.</p>
                  </div>
                  <div className="border-l-4 border-deep-purple pl-4">
                    <h3 className="font-semibold text-deep-purple mb-1">Right to Rectification</h3>
                    <p>You can ask us to correct inaccurate or incomplete personal data.</p>
                  </div>
                  <div className="border-l-4 border-coral pl-4">
                    <h3 className="font-semibold text-coral mb-1">Right to Erasure</h3>
                    <p>You can request deletion of your personal data in certain circumstances.</p>
                  </div>
                  <div className="border-l-4 border-deep-purple pl-4">
                    <h3 className="font-semibold text-deep-purple mb-1">Right to Data Portability</h3>
                    <p>You can request your data in a structured, machine-readable format.</p>
                  </div>
                  <div className="border-l-4 border-coral pl-4">
                    <h3 className="font-semibold text-coral mb-1">Right to Object</h3>
                    <p>You can object to processing based on legitimate interests or direct marketing.</p>
                  </div>
                </div>
              </section>

              <section className="animate-fade-in animation-delay-800">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Data Protection Measures</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <Lock className="w-8 h-8 text-coral mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Encryption</h3>
                    <p className="text-sm">All data is encrypted in transit and at rest</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <Shield className="w-8 h-8 text-deep-purple mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Access Controls</h3>
                    <p className="text-sm">Strict access controls and authentication</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <Eye className="w-8 h-8 text-coral mx-auto mb-2" />
                    <h3 className="font-semibold mb-2">Monitoring</h3>
                    <p className="text-sm">Continuous monitoring and audit trails</p>
                  </div>
                </div>
              </section>

              <section className="animate-fade-in animation-delay-1000">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was
                  collected, comply with legal obligations, resolve disputes, and enforce our agreements. Specific
                  retention periods vary depending on the type of data and the purpose for processing.
                </p>
              </section>

              <section className="animate-fade-in animation-delay-1200">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">International Transfers</h2>
                <p>
                  When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate
                  safeguards are in place, such as Standard Contractual Clauses or adequacy decisions by the European
                  Commission.
                </p>
              </section>

              <section className="animate-fade-in animation-delay-1400">
                <h2 className="text-2xl font-semibold text-deep-purple mb-4">Contact Our Data Protection Officer</h2>
                <p>
                  If you have any questions about our GDPR compliance or wish to exercise your rights, please contact
                  us:
                </p>
                <div className="bg-gradient-to-r from-coral/10 to-deep-purple/10 p-6 rounded-lg mt-4">
                  <p>
                    <strong>Data Protection Officer:</strong> privacy@mhdigitalsolution.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1(757)550-4040
                  </p>
                  <p>
                    <strong>Address:</strong> MH Digital Solutions, Privacy Department
                  </p>
                  <p className="mt-2 text-sm text-text-gray/70">
                    We will respond to your request within 30 days as required by GDPR.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
