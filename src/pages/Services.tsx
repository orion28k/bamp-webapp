import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Users, Building2, GraduationCap, Camera, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const Services = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="What We Offer"
        description="From custom murals to community projects, discover how we can transform your space."
        backgroundImage="/images/murals/IMG_4061.jpg"
        imagePosition="center 30%"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />
      <ServicesGrid />
      <ProcessSection />
      <FAQSection />
    </>
  );
};

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Custom Murals",
      description: "Commission a unique mural designed specifically for your space. We work with you from concept to completion, creating artwork that tells your story.",
      features: ["Initial consultation", "Custom design concepts", "Professional installation", "Touch-up warranty"],
      image: "/images/murals/community-youthempowerment1.jpeg",
      comingSoon: false,
    },
    {
      icon: Users,
      title: "Community Projects",
      description: "Collaborative art projects that engage community members in the creative process. We facilitate workshops and paint days that bring neighborhoods together.",
      features: ["Community workshops", "Collaborative design", "Youth engagement", "Cultural storytelling"],
      image: "/images/murals/File_040.jpeg",
      comingSoon: false,
    },
    {
      icon: Building2,
      title: "Commercial Art",
      description: "Transform your business space with professional mural installations that captivate customers and enhance your brand identity.",
      features: ["Brand integration", "Large-scale installations", "Indoor & outdoor options", "Quick turnaround"],
      image: "/images/murals/mural-screenshot-3.png",
      comingSoon: false,
    },
    {
      icon: Camera,
      title: "Oakland Mural Tour",
      description: "Experience Oakland's vibrant street art scene with a guided tour of BAMP's most iconic murals. Learn the stories behind the art and the communities they represent.",
      features: ["Guided walking tour", "Artist stories & history", "Photo opportunities", "Community connection"],
      image: "/images/murals/activism-blackliberationwalkingtour.jpeg",
      comingSoon: false,
    },
    {
      icon: GraduationCap,
      title: "BAMP Camp",
      description: "An immersive art camp experience for young creatives to learn mural techniques, develop their artistic voice, and collaborate on real community projects.",
      features: ["Hands-on mural painting", "Artist mentorship", "Creative workshops", "Community project participation"],
      image: "/images/murals/IMG_1136.jpg",
      comingSoon: true,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Mural Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full range of services to bring your vision to life, 
            from concept development to final installation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-card rounded-2xl overflow-hidden shadow-lg w-full md:w-[calc(50%-1rem)] ${index < 3 ? "lg:w-[calc(33.333%-1.34rem)]" : "lg:w-[calc(50%-1rem)]"}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {service.comingSoon ? (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      Coming Soon
                    </span>
                  ) : (
                    <Link to="/contact">
                      <Button variant="outline" size="sm" className="rounded-full group">
                        Get Started
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 rounded-3xl bg-primary px-8 py-14 text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let's discuss how we can transform your space with a custom mural that tells your unique story.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 group">
              Request a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { number: "01", title: "Consultation", description: "We begin with a discovery call to understand your vision, space, and goals." },
    { number: "02", title: "Concept Development", description: "Our artists create custom design concepts based on your input and community stories." },
    { number: "03", title: "Community Input", description: "We gather feedback from stakeholders to ensure the design resonates." },
    { number: "04", title: "Creation", description: "Our skilled artists bring the design to life with professional-grade materials." },
    { number: "05", title: "Celebration", description: "We unveil the completed mural with a community celebration event." },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our Creative Process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="font-accent text-6xl text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-primary/20 translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a typical mural project take?",
      answer: "Project timelines vary based on size and complexity. Small murals may take 1-2 weeks, while large-scale projects can take 4-8 weeks from concept to completion.",
    },
    {
      question: "Do you work outside the Bay Area?",
      answer: "While our primary focus is the Bay Area, we do take on special projects in other locations. Contact us to discuss your project.",
    },
    {
      question: "Can community members participate in painting?",
      answer: "Absolutely! Community participation is at the heart of what we do. We can organize paint days where community members help bring the mural to life.",
    },
    {
      question: "What materials do you use?",
      answer: "We use professional-grade, weather-resistant paints and sealants designed for outdoor murals. Our materials are environmentally conscious and long-lasting.",
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we offer maintenance packages to keep your mural looking fresh. This includes touch-ups, cleaning, and protective coating reapplication.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Common Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="font-display font-bold text-foreground">{faq.question}</span>
                <Sparkles className={`w-5 h-5 text-primary transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Services;
