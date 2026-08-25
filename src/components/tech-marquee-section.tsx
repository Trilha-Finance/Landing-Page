import {
  VercelMark,
  NextjsMark,
  TypeScriptMark,
  JavaScriptMark,
  ReactMark,
  NodeMark,
  TailwindMark,
  GitMark,
  PythonMark,
  JavaMark,
  GoMark,
  PostgresMark,
  MySqlMark,
  MongoMark,
  RedisMark,
  SupabaseMark,
  FirebaseMark,
  DockerMark,
  GraphQLMark,
} from "./icons";

const STACK = [
  { label: "Vercel", icon: VercelMark },
  { label: "Next.js", icon: NextjsMark },
  { label: "React", icon: ReactMark },
  { label: "TypeScript", icon: TypeScriptMark },
  { label: "JavaScript", icon: JavaScriptMark },
  { label: "Tailwind CSS", icon: TailwindMark },
  { label: "Node.js", icon: NodeMark },
  { label: "Python", icon: PythonMark },
  { label: "OpenJDK", icon: JavaMark },
  { label: "Go", icon: GoMark },
  { label: "PostgreSQL", icon: PostgresMark },
  { label: "MySQL", icon: MySqlMark },
  { label: "MongoDB", icon: MongoMark },
  { label: "Redis", icon: RedisMark },
  { label: "Supabase", icon: SupabaseMark },
  { label: "Firebase", icon: FirebaseMark },
  { label: "GraphQL", icon: GraphQLMark },
  { label: "Docker", icon: DockerMark },
  { label: "Git", icon: GitMark },
];

export function TechMarqueeSection() {
  return (
    <section className="w-full border-b border-border-line bg-bg-pure py-8">
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-cybr-marquee items-center gap-16 hover:[animation-play-state:paused]">
          {[...STACK, ...STACK].map((tech, i) => (
            <div key={`${tech.label}-${i}`} className="flex shrink-0 items-center gap-3">
              <tech.icon className="h-6 w-auto text-text-secondary" />
              <span className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-text-primary">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
