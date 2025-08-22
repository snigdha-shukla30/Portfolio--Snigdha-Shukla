import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
    {
        title: "Feeding Trends — Credibility & Trust Assurance Page Development ",
        description: "Frontend design & development for an AI chatbot interface ",
        metrics: {
            performance: 98,
            accessibility: 100,
            seo: 95,
        },
        techDetails: [
            "Technologies used - Next.js · TypeScript · Tailwind CSS · Shadcn/ui · Framer Motion",
            "Designed a responsive, user-friendly interface for seamless experience on all devices.",
            "Optimized website performance for fast loading and smooth interactions.",
            "Implemented SEO best practices to improve visibility and reach.",
            "Demonstrated website credibility by verifying author expertise and transparent credentials."
        ],
        image: "/code.jpg",
    },
    // {
    //     title: "🔖 Bookify – Bookmark Saver Web App",
    //     description: "Minimal and fast web app to save, manage, and access bookmarks with clean UI",
    //     metrics: {
    //         performance: 95,
    //         accessibility: 98,
    //         seo: 100,
    //     },
    //     techDetails: [
    //         "Technologies Used - Next.js · TypeScript · Tailwind CSS · shadcn/ui",
    //         "Add, edit, delete bookmarks with instant UI feedback",
    //         "shadcn/ui for accessible, reusable UI components",
    //         "Local form validation and optimistic updates",
    //     ],
    //     image: "/code.jpg",
    // },
];

export function ProjectsSection() {
    return (
        <section id="work" className="py-12 sm:py-20 px-4 bg-[#0a0a0a] scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="space-y-8 sm:space-y-12">
                    {projects.map((project) => (
                        <Card key={project.title} className="bg-[#21262D] border border-gray-700 text-white rounded-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Project Details */}
                                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6 flex flex-col justify-center">
                                    <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-400">{project.description}</p>

                                    {/* Performance Metrics */}
                                    <div className="space-y-3">
                                        <h4 className="text-base sm:text-lg font-semibold">Performance Metrics</h4>
                                        <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                            {Object.entries(project.metrics).map(([key, value]) => (
                                                <div key={key} className="text-center">
                                                    <div className="text-2xl font-bold text-blue-400">{value}</div>
                                                    <div className="text-sm text-gray-400 capitalize">{key}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technical Implementation */}
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                                            Technical Implementation
                                        </h4>
                                        <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                                            {project.techDetails.map((detail) => (
                                                <li key={detail} className="flex items-center gap-2">
                                                    <Badge
                                                        variant="secondary"
                                                        className="bg-transparent text-green-400 border-none px-0 py-0 text-base font-bold"
                                                    >
                                                        ▹
                                                    </Badge>
                                                    <span className="text-gray-300">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>

                                {/* Project Image */}
                                <div className="relative w-full h-full min-h-[300px]">

                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
