import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";


const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Head>
                    <title>Home | ALX Project</title>
                </Head>

                <Header />

                <main className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-6">Home Page</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card
                            title="Welcome to ALX"
                            content="This is a Next.js project with TypeScript and Tailwind CSS."
                        />

                        <Card
                            title="Project Features"
                            content="Includes reusable components, TypeScript interfaces, and responsive design."
                        />

                        <Card
                            title="Getting Started"
                            content="Explore the about page to learn more about this project."
                        />
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home;