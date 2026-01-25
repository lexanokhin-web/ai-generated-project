import React, { memo } from 'react';
import { useCalculator } from './hooks/useCalculator';

// Steps
import PropertyTypeStep from './steps/PropertyTypeStep';
import AreaDetailsStep from './steps/AreaDetailsStep';
import ServicesStep from './steps/ServicesStep';

import ExtrasStep from './steps/ExtrasStep';
import SummaryStep from './steps/SummaryStep';

// UI Components
import CalculatorProgress from './CalculatorProgress';
import PriceDisplay from './ui/PriceDisplay';

/**
 * Hauptkomponente des Renovierungskostenrechners
 */
const CostCalculator = memo(() => {
    const calculator = useCalculator();

    const {
        currentStep,
        totalSteps,
        propertyType,
        areaDetails,
        selectedServices,
        selectedExtras,
        calculation,
        setPropertyType,
        setAreaDetails,
        addService,
        removeService,
        updateServiceQuantity,
        toggleExtra,
        nextStep,
        prevStep,
        goToStep,
        resetCalculator,
        isStepComplete,
        canProceed
    } = calculator;

    // Render current step
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <PropertyTypeStep
                        selectedType={propertyType}
                        onSelect={setPropertyType}
                    />
                );
            case 2:
                return (
                    <AreaDetailsStep
                        areaDetails={areaDetails}
                        onUpdate={setAreaDetails}
                    />
                );
            case 3:
                return (
                    <ServicesStep
                        selectedServices={selectedServices}
                        areaDetails={areaDetails}
                        onAddService={addService}
                        onRemoveService={removeService}
                        onUpdateQuantity={updateServiceQuantity}
                    />
                );
            case 4:
                return (
                    <ExtrasStep
                        selectedExtras={selectedExtras}
                        areaDetails={areaDetails}
                        onToggle={toggleExtra}
                        calculation={calculation}
                    />
                );
            case 5:
                return (
                    <SummaryStep
                        propertyType={propertyType}
                        areaDetails={areaDetails}
                        selectedServices={selectedServices}
                        selectedExtras={selectedExtras}
                        calculation={calculation}
                        onReset={resetCalculator}
                        onGoToStep={goToStep}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-8 md:mb-12">
                <CalculatorProgress
                    currentStep={currentStep}
                    totalSteps={totalSteps}
                    onStepClick={goToStep}
                    isStepComplete={isStepComplete}
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Step Content */}
                <div className={`${currentStep === 6 ? 'lg:col-span-4' : 'lg:col-span-3'}`}>
                    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10">
                        {renderStep()}

                        {/* Navigation Buttons (not on summary) */}
                        {currentStep < 5 && (
                            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-100">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 1}
                                    className={`
                                        flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
                                        ${currentStep === 1
                                            ? 'text-slate-300 cursor-not-allowed'
                                            : 'text-slate-600 hover:bg-slate-100'
                                        }
                                    `}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Zurück
                                </button>

                                <button
                                    onClick={nextStep}
                                    disabled={!canProceed}
                                    className={`
                                        flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all
                                        ${canProceed
                                            ? 'bg-accent text-white hover:bg-amber-700 shadow-lg shadow-accent/20'
                                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                        }
                                    `}
                                >
                                    {currentStep === 4 ? 'Zur Übersicht' : 'Weiter'}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sticky Price Panel (not on summary) */}
                {currentStep < 5 && (
                    <div className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-24">
                            <PriceDisplay calculation={calculation} />
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Price Bar (shown after interaction starts) */}
            {currentStep < 5 && (currentStep > 1 || propertyType !== null) && (
                <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-lg z-50 animate-in slide-in-from-bottom duration-300">
                    <PriceDisplay calculation={calculation} isCompact={true} />
                </div>
            )}
        </div>
    );
});

CostCalculator.displayName = 'CostCalculator';

export default CostCalculator;
