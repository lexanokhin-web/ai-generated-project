import { useState } from 'react';

/**
 * Shared logic for contact form submission via Web3Forms
 */
export const useContactForm = (accessKey = "cb12ff43-05c0-4c52-b98c-e7648ff67914") => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState(null); // 'success', 'error', or null

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        const formData = new FormData(event.target);
        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setSubmitResult('success');
                event.target.reset();
                return true;
            } else {
                setSubmitResult('error');
                return false;
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitResult('error');
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetStatus = () => setSubmitResult(null);

    return {
        isSubmitting,
        submitResult,
        handleSubmit,
        resetStatus
    };
};
