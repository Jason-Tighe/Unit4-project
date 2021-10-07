import Map from './Map';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default function MapModal() {
	const customStyles = {
		overlay: {
			background: 'rgba(0, 0, 0, 0.74)'
		},
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			padding: '5px',
			height: '65vh',
			width: '85vw'
		}
	};

	let subtitle;
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<button className="m-1 btn btn-primary" onClick={openModal}>
				Nearby Facility
			</button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<Map />
			</Modal>
		</>
	);
}
