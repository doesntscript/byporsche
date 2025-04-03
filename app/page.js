import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href="/exhibition">Exhibition</Link></p>
      <p><Link href="/exhibition/share"> Share Cars</Link></p>
      <p><Link href="/environment">Environment</Link></p>
    </main>
  );
}
