import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Agent Locaith AI",
    status: "Đang vận hành",
    description:
      "Nền tảng AI trợ giúp soạn thảo văn bản thông minh, hỗ trợ tạo nội dung nhanh chóng, xuất file word định dạng chuẩn.",
    image:
      "https://ftygorppzfiwxmoimzod.supabase.co/storage/v1/object/public/covers/locaithai.png",
    demo: "https://agent.locaith.ai",
    code: "https://github.com/HuanEnzie",
    tech: ["React", "Node.js", "PostgreSQL", "Python", "RAG"],
  },
  {
    title: "Phuong Nam Group",
    status: "Đang vận hành",
    description:
      "Website landing page và tin tức giới thiệu dịch vụ truyền thông, bao gồm các dự án, chiến dịch và hoạt động nổi bật của công ty.",
    image:
      "https://ftygorppzfiwxmoimzod.supabase.co/storage/v1/object/public/covers/phuongnammedia.png",
    demo: "https://phuongnamgroup.net",
    code: "https://github.com/HuanEnzie",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Đơn Hàng Hy Lạp",
    status: "Đang vận hành",
    description:
      "Website landing page và tin tức về đơn hàng, thông tin tuyển dụng và cơ hội xuất khẩu lao động sang Hy Lạp.",
    image:
      "https://ftygorppzfiwxmoimzod.supabase.co/storage/v1/object/public/covers/donhanghylap.png",
    demo: "https://donhanghylap.com",
    code: "https://github.com/HuanEnzie",
    tech: ["WordPress"],
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dự án{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              tiêu biểu
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những sản phẩm công nghệ đã tạo ra tác động tích cực và mang lại giá
            trị thực tế cho người dùng.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-elegant group"
            >
              {/* Project Image */}
              <div className="h-48 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Status */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center space-x-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 transition"
                >
                  <ExternalLink className="size-4 mr-2" />
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 transition"
                >
                  <Github className="size-4 mr-2" />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
