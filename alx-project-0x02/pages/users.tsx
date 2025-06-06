import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

export default function UsersPage() {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/users'
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Users | ALX Project</title>
                <meta name="description" content="List of users from JSONPlaceholder" />
            </Head>

            <Header />

            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Users</h1>

                {loading ? (
                    <div className="text-center py-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading users...</p>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <UserCard
                                key={user.id}
                                {...user}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}