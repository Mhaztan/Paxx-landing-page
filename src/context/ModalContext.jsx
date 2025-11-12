import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// 1. Create the context
const ModalContext = createContext();

// 2. Create a custom hook for easy consumption
export const useModal = () => useContext(ModalContext);

// 3. Create the Provider component that will wrap our app
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // The value that will be available to all consuming components
  const value = {
    isModalOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};