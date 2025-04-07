import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export function Header() {
  const navItems = [
    { name: "Home", href: "#" },
		{ name: "Analytics", href: "#analytics" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    
  ]

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's the home link and href is just "#", scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    
    // Get the target element
    const targetId = href.substring(1); // Remove the # from the href
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Get the element's position relative to the viewport
      const rect = targetElement.getBoundingClientRect();
      
      // Get the scroll position to center the element (accounting for header height)
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop - 80; // 80px offset for header
      
      // Scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#" 
            className="flex items-center gap-2"
            onClick={(e) => handleSmoothScroll(e, "#")}
          >
            <div className="rounded-full bg-primary p-1 transition-all duration-300 hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-foreground">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <span className="text-xl font-bold transition-all duration-300 hover:-translate-y-1 inline-block">Aditya Singh Tomar</span>
          </a>
        </motion.div>
        
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center justify-center space-x-6"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium transition-all duration-300 hover:text-primary hover:-translate-y-1 inline-block px-1"
              onClick={(e) => handleSmoothScroll(e, item.href)}
            >
              {item.name}
            </a>
          ))}
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <ModeToggle />
          <Button asChild>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Contact Me
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  )
}
