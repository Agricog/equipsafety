import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Shield, TrendingUp, Clock, CheckCircle, AlertTriangle, Target, BookOpen, Zap, FileText, Scale } from 'lucide-react'

export default function CQCCompliance() {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Helmet */}
      <Helmet>
        <html lang="en" />
        <title>CQC Compliance 2025 - Inspector-Proof Records for Care Homes | EquipSafety</title>
        <meta name="description" content="Protect yourself from CQC exposure. Digital audit trails, timestamped training records, and inspector-ready documentation. Be prepared when they ask for proof." />
        <meta name="keywords" content="CQC compliance, care home audit trail, inspector proof records, CQC inspection preparation, manager liability protection, digital compliance 2027" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <meta name="author" content="EquipSafety" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://equipsafety.co.uk/cqc-compliance" />
        
        {/* Open Graph */}
        <meta property="og:title" content="CQC Compliance - Inspector-Proof Records for Care Homes" />
        <meta property="og:description" content="Protect yourself from CQC exposure. Digital audit trails and timestamped training records ready for inspection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://equipsafety.co.uk/cqc-compliance" />
        <meta property="og:site_name" content="EquipSafety" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CQC Compliance - Inspector-Proof Records" />
        <meta name="twitter:description" content="Be prepared when CQC asks for proof. Digital audit trails and timestamped training records." />
        
        {/* Schema.org JSON-LD - Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "CQC Compliance: Inspector-Proof Records for Care Homes",
            "description": "How to protect yourself from CQC exposure with digital audit trails and timestamped training records.",
            "url": "https://equipsafety.co.uk/cqc-compliance",
            "datePublished": "2025-12-03",
            "dateModified": "2025-01-04",
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
                "name": "What happens if CQC asks for training records and I don't have them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Without documented proof of staff training, you're personally exposed. CQC can issue compliance notices, and in serious cases, managers face professional consequences. Digital audit trails provide timestamped evidence that protects you."
                }
              },
              {
                "@type": "Question",
                "name": "When does digital compliance become mandatory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The mandatory digital compliance deadline is 2027-2028. However, CQC already states it's 'increasingly difficult to achieve Outstanding without digital.' Getting protected now means you're 2-3 years ahead of enforcement."
                }
              },
              {
                "@type": "Question",
                "name": "What is an inspector-proof audit trail?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A tamper-proof, automatically generated record of all training and equipment actions. It includes user ID, timestamp, action type, and device used. When CQC asks 'prove this staff member was trained'—you can."
                }
              },
              {
                "@type": "Question",
                "name": "How does EquipSafety protect managers from liability?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every QR scan creates a timestamp. Every training confirmation is recorded. Every fault report notifies you instantly with proof you were informed. When something goes wrong, you have documented evidence you did everything right."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
  <img src="/images/logo.png?v=2" alt="EquipSafety" className="h-10 md:h-[130px]" />
</Link>
          <Link 
  to="/" 
  onClick={() => window.scrollTo(0, 0)}
  className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold transition-colors"
  aria-label="Return to EquipSafety homepage"
>
  Back to Home
</Link>
        </div>
      </header>

      {/* Hero Section - REFRAMED */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            CQC Inspection Protection
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            When CQC Asks for Proof, Will You Have It?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Inspectors don't just want to see training happened. They want timestamped, documented evidence that proves it. Without that proof, you're personally exposed.
          </p>
          <div className="bg-red-500 bg-opacity-20 border-2 border-red-400 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-lg font-bold mb-2">The Question That Keeps Managers Up at Night:</p>
                <p className="text-blue-100">
                  "If something goes wrong tomorrow—an incident, a complaint, an inspection—can I prove my staff were properly trained on that equipment?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Exposure Problem */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            The Three Ways Managers Get Exposed
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-2xl mb-4">"Show Me the Records"</div>
              <p className="text-gray-700 font-semibold mb-2">CQC Inspection Scenario</p>
              <p className="text-gray-600 mb-4">Inspector asks for training documentation. You have sign-in sheets from 6 months ago. They ask: "How do you know staff retained this training? When did they last access equipment instructions?"</p>
              <p className="text-red-600 font-semibold">No timestamp = No proof = Your exposure</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-2xl mb-4">"I Wasn't Trained"</div>
              <p className="text-gray-700 font-semibold mb-2">Incident Investigation</p>
              <p className="text-gray-600 mb-4">Equipment incident occurs. Staff member claims they were never shown how to use it properly. Without documented proof of training access, it's your word against theirs.</p>
              <p className="text-red-600 font-semibold">No documented access = Staff claim stands = Your liability</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-2xl mb-4">"We Reported It"</div>
              <p className="text-gray-700 font-semibold mb-2">Equipment Failure</p>
              <p className="text-gray-600 mb-4">Equipment fails. Staff say they told you about problems weeks ago. You have no record of when you were notified or what action was taken.</p>
              <p className="text-red-600 font-semibold">No fault log = No defense = Management failure</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Protection Solution */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Your Inspector-Proof Audit Trail
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Every interaction creates documented proof. When CQC asks questions, you have answers—with timestamps.
          </p>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8" aria-hidden="true" />
                  What Gets Recorded
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Who:</strong> Staff member name and ID</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>What:</strong> Equipment accessed, training completed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>When:</strong> Precise timestamp (date & time)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>How:</strong> Device used, confirmation submitted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Issues:</strong> Faults reported with instant manager notification</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8" aria-hidden="true" />
                  Why It Protects You
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Tamper-proof:</strong> Records can't be modified after creation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Automatic:</strong> No manual logging required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Searchable:</strong> Find any record in seconds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Exportable:</strong> Generate reports for CQC instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span><strong>Retained:</strong> 6+ years of records stored securely</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Protection in Action</h3>
            <p className="text-gray-700 mb-4">
              <strong>CQC Inspector:</strong> "Show me evidence that your night staff were trained on the patient hoist in Room 12."
            </p>
            <p className="text-gray-700 mb-4">
              <strong>You:</strong> Pull up the audit trail. Show timestamped records of each staff member accessing the training page, watching the video, and submitting their confirmation form. Show the chatbot logs where a Polish-speaking carer asked questions in their language and received answers.
            </p>
            <p className="text-green-700 font-semibold">
              <strong>Result:</strong> Documented proof. No exposure. Inspection passed.
            </p>
          </div>
        </div>
      </section>

      {/* CQC Regulations - Reframed */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            What CQC Actually Looks For
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Understanding the regulations helps you understand your exposure
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulation 15: Premises and Equipment</h3>
              <p className="text-gray-700 mb-4">
                CQC will ask you to demonstrate:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">They Want Proof Of:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Equipment identification and location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Maintenance schedules completed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Staff training authorizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Risk assessments documented</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Your Exposure Without It:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>"Who was trained on this equipment?" → No answer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>"When was it last serviced?" → Can't prove it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>"Show me the training records" → Paper somewhere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>"How do you track competency?" → "We trust staff"</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                <strong>Retention requirement:</strong> Minimum 6 years for equipment records
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulation 18: Staffing</h3>
              <p className="text-gray-700 mb-4">
                12 mandatory training categories that CQC can ask about at any time:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Health and safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Infection control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Safeguarding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Manual handling</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>First aid</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Data protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Mental Capacity Act</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>DoLS</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Fire safety</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Medication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>Equality & diversity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" aria-hidden="true" />
                    <span>+ Equipment specific</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>The liability:</strong> If an incident occurs and you can't prove the staff member was trained on that specific equipment, you're exposed—regardless of general training completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Timeline - Reframed */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            The Compliance Timeline: Your Window to Get Protected
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Digital compliance becomes mandatory by 2027-2028. But CQC is already looking for it.
          </p>

          <div className="space-y-8">
            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-4 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Now – Early 2026: Get Protected Early</h3>
                  <p className="text-gray-700 mb-4">Paper systems are still legal, but early adopters are building their protection now.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Why act now:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>✓ £175m government funding still available</li>
                        <li>✓ No enforcement pressure—implement properly</li>
                        <li>✓ Train staff without rushing</li>
                        <li>✓ Build 2-3 year head start</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Your competitive advantage:</p>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>✓ Local authorities favor digital providers</li>
                        <li>✓ 94% of digital homes achieve Good/Outstanding</li>
                        <li>✓ Staff increasingly expect digital tools</li>
                        <li>✓ Inspections become easier, not harder</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Late 2026 – 2027: Pressure Builds</h3>
                  <p className="text-gray-700 mb-4">Digital standards published. CQC guidance tightens. Late starters scramble.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Government funding likely reduced or redirected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Compressed timelines = rushed implementations = mistakes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>CQC: "Increasingly difficult to achieve Outstanding without digital"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-8 rounded-xl border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-4 flex-shrink-0">
                  <Scale className="w-6 h-6 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2027-2028: Mandatory Compliance</h3>
                  <p className="text-gray-700 mb-4">This is no longer optional. Enforcement begins.</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Paper systems face enforcement action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Financial penalties possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>CQC compliance notices issued</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>Commissioning exclusion for non-compliant providers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-900 text-white p-8 rounded-xl text-center">
            <p className="text-xl mb-4">
              <strong>72% of UK care homes are already digitized.</strong>
            </p>
            <p className="text-blue-200">
              The remaining 28% using paper systems face a narrowing window to implement properly before mandatory deadlines arrive.
            </p>
          </div>
        </div>
      </section>

      {/* How EquipSafety Protects You */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            How EquipSafety Protects You
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Regulation 15 compliance built into every equipment interaction
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automatic Documentation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Every QR scan creates a timestamp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Training confirmations recorded automatically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Fault reports logged with instant manager alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>No manual logging required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <BookOpen className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inspector-Ready Reports</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Pull up any equipment's training history instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Show which staff accessed what and when</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Export reports for CQC in seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>6+ years of records retained securely</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Language Protection</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>90+ language chatbot on every equipment page</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Staff can't claim "I didn't understand"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Documented proof language wasn't a barrier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>CQC sees inclusive, accessible training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Shield className="w-12 h-12 text-blue-900 mb-4" aria-hidden="true" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Protection</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>When incidents happen, you have proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Managers not personally exposed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Audit trail shows you did everything right</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>It's your word AND the records</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl border-l-4 border-orange-500">
            <p className="text-gray-700">
              <strong>Strategic timing:</strong> Care homes implementing equipment safety tracking in 2025-2026 position themselves 2-3 years ahead of mandatory compliance. This means access to funding, time to train staff properly, and confidence you're ready when inspectors arrive—not scrambling to catch up.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Protected Before Your Next Inspection
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We'll assess your current exposure: equipment without documented training records, language gaps, missing audit trails. Then show you exactly how to close those gaps.
          </p>
          <Link 
            to="/#contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            aria-label="Get your free liability audit"
          >
            Get Your Free Liability Audit
          </Link>
          <p className="text-blue-200 mt-4 text-sm">
            Live in your facility within 7 days. Protected before CQC arrives.
          </p>
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
                Inspector-proof training records for care home managers who can't afford to be exposed.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white">Home</Link></li>
                <li><a href="https://app.equipsafety.co.uk/demo" className="hover:text-white">See Demo</a></li>
                <li><Link to="/#contact" className="hover:text-white">Get Protected</Link></li>
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
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EquipSafety. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

