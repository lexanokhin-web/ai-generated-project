import React, { memo, useState, useCallback } from 'react';
import Section from '../UI/Section';
import ProjectGalleryModal from '../UI/ProjectGalleryModal';

// Statisches Projekt-Array
const PROJECT_IMAGES = [
    { img: "/images/image-21.webp", title: "Badezimmermodernisierung", cat: "Sanierung", desc: "Komplette Neuerstellung eines barrierefreien und modernen Badezimmers." },
    { img: "/images/bathroom.webp", title: "Wohnzimmer Redesign", cat: "Innenausbau", desc: "Exklusive Wandgestaltung und Bodenerneuerung für ein wohnliches Ambiente." },
    { img: "/images/kitchen.webp", title: "Balkonrenovierung", cat: "Außenbau", desc: "Fachgerechte Betonsanierung und Belagserneuerung für Außenbereiche." },
    { img: "/images/living-room.webp", title: "Badezimmer-Renovierung", cat: "Modernisierung", desc: "Vollständige Sanierung von Fliesen und Sanitäranlagen aus einer Hand." },
    { img: "/images/open-plan.webp", title: "Open-Plan Living", cat: "Innenausbau", desc: "Zusammenführung von Wohnbereichen durch präzise Trockenbauarbeiten." },
    { img: "/images/wardrobe.webp", title: "Maßgeschneiderter Stauraum", cat: "Tischlerarbeiten", desc: "Individuell gefertigte Einbauschränke für maximale Platzeffizienz." },
    { img: "/images/image-22.webp", title: "Moderner Bad-Traum", cat: "Sanierung", desc: "Luxuriöse Badsanierung mit Fokus auf Design und Funktionalität." },
    { img: "/images/image-23.webp", title: "Wohnraum Design", cat: "Modernisierung", desc: "Stilvolle Renovierung von Wohnräumen mit hochwertigen Materialien." },
    { img: "/images/image-24.webp", title: "Badsanierung", cat: "Sanierung", desc: "Professionelle Badezimmererneuerung inklusive Elektrik und Sanitär." },
    { img: "/images/image-25.webp", title: "Montage von Schutzschaltern", cat: "Elektroarbeiten", desc: "Fachliche Installation moderner Elektro-Sicherheitssysteme." },
];

const ProjectsSection = memo(() => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const openGallery = useCallback((index) => {
        setSelectedProjectIndex(index);
        setIsGalleryOpen(true);
    }, []);

    const closeGallery = useCallback(() => {
        setIsGalleryOpen(false);
    }, []);

    return (
        <>
            <Section id="projects" className="bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Referenzen</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                            Unsere <span className="text-accent font-serif italic">Projekte</span>
                        </h3>
                    </div>

                    {/* Projekt-Grid — vereinfacht für Mobilgeräte */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 h-auto mb-8 md:mb-12">
                        {/* Главный проект - 2x2 на десктопе */}
                        <div
                            className="col-span-2 row-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer h-[200px] sm:h-[300px] lg:h-auto"
                            data-aos="zoom-in"
                            onClick={() => openGallery(0)}
                        >
                            <img
                                src={PROJECT_IMAGES[0].img}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                alt={PROJECT_IMAGES[0].title}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-10">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1 md:mb-2">{PROJECT_IMAGES[0].cat}</p>
                                    <h4 className="text-white font-bold text-lg md:text-2xl">{PROJECT_IMAGES[0].title}</h4>
                                </div>
                            </div>
                        </div>

                        {/* Restliche Projekte */}
                        {PROJECT_IMAGES.slice(1, 5).map((project, i) => (
                            <div
                                key={i}
                                className="relative group overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer h-[150px] sm:h-[180px] md:h-auto"
                                data-aos="zoom-in"
                                data-aos-delay={(i + 1) * 50}
                                onClick={() => openGallery(i + 1)}
                            >
                                <img
                                    src={project.img}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3 md:p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-accent text-[0.5rem] md:text-[0.6rem] font-bold uppercase tracking-widest mb-0.5 md:mb-1">{project.cat}</p>
                                        <h4 className="text-white font-bold text-xs md:text-sm">{project.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center" data-aos="fade-up">
                        <button
                            onClick={() => openGallery(0)}
                            className="px-6 md:px-10 py-3 md:py-4 rounded-full border border-slate-200 text-slate-600 font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                        >
                            Alle Referenzen ansehen
                        </button>
                    </div>
                </div>
            </Section>

            <ProjectGalleryModal
                isOpen={isGalleryOpen}
                onClose={closeGallery}
                images={PROJECT_IMAGES}
                initialIndex={selectedProjectIndex}
            />
        </>
    );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
