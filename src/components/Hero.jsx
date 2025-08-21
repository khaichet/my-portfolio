import { ArrowRight, Code, Palette, TrendingUp, Brain } from "lucide-react";

const skills = [
  { name: "Lập trình", icon: Code, color: "text-blue-500" },
  { name: "Thiết kế", icon: Palette, color: "text-purple-500" },
  { name: "Marketing", icon: TrendingUp, color: "text-orange-500" },
  { name: "AI/ML", icon: Brain, color: "text-primary" },
];

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 transition-all duration-1000 animate-fade-in">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-primary p-1 shadow-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <img
                src="/avt.png"
                alt="Logo"
                className="w-3/4 h-3/4 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-6 transition-all duration-1000 delay-200 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
            Lại Văn {" "}
            <span className=" ">
              Khải
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Fullstack Developer
          </p>
        </div>

        {/* Description */}
        <div className="mb-8 transition-all duration-1000 delay-400 animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate về việc phát triển tài năng trẻ trong lĩnh vực công nghệ.
            Với hơn 2 năm kinh nghiệm, tôi tin rằng mỗi dòng code đều có thể tạo
            ra tác động tích cực.
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-12 transition-all duration-1000 delay-600 animate-fade-in">
          <a href="/chuong-trinh/ninja-ai">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-10 px-4 py-2 group">
              Tìm hiểu chương trình Ninja AI
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto transition-all duration-1000 delay-800 animate-fade-in">
          {skills.map(({ name, icon: Icon, color }) => (
            <div key={name} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-2 bg-card border border-border/50 rounded-2xl flex items-center justify-center shadow-card group-hover:shadow-elegant transition-all duration-300 group-hover:scale-110">
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero