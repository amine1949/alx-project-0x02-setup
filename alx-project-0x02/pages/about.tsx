import Header from "@/components/layout/Header";
import Head from "next/head";


const About = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Head>
                    <title>About | ALX Project</title>
                </Head>

                <Header />

                <main className="container mx-auto p-4">
                    <h1 className="text-3xl font-bold mb-4 text-gray-300">About Page</h1>
                    <p className="text-gray-700">
                        Learn more about our project and team here.
                    </p>
                </main>
            </div>
        </>
    )
}

export default About;