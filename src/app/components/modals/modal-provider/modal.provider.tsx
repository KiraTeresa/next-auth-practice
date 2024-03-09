import styles from './modal.module.scss';

const ModalProvider = ({children}: { children: React.ReactNode }) => {
	return (
		<div className={styles.modalProvider}>
			<div className={styles.modal}>
				{children}
			</div>
		</div>
	)
}

export default ModalProvider;
