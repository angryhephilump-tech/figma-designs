import { useNavigate } from "react-router";
import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { books } from "../data/books";

export function Home() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax effect for hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxSpeed = 0.5;
        heroRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade in animation on load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-tight">Wikowí</h1>
        <Button
          variant="ghost"
          size="icon"
          className="text-white/80 hover:text-white hover:bg-white/10"
          onClick={() => navigate("/bookshelf")}
        >
          <User className="size-5" />
        </Button>
      </nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <div ref={heroRef} className="absolute inset-0 will-change-transform">
          <img
            src="https://images.unsplash.com/photo-1769565979248-3fd0135049c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxhbmNpZW50JTIwTWF5YW4lMjBweXJhbWlkJTIwanVuZ2xlJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3ODA0NjkzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ancient Mayan Temple at Tikal"
            className="w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            style={{ opacity: isVisible ? 1 : 0 }}
          />
          {/* Warm Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-black/50 to-black" />
        </div>

        {/* Hero Content - Minimal */}
        <div className="relative h-full flex items-end justify-start px-12 pb-16">
          <div
            className="transition-all duration-1000 delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p className="text-xl md:text-2xl font-serif text-white/80 tracking-wide">
              Read Spanish. Actually understand it.
            </p>
          </div>
        </div>
      </section>

      {/* Book Carousel Section */}
      <section className="px-8 pb-16">
        <div className="mb-6">
          <h3 className="text-xl text-white/60 font-medium">Continue Reading</h3>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {books.map((book, index) => (
            <button
              key={book.id}
              onClick={() => navigate(`/reader/${book.id}`)}
              className="flex-shrink-0 group cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
              }}
            >
              <div className="relative w-48 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />

                {/* Golden glow border on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 0 2px rgba(201, 168, 76, 0.6)'
                  }}
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Level Badge */}
                <div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
                  <Badge
                    variant="secondary"
                    className="bg-black/80 text-white/90 border-white/20 backdrop-blur-sm"
                  >
                    {book.level}
                  </Badge>
                </div>

                {/* Book Info on Hover - slides up */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-semibold text-sm line-clamp-2">{book.title}</p>
                  <p className="text-amber-200/80 text-xs mt-1">{book.author}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
