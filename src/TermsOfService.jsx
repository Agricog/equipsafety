import { Link } from 'react-router-dom'
import { Shield, ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link 
            to="/"
            className="hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">EquipSafety</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: November 2025</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the EquipSafety website and services ("Services"), you agree to be bound by these Terms of Service. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on EquipSafety's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <p>
                The materials on EquipSafety's website are provided on an "as is" basis. EquipSafety makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p>
                In no event shall EquipSafety or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on EquipSafety's website, even if EquipSafety or a representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on EquipSafety's website could include technical, typographical, or photographic errors. EquipSafety does not warrant that any of the materials on its website are accurate, complete, or current. EquipSafety may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Safety Audit</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>The free safety audit is offered at no cost and carries no obligation to purchase services</li>
                <li>Audits are conducted by EquipSafety representatives and may be completed remotely or on-site</li>
                <li>Audit findings and proposals are valid for 30 days from the date of delivery</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Subscription Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Services are provided on a monthly subscription basis</li>
                <li>Pricing is quoted based on the number of equipment and staff members</li>
                <li>Subscriptions automatically renew on a monthly basis unless cancelled</li>
                <li>Cancellation must be requested in writing at least 30 days before the next billing cycle</li>
                <li>No refunds are offered for partial months</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Trial Period</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>A 30-day trial period may be offered at EquipSafety's discretion</li>
                <li>Trial periods must be cancelled before expiration to avoid automatic billing</li>
                <li>Trial terms and pricing will be specified at the time of offer</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Payment must be made in advance of service provision</li>
                <li>Payment is due on the subscription renewal date each month</li>
                <li>Payments are processed securely via Stripe</li>
                <li>Invoices will be provided via email</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Staff Training & Compliance</h2>
              <p>
                Your facility is responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Ensuring all staff complete training using the EquipSafety system</li>
                <li>Maintaining compliance with CQC requirements and regulations</li>
                <li>Reviewing and responding to equipment fault alerts</li>
                <li>Maintaining the security and proper use of QR codes</li>
                <li>Protecting access to training records and compliance data</li>
              </ul>
              <p className="mt-4">
                EquipSafety provides the tools and platform; your facility is responsible for proper implementation and compliance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data & Records Ownership</h2>
              <p>
                Training records, compliance data, and equipment information are owned by your facility. EquipSafety retains this data to provide services and maintain regulatory compliance. Your facility may request export of data at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Service Modifications & Downtime</h2>
              <p>
                EquipSafety reserves the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Modify or discontinue services with 30 days written notice</li>
                <li>Schedule maintenance and system updates (typically outside business hours)</li>
                <li>Suspend services immediately if payment is not received or terms are violated</li>
              </ul>
              <p className="mt-4">
                We aim for 99.5% uptime but do not guarantee uninterrupted service availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p>
                In no event shall EquipSafety be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business, even if advised of the possibility of such damages. EquipSafety's total liability shall not exceed the subscription fees paid in the 12 months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Indemnification</h2>
              <p>
                Your facility agrees to indemnify, defend, and hold harmless EquipSafety from any claims, damages, or costs arising from your use of the services, violation of these terms, or violation of applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
              <p>
                These Terms of Service and any separate agreements we provide to you are governed by and construed in accordance with the laws of England and Wales, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p>
                If you have questions regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold">EquipSafety</p>
                <p>Email: support@equipsafety.co.uk</p>
                <p>Website: equipsafety.co.uk</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p>
                EquipSafety reserves the right to modify these Terms of Service at any time. Changes will be effective upon posting to the website with an updated "Last Updated" date. Your continued use of the services constitutes acceptance of the revised Terms of Service.
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
