import { Helmet } from 'react-helmet'
import { Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, Target, BookOpen, Zap } from 'lucide-react'

export default function CQCCompliance() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <html lang="en" />
        <title>CQC Compliance Guide 2025 - EquipSafety Digital Regulations</title>
        <meta name="description" content="CQC compliance requirements for UK care homes. Digital transformation deadline 2027-2028. Learn Regulations 15 & 18, audit trails, and equipment safety documentation." />
        <meta name="keywords" content="CQC compliance, care home regulations, digital compliance 2027, equipment safety, regulation 15, regulation 18, audit trail, care home CQC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="EquipSafety" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://equipsafety.co.uk/cqc-compliance" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CQC Compliance Guide 2025 - Digital Transformation for Care Homes" />
        <meta property="og:description" content="Complete guide to CQC compliance requirements, digital deadline 2027-2028, and equipment safety regulations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://equipsafety.co.uk/cqc-compliance" />
        <meta property="og:site_name" content="EquipSafety" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CQC Compliance Guide 2025" />
        <meta name="twitter:description" content="Digital transformation deadline approaching. Learn what you need to know about CQC Regulations 15 & 18." />
        
        {/* Schema.org JSON-LD - Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "CQC Compliance Guide 2025: Digital Transformation Deadline",
            "description": "Complete guide to CQC compliance requirements for UK care homes, digital deadlines, and equipment safety regulations.",
            "url": "https://equipsafety.co.uk/cqc-compliance",
            "datePublished": "2025-12-03",
            "dateModified": "2025-12-03",
            "author": {
              "@type": "Organization",
              "name": "EquipSafety",
              "url": "https://equipsafety.co.uk"
            },
            "publisher": {
              "@type": "Organization",
              "name": "EquipSafety",
              "logo": {
                "@type": "ImageObject",
                "url": "https://equipsafety.co.uk/images/logo.png"
              }
            }
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
                "name": "When is the CQC digital compliance deadline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The mandatory digital compliance deadline is 2027-2028, following the Data (Use and Access) Act 2025 which received Royal Assent in June 2025."
                }
              },
              {
                "@type": "Question",
                "name": "What are CQC Regulations 15 and 18?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Regulation 15 covers Premises and Equipment (maintenance, service records, staff training). Regulation 18 covers Staffing (12 mandatory training categories with digital tracking requirements)."
                }
              },
              {
                "@type": "Question",
                "name": "What is an audit trail in CQC compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A tamper-proof, automated record of all system actions including user ID, timestamp, action type, data changed, device used, and location. Must be retained for minimum 6 years."
                }
              },
              {
                "@type": "Question",
                "name": "How many care homes are currently digitized?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As of July 2024, 72% of UK care homes are digitized. Adoption is accelerating at 1.8% per month, with projections of 95% by December 2026."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8" aria-hidden="true" />
            <span className="text-2xl font-bold">EquipSafety</span>
          </div>
          <a 
            href="/" 
            className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
            aria-label="Return to EquipSafety homepage"
          >
            Back to Home
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CQC Compliance: The Digital Transformation Deadline
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            UK care homes face a mandatory digital compliance deadline by 2027-2028. Strategic early adopters are positioning themselves 2-3 years ahead of enforcement.
          </p>
          <div className="bg-orange-500 bg-opacity-20 border-2 border-orange-400 rounded-xl p-6">
            <p className="text-lg">
              <strong>June 2025:</strong> Data (Use and Access) Act 2025 received Royal Assent, establishing statutory digital information standards for health and social care IT systems. Expected enforcement: 2027-2028.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The Current Landscape (November 2025)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Current Reality</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Paper systems remain legally compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>72% of UK care homes already digitized</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Zero enforcement actions against paper systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>£175 million government funding available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">⚠️ The Shift Coming</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Digital standards becoming mandatory by 2027-2028</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>CQC guidance: "Increasingly difficult to achieve Outstanding without digital"</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Local authorities favor digital providers in commissioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Enforcement powers with financial penalties planned</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Regulations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            CQC Regulations: What You Must Track
          </h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulation 15: Premises and Equipment</h3>
              <p className="text-gray-700 mb-4">
                Digital systems must track and document:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Equipment identification and location</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Maintenance schedules and completion dates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Service provider details and certifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Risk assessment findings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Staff training authorizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Decontamination records</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 text-sm">
                <strong>Retention Period:</strong> Minimum 6 years for equipment records; 3-6 years after equipment disposal
              </p>
            </div>

            <div className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulation 18: Staffing</h3>
              <p className="text-gray-700 mb-4">
                Mandatory training tracking for 12 categories:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Health and safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Infection prevention and control</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Safeguarding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Manual handling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>First aid</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Data protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Mental Capacity Act & DoLS</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>And 4 more...</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 text-sm">
                <strong>Retention Period:</strong> 6 years after termination; 8 years for adult care records
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Trail Requirements */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            The Audit Trail Requirement (Non-Negotiable)
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <p className="text-gray-700 mb-6 text-lg">
              Systems must capture and retain tamper-proof audit trails showing:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">What to Record</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>User ID and full name</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Precise timestamp (date & time)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Type of action or event</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Data accessed or modified (before/after)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Device and platform used</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Location or IP address</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Critical Features</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Automatically generated (users cannot disable)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Tamper-proof and secured from modification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Captured in real-time as actions occur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Fully searchable and filterable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Retained for minimum 6 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Exportable for CQC inspections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-900">
            <p className="text-gray-700">
              <strong>Why This Matters:</strong> CQC inspectors will review audit trails to verify compliance. Systems without comprehensive, tamper-proof logging will fail inspection. The audit trail is the difference between "we have digital records" and "we have inspectable, compliant digital records."
            </p>
          </div>
        </div>
      </section>

      {/* Adoption Trends */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Adoption Trends: The Acceleration
          </h2>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Digital Adoption Growth</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Dec 2021:</strong> 40% digitized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>July 2024:</strong> 72% digitized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Growth Rate:</strong> 1.8% per month (accelerating)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Projection:</strong> 95% by December 2026</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 p-8 rounded-xl">
                <p className="text-2xl font-bold mb-4">28% of Care Homes</p>
                <p className="text-blue-200">...still using paper systems (as of July 2024)</p>
                <p className="text-blue-300 mt-6 text-sm">
                  This creates a window of opportunity for early adopters to establish competitive advantage before mandatory digital requirements take effect.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Digital Adopters</h4>
              <p className="text-gray-700 mb-4">94% achieve Good or Outstanding CQC ratings</p>
              <p className="text-sm text-gray-600">Digital systems make compliance demonstration significantly easier during inspections</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <Clock className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Efficiency Gains</h4>
              <p className="text-gray-700 mb-4">20 minutes saved per shift per worker</p>
              <p className="text-sm text-gray-600">2.5 hours per week of reduced administrative burden</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <Target className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
              <h4 className="text-xl font-bold text-gray-900 mb-3">Workforce Impact</h4>
              <p className="text-gray-700 mb-4">Tech-savvy staff increasingly expect digital tools</p>
              <p className="text-sm text-gray-600">Digital capability becoming recruitment advantage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The Timeline: Act Now, Ahead of Deadlines
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Now - Early 2026</h3>
                  <p className="text-gray-700"><strong>Status:</strong> Paper systems remain legal but increasingly isolated</p>
                  <p className="text-gray-700 mt-2"><strong>Opportunity:</strong> Implement digital solutions while funding is available and timelines are uncompressed</p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    <li>✓ Access £175 million government funding</li>
                    <li>✓ Implement without enforcement pressure</li>
                    <li>✓ Build competitive advantage</li>
                    <li>✓ Train staff methodically</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-4 flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Late 2026 - 2027</h3>
                  <p className="text-gray-700"><strong>Status:</strong> Digital standards published; implementation expected to begin</p>
                  <p className="text-gray-700 mt-2"><strong>Reality Check:</strong> Early adopters have 1-2 year head start; digital becomes normal</p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    <li>⚠ Government funding likely reduced or redirected</li>
                    <li>⚠ Late starters face compressed timelines</li>
                    <li>⚠ Competitive pressure from digitized providers</li>
                    <li>⚠ Commissioning requirements tighten</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2027-2028</h3>
                  <p className="text-gray-700"><strong>Status:</strong> Mandatory compliance deadline approaches</p>
                  <p className="text-gray-700 mt-2"><strong>Critical Point:</strong> This is no longer optional</p>
                  <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                    <li>✗ Paper systems face enforcement action</li>
                    <li>✗ Financial penalties possible</li>
                    <li>✗ CQC can issue compliance notices</li>
                    <li>✗ Commissioning exclusion likely</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Safety Focus */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Equipment Safety: Your Compliance Foundation
          </h2>

          <div className="bg-blue-50 p-12 rounded-xl shadow-lg">
            <p className="text-gray-700 text-lg mb-6">
              EquipSafety provides the foundation for CQC Regulation 15 compliance through:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-900" aria-hidden="true" />
                  Comprehensive Tracking
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Equipment inventory with locations</li>
                  <li>✓ Maintenance schedules and histories</li>
                  <li>✓ Service provider records</li>
                  <li>✓ Risk assessments</li>
                  <li>✓ Staff authorizations</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-900" aria-hidden="true" />
                  Inspection-Ready Documentation
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Automated compliance reporting</li>
                  <li>✓ Tamper-proof audit trails</li>
                  <li>✓ Real-time dashboards</li>
                  <li>✓ Evidence exportable for CQC</li>
                  <li>✓ 6-year record retention</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-orange-500">
              <p className="text-gray-700">
                <strong>Strategic Advantage:</strong> Care homes implementing equipment safety tracking systems in 2025-2026 position themselves 2-3 years ahead of mandatory compliance deadlines. This timing provides access to government funding, operational efficiency gains, competitive differentiation in local authority commissioning, and confidence that systems meet emerging regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Compliance Journey Now
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            The window for voluntary, well-supported digital adoption is open now. Don't wait for mandatory deadlines to approach.
          </p>
          <a 
            href="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            aria-label="Book your free CQC compliance audit"
          >
            Book Your Free CQC Compliance Audit
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8" aria-hidden="true" />
                <span className="text-2xl font-bold">EquipSafety</span>
              </div>
              <p className="text-gray-400">
                Positioning care homes ahead of digital compliance deadlines.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/#contact" className="hover:text-white">Get Started</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">
                Email: abi@equipsafety.co.uk<br />
                Available: Monday - Friday, 9am - 5pm
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EquipSafety. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

