import React, { memo } from 'react';

/**
 * Progress-Anzeige für den Kalkulator-Wizard
 */
const CalculatorProgress = memo(({ currentStep, totalSteps, onStepClick, isStepComplete }) => {
    const steps = [
        { num: 1, label: 'Objekttyp' },
        { num: 2, label: 'Fläche' },
        { num: 3, label: 'Leistungen' },
        { num: 4, label: 'Material' },
        { num: 5, label: 'Extras' },
        { num: 6, label: 'Übersicht' }
    ];

    return (
        <div className="w-full">
            {/* Desktop Progress */}
            <div className="hidden md:flex items-center justify-between relative">
                {/* Progress Line Background */}
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-slate-200" />

                {/* Active Progress Line */}
                <div
                    className="absolute top-5 left-0 h-0.5 bg-accent transition-all duration-500"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                />

                {steps.map((step) => {
                    const isActive = currentStep === step.num;
                    const isCompleted = currentStep > step.num || isStepComplete(step.num);
                    const isClickable = step.num < currentStep || isStepComplete(step.num - 1);

                    return (
                        <div
                            key={step.num}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <button
                                onClick={() => isClickable && onStepClick(step.num)}
                                disabled={!isClickable}
                                className={`
                                    w-10 h-10 rounded-full flex items-center justify-center 
                                    font-bold text-sm transition-all duration-300 
                                    ${isActive
                                        ? 'bg-accent text-white shadow-lg shadow-accent/30 scale-110'
                                        : isCompleted
                                            ? 'bg-green-500 text-white'
                                            : 'bg-slate-100 text-slate-400'
                                    }
                                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'}
                                `}
                            >
                                {isCompleted && !isActive ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    step.num
                                )}
                            </button>
                            <span className={`
                                mt-2 text-xs font-medium transition-colors
                                ${isActive ? 'text-accent' : isCompleted ? 'text-slate-700' : 'text-slate-400'}
                            `}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Mobile Progress */}
            <div className="md:hidden">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-600">
                        Schritt {currentStep} von {totalSteps}
                    </span>
                    <span className="text-sm font-bold text-accent">
                        {steps.find(s => s.num === currentStep)?.label}
                    </span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-accent transition-all duration-500 rounded-full"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
});

CalculatorProgress.displayName = 'CalculatorProgress';

export default CalculatorProgress;
