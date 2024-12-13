export default function LegalPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
        <div className="max-w-3xl text-lg">
          <p>
            By using our platform, you agree to our terms of service and privacy
            policy. We take your privacy seriously and are committed to
            safeguarding your personal information.
          </p>
          <p className="mt-4">
            Please ensure that you review these policies regularly as they are
            subject to updates. For any legal inquiries, contact us at{' '}
            <a href="mailto:legal@yourplatform.com" className="text-blue-500">
              legal@yourplatform.com
            </a>.
          </p>
        </div>
      </div>
    );
  }
  