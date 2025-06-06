import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>About | ALX Project</title>
            </Head>

            <Header />

            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">About Page</h1>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Button Examples</h2>

                    <div className="flex flex-wrap gap-4 items-center">
                        <Button
                            size="small"
                            shape="rounded-sm"
                            onClick={() => alert('Small button clicked!')}
                        >
                            Small Button
                        </Button>

                        <Button
                            size="medium"
                            shape="rounded-md"
                            onClick={() => alert('Medium button clicked!')}
                        >
                            Medium Button
                        </Button>

                        <Button
                            size="large"
                            shape="rounded-full"
                            onClick={() => alert('Large button clicked!')}
                        >
                            Large Button
                        </Button>
                    </div>

                    <div className="mt-8">
                        <p className="text-gray-700">
                            This page demonstrates our reusable Button component with different sizes and shapes.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}