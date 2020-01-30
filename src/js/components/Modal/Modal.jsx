import React from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import '@reach/dialog/styles.css';

const submitStyle = {
	justifySelf: 'end'
};

const Modal = (props) => {
	const AnimatedDialogOverlay = animated(DialogOverlay);
	const AnimatedDialogContent = animated(DialogContent);
	const transitions = useTransition(props.isVisible, null, {
		from: { opacity: 0, y: -20 },
		enter: { opacity: 1, y: 0 },
		leave: { opacity: 0, y: 20 }
    });
    
    const closeModal = () => {
        props.toggleModal();
    }

	const submit = () => {
		props.onSubmit();
    }

	return (
		<div>
			{transitions.map(
				({ item, key, props: styles }) =>
					item && (
						<AnimatedDialogOverlay
							style={{ opacity: styles.opacity }}
							onDismiss={closeModal}
							key={key}
							initialFocusRef={false}
						>
							<AnimatedDialogContent
								style={{
									transform: styles.y.interpolate(
										(value) =>
											`translate3d(0px, ${value}px, 0px)`
									),
									border: '4px solid rgba(191, 55, 34, 0.7)',
									borderRadius: 10
								}}
								aria-label='modal'
							>
								<div>
									<div>{props.title}</div>
									<hr />
									{props.body}
									<hr />
									<div className='grid'>
										<button
											style={submitStyle}
											onClick={submit}
										>
											Submit
										</button>
									</div>
								</div>
							</AnimatedDialogContent>
						</AnimatedDialogOverlay>
					)
			)}
		</div>
	);
};

export default Modal;
