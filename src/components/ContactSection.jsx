import React from "react";
import { Mail, Coffee } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="card-elegant transition-all duration-1000 animate-fade-in delay-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Thông tin liên hệ */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Liên hệ & Thông tin cá nhân
          </h3>

          <div className="space-y-4 mb-6">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="text-primary w-5 h-5" />
              <span className="text-muted-foreground">vahoon23@gmail.com</span>
            </div>

            {/* Sở thích */}
            <div className="flex items-center space-x-3">
              <Coffee className="text-primary w-5 h-5" />
              <span className="text-muted-foreground">
                Coffee lover, photography enthusiast
              </span>
            </div>
          </div>

          {/* Nút gửi mail */}
          <a href="mailto:vahoon23@gmail.com">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-10 px-4 py-2 shadow-md">
              <Mail className="w-4 h-4 mr-2" />
              Gửi email cho tôi
            </button>
          </a>
        </div>

        {/* Trích dẫn */}
        <div className="bg-gradient-hero rounded-2xl p-6 text-center shadow-lg">
          <blockquote className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
            "Công nghệ không chỉ là những dòng code, mà là cầu nối để biến ý tưởng thành hiện thực và tạo ra những giá trị có ý nghĩa cho xã hội."
          </blockquote>
          <p className="text-muted-foreground mt-4 font-medium">
            - Nguyễn Văn Huân
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
