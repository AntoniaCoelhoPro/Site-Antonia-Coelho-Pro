import React, { createContext, useContext, useState } from 'react';
import { ContactPopup } from './ui/contact-popup';

interface ContactPopupContextType {
  openContactPopup: () => void;
  closeContactPopup: () => void;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export const ContactPopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactPopup = () => setIsOpen(true);
  const closeContactPopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ openContactPopup, closeContactPopup }}>
      {children}
      <ContactPopup isOpen={isOpen} onClose={closeContactPopup} />
    </ContactPopupContext.Provider>
  );
};

export const useContactPopup = () => {
  const context = useContext(ContactPopupContext);
  if (context === undefined) {
    throw new Error('useContactPopup must be used within a ContactPopupProvider');
  }
  return context;
};
