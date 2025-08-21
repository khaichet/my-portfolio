import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Heart,
  CircleCheckBig,
  Mail,
  Coffee,
} from "lucide-react";

const workStyles = [
  {
    title: "Định hướng mục tiêu",
    description:
      "Luôn tập trung vào kết quả cuối cùng và giá trị mang lại cho người dùng",
    icon: <Target className="text-primary w-6 h-6" />,
  },
  {
    title: "Làm việc nhóm hiệu quả",
    description:
      "Tin tưởng vào sức mạnh của collaboration và knowledge sharing",
    icon: <Users className="text-primary w-6 h-6" />,
  },
  {
    title: "Đam mê học hỏi",
    description:
      "Không ngừng cập nhật công nghệ mới và chia sẻ kiến thức với cộng đồng",
    icon: <Heart className="text-primary w-6 h-6" />,
  },
  {
    title: "Chất lượng code cao",
    description:
      "Viết code sạch, có thể maintain và scale được trong dài hạn",
    icon: <CircleCheckBig className="text-primary w-6 h-6" />,
  },
];

const WorkStyle = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Phong cách{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                làm việc
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Những nguyên tắc và giá trị mà tôi theo đuổi trong mỗi dự án và
              collaboration.
            </p>
          </motion.div>

          {/* Work Style Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {workStyles.map((style, index) => (
              <motion.div
                key={style.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-feature p-5 bg-background rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {style.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {style.title}
                    </h3>
                    <p className="text-muted-foreground">{style.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact & Personal Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="card-elegant rounded-2xl shadow-md p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Liên hệ & Thông tin cá nhân
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary w-5 h-5" />
                  <span className="text-muted-foreground">
                    vahoon23@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="text-primary w-5 h-5" />
                  <span className="text-muted-foreground">
                    Coffee lover, photography enthusiast
                  </span>
                </div>
              </div>
              <a href="mailto:vahoon23@gmail.com">
                <button className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium transition">
                  <Mail className="w-4 h-4" />
                  Gửi email cho tôi
                </button>
              </a>
            </div>

            {/* Quote */}
            <div className="bg-gradient-hero rounded-2xl p-6 text-center">
              <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
                "Công nghệ không chỉ là những dòng code, mà là cầu nối để biến ý
                tưởng thành hiện thực và tạo ra những giá trị có ý nghĩa cho xã
                hội."
              </blockquote>
              <p className="text-muted-foreground mt-4 font-medium">
                - Nguyễn Văn Huân
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkStyle;
