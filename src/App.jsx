import { useState } from 'react'
import { Shield, Globe, QrCode, CheckCircle, AlertTriangle, Clock, Users, FileText } from 'lucide-react'
import CQCCompliance from './CQCCompliance'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facilityName: '',
    phone: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('YOUR_SMARTSUITE_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'equipsafety_landing'
        })
      })
      
      if (!response.ok) throw new Error('Failed')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', facilityName: '', phone: '' })
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'safety_audit_request'
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (currentPage === 'cqc') {
    return <CQCCompliance />
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
                Stop Equipment Accidents Before They Happen—In Any Language
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Eliminate language barriers and reduce equipment incidents in your care facility with instant multi-language safety instructions via QR codes.
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
                  Scan. Select Language. Stay Safe.
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
              <span className="text-sm md:text-base font-semibold text-gray-700">Live in 48 Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-600" />
              <span className="text-sm md:text-base font-semibold text-gray-700">50+ Languages</span>
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
              The Hidden Cost of Language Barriers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In UK care facilities, staff speak dozens of languages. Equipment instructions are only in English. The result? Preventable accidents and compliance risks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">£15,000+</div>
              <p className="text-gray-700 font-semibold mb-2">Average Cost Per Incident</p>
              <p className="text-gray-600">Equipment misuse leads to staff injuries, downtime, and potential legal claims</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">40%</div>
              <p className="text-gray-700 font-semibold mb-2">Of Care Staff Don't Have English as First Language</p>
              <p className="text-gray-600">Yet all safety instructions and equipment manuals remain English-only</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-red-600 font-bold text-4xl mb-2">CQC</div>
              <p className="text-gray-700 font-semibold mb-2">Compliance Requirements</p>
              <p className="text-gray-600">Demonstrable staff training and safety protocols are mandatory for all ratings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One QR Code. Every Language. Total Safety.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              EquipSafety provides instant access to equipment safety instructions in over 50 languages through a simple QR code system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-900">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Install QR Codes</h3>
              <p className="text-gray-600">
                Weatherproof QR code labels applied to every piece of equipment in your facility - hoists, wheelchairs, beds, bathlifts, you name it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-900">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Scan & Select</h3>
              <p className="text-gray-600">
                Any team member scans the code with their phone, selects their language, and instantly gets clear safety instructions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-900">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Everyone Stays Safe</h3>
              <p className="text-gray-600">
                No more guesswork. No more mistranslations. Just clear, certified safety guidance in their native language.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Globe className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-6">Languages Covered</h3>
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
                <h3 className="text-3xl font-bold mb-6">Equipment Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Patient Hoists & Lifts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Profiling Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Wheelchairs & Transfer Chairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Bathlifts & Shower Chairs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Standing Aids</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Walking Frames & Aids</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Pressure Relief Equipment</span>
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduce Incidents</h3>
              <p className="text-gray-600">
                Clear instructions in native languages prevent equipment misuse and accidents before they happen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FileText className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">CQC Compliance</h3>
              <p className="text-gray-600">
                Demonstrable commitment to inclusive training and staff safety protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save Training Time</h3>
              <p className="text-gray-600">
                No more lengthy translation sessions. Staff get instant access to safety guidance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-blue-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Staff Confidence</h3>
              <p className="text-gray-600">
                When team members understand equipment fully, they work with confidence and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Trusted by Care Facilities Across the UK</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">100%</div>
              <p className="text-xl text-blue-200">Compliance Coverage</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">50+</div>
              <p className="text-xl text-blue-200">Languages Supported</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-500 mb-2">24/7</div>
              <p className="text-xl text-blue-200">Instant Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Safety Audit
            </h2>
            <p className="text-xl text-gray-600">
              We'll assess your facility's equipment and provide a custom safety solution proposal at no cost.
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

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none"
                  placeholder="john@carehome.co.uk"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Facility Name *</label>
                <input
                  type="text"
                  name="facilityName"
                  required
                  value={formData.facilityName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none"
                  placeholder="Oakwood Care Home"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-900 focus:outline-none"
                  placeholder="07123 456789"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full font-bold py-4 px-8 rounded-lg text-lg transition-colors ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600'
              } text-white`}
            >
              {isSubmitting ? 'Sending...' : 'Book My Free Safety Audit'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-green-600 text-center mt-4 font-bold">
                ✓ Thank you! We'll contact you within 24 hours.
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center mt-4">
                Error submitting. Please email hello@equipsafety.co.uk directly.
              </p>
            )}
            
            <p className="text-center text-gray-600 mt-4 text-sm">
              We'll contact you within 24 hours to schedule your audit
            </p>
          </form>
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
                Making care facilities safer through multilingual equipment safety instructions.
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

export default App

