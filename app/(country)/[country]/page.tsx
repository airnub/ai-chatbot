export default function CountryLandingPage({ params }: { params: { country: string } }) {
  const { country } = params;

  return (
    <div>
      <h1>Welcome to {country.toUpperCase()}</h1>
      <p>This is the landing page for {country}.</p>
      <a href={`/${country}/chat`}>Go to Chat</a>
    </div>
  );
}
