import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
          <h1 className="text-3xl sm:text-4xl font-bold">Terms of Service</h1>
          <p className="text-gray-300 mt-2">Last updated: August 5, 2025</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to ScaleNova Marketing Agency ("we," "our," or "us"). These Terms of Service ("Terms")
              govern your use of our website, services, and any related applications or platforms
              (collectively, the "Service") operated by ScaleNova Marketing Agency.
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
              with any part of these terms, then you may not access the Service.
            </p>
            <p className="text-gray-700">
              These Terms apply to all visitors, users, and others who access or use the Service, 
              including but not limited to mold remediation businesses seeking lead generation services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">2. User Obligations</h2>
            <p className="text-gray-700 mb-4">
              When using our Service, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information during registration and use</li>
              <li>Maintain the security of your account and password</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
              <li>Not interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Not attempt to gain unauthorized access to any portion of the Service</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You are responsible for ensuring that your use of our lead generation services complies 
              with all applicable laws and regulations, including but not limited to consumer protection 
              laws, privacy laws, and advertising standards.
            </p>
            <p className="text-gray-700">
              Any violation of these obligations may result in immediate termination of your access 
              to the Service without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">3. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by applicable law, ScaleNova Marketing Agency shall not
              be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible 
              losses, resulting from your use of the Service.
            </p>
            <p className="text-gray-700 mb-4">
              In no event shall ScaleNova Marketing Agency's total liability to you for all damages,
              losses, and causes of action exceed the amount you have paid to ScaleNova Marketing Agency
              in the twelve (12) months preceding the claim.
            </p>
            <p className="text-gray-700 mb-4">
              We make no warranties or representations about the accuracy or completeness of the content 
              provided through our Service or the content of any sites linked to our Service.
            </p>
            <p className="text-gray-700">
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation 
              or exclusion of liability for incidental or consequential damages. Accordingly, some 
              of the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">4. Service Availability</h2>
            <p className="text-gray-700 mb-4">
              We strive to maintain the availability of our Service, but we do not guarantee that 
              the Service will be available at all times or without interruption.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify, suspend, or discontinue the Service at any time 
              without notice or liability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are and will remain 
              the exclusive property of ScaleNova Marketing Agency and its licensors.
            </p>
            <p className="text-gray-700">
              The Service is protected by copyright, trademark, and other laws. Our trademarks 
              and trade dress may not be used without our prior written consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">6. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account and access to the Service immediately, 
              without prior notice or liability, for any reason whatsoever, including without 
              limitation if you breach the Terms.
            </p>
            <p className="text-gray-700">
              Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms 
              at any time. If a revision is material, we will try to provide at least 30 days 
              notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-700">
              Your continued use of the Service after any such changes constitutes your acceptance 
              of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#0A1F44] mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>ScaleNova Marketing Agency</strong></p>
              <p className="text-gray-700 mb-2">Email: legal@scalenova.com</p>
              <p className="text-gray-700 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-700">Address: [Your Business Address]</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
