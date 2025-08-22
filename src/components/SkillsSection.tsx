import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

type Skill = { name: string; level: number };
type Category = {
  category: string;
  skills: Skill[];
  icon: string;
  color: string;
};

const categories: Category[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Modern CSS", level: 95 },
      { name: "Web Animation", level: 85 },
    ],
    icon: "🎨",
    color: "from-blue-500 to-blue-700",
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Figma to Code", level: 90 },
      { name: "Git & Git Hub", level: 95 },
      { name: "shadcn/ui", level: 85 },
      { name: "Chrome DevTools", level: 88 },
    ],
    icon: "🛠️",
    color: "from-green-500 to-green-700",
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication Skills", level: 92 },
      { name: "Presentation & Demo Skills", level: 95 },
      { name: "Team Collaboration", level: 85 },
      { name: "Problem Solving", level: 82 },
    ],
    icon: "💬",
    color: "from-purple-500 to-purple-700",
  },
];

export function SkillsSection() {
  return (
    <section className="py-12 sm:py-20 px-4 bg-[#18181b]">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center ">
          Things I’m Good At
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {categories.map((category) => (
            <Card
              key={category.category}
              className="bg-[#21262D] border border-gray-700 backdrop-blur text-white rounded-lg p-6 hover:scale-[1.02] transition-transform"
            >
              <CardHeader className="flex flex-row items-center gap-3 mb-4 p-0">
                <span className="text-3xl">{category.icon}</span>
                <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm text-white mb-1">
                        <span>{skill.name}</span>
                        <Badge
                          variant="secondary"
                          className="bg-transparent text-white border-none px-1 py-0 text-xs"
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        ></div> 
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}







