import React from 'react';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa/index';
import axios from 'axios';

const TaskItem = ({task: {text, day, reminder, id}, tasks, setTasks, deleteTask}) => {
	const onClick = () => {
		deleteTask(id);
	};

	const onToggle = async () => {
		setTasks(tasks.map((t) => (t.id === id ? {...t, reminder: !reminder} : t)));
	};

	return (
		<div onDoubleClick={onToggle} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className={`task ${reminder && 'reminder'}`}>
			<div>
				<h3>{text}</h3>
				<p>{day}</p>
			</div>
			<div>
				<FaTimes style={{color: 'red'}} onClick={onClick} />
			</div>
		</div>
	);
};

TaskItem.propTypes = {
	deleteTask: PropTypes.func
};

export default TaskItem;
