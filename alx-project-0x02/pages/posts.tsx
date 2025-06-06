import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function PostsPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Posts | ALX Project</title>
            </Head>

            <Header />

            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
                <p className="text-gray-700">
                    This page will display all posts in the future.
                </p>
            </main>
        </div>
    );
}