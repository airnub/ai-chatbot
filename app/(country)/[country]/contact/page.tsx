export default function ContactPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-3xl text-center text-lg">
          Have questions or feedback? We&apos;d love to hear from you!
        </p>
        <p className="mt-6">
          Email us at{' '}
          <a href="mailto:support@yourplatform.com" className="text-blue-500">
           alan@airnub.io
          </a> 
          {/* or call us at{' '}
          <a href="tel:+1234567890" className="text-blue-500">
            +123-456-7890
          </a>. */}
        </p>
      </div>
    );
  }
  