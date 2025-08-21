import React from "react";
import { motion } from "framer-motion";
import {
  CodeXml,
  Palette,
  TrendingUp,
  Brain,
  Zap,
} from "lucide-react";

// Dữ liệu các thế mạnh
const features = [
  {
    title: "Full-Stack Development",
    description:
      "Thành thạo React, Node.js, Python, với khả năng xây dựng ứng dụng web hiện đại từ frontend đến backend.",
    bgColor: "bg-blue-50",
    icon: <CodeXml className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Tạo ra những trải nghiệm người dùng trực quan và hấp dẫn, kết hợp giữa thẩm mỹ và tính năng.",
    bgColor: "bg-purple-50",
    icon: <Palette className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Hiểu biết sâu về SEO, social media marketing và growth hacking để phát triển sản phẩm.",
    bgColor: "bg-orange-50",
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Nghiên cứu và ứng dụng AI/ML vào các dự án thực tế, đặc biệt trong lĩnh vực NLP và Computer Vision.",
    bgColor: "bg-primary/10",
    icon: <Brain className="w-8 h-8 text-primary" />,
  },
  {
    title: "Startup Mindset",
    description:
      "Kinh nghiệm thành lập và phát triển nhiều startup, hiểu rõ về quy trình từ ý tưởng đến sản phẩm.",
    bgColor: "bg-yellow-50",
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
  },
];

// Component hiển thị từng card thế mạnh
const FeatureCard = ({ icon, bgColor, title, description, delay }) => {
  return (
    <motion.div
      className="card-feature bg-white  rounded-2xl shadow-lg p-6 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow:
          "0px 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(80, 68, 229, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <div
        className={`w-16 h-16 ${bgColor} rounded-2xl flex items-center justify-center mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function FeatureSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-16 transition-all duration-1000 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Thế mạnh{" "}
            <span className=" ">
              nổi bật
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Với đa dạng kỹ năng và kinh nghiệm thực tế, tôi mang đến góc nhìn
            toàn diện cho mọi dự án công nghệ.
          </p>
        </div>

        {/* Các thế mạnh */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
}
