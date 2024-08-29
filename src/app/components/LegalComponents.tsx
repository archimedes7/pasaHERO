import React, { useRef } from "react";

const LegalComponents: React.FC = () => {
  const contactEmailRef = useRef<HTMLInputElement>(null);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Legal Information</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <p>
              <strong>Last updated:</strong> {currentDate}
            </p>
            <p>
              PasaHERO ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application and related services (collectively, the "Service").
            </p>
            <h3 className="text-xl font-semibold">1. Information We Collect</h3>
            <p>
              We collect information that you provide directly to us, such as:
              <ul className="list-disc list-inside ml-4">
                <li>
                  Personal information (e.g., name, email address, phone number)
                </li>
                <li>
                  Profile information (e.g., profile picture, user preferences)
                </li>
                <li>Location data</li>
                <li>Payment information</li>
                <li>
                  Communication data (e.g., messages between riders and drivers)
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">
              2. How We Use Your Information
            </h3>
            <p>
              We use your information to:
              <ul className="list-disc list-inside ml-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information</li>
                <li>
                  Send you technical notices, updates, and support messages
                </li>
                <li>Respond to your comments and questions</li>
                <li>Personalize and improve your experience</li>
                <li>Monitor and analyze trends and usage</li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and
                  other illegal activities
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">
              3. Sharing of Your Information
            </h3>
            <p>
              We may share your information with:
              <ul className="list-disc list-inside ml-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners (with your consent)</li>
                <li>
                  Law enforcement or other governmental agencies, as required by
                  law
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">4. Your Choices</h3>
            <p>
              You can:
              <ul className="list-disc list-inside ml-4">
                <li>Access and update your account information</li>
                <li>Opt-out of marketing communications</li>
                <li>
                  Turn off location services (though this may limit some
                  features)
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">5. Security</h3>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of transmission over the Internet
              or electronic storage is 100% secure.
            </p>
            <h3 className="text-xl font-semibold">
              6. Changes to This Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <h3 className="text-xl font-semibold">7. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please{" "}
              <a
                ref={contactEmailRef}
                href="#contact"
                className="text-blue-600 hover:text-blue-800"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Terms of Use</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <p>
              <strong>Last updated:</strong> {currentDate}
            </p>
            <p>
              By accessing or using the PasaHERO mobile application and related
              services (the "Service"), you agree to be bound by these Terms of
              Use ("Terms"). If you do not agree to these Terms, do not use the
              Service.
            </p>
            <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
            <p>
              By using the Service, you agree to be bound by these Terms of Use
              ("Terms"). If you do not agree to these Terms, do not use the
              Service.
            </p>
            <h3 className="text-xl font-semibold">2. Eligibility</h3>
            <p>
              You must be at least 18 years old to use the Service. By using the
              Service, you represent and warrant that you meet this eligibility
              requirement.
            </p>
            <h3 className="text-xl font-semibold">3. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to accept responsibility for all
              activities that occur under your account.
            </p>
            <h3 className="text-xl font-semibold">4. User Conduct</h3>
            <p>
              You agree not to:
              <ul className="list-disc list-inside ml-4">
                <li>Use the Service for any unlawful purpose</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt the Service</li>
                <li>
                  Collect or store personal data about other users without their
                  consent
                </li>
                <li>
                  Post content that is offensive, abusive, or violates the
                  rights of others
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">5. Rides and Payments</h3>
            <p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Riders agree to pay the fare shown in the app for each
                  completed ride.
                </li>
                <li>
                  Drivers agree to provide the transportation service as
                  described in the app.
                </li>
                <li>
                  PasaHERO reserves the right to adjust fares or cancel rides in
                  certain circumstances.
                </li>
              </ul>
            </p>
            <h3 className="text-xl font-semibold">6. Intellectual Property</h3>
            <p>
              The Service and its original content, features, and functionality
              are owned by PasaHERO and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <h3 className="text-xl font-semibold">7. Termination</h3>
            <p>
              We may terminate or suspend your account and bar access to the
              Service immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever.
            </p>
            <h3 className="text-xl font-semibold">
              8. Limitation of Liability
            </h3>
            <p>
              In no event shall PasaHERO, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
            <h3 className="text-xl font-semibold">9. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the Philippines, without regard to its conflict of law
              provisions.
            </p>
            <h3 className="text-xl font-semibold">10. Changes to Terms</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>
            <h3 className="text-xl font-semibold">11. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please{" "}
              <a
                ref={contactEmailRef}
                href="#contact"
                className="text-blue-600 hover:text-blue-800"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalComponents;
