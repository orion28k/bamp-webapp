import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MuralTourRegister = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/245382363.js";
    script.defer = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-bamp-red">
        <Link to="/" className="inline-block">
          <img src="/bamp-logo.png" alt="BAMP" className="h-12 w-auto" />
        </Link>
      </header>

      {/* Form fills the rest of the page */}
      <main className="flex-1 pt-16 px-4 md:px-8 py-10 max-w-3xl mx-auto w-full">
        {!loaded && (
          <div className="flex items-center justify-center h-64 text-black text-sm font-body">
            Please wait…
          </div>
        )}
        <div
          className="hs-form-frame"
          data-region="na2"
          data-form-id="c61fa0a6-b279-450a-b260-3f6b616124b1"
          data-portal-id="245382363"
        />
      </main>
    </div>
  );
};

export default MuralTourRegister;
