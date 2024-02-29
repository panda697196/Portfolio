"use client"
import React, { useState } from 'react'
import Modal from 'react-modal'
const ModalTools = () => {
    const [isOpen, setIsOpen] = useState(false)
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '70%',
            zIndex: 10000
        }
    }
    return (
        <div>
            <button
                className=" text-sm font-semibold text-gray-50 bg-purple-800 hover:bg-purple-800 px-3 py-1.5 rounded-md"
                onClick={() => setIsOpen(true)}
            >
                Learn More
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
                <h1>Modal Content</h1>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    )

}
export default ModalTools