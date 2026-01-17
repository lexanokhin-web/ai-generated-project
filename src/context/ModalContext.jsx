import React, { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext({
    isContactModalOpen: false,
    openContactModal: () => { },
    closeContactModal: () => { },
});

export const ModalProvider = ({ children }) => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setIsContactModalOpen(true);
    }, []);

    const closeContactModal = useCallback(() => {
        setIsContactModalOpen(false);
    }, []);

    return (
        <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
