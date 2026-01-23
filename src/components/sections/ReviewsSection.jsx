import React, { memo } from 'react';
import { Star } from 'lucide-react';
import Section from '../UI/Section';

// Statische Daten der Bewertungen
const REVIEWS = [
    {
        name: "Familie Müller",
        location: "Lübeck",
        img: "/images/image-19.webp",
        text: "Endlich eine Firma, die hält, was sie verspricht. Die Badsanierung lief wie am Schnürchen. Besonders die Sauberkeit auf der Baustelle hat uns beeindruckt."
    },
    {
        name: "Marc Jensen",
        location: "Hamburg-Eppendorf",
        img: "/images/image-46.webp",
        text: "Hervorragende Arbeit bei unserem Altbau in Hamburg. Pünktlich, sauber und fachlich absolut top. Wir sind sehr zufrieden!"
    },
    {
        name: "Thomas & Sarah",
        location: "Mölln",
        img: "/images/image-20.webp",
        text: "Kompetent, freundlich und pünktlich. Wir haben unser komplettes Erdgeschoss sanieren lassen und sind vom Ergebnis begeistert."
    },
    {
        name: "Lukas Weber",
        location: "Lüneburg",
        img: "/images/image-36.webp",
        text: "Herausragende Organisation bei der Asbestsanierung und den anschließenden Elektroarbeiten. Alles aus einer Hand zu haben, hat uns viel Stress erspart."
    }
];

const ReviewsSection = memo(() => {
    return (
        <Section className="bg-white relative overflow-hidden" id="reviews">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-48 md:w-64 h-48 md:h-64 bg-accent rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Kundenstimmen</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                        Top-Bewertungen <span className="text-accent font-serif italic text-4xl md:text-6xl">unserer Kunden</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {REVIEWS.map((review, i) => (
                        <div
                            key={i}
                            className="glass-panel p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] relative shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-l-[1px] border-white/40 bg-white/40"
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex gap-1 mb-4 md:mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                                ))}
                            </div>
                            <div className="absolute top-6 md:top-10 right-6 md:right-10 text-6xl md:text-8xl text-accent opacity-10 font-serif pointer-events-none">&quot;</div>
                            <p className="text-slate-700 italic text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 relative z-10 leading-relaxed">
                                &quot;{review.text}&quot;
                            </p>
                            <div className="flex items-center gap-4 md:gap-5">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                                    <img src={review.img} className="w-full h-full object-cover" alt={review.name} loading="lazy" decoding="async" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base md:text-lg">{review.name}</h4>
                                    <p className="text-[0.65rem] md:text-xs text-accent uppercase tracking-widest font-bold">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

ReviewsSection.displayName = 'ReviewsSection';

export default ReviewsSection;
