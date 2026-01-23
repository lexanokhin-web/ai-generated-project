import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Optimized Contact Form for Modal View
 */
const ContactModalForm = () => {
    const { isSubmitting, submitResult, handleSubmit, resetStatus } = useContactForm();

    if (submitResult === 'success') {
        return (
            <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Vielen Dank!</h3>
                <p className="text-slate-500 mb-8">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
                <button
                    onClick={resetStatus}
                    className="px-8 py-3 bg-slate-100 text-slate-600 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                >
                    Neue Nachricht senden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Vorname</label>
                    <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="Max"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Nachname</label>
                    <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="Mustermann"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Adresse</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="max@beispiel.de"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Telefon (optional)</label>
                    <input
                        type="tel"
                        name="phone"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                        placeholder="0151 12345678"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Ihre Nachricht</label>
                <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                ></textarea>
            </div>

            {submitResult === 'error' && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 bg-accent text-white font-bold rounded-2xl shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? (
                    'Wird gesendet...'
                ) : (
                    <>
                        <span>Jetzt unverbindlich anfragen</span>
                        <Send className="w-5 h-5" />
                    </>
                )}
            </button>
            <p className="text-[11px] text-slate-400 text-center px-4">
                Durch das Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden. Ihre Daten werden vertraulich behandelt.
            </p>
        </form>
    );
};

export default ContactModalForm;
