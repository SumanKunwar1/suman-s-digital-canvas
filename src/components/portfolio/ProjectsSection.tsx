import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Constellation Cooperative",
    url: "https://constellationcooperative.com/",
    desc: "A professional cooperative organization website designed to present the company's services, initiatives, and organizational structure.",
    tag: "Corporate Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878893/Screenshot_2026-03-07_155440_jlr8a7.png",
  },
  {
    title: "OM Sounds",
    url: "https://omsounds.com/",
    desc: "An e-commerce platform for selling authentic Nepali hand-hammered singing bowls worldwide with a full online store experience.",
    tag: "E-commerce",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878870/Screenshot_2026-03-07_155649_hlskc7.png",
  },
  {
    title: "Pure Land Hospitality",
    url: "https://purelandhospitality.com.np/",
    desc: "A professional hospitality website showcasing services, accommodations, and experiences.",
    tag: "Company Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772879554/cb81bb89-1ede-4b36-a105-cf9c992479fa.png",
  }, 
    {
    title: "NgYungNe Retreat",
    url: "https://ngyungne.org/",
    desc: "A retreat website providing information about spiritual retreat programs, schedules, teachings, and registration.",
    tag: "Retreat Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878885/Screenshot_2026-03-07_155502_obocbk.png",
  },
  {
    title: "Pure Land Travels",
    url: "https://purelandtravels.com.np/",
    desc: "A travel agency website designed to present tours, travel packages, and services for tourists exploring Nepal.",
    tag: "Travel Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878871/Screenshot_2026-03-07_155623_vkkjfp.png",
  },
  {
    title: "Trinity Waterproofing",
    url: "https://www.trinitywaterproofing.com.np/",
    desc: "A company portfolio website with service listings and business information for a waterproofing solutions company.",
    tag: "Business Portfolio",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878870/Screenshot_2026-03-07_155708_bbaoep.png",
  },
  {
    title: "RASS Engineering",
    url: "https://rassengineering.com.np/",
    desc: "A professional engineering company website highlighting services, projects, and corporate information.",
    tag: "Company Portfolio",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878873/Screenshot_2026-03-07_155733_p1ldes.png",
  },
  {
    title: "WAS Media Marketing",
    url: "https://wasmediamarketing.com/",
    desc: "A digital marketing agency website presenting services, portfolio, and business capabilities.",
    tag: "Agency Portfolio",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878873/Screenshot_2026-03-07_155752_ibu5ah.png",
  },
  {
    title: "SNS Tech",
    url: "https://snstech.co",
    desc: "A technology company website presenting IT services, solutions, and digital innovation capabilities.",
    tag: "Tech Company",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878871/Screenshot_2026-03-07_155808_eavkmr.png",
  },
  {
    title: "Rooted In Sound",
    url: "https://www.rootedinsound.com/",
    desc: "A website focused on sound healing, singing bowls, and spiritual sound practices.",
    tag: "Wellness Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878878/Screenshot_2026-03-07_160158_ahhpsd.png",
  },
  {
    title: "Padmasambhava Trip",
    url: "https://padmasambhavatrip.com/",
    desc: "A travel and pilgrimage website offering curated spiritual journeys and cultural experiences.",
    tag: "Travel Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878883/Screenshot_2026-03-07_155607_slr7dk.png",
  },
  {
    title: "Dharma Ideal",
    url: "https://www.dharmaideal.org/",
    desc: "A spiritual organization website providing resources, teachings, and community information.",
    tag: "Organization Website",
    image: "https://res.cloudinary.com/dcsgax3ld/image/upload/v1772878888/Screenshot_2026-03-07_155515_tnxnwz.png",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gold-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group glass-card rounded-xl overflow-hidden block"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="text-secondary" size={32} />
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-mono px-2 py-1 rounded-md bg-secondary/10 text-secondary mb-3">
                  {p.tag}
                </span>
                <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-secondary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
