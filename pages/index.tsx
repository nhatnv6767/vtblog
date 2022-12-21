import {Inter} from '@next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300">
            <title> Home Page </title>
            <section>
                <div className="mt-3 text-center">
                    <h1 className="text-[3rem]"> Welcome to DevBlog </h1>
                    <p> A blog made with NextJS, TailwindCSS, Github GraphQL </p>
                </div>
            </section>
        </main>
    )
}
