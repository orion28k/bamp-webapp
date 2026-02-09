import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Eye, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const products = [
  {
    id: 1,
    name: "BAMP Classic Tee",
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    category: "Apparel",
    rating: 4.8,
    reviews: 24,
    colors: ["Black", "White", "Red"],
  },
  {
    id: 2,
    name: "Artist Hoodie",
    price: 65,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    category: "Apparel",
    rating: 4.9,
    reviews: 18,
    colors: ["Navy", "Gray", "Black"],
  },
  {
    id: 3,
    name: "Community Art Print",
    price: 45,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=600&fit=crop",
    category: "Prints",
    rating: 5.0,
    reviews: 32,
    sizes: ["8x10", "11x14", "16x20"],
  },
  {
    id: 4,
    name: "Mural Poster Collection",
    price: 25,
    image: "https://images.unsplash.com/photo-1561839561-b13bcfc05f72?w=600&h=600&fit=crop",
    category: "Prints",
    rating: 4.7,
    reviews: 15,
    sizes: ["12x18", "18x24"],
  },
  {
    id: 5,
    name: "BAMP Cap",
    price: 28,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
    category: "Accessories",
    rating: 4.6,
    reviews: 21,
    colors: ["Black", "Red", "White"],
  },
  {
    id: 6,
    name: "Artist Tote Bag",
    price: 22,
    image: "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=600&h=600&fit=crop",
    category: "Accessories",
    rating: 4.8,
    reviews: 27,
    colors: ["Natural", "Black"],
  },
  {
    id: 7,
    name: "Spray Paint Set",
    price: 55,
    image: "https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&h=600&fit=crop",
    category: "Art Supplies",
    rating: 4.9,
    reviews: 12,
  },
  {
    id: 8,
    name: "Acrylic Brush Set",
    price: 38,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop",
    category: "Art Supplies",
    rating: 4.7,
    reviews: 19,
  },
];

const categories = ["All", "Apparel", "Prints", "Accessories", "Art Supplies"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Shop BAMP"
        subtitle="Support Our Mission"
        description="Every purchase supports our community art programs and helps us create more murals."
        backgroundImage="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=600&fit=crop"
        breadcrumbs={[{ label: "Shop", href: "/shop" }]}
      />
      
      <ShopSection 
        products={filteredProducts}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={categories}
        hoveredProduct={hoveredProduct}
        setHoveredProduct={setHoveredProduct}
      />
      
      <FeaturedSection />
    </>
  );
};

interface ShopSectionProps {
  products: typeof products;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  categories: string[];
  hoveredProduct: number | null;
  setHoveredProduct: (id: number | null) => void;
}

const ShopSection = ({ 
  products, 
  activeCategory, 
  setActiveCategory, 
  categories,
  hoveredProduct,
  setHoveredProduct
}: ShopSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-muted">
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay Actions */}
                <div className={`absolute inset-0 bg-bamp-charcoal/40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                }`}>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {product.category}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary font-bold text-xl">${product.price}</p>
                
                {product.colors && (
                  <div className="flex gap-2 mt-3">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shop Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-muted rounded-2xl p-8"
        >
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            <strong className="text-foreground">100% of proceeds</strong> from our shop go directly to supporting 
            BAMP's community mural programs, youth education initiatives, and artist stipends.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Limited Edition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              2024 BAMP Artist Collection
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8">
              A special collaboration with local artists featuring exclusive designs 
              inspired by our most iconic murals. Each piece tells a story of community 
              and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-8 py-6 group">
                Shop Collection
                <ShoppingCart className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
              <Link to="/gallery">
                <Button variant="outline" className="rounded-full px-8 py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  View Murals
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop"
                alt="Collection item 1"
                className="rounded-2xl w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=300&fit=crop"
                alt="Collection item 2"
                className="rounded-2xl w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop"
                alt="Collection item 3"
                className="rounded-2xl w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=500&fit=crop"
                alt="Collection item 4"
                className="rounded-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
