import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex justify-end">
        <Link href="/" className="text-blue-500">
          Go Back
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This privacy policy describes how we handle personal information
        collected, used, and shared when users visit or interact with our
        website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information that you provide when contacting us
        through the contact form or subscribing to our newsletter. This
        information may include your name, email address, and any additional
        details you provide.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Information</h2>
      <p className="mb-4">
        We use the information you provide to respond to your inquiries and
        provide you with relevant information about our services or updates. We
        may also use your information to communicate with you about changes or
        improvements to our website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. However, we may share your information with trusted
        third parties who assist us in operating our website or providing
        services to you. These third parties are obligated to keep your
        information confidential and secure.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
      <p className="mb-4">
        We take appropriate measures to protect the security of your personal
        information and to ensure it is not accessed by unauthorized
        individuals. However, no method of transmission over the internet or
        electronic storage is 100% secure, so we cannot guarantee absolute
        security.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. We will notify you
        of any changes by posting the new privacy policy on this page. We
        encourage you to review this privacy policy periodically for any
        changes.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this privacy policy, please
        contact us via the contact form on our website.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
