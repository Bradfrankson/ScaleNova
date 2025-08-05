import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0A1F44] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#C7EA4D] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-300 mt-2">Last updated: August 5, 2025</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              At ScaleNova Marketing Agency, we collect information to provide better services to our users.
              We collect information in the following ways:
            </p>
            
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you use our lead generation services or contact us for a demo, we may collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Name and contact information (email address, phone number, business address)</li>
              <li>Business information (company name, industry, size, revenue)</li>
              <li>Marketing preferences and communication history</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">2. How We Use Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>To provide and improve our lead generation services</li>
              <li>To communicate with you about our services, demos, and updates</li>
              <li>To process payments and manage your account</li>
              <li>To analyze website usage and optimize user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To send marketing communications (with your consent)</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Lead Generation Services</h3>
            <p className="text-gray-700 mb-4">
              For our mold remediation clients, we use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Identify and target potential customers for your business</li>
              <li>Create and manage automated marketing campaigns</li>
              <li>Track and analyze campaign performance</li>
              <li>Generate reports and insights for your business</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">3. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Access and Portability</h3>
            <p className="text-gray-700 mb-4">
              You have the right to request access to the personal information we hold about you 
              and to receive a copy of that information in a portable format.
            </p>

            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Correction and Updates</h3>
            <p className="text-gray-700 mb-4">
              You can request that we correct or update any inaccurate or incomplete personal information.
            </p>

            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Deletion</h3>
            <p className="text-gray-700 mb-4">
              You may request that we delete your personal information, subject to certain legal 
              and business requirements.
            </p>

            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Opt-Out</h3>
            <p className="text-gray-700 mb-4">
              You can opt out of marketing communications at any time by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Clicking the unsubscribe link in our emails</li>
              <li>Contacting us directly at privacy@scalenova.com</li>
              <li>Updating your preferences in your account settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-3">Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We work with trusted third-party service providers for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Payment processing</li>
              <li>Email marketing and communication</li>
              <li>Website analytics and optimization</li>
              <li>Customer relationship management</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-700 mb-4">
              Our security measures include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700">
              However, no method of transmission over the Internet or electronic storage is 100% secure, 
              and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-700">
              For more information about our use of cookies, please see our Cookie Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new Privacy Policy on this page and updating 
              the "Last updated" date.
            </p>
            <p className="text-gray-700">
              Your continued use of our services after any changes constitutes your acceptance 
              of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">8. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>ScaleNova Marketing Agency</strong></p>
              <p className="text-gray-700 mb-2">Privacy Officer</p>
              <p className="text-gray-700 mb-2">Email: privacy@scalenova.com</p>
              <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Address: [Your Business Address]</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
