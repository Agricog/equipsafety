import { Shield, ArrowLeft } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={() => window.location.href = '/'}
            className="hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">EquipSafety</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                EquipSafety ("we", "us", "our", or "Company") operates the equipsafety.co.uk website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website and use our services.
              </p>
              <p className="mt-4">
                Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
              <p>When you request a free safety audit, we collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Facility name</li>
                <li>Phone number</li>
                <li>Any additional information you voluntarily provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Usage Data</h3>
              <p>When you use our services, we may automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referral source</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Training & Compliance Data</h3>
              <p>When staff members scan QR codes and use our training platform, we collect:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Staff member name and role</li>
                <li>Equipment trained on</li>
                <li>Training date and time</li>
                <li>Language selected</li>
                <li>Training completion status</li>
                <li>Any reported equipment faults or concerns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our services</li>
                <li>To respond to your audit request and provide service proposals</li>
                <li>To process subscriptions and handle billing</li>
                <li>To send administrative information and service updates</li>
                <li>To contact you regarding equipment or training matters</li>
                <li>To create and maintain compliance records for CQC purposes</li>
                <li>To alert managers of equipment faults or training issues</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection & Security</h2>
              <p>
                We take data security seriously. Your personal information is stored securely and is only accessible to authorized personnel. We use industry-standard encryption and security practices to protect your data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. GDPR Compliance</h2>
              <p>
                We comply with the General Data Protection Regulation (GDPR) and all applicable UK data protection laws. You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at abi@equipsafety.co.uk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Service providers who assist in operating our website and providing services</li>
                <li>Your facility's authorized managers (training and compliance data only)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. These cookies may include analytics tools (e.g., Google Analytics) to understand how you use our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Compliance Records & Data Retention</h2>
              <p>
                Training and compliance records are retained for as long as necessary to satisfy CQC requirements and for legal compliance purposes. Typically, we retain:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Training records: 7 years (aligned with CQC guidance)</li>
                <li>Incident/fault records: 7 years</li>
                <li>Contact/inquiry records: 2 years</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">EquipSafety</p>
                <p>Email: abi@equipsafety.co.uk</p>
                <p>Website: equipsafety.co.uk</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services following notification of changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 EquipSafety. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
