import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddTask = ({addTask, setShowModal}) => {
	const [formData, setFormData] = useState({
		text: '',
		day: '',
		reminder: false,
		id: Math.floor(Math.random() * 1580000)
	});

	const onChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		addTask(formData);
		setShowModal(false);
		setFormData({
			text: '',
			day: '',
			reminder: false,
			id: Math.floor(Math.random() * 1580000)
		});
	};

	const {text, day, reminder} = formData;

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label htmlFor='text'>Task</label>
				<input type='text' name='text' value={text} onChange={onChange} />
			</div>
			<div className='form-control'>
				<label htmlFor='day'>Day & Time</label>
				<input type='text' name='day' value={day} onChange={onChange} />
			</div>
			<div className='form-control-check'>
				<label htmlFor='reminder'>Reminder</label>
				<input type='checkbox' checked={reminder} name='reminder' value={reminder} onChange={(e) => setFormData({...formData, reminder: e.currentTarget.checked})} />
			</div>
			<input type='submit' value='Save Task' className='btn btn-block' />
		</form>
	);
};

AddTask.propTypes = {
	addTask: PropTypes.func,
	setShowModal: PropTypes.func
};

export default AddTask;
