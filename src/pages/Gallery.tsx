import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { X, Filter, MapPin, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const artworks = [
  // Flagship clients — placed first as credibility anchors
  {
    src: "/images/murals/sports-all-star-bamp-timothy-b-2.jpeg",
    alt: "NBA All-Star BAMP Timothy B mural",
    title: "NBA All-Star Weekend",
    category: "Sports",
    location: "San Francisco, CA",
    year: "2022",
    artist: "Timothy B & BAMP",
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
    src: "/images/murals/sports-stephcurry3pt.jpeg",
    alt: "Steph Curry 3-Point Celebration mural",
    title: "3-Point Celebration",
    category: "Sports",
    location: "YMCA, Oakland, CA",
    year: "2021",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-jordanshoepalace2.jpg",
    alt: "Jordan All Star mural",
    title: "Jordan All Star 1",
    category: "Sports",
    location: "Bay Area, CA",
    year: "2023",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-dalecity.jpeg",
    alt: "Jefferson High School Daly City mural",
    title: "Jefferson High School",
    category: "Schools & Youth Centers",
    location: "Daly City, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/activism-rosa-parks-center.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 1",
    category: "Activism",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-valkieriesunitedplayas1.jpg",
    alt: "Valkyries United Playas mural",
    title: "Valkyries — United Playas",
    category: "Sports",
    location: "Bay Area, CA",
    year: "2024",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-all-star-weekend-chase-center.jpg",
    alt: "NBA All-Star Weekend Chase Center mural",
    title: "All-Star Weekend — Chase Center",
    category: "Sports",
    location: "San Francisco, CA",
    year: "2022",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-copy-of-jim-dewitt-el-torro.jpg",
    alt: "Prologis Richmond — Jim Dewitt mural",
    title: "Prologis Richmond — Jim Dewitt",
    category: "Sports",
    location: "Richmond, CA",
    year: "",
    artist: "BAMP",
  },
  // Community murals
  {
    src: "/images/murals/community-zoe-buena-vista.jpg",
    alt: "Buena Vista mural",
    title: "Buena Vista",
    category: "Community",
    location: "Bay Area",
    year: "",
    artist: "Zoe Boston and Andre Jahmora",
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
    src: "/images/murals/IMG_2493.jpeg",
    alt: "Urban Adamah mural",
    title: "Urban Adamah",
    category: "Community",
    location: "Berkeley",
    year: "2022",
    artist: "BAMP",
  },
  {
    src: "/images/murals/mural-screenshot-1.png",
    alt: "Santa Barbara City College mural",
    title: "Santa Barbara City College 1",
    category: "Schools & Youth Centers",
    location: "San Francisco",
    year: "2023",
    artist: "Rachel",
  },
  {
    src: "/images/murals/IMG_1135.jpg",
    alt: "Grip Richmond mural",
    title: "Grip Richmond",
    category: "Activism",
    location: "Richmond, CA",
    year: "2022",
    artist: "Rachel",
  },
  {
    src: "/images/murals/IMG_1136.jpg",
    alt: "SF African American Arts & Culture Complex mural",
    title: "SF African American Arts & Culture Complex",
    category: "Community",
    location: "San Francisco, CA",
    year: "2021",
    artist: "Andre",
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
    year: "2019",
    artist: "Bobby Arte",
  },
  {
    src: "/images/murals/sports-illuminaries-valkyries.png",
    alt: "Valkyries with Illuminaries mural",
    title: "Valkyries with Illuminaries",
    category: "Sports",
    location: "Bay Area, CA",
    year: "2024",
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
    src: "/images/murals/community-e-14-eatery.jpeg",
    alt: "E-14 Eatery mural",
    title: "E-14 Eatery",
    category: "Community",
    location: "San Leandro, CA",
    year: "",
    artist: "Andre",
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
    location: "San Leandro, CA",
    year: "",
    artist: "Bobby Arte",
  },
  {
    src: "/images/murals/community-file_002.jpeg",
    alt: "Gateway to Vallejo mural",
    title: "Gateway to Vallejo",
    category: "Landmark",
    location: "Vallejo, CA",
    year: "",
    artist: "Andre",
  },
  {
    src: "/images/murals/community-hayward-history.jpg",
    alt: "Prologis Hayward mural",
    title: "Prologis Hayward",
    category: "Community",
    location: "Hayward, CA",
    year: "",
    artist: "Andre",
  },
  {
    src: "/images/murals/community-housing-for-all.jpg",
    alt: "Housing Home mural",
    title: "Housing Home",
    category: "Community",
    location: "Oakland, CA",
    year: "",
    artist: "Andre",
  },
  {
    src: "/images/murals/community-immigrationmigration.jpg",
    alt: "Immigration Migration mural",
    title: "Immigration Migration",
    category: "Community",
    location: "Emeryville, CA",
    year: "2018",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-jim-dewitt-el-torro.jpg",
    alt: "Prologis Richmond mural",
    title: "Prologis Richmond",
    category: "Community",
    location: "Richmond, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-lawrence.jpg",
    alt: "Lawrence mural",
    title: "Lawrence",
    category: "Community",
    location: "Santa Clara, CA",
    year: "",
    artist: "Andre",
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
    alt: "Prologis Richmond — Rosie the Riveter mural",
    title: "Prologis Richmond — Rosie the Riveter",
    category: "Community",
    location: "Richmond, CA",
    year: "",
    artist: "Andre",
  },
  {
    src: "/images/murals/community-rosa-parks-center-1.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 2",
    category: "Community",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosa-parks-center-2.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 3",
    category: "Community",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosaparkcener8.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 4",
    category: "Community",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/community-rosaparkcenter7.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 5",
    category: "Community",
    location: "San Francisco, CA",
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
    alt: "EBALDC Pullman Porter mural",
    title: "EBALDC — Pullman Porter",
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
    location: "Oakland, CA",
    year: "",
    artist: "Rachel",
  },
  // Graffiti murals
  {
    src: "/images/murals/graffiti-bamp-cvs-graffiti.jpg",
    alt: "CVS Graffiti mural",
    title: "CVS Graffiti",
    category: "Graffiti",
    location: "Oakland, CA",
    year: "",
    artist: "Multiple Artists",
  },
  {
    src: "/images/murals/graffiti-bamp-graffiti.jpg",
    alt: "19th Street graffiti mural",
    title: "19th Street",
    category: "Graffiti",
    location: "Oakland, CA",
    year: "",
    artist: "Andre",
  },
  // Schools & Youth Centers murals
  {
    src: "/images/murals/schools-achieve-academy.jpeg",
    alt: "Achieve Academy mural",
    title: "Achieve Academy",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-achieve-academy-upstairs.jpeg",
    alt: "Achieve Academy Upstairs mural",
    title: "Achieve Academy Upstairs 1",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-achieve-academy-upstairs2.jpeg",
    alt: "Achieve Academy Upstairs mural",
    title: "Achieve Academy Upstairs 2",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-brookfield.jpg",
    alt: "Brookfield Lions School mural",
    title: "Brookfield 1",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-brookfield-2.jpg",
    alt: "Brookfield Lions School mural",
    title: "Brookfield 2",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-copy-of-rosaparkcenter7.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 6",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-kenya.jpg",
    alt: "Kenya mural",
    title: "Kenya 1",
    category: "Schools & Youth Centers",
    location: "Kenya",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-kenya-mural.jpeg",
    alt: "Kenya mural",
    title: "Kenya 2",
    category: "Schools & Youth Centers",
    location: "Kenya",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-liberty-high-school.png",
    alt: "Liberty High School mural",
    title: "Liberty High School",
    category: "Schools & Youth Centers",
    location: "Brentwood, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-mlkelementary.jpeg",
    alt: "MLK Elementary mural",
    title: "MLK Elementary",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-park-center-0.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 7",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-parks-center.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 8",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosa-parks-center-1.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 9",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-rosaparkcener8.jpg",
    alt: "Rosa Parks Center mural",
    title: "Rosa Parks Center 10",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-sbcc.jpg",
    alt: "Santa Barbara City College mural",
    title: "Santa Barbara City College 2",
    category: "Schools & Youth Centers",
    location: "Bay Area",
    year: "",
    artist: "Rachel",
  },
  {
    src: "/images/murals/schools-timothy-b-school.jpg",
    alt: "Peaceful Warriors Oakland mural",
    title: "Peaceful Warriors Oakland",
    category: "Schools & Youth Centers",
    location: "Oakland, CA",
    year: "",
    artist: "Timothy B",
  },
  {
    src: "/images/murals/schools-timothybschool1.jpeg",
    alt: "Peaceful Warriors San Francisco mural",
    title: "Peaceful Warriors San Francisco",
    category: "Schools & Youth Centers",
    location: "San Francisco, CA",
    year: "",
    artist: "Timothy B",
  },
  {
    src: "/images/murals/schools-winton-wildcats.jpg",
    alt: "Winton Wildcats mural",
    title: "Winton Wildcats 1",
    category: "Schools & Youth Centers",
    location: "Hayward, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/schools-winton-wildcats2.jpg",
    alt: "Winton Wildcats mural",
    title: "Winton Wildcats 2",
    category: "Schools & Youth Centers",
    location: "Hayward, CA",
    year: "",
    artist: "BAMP",
  },
  // Sports murals (additional)
  {
    src: "/images/murals/sports-billboard.jpeg",
    alt: "All-Star Warriors Billboard mural",
    title: "All-Star Warriors Billboard",
    category: "Sports",
    location: "San Francisco, CA",
    year: "",
    artist: "Ashley",
  },
  {
    src: "/images/murals/sports-chinatown-all-star.jpeg",
    alt: "Chinatown All Star mural",
    title: "Chinatown All Star",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "Sorell Tsui",
  },
  {
    src: "/images/murals/sports-head-over-heels.jpg",
    alt: "Head Over Heels Athletic mural",
    title: "Head Over Heels Athletic",
    category: "Sports",
    location: "Emeryville, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-rakuten-jane-the-bakery.jpeg",
    alt: "Steph Curry All Star mural at Jane the Bakery",
    title: "Steph Curry All Star",
    category: "Sports",
    location: "San Francisco, CA",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-ica-dogpatch-drone.jpg",
    alt: "ICA Dogpatch drone view",
    title: "ICA Dogpatch 1",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
  {
    src: "/images/murals/IMG_0013.jpeg",
    alt: "Canvas Kenya Project mural",
    title: "Canvas Kenya Project",
    category: "Schools & Youth Centers",
    location: "Kenya",
    year: "2023",
    artist: "BAMP",
  },
  {
    src: "/images/murals/sports-jordan.jpg",
    alt: "Jordan All Star mural",
    title: "Jordan All Star 2",
    category: "Sports",
    location: "Bay Area",
    year: "",
    artist: "Steven Andersen and Andre",
  },
  {
    src: "/images/murals/sports-ica-dogpatch-court.jpg",
    alt: "ICA Dogpatch Court mural",
    title: "ICA Dogpatch 2",
    category: "Sports",
    location: "San Francisco",
    year: "",
    artist: "BAMP",
  },
];

// Strip trailing number from title to get the base/group title
const getBaseTitle = (title: string) => title.replace(/\s+\d+$/, '').trim();

interface MuralGroup {
  id: string;
  title: string;
  images: typeof artworks;
  category: string;
  location: string;
  year: string;
  artist: string;
}

// Pre-compute all groups from the full artworks array
const allGroups: MuralGroup[] = (() => {
  const map = new Map<string, MuralGroup>();
  for (const artwork of artworks) {
    const baseTitle = getBaseTitle(artwork.title);
    if (!map.has(baseTitle)) {
      map.set(baseTitle, {
        id: baseTitle,
        title: baseTitle,
        images: [artwork],
        category: artwork.category,
        location: artwork.location,
        year: artwork.year,
        artist: artwork.artist,
      });
    } else {
      map.get(baseTitle)!.images.push(artwork);
    }
  }
  return Array.from(map.values());
})();

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

interface MuralCarouselProps {
  group: MuralGroup;
  onImageClick: (img: typeof artworks[0], group: MuralGroup, index: number) => void;
}

const MuralCarousel = ({ group, onImageClick }: MuralCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMultiple = group.images.length > 1;
  const currentImage = group.images[currentIndex];

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(i => (i - 1 + group.images.length) % group.images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(i => (i + 1) % group.images.length);
  };

  return (
    <div className="relative w-full h-full" onClick={() => onImageClick(currentImage, group, currentIndex)}>
      <GalleryImage src={currentImage.src} alt={currentImage.alt} />
      {isMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-black/55 rounded-full text-white hover:bg-black/80 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 bg-black/55 rounded-full text-white hover:bg-black/80 transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-black/60 rounded-full text-white text-xs font-accent tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentIndex + 1} / {group.images.length}
          </div>
          {/* Dot indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {group.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                aria-label={`Go to image ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<MuralGroup | null>(null);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const imageSrc = searchParams.get("image");
    if (imageSrc) {
      const found = artworks.find((art) => art.src === imageSrc);
      if (found) {
        const group = allGroups.find(g => g.images.includes(found)) ?? null;
        setSelectedImage(found);
        setSelectedGroup(group);
        setSelectedGroupIndex(group ? group.images.indexOf(found) : 0);
      }
      setSearchParams({}, { replace: true });
    }
  }, []);

  const openLightbox = (img: typeof artworks[0], group: MuralGroup, index: number) => {
    setSelectedImage(img);
    setSelectedGroup(group);
    setSelectedGroupIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedGroup(null);
    setSelectedGroupIndex(0);
  };

  const lightboxPrev = () => {
    if (!selectedGroup) return;
    const newIndex = (selectedGroupIndex - 1 + selectedGroup.images.length) % selectedGroup.images.length;
    setSelectedGroupIndex(newIndex);
    setSelectedImage(selectedGroup.images[newIndex]);
  };

  const lightboxNext = () => {
    if (!selectedGroup) return;
    const newIndex = (selectedGroupIndex + 1) % selectedGroup.images.length;
    setSelectedGroupIndex(newIndex);
    setSelectedImage(selectedGroup.images[newIndex]);
  };

  const filteredGroups = activeCategory === "All"
    ? allGroups
    : allGroups.filter(group => group.images.some(img => img.category === activeCategory));

  return (
    <>
      <PageHero
        title="Our Gallery"
        subtitle="Portfolio"
        description="Explore a selection of BAMP's public art projects across Oakland and the greater Bay Area, from neighborhood schools to NBA All-Star installations."
        backgroundImage="/images/murals/IMG_0011.jpeg"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
        imagePosition="center 0%"
      />

      <GallerySection
        groups={filteredGroups}
        selectedImage={selectedImage}
        selectedGroup={selectedGroup}
        selectedGroupIndex={selectedGroupIndex}
        openLightbox={openLightbox}
        closeLightbox={closeLightbox}
        lightboxPrev={lightboxPrev}
        lightboxNext={lightboxNext}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
      />
    </>
  );
};

interface GallerySectionProps {
  groups: MuralGroup[];
  selectedImage: typeof artworks[0] | null;
  selectedGroup: MuralGroup | null;
  selectedGroupIndex: number;
  openLightbox: (img: typeof artworks[0], group: MuralGroup, index: number) => void;
  closeLightbox: () => void;
  lightboxPrev: () => void;
  lightboxNext: () => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categories: string[];
}

const GallerySection = ({
  groups,
  selectedImage,
  selectedGroup,
  selectedGroupIndex,
  openLightbox,
  closeLightbox,
  lightboxPrev,
  lightboxNext,
  activeCategory,
  setActiveCategory,
  categories
}: GallerySectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [groups]);

  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      else if (e.key === "ArrowRight") lightboxNext();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedImage, selectedGroupIndex, selectedGroup]);

  const visibleGroups = groups.slice(0, visibleCount);
  const hasMore = visibleCount < groups.length;

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
          <Filter className="w-5 h-5 text-black" />
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
            {visibleGroups.map((group, index) => (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (index % LOAD_MORE_COUNT) * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                  index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`aspect-square ${(index % 5 === 0) ? "md:aspect-auto md:h-full" : ""}`}>
                  <MuralCarousel group={group} onImageClick={openLightbox} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/90 via-bamp-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {group.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {group.title}
                  </h3>
                  <p className="text-white text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {group.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {groups.length === 0 && (
          <div className="text-center py-20">
            <p className="text-black text-lg">
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
            <p className="text-sm text-black">
              Showing {visibleCount} of {groups.length}
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
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 p-2 text-white hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Prev / Next arrows — only shown for multi-image groups */}
            {selectedGroup && selectedGroup.images.length > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/25 rounded-full text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                >
                  <ChevronRight size={28} />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black/50 rounded-full text-white text-sm font-accent tracking-wide">
                  {selectedGroupIndex + 1} / {selectedGroup.images.length}
                </div>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full grid md:grid-cols-3 gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:col-span-2">
                <img
                  key={selectedImage.src}
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
                  {getBaseTitle(selectedImage.title)}
                </h2>
                <div className="space-y-3 text-white">
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
