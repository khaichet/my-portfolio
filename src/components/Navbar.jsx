import React, { useState } from 'react'
import { ChevronDown, Menu } from "lucide-react";

const navLinks = [
  { label: "Giới thiệu về Huân", href: "/" },
  { label: "Chương trình Ninja AI", href: "/chuong-trinh/ninja-ai" },
  { label: "Liên hệ", href: "/lien-he" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    
     <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-bold text-xl md:text-2xl text-foreground hover:text-primary transition-colors"
          >
            Khải<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                {label}
              </a>
            ))}

            {/* Dropdown Features */}
            <button
              type="button"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Tính năng
              <ChevronDown className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-primary h-10 w-10 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 px-4 py-3">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}  
    </header>
  )
}

export default Navbar
