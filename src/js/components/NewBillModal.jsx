import React, { useState, useEffect } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import { useTransition, animated } from 'react-spring';
import '@reach/dialog/styles.css';
import Input from './Input';

const NewBillModal = (props) => {
	const AnimatedDialogOverlay = animated(DialogOverlay);
	const AnimatedDialogContent = animated(DialogContent);
	const transitions = useTransition(props.isVisible, null, {
		from: { opacity: 0, y: -20 },
		enter: { opacity: 1, y: 0 },
		leave: { opacity: 0, y: 20 }
	});

	const closeModal = () => {
		props.showModal();
	};

	return (
		<div>
			{transitions.map(
				({ item, key, props: styles }) =>
					item && (
						<AnimatedDialogOverlay
							style={{ opacity: styles.opacity }}
							onDismiss={closeModal}
						>
							<AnimatedDialogContent
								style={{
									transform: styles.y.interpolate(
										(value) =>
											`translate3d(0px, ${value}px, 0px)`
									),
									border: '4px solid hsla(0, 0%, 0%, 0.5)',
									borderRadius: 10
								}}
							>
								<div>
									<h4>New Bill </h4>
									<hr />
									<p>
										Please enter the information for a new
										bill.
									</p>
									<hr />
									<div>
										<button onClick={closeModal}>
											Okay
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

export default NewBillModal;
