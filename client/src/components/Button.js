import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color, text, onClick}) => {
	return (
		<button onClick={onClick} style={{background: color}} className='btn'>
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'saddleBrown',
	text: 'DEFAULT'
};

Button.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default Button;
