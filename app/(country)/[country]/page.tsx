import Link from 'next/link';

export default async function CountryPage({ params }: { params: { country: string } }) {
  const { country } = params;

  const countryContent: Record<string, string> = {
    ie: 'Welcome to our Ireland page! Here you can explore local offerings and updates.',
    uk: 'Welcome to our United Kingdom page! Discover resources and opportunities here.',
    us: 'Welcome to our United States page! Stay informed with our latest updates.',
    de: 'Willkommen auf unserer Deutschland-Seite! Entdecken Sie lokale Inhalte.',
    fr: 'Bienvenue sur notre page France ! Trouvez des ressources et des informations ici.',
  };

  const content =
    countryContent[country] ||
    'Welcome! Explore our content tailored to your region.';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-6">
      <h1 className="text-4xl font-bold mb-6">Country: {country.toUpperCase()}</h1>
      <p className="max-w-3xl text-center text-lg mb-6">{content}</p>
      <div className="mt-6 flex flex-col items-center gap-4">
        <Link
          href={`/${country}/about`}
          className="text-blue-500 underline hover:text-blue-700"
        >
          About Us
        </Link>
        <Link
          href={`/${country}/contact`}
          className="text-blue-500 underline hover:text-blue-700"
        >
          Contact Us
        </Link>
        <Link
          href={`/${country}/legal`}
          className="text-blue-500 underline hover:text-blue-700"
        >
          Legal Information
        </Link>
        <Link
          href={`/${country}/partners`}
          className="text-blue-500 underline hover:text-blue-700"
        >
          Partner With Us
        </Link>
      </div>
    </div>
  );
}
