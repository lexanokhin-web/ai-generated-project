import React, { memo, useState, useEffect, useCallback } from 'react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';

// Statische Prozessdaten
const STEPS = [
    { id: 1, title: "Beratung & Designauswahl", desc: "Wir hören zu. In Lübeck und Umgebung kommen wir gerne zu Ihnen, um Ihre Wünsche vor Ort zu besprechen und ein Konzept zu entwickeln." },
    { id: 2, title: "Festpreisangebot", desc: "Sie erhalten ein glasklares Angebot. Wir erklären Ihnen jeden Posten, damit Sie genau wissen, wofür Sie bezahlen." },
    { id: 3, title: "Umsetzung", desc: "Lehnen Sie sich zurück. Unsere Profis arbeiten sauber, schnell und diskret. Wir halten Sie proaktiv auf dem Laufenden." },
    { id: 4, title: "Fertigstellung & Übergabe", desc: "Ihr neues Zuhause wartet. Wir übergeben besenrein und gehen jeden Winkel mit Ihnen durch. Erst wenn Sie zufrieden sind, sind wir es auch." }
];

const ProcessSection = memo(() => {
    const [activeStep, setActiveStep] = useState(1);

    // IntersectionObserver zur Verfolgung des aktiven Schritts
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const step = parseInt(entry.target.getAttribute('data-step') || '1');
                    setActiveStep(step);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.process-step').forEach((step) => {
            observer.observe(step);
        });

        return () => observer.disconnect();
    }, []);

    const handleStepHover = useCallback((stepId) => {
        setActiveStep(stepId);
    }, []);

    return (
        <Section id="process" className="bg-white overflow-visible relative">
            <AnimatedBackground variant="modern-aura" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Der Prozess</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                        Ihr Weg zur <span className="text-accent font-serif italic">Sanierung</span>
                    </h3>
                    <p className="text-slate-500 mt-4 text-base md:text-lg">In 4 einfachen Schritten zum Ziel</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
                    {/* Image - Mobile on top, Desktop on left */}
                    <div className="w-full lg:w-1/2 lg:sticky-container self-start z-20">
                        <div className="h-[250px] sm:h-[350px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative bg-slate-900 flex items-center justify-center text-white border-4 border-white">
                            <img
                                src="/images/image-18.webp"
                                className="w-full h-full object-cover opacity-80"
                                alt="Der perfekte Plan"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                            <h3 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-xl md:text-3xl font-bold">Ihre Sanierung Lübeck</h3>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="w-full lg:w-1/2 space-y-12 md:space-y-32 py-4 lg:py-10 relative z-10">
                        {STEPS.map((step) => (
                            <div
                                key={step.id}
                                className="group cursor-pointer process-step"
                                data-aos="fade-up"
                                data-step={step.id}
                                onMouseEnter={() => handleStepHover(step.id)}
                            >
                                <div className="flex items-start gap-4 md:gap-6">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl font-bold shrink-0 transition-all duration-300 ${activeStep === step.id
                                        ? 'bg-accent text-white shadow-lg shadow-accent/40 scale-110'
                                        : 'bg-white border-2 border-slate-200 text-slate-400 group-hover:border-accent group-hover:text-accent'
                                        }`}>
                                        {step.id}
                                    </div>
                                    <div>
                                        <h3 className={`text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 ${activeStep === step.id ? 'text-accent' : ''}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
});

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;
