import React, { memo } from 'react';

const LocalProject = memo(({ project }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
            <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.type} in ${project.city}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                        <span className="text-accent font-bold text-xs uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                            {project.city}
                        </span>
                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mt-3">{project.type}</h4>
                    </div>

                    <div className="relative">
                        <svg className="absolute -top-4 -left-4 w-8 h-8 text-slate-100" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                        </svg>
                        <p className="text-slate-600 italic text-lg leading-relaxed relative z-10 mb-6">
                            &quot;{project.quote}&quot;
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-slate-800 text-sm">{project.client}</p>
                            <p className="text-slate-400 text-xs">Zufriedener Kunde</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

LocalProject.displayName = 'LocalProject';

export default LocalProject;
