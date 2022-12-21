import {Inter} from '@next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main>
            <title> Home Page </title>
            <section>
                <div className="">
                    <h1> Welcome to DevBlog </h1>
                    <p> A blog made with NextJS, TailwindCSS, Github GraphQL </p>
                </div>
            </section>
        </main>
    )
}
