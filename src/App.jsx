import { Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Shield, Globe, QrCode, CheckCircle, AlertTriangle, Clock, Users, FileText, Zap, Play, MessageSquare, ClipboardCheck, BookOpen, Video, Headphones } from 'lucide-react'
import CQCCompliance from './CQCCompliance'
import Privacy from './Privacy'
import TermsOfService from './TermsOfService'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <html lang="en" />
        <title>EquipSafety - 24/7 Equipment Training Resources for Care Homes | QR Code Access</title>
        <meta name="description" content="Give your care home staff instant access to video tutorials, PDF manuals, and a multilingual AI assistant for every piece of equipment. Track training, log faults, support your team." />
        <meta name="keywords" content="care home equipment training, staff training resources, multilingual care training, QR code training, equipment safety care homes, care home fault reporting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="EquipSafety" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://equipsafety.co.uk" />
        
        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="EquipSafety - 24/7 Equipment Training Resources for Care Homes" />
        <meta property="og:description" content="Video tutorials, PDF manuals, and multilingual AI support — available instantly via QR code. Track training completions and fault reports." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://equipsafety.co.uk" />
        <meta property="og:site_name" content="EquipSafety" />
        <meta property="og:image" content="https://equipsafety.co.uk/images/og-hero.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EquipSafety - 24/7 Equipment Training for Care Homes" />
        <meta name="twitter:description" content="Instant access to training videos, manuals, and multilingual AI support via QR codes on your equipment." />
        <meta name="twitter:image" content="https://equipsafety.co.uk/images/twitter-card.jpg" />
        
        {/* Schema.org JSON-LD - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EquipSafety",
            "url": "https://equipsafety.co.uk",
            "logo": "https://equipsafety.co.uk/images/logo.png",
            "description": "24/7 equipment training resources for care homes via QR codes",
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
            "description": "QR-powered equipment training platform with multilingual support for care homes",
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
                "name": "How does EquipSafety help care home staff?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Staff scan a QR code on any piece of equipment to instantly access video tutorials, PDF manuals, and an AI chatbot that can answer questions in over 90 languages — available 24/7, even on night shifts."
                }
              },
              {
                "@type": "Question",
                "name": "How does the multilingual feature work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI chatbot is trained on your equipment manuals and can respond to staff questions in over 90 languages. Staff simply type or speak in their preferred language and get accurate, helpful responses instantly."
                }
              },
              {
                "@type": "Question",
                "name": "Can managers track staff training?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every time staff complete training or report a fault, it's logged with a timestamp. Managers can see who has been trained on which equipment and receive instant notifications when faults are reported."
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
            <img src="/images/logo.png?v=2" alt="EquipSafety" className="h-10 md:h-[130px]" />
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <a 
              href="#demo" 
              className="text-white hover:text-orange-500 text-xs md:text-base font-semibold transition-colors"
              aria-label="See the demo"
            >
              See Demo
            </a>
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 px-3 py-1 md:px-6 md:py-2 rounded-lg text-xs md:text-base font-semibold transition-colors"
              aria-label="Get started with EquipSafety"
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
                Supporting Care Home Staff Around the Clock
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Safe Equipment Operation Starts With the Right Resources
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Video tutorials, PDF manuals, and an AI assistant that speaks 90+ languages — all available the moment your staff scan the QR code. Day shift, night shift, weekend or bank holiday.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg text-center transition-colors"
                >
                  Book a Free Demo
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
                  Scan → Learn → Confirm
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Instant access to everything staff need
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
              <Video className="w-5 h-5 text-blue-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">Video Tutorials</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">PDF Manuals</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">90+ Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-600" aria-hidden="true" />
              <span className="text-sm md:text-base font-semibold text-gray-700">24/7 Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-16 h-16 mx-auto text-blue-900 mb-4" aria-hidden="true" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Staff Need Support — Especially When You're Not There
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Night shifts. Bank holidays. Agency staff on their first day. New equipment nobody's been trained on yet. These are the moments when your team needs resources the most — and when they're hardest to provide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-900 font-bold text-4xl mb-2">Night Shifts</div>
              <p className="text-gray-700 font-semibold mb-2">No Manager on Site</p>
              <p className="text-gray-600">When questions arise at 3am, staff need somewhere to turn. Equipment manuals are often locked away or hard to find in the dark.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-900 font-bold text-4xl mb-2">Language Gaps</div>
              <p className="text-gray-700 font-semibold mb-2">Instructions They Can't Read</p>
              <p className="text-gray-600">Over 40% of care staff speak English as a second language. Complex equipment instructions shouldn't be a guessing game.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-900 font-bold text-4xl mb-2">Agency Staff</div>
              <p className="text-gray-700 font-semibold mb-2">New Faces, Unfamiliar Equipment</p>
              <p className="text-gray-600">Temporary staff arrive unfamiliar with your equipment. They need quick, clear guidance without pulling your permanent team away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Give Your Staff 24/7 Access to Equipment Training — In Any Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of equipment gets a QR code. Every scan opens a dedicated training page with video tutorials, the full PDF manual, and an AI chatbot trained on that specific equipment — ready to answer questions in over 90 languages.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Scan the QR Code</h3>
              <p className="text-gray-600">Placed directly on the equipment. No apps to download, no logins required.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Watch & Learn</h3>
              <p className="text-gray-600">Video tutorial shows exactly how to operate the equipment safely.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Ask Questions</h3>
              <p className="text-gray-600">AI chatbot answers in 90+ languages. Staff get help in their own words.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClipboardCheck className="w-10 h-10 text-blue-900" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. Confirm & Report</h3>
              <p className="text-gray-600">Log training completion. Report faults instantly. Managers get notified.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Headphones className="w-16 h-16 mb-6" aria-hidden="true" />
                <h3 className="text-3xl font-bold mb-6">Every Piece of Equipment. Every Shift. Every Language.</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">YouTube Video Tutorials</span>
                      <p className="text-blue-200 text-sm">Clear, visual demonstrations of safe equipment operation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Full PDF Manuals</span>
                      <p className="text-blue-200 text-sm">Manufacturer instructions available on any device</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Multilingual AI Chatbot</span>
                      <p className="text-blue-200 text-sm">Trained on your equipment manuals, responds in 90+ languages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <span className="font-bold">Training & Fault Tracking</span>
                      <p className="text-blue-200 text-sm">See who's trained, get instant fault notifications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4">What Staff See</h4>
                <div className="space-y-3 text-blue-100">
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                    <Play className="w-5 h-5" aria-hidden="true" />
                    <span>Video: "How to safely operate this hoist"</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                    <FileText className="w-5 h-5" aria-hidden="true" />
                    <span>PDF: Full manufacturer manual</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>Chat: "¿Cómo ajusto la altura?"</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                    <ClipboardCheck className="w-5 h-5" aria-hidden="true" />
                    <span>Form: Confirm training / Report fault</span>
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
              This is exactly what your staff see when they scan the QR code on a piece of equipment. Everything they need, right on their phone.
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
                    <span className="font-semibold text-gray-900">Training Log & Fault Reporting</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-16 flex items-center justify-center text-gray-500 text-sm">
                    Confirmation & Reporting Form
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
                    <p className="text-gray-600">Clear visual demonstration of how to operate the equipment safely — perfect for visual learners and those who prefer watching to reading.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">PDF Manual</h3>
                    <p className="text-gray-600">The full manufacturer manual, embedded right in the page. No hunting through filing cabinets or searching shared drives.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Multilingual AI Chatbot</h3>
                    <p className="text-gray-600">Staff can ask questions in their own language and get instant, accurate answers. Trained specifically on your equipment manuals.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <ClipboardCheck className="w-6 h-6 text-orange-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Training & Fault Reporting</h3>
                    <p className="text-gray-600">Staff confirm they've completed training. If something's wrong with the equipment, they report it instantly — and you get notified.</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Care Homes Choose EquipSafety</h2>
            <p className="text-xl text-gray-600">Support for staff, visibility for managers, safety for residents</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Night shifts, weekends, bank holidays — staff always have access to the training and guidance they need.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Globe className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">90+ Languages</h3>
              <p className="text-gray-600">Your multilingual team can ask questions and get answers in their own language, instantly.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Tracking</h3>
              <p className="text-gray-600">See which staff have completed training on which equipment. No more guessing or paper checklists.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <AlertTriangle className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Fault Alerts</h3>
              <p className="text-gray-600">When staff report an equipment problem, you're notified immediately. No more verbal reports that get forgotten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All plans include video tutorials, PDF manuals, multilingual chatbot, training tracking, and fault reporting.
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
                <div className="text-gray-600 mb-6">Up to 20 equipment items</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Video tutorials for each item</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">PDF manuals embedded</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Multilingual AI chatbot</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Training & fault tracking</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Medium Plan (Featured) */}
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-2xl border-2 border-orange-500 transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">⭐ Most Popular</span>
              </div>

              <h3 className="text-2xl font-bold mb-2">Medium</h3>
              <p className="text-blue-100 mb-6">Ideal for most care homes</p>
              
              <div className="mb-6">
                <div className="text-blue-200 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold mb-4">£595</div>
                <div className="text-blue-200 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-400 mb-4">£199</div>
                <div className="text-blue-200 mb-6">Up to 50 equipment items</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Everything in Small</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Quarterly reviews</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Get Started
              </a>
            </div>

            {/* Large Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Large / Multi-Site</h3>
              <p className="text-gray-600 mb-6">For groups & larger facilities</p>
              
              <div className="mb-6">
                <div className="text-gray-700 mb-2">Setup Fee</div>
                <div className="text-4xl font-bold text-blue-900 mb-4">£995</div>
                <div className="text-gray-700 mb-2">Monthly (from)</div>
                <div className="text-4xl font-bold text-orange-500 mb-4">£349</div>
                <div className="text-gray-600 mb-6">51-100+ equipment items</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Everything in Medium</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Multi-site dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
              </ul>

              <a href="#contact" className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <p className="text-gray-700 mb-2">
              <strong>Need a custom solution?</strong> For facilities with 100+ equipment items or group-wide rollouts, we offer tailored packages.
            </p>
            <a href="#contact" className="text-blue-900 font-bold hover:underline">Talk to our team →</a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-xl text-blue-200">Staff Support, Any Time</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">90+</div>
              <p className="text-xl text-blue-200">Languages Supported</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">Instant</div>
              <p className="text-xl text-blue-200">Fault Notifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Free Demo</h2>
            <p className="text-xl text-gray-600">
              See exactly how EquipSafety works in your facility. We'll walk you through the QR scanning, show you the training pages, and demonstrate the multilingual chatbot in action.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe 
              src="https://app.smartsuite.com/form/sba974gi/oRiNhRxfaT?header=false" 
              width="100%" 
              height="600px" 
              frameBorder="0"
              title="EquipSafety Demo Request Form"
            ></iframe>
          </div>

          <p className="text-center text-gray-600 mt-4 text-sm">
            We'll be in touch within 24 hours to schedule your demo
          </p>
        </div>
      </section>

      {/* Zero-Risk Guarantee */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto text-green-600 mb-4" aria-hidden="true" />
            <h3 className="text-3xl font-bold text-gray-900">Our Promise to You</h3>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Free Demo, No Obligation</p>
                  <p className="text-gray-600 text-sm">See the system in action before you commit to anything</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">24-Hour Response</p>
                  <p className="text-gray-600 text-sm">We'll get back to you within 1 business day, guaranteed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">Live in 7 Days</p>
                  <p className="text-gray-600 text-sm">From sign-off to QR codes on your equipment in a week</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="font-bold text-gray-900 mb-1">30-Day Trial</p>
                  <p className="text-gray-600 text-sm">Test the system with your team before committing long-term</p>
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
                <img src="/images/logo.png?v=2" alt="EquipSafety" className="h-10 md:h-[100px]" />
              </Link>
              <p className="text-gray-400">
                24/7 equipment training resources for care homes. Video tutorials, PDF manuals, and multilingual AI support — available at the scan of a QR code.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
                <li><a href="https://app.equipsafety.co.uk/demo" className="hover:text-white">See Demo</a></li>
                <li><a href="#contact" className="hover:text-white">Book a Demo</a></li>
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





