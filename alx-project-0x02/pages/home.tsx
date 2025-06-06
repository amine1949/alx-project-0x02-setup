import Head from "next/head";
import Header from "@/components/layout/Header";


const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Head>
                    <title>Home | ALX Project</title>
                </Head>

                <Header />

                <main className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4 text-gray-300">Home Page</h1>
                    <p className="text-gray-700">
                        Welcome to the home page of our Next.js application.
                    </p>
                </main>
            </div>
        </>
    )
}

export default Home;