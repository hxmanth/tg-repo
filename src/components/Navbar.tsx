
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const pages = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl mt-6 mx-auto w-full max-w-7xl flex items-center justify-between px-6 py-4 mb-12 border border-green-100">
      <Link to="/" className="font-extrabold text-2xl md:text-3xl text-green-700 select-none tracking-tighter drop-shadow hover:text-green-800 transition-colors">
        TuteGuy Tutorials
      </Link>
      
      <div className="hidden md:flex gap-2">
        {pages.map((p) => (
          <Link
            key={p.path}
            to={p.path}
            className={`px-4 py-2 rounded-lg font-medium text-base transition duration-200 ${
              pathname === p.path
                ? "bg-green-200 text-green-900 shadow-sm"
                : "text-gray-700 hover:bg-green-100"
            }`}
          >
            {p.name}
          </Link>
        ))}
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="p-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px] p-0">
          <div className="flex flex-col h-full py-6 px-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-4 top-4" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
            <div className="flex flex-col gap-1 mt-10">
              {pages.map((p) => (
                <Link
                  key={p.path}
                  to={p.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium text-base transition duration-200 ${
                    pathname === p.path
                      ? "bg-green-200 text-green-900"
                      : "text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
