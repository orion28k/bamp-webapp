import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BampCampRegister = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://pci.jotform.com/jsform/260515475132048";
    script.onload = () => setLoaded(true);
    containerRef.current?.appendChild(script);
    return () => {
      if (containerRef.current?.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-bamp-red">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
      </header>

      {/* Form fills the rest of the page */}
      <main className="flex-1 pt-16">
        {!loaded && (
          <div className="flex items-center justify-center h-64 text-bamp-charcoal/50 text-sm font-body">
            Please wait…
          </div>
        )}
        <div ref={containerRef} />
      </main>
    </div>
  );
};

export default BampCampRegister;
