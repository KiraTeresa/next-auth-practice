'use client'

import React, {createContext, useState} from "react";
import ModalWrapper from "@/app/components/modals/modal-wrapper/modalWrapper";

export type ModalType = null | string;
type ModalValue = {
	activeModal: ModalType,
	onOpen: (modal: ModalType) => void,
	onClose: () => void
}

const ModalContext = createContext<ModalValue>({
	activeModal: null,
	onOpen: () => {
	}, onClose: () => {
	}
});

const ModalProviderWrapper = (props: { children: React.ReactNode }) => {
	const [openModal, setOpenModal] = useState<ModalType>(null);

	const activeModal = () => {
		return openModal;
	}

	const onOpen = (modal: ModalType) => {
		setOpenModal(modal);
	}

	const onClose = () => {
		setOpenModal(null);
	}

	return (
		<ModalContext.Provider value={{activeModal: openModal, onOpen, onClose}}>
			{props.children}
			<ModalWrapper openModal={openModal}/>
		</ModalContext.Provider>
	)
}

export {ModalContext, ModalProviderWrapper};
