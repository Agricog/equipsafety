import { Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Shield, Globe, QrCode, CheckCircle, AlertTriangle, Clock, Users, FileText, Zap, Play, MessageSquare, ClipboardCheck, BookOpen } from 'lucide-react'
import CQCCompliance from './CQCCompliance'
import Privacy from './Privacy'
import TermsOfService from './TermsOfService'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <html lang="en" />
        <title>EquipSafety - Inspector-Proof Training Records for Care Homes | Never Be Exposed Again</title>
        <meta name="description" content="Create timestamped, inspector-proof audit trails so managers are never personally exposed when something goes wrong. Digital proof of competency in 90+ languages." />
        <meta name="keywords" content="CQC compliance records, care home audit trail, equipment training proof, inspector ready care home, manager liability protection, care home digital records" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="EquipSafety" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://equipsafety.co.uk" />
        
        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="EquipSafety - Never Be Personally Exposed When Something Goes Wrong" />
        <meta property="og:description" content="Inspector-proof audit trails for care homes. Timestamped training records. Digital proof of competency. 90+ languages." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://equipsafety.co.uk" />
        <meta property="og:site_name" content="EquipSafety" />
        <meta property="og:image" content="https://equipsafety.co.uk/images/og-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EquipSafety - Inspector-Proof Training Records" />
        <meta name="twitter:description" content="Timestamped audit trails so managers are never personally exposed. Digital proof for CQC." />
        <meta name="twitter:image" content="https://equipsafety.co.uk/images/twitter-card.jpg" />
        
        {/* Schema.org JSON-LD - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EquipSafety",
            "url": "https://equipsafety.co.uk",
            "logo": "https://equipsafety.co.uk/images/logo.png",
            "description": "Inspector-proof training records and audit trails for care homes",
            "email": "abi@equipsafety.co.uk",
            "telephone": "+447772080013",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            }
          })}
        </script>

        {/* Schema.org JSON-LD - SoftwareApplication */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "EquipSafety",
            "description": "Inspector-proof training records and digital audit trails for care homes",
            "url": "https://equipsafety.co.uk",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": [
              {
                "@type": "Offer",
                "name": "Small Plan",
                "price": "149",
                "priceCurrency": "GBP",
                "priceValidUntil": "2026-12-31"
              },
              {
                "@type": "Offer",
                "name": "Medium Plan",
                "price": "199",
                "priceCurrency": "GBP",
                "priceValidUntil": "2026-12-31"
              },
              {
                "@type": "Offer",
                "name": "Large Plan",
                "price": "349",
                "priceCurrency": "GBP",
                "priceValidUntil": "2026-12-31"
              }
            ]
          })}
        </script>

        {/* Schema.org JSON-LD - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does EquipSafety protect managers from liability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EquipSafety creates timestamped, inspector-proof records every time staff access equipment training. When something goes wrong, you have documented proof of competency training—removing personal exposure from managers."
                }
              },
              {
                "@type": "Question",
                "name": "What happens when CQC asks for training records?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You show them your digital audit trail: timestamped training confirmations, fault reports with manager notifications, and proof that staff understood equipment in their native language. All stored and ready for inspection."
                }
              },
              {
                "@type": "Question",
                "name": "How does the multilingual feature reduce liability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Staff can't claim they didn't understand equipment instructions. The chatbot responds in 90+ languages, creating documented proof that language was never a barrier to safe operation."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="EquipSafety" className="h-26" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/cqc-compliance"
              className="text-white hover:text-orange-500 font-semibold transition-colors"
              aria-label="Navigate to CQC Requirements page"
            >
              CQC Requirements
            </Link>
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
              aria-label="Get started with EquipSafety - open contact form"
            >
              Get Protected
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
                For Care Home Managers Who Can't Afford to Be Exposed
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                When Something Goes Wrong, You'll Have the Proof That Protects You
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Timestamped, inspector-proof audit trails. Staff can't claim they didn't understand. Faults are logged the second they're reported. You're covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
                >
                  Get Your Free Liability Audit
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
                <QrCode className="w-32 h-32 mx-auto text-blue-900 mb-4" aria-hidden="true" />
                <p className="text-blue-900 font-semibold text-lg">
                  Scan → Train → Proof Created
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Every interaction timestamped. Every record stored.
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
              <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">Inspector-Proof Records</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">Timestamped Proof</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">Live in 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">No Language Excuses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto text-red-600 mb-4" aria-hidden="true" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              If CQC Walks In Today, Are You Exposed?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Care homes don't wake up wanting a QR tool. They wake up with inspection pressure, audit anxiety, agency staff rotating, missing documents—and a manager thinking: "Can I prove my staff were properly trained?"
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">No Proof</div>
              <p className="text-gray-700 font-semibold mb-2">Staff Claims They Weren't Trained</p>
              <p className="text-gray-600">Without documented evidence, it's your word against theirs. When incidents happen, managers take the blame.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">"I Didn't Understand"</div>
              <p className="text-gray-700 font-semibold mb-2">Language Becomes Your Liability</p>
              <p className="text-gray-600">40%+ of care staff speak English as a second language. English-only instructions are a documented risk you're carrying.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">"We Weren't Told"</div>
              <p className="text-gray-700 font-semibold mb-2">Fault Reports With No Paper Trail</p>
              <p className="text-gray-600">Equipment problems get mentioned verbally. When something fails, there's no timestamped proof you were notified.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Timestamped, Inspector-Proof Audit Trail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every scan creates documented proof. Every training confirmation is timestamped. Every fault report notifies you instantly with a permanent record. When inspectors ask for evidence—you have it.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Staff Scans QR</h3>
              <p className="text-gray-600">Timestamp created. Record of who accessed training and when.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Completes Training</h3>
              <p className="text-gray-600">Video + instructions + confirmation form. Proof of competency, not trust.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. No Language Excuse</h3>
              <p className="text-gray-600">Chatbot answers questions in 90+ languages. Staff can't claim they didn't understand.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. You're Protected</h3>
              <p className="text-gray-600">Fault? You're emailed instantly with timestamp. Training gap? You have the records.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Shield className="w-16 h-16 mb-6" aria-hidden="true" />
                <h3 className="text-3xl font-bold mb-6">Your Liability Shield</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Multilingual Chatbot</span>
                      <p className="text-blue-200 text-sm">Language is no longer a liability during audits or incidents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Training Confirmations</span>
                      <p className="text-blue-200 text-sm">Proof of competency, not trust—timestamped and stored</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Instant Fault Alerts</span>
                      <p className="text-blue-200 text-sm">You're covered the second something is reported</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Digital Audit Trail</span>
                      <p className="text-blue-200 text-sm">Inspector-ready records for CQC 2027 requirements</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6">When To Deploy EquipSafety</h3>
                <p className="text-blue-200 mb-6">Facilities typically implement at moments of highest risk:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                    <span>After an incident (close the gap immediately)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                    <span>Before an inspection (get protected fast)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                    <span>New equipment installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                    <span>Ownership or management changes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                    <span>Group-wide compliance rollouts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action Section */}
      <section className="py-20 px-6 bg-gray-50" id="demo">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This is what staff see when they scan the QR code on equipment. Each element creates documented proof that protects you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Preview */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 text-center">
                <p className="text-2xl font-bold mb-1">🏥 FloorBed</p>
                <p className="opacity-90">Demo Room</p>
                <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs mt-2 uppercase tracking-wide">Demo Page</span>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Video Tutorial</span>
                  </div>
                  <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-80" aria-hidden="true" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Operating Instructions</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-24 flex items-center justify-center text-gray-500 text-sm">
                    PDF Manual Embedded
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Need Help?</span>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-indigo-500 p-3 rounded text-sm text-gray-700">
                    🤖 <strong>AI Assistant is active!</strong> Ask questions in any language.
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ClipboardCheck className="w-5 h-5 text-indigo-600" aria-hidden="true" />
                    <span className="font-semibold text-gray-900">Safety Check & Training Log</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center text-gray-500 text-sm">
                    Training Confirmation Form
                  </div>
                </div>
              </div>
            </div>

            {/* Callouts */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Play className="w-6 h-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Video Tutorial</h3>
                    <p className="text-gray-600 mb-2">Staff claim: <em className="text-red-600">"I wasn't shown how to use it"</em></p>
                    <p className="text-green-700 font-semibold">Your proof: Video demonstration was available and accessible.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Operating Instructions</h3>
                    <p className="text-gray-600 mb-2">Staff claim: <em className="text-red-600">"I didn't have access to the manual"</em></p>
                    <p className="text-blue-700 font-semibold">Your proof: PDF manual embedded directly on the page.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Multilingual Chatbot</h3>
                    <p className="text-gray-600 mb-2">Staff claim: <em className="text-red-600">"I didn't understand the instructions"</em></p>
                    <p className="text-purple-700 font-semibold">Your proof: AI assistant available in 90+ languages.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <ClipboardCheck className="w-6 h-6 text-orange-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Training Confirmation Form</h3>
                    <p className="text-gray-600 mb-2">Staff claim: <em className="text-red-600">"I was never trained on this"</em></p>
                    <p className="text-orange-700 font-semibold">Your proof: Timestamped submission with their name and date.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://app.equipsafety.co.uk/demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl text-center transition-colors text-lg"
              >
                Try the Live Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Managers Choose EquipSafety</h2>
            <p className="text-xl text-gray-600">Protection from risk, blame, and regulatory exposure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personal Protection</h3>
              <p className="text-gray-600">When something goes wrong, the audit trail proves you did everything right. Managers are never personally exposed.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inspector-Ready</h3>
              <p className="text-gray-600">CQC asks for training records? Pull up timestamped proof instantly. No scrambling, no gaps, no exposure.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Globe className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Language Isn't a Liability</h3>
              <p className="text-gray-600">90+ languages means staff can't claim they didn't understand. Documented proof that language was never a barrier.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Covered From Day One</h3>
              <p className="text-gray-600">Fault reported? You're emailed instantly with timestamp. Nobody can say "we told you" without proof.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Does Protection Cost?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Less than a single equipment incident. All plans include inspector-proof records, 90+ languages, and instant manager alerts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Small Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
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
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Timestamped training records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">90+ language chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Instant fault alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Inspector-ready audit trail</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Get Protected
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
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Timestamped training records</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>90+ language chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Instant fault alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Inspector-ready audit trail</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Priority support</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Get Protected
              </a>
            </div>

            {/* Large Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Large / Multi-Site</h3>
              <p className="text-gray-600 mb-6">For groups & enterprises</p>
              
              <div className="mb-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold text-blue-900 mb-4">£995</div>
                <div className="text-gray-700 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-500 mb-4">£349</div>
                <div className="text-gray-600 mb-6">Equipment Limit: 51-100+</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">All Medium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Group-wide rollout support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Multi-site dashboard</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <p className="text-gray-700 mb-2">
              <strong>Need custom pricing?</strong> For facilities with 100+ equipment or group-wide rollouts, we offer tailored solutions.
            </p>
            <a href="#contact" className="text-blue-900 font-bold hover:underline">Contact our sales team →</a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">The Protection You Get</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-xl text-blue-200">Timestamped Training Records</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">90+</div>
              <p className="text-xl text-blue-200">Languages. No Excuses.</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">Instant</div>
              <p className="text-xl text-blue-200">Fault Alerts. You're Covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Liability Audit</h2>
            <p className="text-xl text-gray-600">
              We'll assess your facility's exposure: equipment without training records, language gaps, missing documentation. Then show you exactly how to close those gaps before your next inspection.
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-6 h-6 text-orange-600" aria-hidden="true" />
                <span className="font-bold text-lg text-gray-900">Limited Availability</span>
              </div>
              <p className="text-gray-700">
                We're currently offering <strong className="text-orange-600">10 free liability audits</strong> to care facilities. 
                <strong> Only 7 spots remaining</strong> this month.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe 
              src="https://app.smartsuite.com/form/sba974gi/oRiNhRxfaT?header=false" 
              width="100%" 
              height="600px" 
              frameBorder="0"
              title="EquipSafety Liability Audit Request Form"
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
            <Shield className="w-16 h-16 mx-auto text-green-600 mb-4" aria-hidden="true" />
            <h3 className="text-3xl font-bold text-gray-900">Our Zero-Risk Promise</h3>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">No Obligation Audit</p>
                  <p className="text-gray-600 text-sm">Free assessment with zero pressure to proceed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">24-Hour Response</p>
                  <p className="text-gray-600 text-sm">We contact you within 1 business day guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Live in 7 Days</p>
                  <p className="text-gray-600 text-sm">Get protected fast—especially before inspections</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
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
              <Link to="/" className="flex items-center mb-4">
                <img src="/images/logo.png" alt="EquipSafety" className="h-10" />
              </Link>
              <p className="text-gray-400">
                Inspector-proof training records and audit trails for care home managers who can't afford to be exposed.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="https://app.equipsafety.co.uk/demo" className="hover:text-white">See Demo</a></li>
                <li><a href="#contact" className="hover:text-white">Get Protected</a></li>
                <li><Link to="/cqc-compliance" onClick={() => window.scrollTo(0, 0)} className="hover:text-white">CQC Requirements</Link></li>
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
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
            <p className="text-center text-gray-400">&copy; 2025 EquipSafety. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cqc-compliance" element={<CQCCompliance />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  )
}

export default App






