import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "UI & UX Design",
    icon: "🎨",
    features: ["• Responsive layouts", "• Dark/light mode", "• Accessibility"],
  },
  {
    title: " Frontend Frameworks",
    icon: "⚡",
    features: ["• React.js / Next.js", "• Component-driven design", "• App Router & layouts"],
  },
  {
    title: " Testing & Debugging",
    icon: "🧪",
    features: ["• Chrome DevTools", "• Playwright / Vitest", "• Accessibility testing"],
  },
  {
    title: "Reusable Components",
    icon: "🧩",
    features: ["• shadcn/ui", "• Tailwind component patterns", "• Atomic design"],
  },
  {
    title: "Performance Optimization",
    icon: "🚀",
    features: ["• Code splitting", "• Lazy Loading", "• Image optimization"],
  },
  {
    title: " Theming & Animations",
    icon: "🌙",
    features: ["• Theme toggling (dark/light)", "• Framer Motion / GSAP", "• Tailwind transitions"],
  },
];

export function WebCapabilitiesSection() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Modern Web Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group bg-[#21262D] border border-gray-700 text-white p-6 rounded-lg hover:bg-[#21262D] transition-all"
            >
              <CardHeader className="p-0 mb-4">
                <div className="text-3xl">{category.icon}</div>
                <CardTitle className="text-xl font-bold mt-2 mb-3">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-2">
                  {category.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-200 group-hover:text-gray-300 transition-colors"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
