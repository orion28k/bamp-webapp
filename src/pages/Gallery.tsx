import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { X, Filter, MapPin, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const artworks = [
  // Original artworks
  {
    src: "/images/murals/community-zoe-buena-vista.jpg",
    alt: "Zoe Buena Vista mural",
    title: "Zoe Buena Vista",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-wholefoods-oakland.jpg",
    alt: "Authentically Oakland mural",
    title: "Authentically Oakland",
    category: "Community",
    location: "Oakland",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-stephcurry3pt.jpeg",
    alt: "Steph Curry 3 Point mural",
    title: "Steph Curry 3PT",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/IMG_0013.jpeg",
    alt: "Boy kicking soccer ball mural",
    title: "Untitled 2",
    category: "Schools & Youth Centers",
    location: "Kenya",
    year: "2023",
    artist: "BAMP",
  },
  {
    src: "/images/murals/IMG_2493.jpeg",
    alt: "Garden archway mural",
    title: "Untitled 3",
    category: "Community",
    location: "Berkeley",
    year: "2022",
    artist: "BAMP",
  },
  {
    src: "/images/murals/mural-screenshot-1.png",
    alt: "Women portraits mural",
    title: "Untitled 4",
    category: "Schools & Youth Centers",
    location: "San Francisco",
    year: "2023",
    artist: "BAMP",
  },
  {
    src: "/images/murals/IMG_1135.jpg",
    alt: "Houseless People Matter mural",
    title: "Hosuing for All",
    category: "Activism",
    location: "Downtown Oakland",
    year: "2022",
    artist: "BAMP",
  },
  {
    src: "/images/murals/IMG_1136.jpg",
    alt: "Community education mural",
    title: "Housing For All",
    category: "Schools & Youth Centers",
    location: "West Oakland",
    year: "2021",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-aaacc-motherhood.jpg",
    alt: "AAACC Motherhood mural",
    title: "AAACC Motherhood",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-angeladavis.jpg",
    alt: "Angela Davis portrait mural",
    title: "Angela Davis",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-bethepower4.jpg",
    alt: "Be The Power mural",
    title: "Be The Power",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-blackliberationwalkingtour.jpeg",
    alt: "Black Liberation Walking Tour mural",
    title: "Black Liberation Walking Tour",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-closer-ft-apart.jpg",
    alt: "Closer ft Apart mural",
    title: "Closer: 6ft Apart",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-copy-of-housing-for-all.jpg",
    alt: "Housing For All mural",
    title: "Housing For All",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-rosa-parks-center.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center",
    category: "Activism",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  // Community murals
  {
    src: "/images/murals/community-bay-fc.jpeg",
    alt: "Bay FC mural",
    title: "Bay FC",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-cafe-colucci.jpg",
    alt: "Cafe Colucci mural",
    title: "Cafe Colucci",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-cafe-noir-.jpg",
    alt: "Cafe Noir mural",
    title: "Cafe Noir",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-e-14-eatery.jpeg",
    alt: "E 14 Eatery mural",
    title: "E 14 Eatery",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-everyone-deserves-a-home.jpg",
    alt: "Everyone Deserves a Home mural",
    title: "Everyone Deserves a Home",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-farmacy.jpg",
    alt: "Farmacy mural",
    title: "Farmacy",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-file_002.jpeg",
    alt: "Community mural",
    title: "Welcome to Vallejo",
    category: "Landmark",
    location: "Vallejo, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-hayward-history.jpg",
    alt: "Hayward History mural",
    title: "Hayward History",
    category: "Community",
    location: "Hayward",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-housing-for-all.jpg",
    alt: "Housing For All mural",
    title: "Housing For All",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-immigrationmigration.jpg",
    alt: "Immigration Migration mural",
    title: "Immigration Migration",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-jim-dewitt-el-torro.jpg",
    alt: "Jim Dewitt El Torro mural",
    title: "Jim Dewitt El Torro",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-lawrence.jpg",
    alt: "Lawrence mural",
    title: "Lawrence",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-oaklandzoo.png",
    alt: "Oakland Zoo mural",
    title: "Oakland Zoo",
    category: "Community",
    location: "Oakland",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rachel-wolfe-the-seer.jpg",
    alt: "Rachel Wolfe The Seer mural",
    title: "The Seer",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "Rachel Wolfe",
  },
  {
    src: "/images/murals/community-richmond-rosie.jpg",
    alt: "Richmond Rosie mural",
    title: "Richmond Rosie",
    category: "Community",
    location: "Richmond",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosa-parks-center-1.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosa-parks-center-2.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosaparkcener8.jpg",
    alt: "Rosa Park Center mural",
    title: "Rosa Park Center",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosaparkcenter7.jpg",
    alt: "Rosa Park Center mural",
    title: "Rosa Park Center",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-standing-rock1.jpg",
    alt: "Standing Rock mural",
    title: "Standing Rock",
    category: "Activism",
    location: "North Dakota",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-timothyb-pullman-porter.jpg",
    alt: "Timothy B Pullman Porter mural",
    title: "Pullman Porter",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "Timothy B",
  },
  {
    src: "/images/murals/community-youthempowerment1.jpeg",
    alt: "Youth Empowerment mural",
    title: "Youth Empowerment",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  // Graffiti murals
  {
    src: "/images/murals/graffiti-bamp-cvs-graffiti.jpg",
    alt: "BAMP CVS Graffiti mural",
    title: "CVS Graffiti",
    category: "Graffiti",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/graffiti-bamp-graffiti.jpg",
    alt: "BAMP Graffiti mural",
    title: "Graffiti",
    category: "Graffiti",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  // Schools & Youth Centers murals
  {
    src: "/images/murals/schools-achieve-academy.jpeg",
    alt: "Achieve Academy mural",
    title: "Achieve Academy",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-achieve-academy-upstairs.jpeg",
    alt: "Achieve Academy Upstairs mural",
    title: "Achieve Academy Upstairs",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-achieve-academy-upstairs2.jpeg",
    alt: "Achieve Academy Upstairs mural",
    title: "Achieve Academy Upstairs",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-brookfield.jpg",
    alt: "Brookfield mural",
    title: "Brookfield",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-brookfield-2.jpg",
    alt: "Brookfield mural",
    title: "Brookfield",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-copy-of-rosaparkcenter7.jpg",
    alt: "Rosa Park Center mural",
    title: "Rosa Park Center",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-dalecity.jpeg",
    alt: "Daly City mural",
    title: "Greetings from Daly City",
    category: "Landmark",
    location: "Daly City",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-kenya.jpg",
    alt: "Kenya mural",
    title: "Kenya",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-kenya-mural.jpeg",
    alt: "Kenya mural",
    title: "Kenya",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-liberty-high-school.png",
    alt: "Liberty High School mural",
    title: "Liberty High School",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-mlkelementary.jpeg",
    alt: "MLK Elementary mural",
    title: "MLK Elementary",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-park-center-0.jpg",
    alt: "Rosa Park Center mural",
    title: "Rosa Park Center",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-parks-center.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-parks-center-1.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosaparkcener8.jpg",
    alt: "Rosa Park Center mural",
    title: "Rosa Park Center",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-sbcc.jpg",
    alt: "SBCC mural",
    title: "SBCC",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-timothy-b-school.jpg",
    alt: "Timothy B School mural",
    title: "Timothy B School",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-timothybschool1.jpeg",
    alt: "Timothy B School mural",
    title: "Timothy B School",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-winton-wildcats.jpg",
    alt: "Winton Wildcats mural",
    title: "Winton Wildcats",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-winton-wildcats2.jpg",
    alt: "Winton Wildcats mural",
    title: "Winton Wildcats",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  // Sports murals
  {
    src: "/images/murals/sports-all-star-bamp-timothy-b-2.jpeg",
    alt: "All Star BAMP Timothy B mural",
    title: "All Star BAMP",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "Timothy B",
  },
  {
    src: "/images/murals/sports-all-star-weekend-chase-center.jpg",
    alt: "All Star Weekend Chase Center mural",
    title: "All Star Weekend Chase Center",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-billboard.jpeg",
    alt: "Sports billboard mural",
    title: "Billboard",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-chinatown-all-star.jpeg",
    alt: "Chinatown All Star mural",
    title: "Chinatown All Star",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-copy-of-jim-dewitt-el-torro.jpg",
    alt: "Jim Dewitt El Torro mural",
    title: "Jim Dewitt El Torro",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-valkieriesunitedplayas1.jpg",
    alt: "Valkyries United Playas mural",
    title: "Valkyries United Playas",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-head-over-heels.jpg",
    alt: "Head Over Heels mural",
    title: "Head Over Heels",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-jordanshoepalace2.jpg",
    alt: "Jordan Shoe Palace mural",
    title: "Jordan Shoe Palace",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-ica-dogpatch-drone.jpg",
    alt: "ICA Dogpatch drone view",
    title: "ICA Dogpatch",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-illuminaries-valkyries.png",
    alt: "Illuminaries Valkyries mural",
    title: "Illuminaries Valkyries",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-jordan.jpg",
    alt: "Jordan mural",
    title: "Jordan",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-ica-dogpatch-court.jpg",
    alt: "ICA Dogpatch Court mural",
    title: "ICA Dogpatch Court",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-rakuten-jane-the-bakery.jpeg",
    alt: "Rakuten Jane the Bakery mural",
    title: "Rakuten Jane the Bakery",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "BAMP",
  },
];

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 12;

const categories = ["All", ...new Set(artworks.map(art => art.category))];

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-muted overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const imageSrc = searchParams.get("image");
    if (imageSrc) {
      const found = artworks.find((art) => art.src === imageSrc);
      if (found) {
        setSelectedImage(found);
      }
      setSearchParams({}, { replace: true });
    }
  }, []);

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Portfolio"
        description="Explore our collection of murals that have transformed communities across the Bay Area."
        backgroundImage="/images/murals/IMG_0011.jpeg"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
        imagePosition="center 0%"
      />
      
      <GallerySection 
        artworks={filteredArtworks}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
    </>
  );
};

interface GallerySectionProps {
  artworks: typeof artworks;
  selectedImage: typeof artworks[0] | null;
  setSelectedImage: (img: typeof artworks[0] | null) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categories: string[];
}

const GallerySection = ({
  artworks,
  selectedImage,
  setSelectedImage,
  activeCategory,
  setActiveCategory,
  categories
}: GallerySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [artworks]);

  const visibleArtworks = artworks.slice(0, visibleCount);
  const hasMore = visibleCount < artworks.length;

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-muted-foreground" />
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border hover:bg-muted"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (index % LOAD_MORE_COUNT) * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(artwork)}
              >
                <div className={`aspect-square ${(index % 5 === 0) ? "md:aspect-auto md:h-full" : ""}`}>
                  <GalleryImage
                    src={artwork.src}
                    alt={artwork.alt}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/90 via-bamp-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {artwork.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {artwork.title}
                  </h3>
                  <p className="text-white/70 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {artwork.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {artworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No artworks found in this category.
            </p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <motion.div
            className="flex flex-col items-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-sm text-muted-foreground">
              Showing {visibleCount} of {artworks.length}
            </p>
            <Button
              onClick={() => setVisibleCount(v => v + LOAD_MORE_COUNT)}
              variant="outline"
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-5"
            >
              Load More
            </Button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bamp-charcoal/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full grid md:grid-cols-3 gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-2">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>
              <div className="text-white">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                  {selectedImage.category}
                </span>
                <h2 className="font-display text-3xl font-bold mb-4">
                  {selectedImage.title}
                </h2>
                <div className="space-y-3 text-white/70">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    {selectedImage.location}
                  </p>
                  {selectedImage.year && (
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      {selectedImage.year}
                    </p>
                  )}
                  <p className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {selectedImage.artist}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
