import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const techStack = ["React", "TypeScript", "CSS", "Next.js", "Nodejs"];
const socialLinks = [
  { name: "GitHub", icon: "🐙", href: "#" },
  { name: "LinkedIn", icon: "💼", href: "#" },
  { name: "Twitter", icon: "🐦", href: "#" },
  { name: "Blog", icon: "✍️", href: "#" },
];
const floatingIcons = [
  { icon: "⚛️", delay: "0s", position: "top-10 left-1/6" },
  { icon: "🚀", delay: "2s", position: "top-15 right-1/6" },
  { icon: "💻", delay: "1s", position: "bottom-32 left-1/3" },
  { icon: "🔥", delay: "3s", position: "bottom-20 right-1/4" },
];

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none">
        <div className="grid-overlay animate-pulse-slow"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-50`}
            style={{ animationDelay: item.delay }}
          >
            <span className="text-4xl">{item.icon}</span>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Name Section */}
          <div className="relative inline-block px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-6">
              Snigdha Shukla
            </h1>
          </div>

          {/* Role & Description */}
          <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
                <h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">
                  Frontend Web Developer
                </h2>
                <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
              </div>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
                Transforming designs into fast, accessible web experiences.
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-[#1A1F2B] border-[#2D333B] text-gray-300 hover:border-blue-500/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
            <a href="#work" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <Button
                variant="default"
                className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto"
              >
                View My Work
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
              >
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors"
                aria-label={social.name}
              >
                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
