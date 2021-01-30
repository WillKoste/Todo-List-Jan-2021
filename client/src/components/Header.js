import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, setShowModal, showModal}) => {
	const onClick = () => {
		setShowModal(!showModal);
	};

	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color={showModal ? 'red' : 'green'} text={showModal ? 'Cancel' : 'Add Task'} onClick={onClick} />
		</header>
	);
};

Header.defaultProps = {
	title: 'DEFAULT'
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
	setShowModal: PropTypes.func,
	showModal: PropTypes.bool
};

export default Header;
