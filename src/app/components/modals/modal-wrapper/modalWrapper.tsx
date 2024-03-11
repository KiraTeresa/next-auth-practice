'use client'

import styles from './modal.module.scss';
import { ModalType} from "@/app/context/ModalContext";
import LoginModalComponent from "@/app/components/modals/login-modal/login-modal.component";

const ModalWrapper = ({openModal}: {openModal: ModalType}) => {

	const getModalComponent = () => {
		switch (openModal) {
			case 'login':
				return <LoginModalComponent/>;
			default:
				return <></>;
		}
	}

	if (!openModal) {
		return <></>
	}

	return (
		<div className={styles.modalProvider}>
			<div className={styles.modal}>
				{getModalComponent()}
			</div>
		</div>
	)
}

export default ModalWrapper;
