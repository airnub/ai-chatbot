export default function LandingPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-6">Welcome to Choosr AI</h1>
        <p className="text-lg mb-4">Get started by selecting a feature below:</p>
        <div className="flex gap-4">
          <a
            href="/chat"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Go to Chat
          </a>
          <a
            href="/login"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Login
          </a>
        </div>
      </div>
    );
  }
  