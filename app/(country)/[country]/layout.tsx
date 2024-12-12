export default function CountryLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <header>
          <h1>Country Layout</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  