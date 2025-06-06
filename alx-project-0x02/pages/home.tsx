import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface PostData {
    title: string;
    content: string;
}

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<PostData[]>([]);

    const handleAddPost = (title: string, content: string) => {
        setPosts([...posts, { title, content }]);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Home | ALX Project</title>
            </Head>

            <Header />

            <main className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Home Page</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add New Post
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <Card
                            key={index}
                            title={post.title}
                            content={post.content}
                        />
                    ))}

                    {/* Default cards */}
                    <Card
                        title="Welcome to ALX"
                        content="This is a Next.js project with TypeScript and Tailwind CSS."
                    />
                    <Card
                        title="Project Features"
                        content="Includes reusable components, TypeScript interfaces, and responsive design."
                    />
                </div>

                <PostModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            </main>
        </div>
    );
}