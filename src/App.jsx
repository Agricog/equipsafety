import { useState } from 'react'
import { Shield, Globe, QrCode, CheckCircle, AlertTriangle, Clock, Users, FileText, Zap } from 'lucide-react'
import CQCCompliance from './CQCCompliance'
import Privacy from './Privacy'
import TermsOfService from './TermsOfService'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  if (currentPage === 'cqc') {
    return <CQCCompliance />
  }

  if (currentPage === 'privacy') {
    return <Privacy />
  }

  if (currentPage === 'terms') {
    return <TermsOfService />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">EquipSafety</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage('cqc')}
              className="text-white hover:text-orange-500 font-semibold transition-colors"
            >
              CQC Compliance
            </button>
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Industry-Leading Safety Solution
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Protecting People from Equipment Accidents Before They Occur—Across All Languages
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Multilingual safety instructions, training confirmations, and real-time manager alerts—all triggered by one QR code scan on your equipment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
                >
                  Get Your Free Safety Audit (Worth £500)
                </a>
                <a 
                  href="#how-it-works" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
              <div className="bg-white rounded-xl p-8 text-center">
                <QrCode className="w-32 h-32 mx-auto text-blue-900 mb-4" />
                <p className="text-blue-900 font-semibold text-lg">
                  Scan. Complete Training. Instant Proof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm md:text-base font-semibold text-gray-700">No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm md:text-base font-semibold text-gray-700">CQC Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="text-sm md:text-base font-semibold text-gray-700">Live within 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm md:text-base font-semibold text-gray-700">90+ Languages</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Hidden Cost of Language Barriers in Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Care facilities employ multilingual staff. Equipment comes with English-only instructions. The result? Preventable accidents, training gaps, and CQC compliance risks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">£15,000+</div>
              <p className="text-gray-700 font-semibold mb-2">Average Cost Per Incident</p>
              <p className="text-gray-600">Equipment misuse leads to staff injuries, resident incidents, downtime, and potential legal claims.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">40%+</div>
              <p className="text-gray-700 font-semibold mb-2">Of Care Staff Speak English as Second Language</p>
              <p className="text-gray-600">Yet all safety instructions, equipment manuals, and training remain English-only. No exceptions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">No Paper Trail</div>
              <p className="text-gray-700 font-semibold mb-2">CQC Demands Training Proof</p>
              <p className="text-gray-600">Without documented evidence of staff training, your facility faces compliance violations during inspections.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One QR Code. Complete Training. Instant Verification.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When staff scan a QR code on equipment, they get everything they need: video tutorial, written instructions, training confirmation form, chatbot support—and you get a complete digital audit trail for CQC compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Scan QR</h3>
              <p className="text-gray-600">
                Staff scans weatherproof QR code on equipment with their phone.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Access Training</h3>
              <p className="text-gray-600">
                Page loads with YouTube tutorial, written instructions, and training form.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Use Multilingual Chatbot</h3>
              <p className="text-gray-600">
                Ask equipment questions in any language. Chatbot responds in their native language.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. Confirm & Alert</h3>
              <p className="text-gray-600">
                Staff completes training form. If any issue → Manager emailed instantly. Compliance recorded.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Globe className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-6">50+ Languages Covered</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Polish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Romanian</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Portuguese</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Spanish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Urdu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Bengali</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Hindi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Arabic</span>
                  </div>
                </div>
                <p className="mt-6 text-blue-200">+ 42 more languages available</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">What's Included Per QR Code</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>YouTube Tutorial (Equipment Demo)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Google Doc (Written Instructions)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Training Confirmation Form</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Chatbot (Multiple Languages Q&A)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Digital Audit Trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Manager Email Alerts (Issues)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>CQC-Ready Compliance Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Care Homes Choose EquipSafety
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Equipment Incidents</h3>
              <p className="text-gray-600">
                Staff fully trained in their own language. No guesswork. No mistranslations. Complete safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant CQC Compliance</h3>
              <p className="text-gray-600">
                Digital proof of staff training, equipment checks, and incident handling. CQC inspectors see everything.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Manager Alerts</h3>
              <p className="text-gray-600">
                Equipment fault reported? Manager emailed instantly. Prevent incidents before they happen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Confidence & Inclusion</h3>
              <p className="text-gray-600">
                Every team member understands equipment fully in their native language. Nobody left behind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your facility. All plans include 90+ languages, real-time alerts, and CQC compliance records.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Small Plan */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Small</h3>
              <p className="text-gray-600 mb-6">Perfect for smaller facilities</p>
              
              <div className="mb-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold text-blue-900 mb-4">£395</div>
                <div className="text-gray-700 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-500 mb-4">£149</div>
                <div className="text-gray-600 mb-6">Equipment Limit: Up to 20</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">YouTube tutorials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Written instructions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Training forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Multilingual chatbot</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Medium Plan (Featured) */}
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-500 transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">⭐ Most Popular</span>
              </div>

              <h3 className="text-2xl font-bold mb-2">Medium</h3>
              <p className="text-blue-100 mb-6">Recommended for most facilities</p>
              
              <div className="mb-6">
                <div className="text-blue-200 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold mb-4">£595</div>
                <div className="text-blue-200 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-400 mb-4">£199</div>
                <div className="text-blue-200 mb-6">Equipment Limit: Up to 50</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>YouTube tutorials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Written instructions</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Training forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Multilingual chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Priority support</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Large Plan */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Large</h3>
              <p className="text-gray-600 mb-6">For large chains & enterprises</p>
              
              <div className="mb-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold text-blue-900 mb-4">£995</div>
                <div className="text-gray-700 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-500 mb-4">£349</div>
                <div className="text-gray-600 mb-6">Equipment Limit: 51-100+</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">All Medium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Custom training</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>

              <a 
                href="#contact" 
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <p className="text-gray-700 mb-2">
              <strong>Need custom pricing?</strong> For facilities with 100+ equipment or special requirements, we offer tailored solutions.
            </p>
            <a href="#contact" className="text-blue-900 font-bold hover:underline">
              Contact our sales team →
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">The EquipSafety Difference</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-xl text-blue-200">Digital Training Records</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">90+</div>
              <p className="text-xl text-blue-200">Languages. Zero Barriers.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">Instant</div>
              <p className="text-xl text-blue-200">Manager Alerts. Zero Delays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section with SmartSuite Iframe */}
      <section className="py-20 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Safety Audit
            </h2>
            <p className="text-xl text-gray-600">
              We'll assess your facility's equipment, identify language barriers, and provide a custom safety solution proposal at no cost.
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <span className="font-bold text-lg text-gray-900">Limited Availability</span>
              </div>
              <p className="text-gray-700">
                We're currently offering <strong className="text-orange-600">10 free safety audits</strong> to care facilities. 
                <strong> Only 7 spots remaining</strong> this month.
              </p>
            </div>
          </div>

          {/* SmartSuite Form Iframe */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe 
              src="https://app.smartsuite.com/form/sba974gi/oRiNhRxfaT?header=false" 
              width="100%" 
              height="600px" 
              frameBorder="0"
              title="EquipSafety Safety Audit Request"
            ></iframe>
          </div>

          <p className="text-center text-gray-600 mt-4 text-sm">
            We'll contact you within 24 hours to schedule your audit
          </p>
        </div>
      </section>

      {/* Zero-Risk Guarantee */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto text-green-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900">Our Zero-Risk Promise</h3>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">No Obligation Audit</p>
                  <p className="text-gray-600 text-sm">Free assessment with zero pressure to proceed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">24-Hour Response</p>
                  <p className="text-gray-600 text-sm">We contact you within 1 business day guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Custom Pricing</p>
                  <p className="text-gray-600 text-sm">Pay only for equipment you need covered</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">30-Day Trial</p>
                  <p className="text-gray-600 text-sm">Test the system risk-free in your facility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8" />
                <span className="text-2xl font-bold">EquipSafety</span>
              </div>
              <p className="text-gray-400">
                Protecting care facility staff through multilingual equipment safety training and real-time compliance verification.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="#contact" className="hover:text-white">Get Started</a></li>
                <li><button onClick={() => setCurrentPage('cqc')} className="hover:text-white text-left">CQC Compliance</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: abi@equipsafety.co.uk<br />
                Phone: 07772 080013<br />
                Available: Monday - Friday, 9am - 5pm
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
              <button onClick={() => setCurrentPage('privacy')} className="text-gray-400 hover:text-white">Privacy Policy</button>
              <button onClick={() => setCurrentPage('terms')} className="text-gray-400 hover:text-white">Terms of Service</button>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
            <p className="text-center text-gray-400">&copy; 2025 EquipSafety. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App






