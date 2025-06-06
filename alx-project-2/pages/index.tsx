import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>ALX Project 2</title>
          <meta name="description" content="Next.js with TypeScript and Tailwind" />
        </Head>

        <Header />

        <main className="container mx-auto p-4">
          <h2 className="text-xl font-semibold mb-4">Welcome to ALX Project 2</h2>
          <p className="text-gray-700">
            This is a Next.js project with TypeScript and Tailwind CSS.
          </p>
        </main>
      </div>
  );
}