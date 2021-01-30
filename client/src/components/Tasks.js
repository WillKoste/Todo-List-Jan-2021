import React, {Fragment} from 'react';
import TaskItem from './TaskItem';
import PropTypes from 'prop-types';

const Tasks = ({tasks, setTasks, deleteTask}) => {
	return <Fragment>{tasks.length >= 1 ? tasks.map((task) => <TaskItem deleteTask={deleteTask} task={task} key={task.id} tasks={tasks} setTasks={setTasks} />) : <h4>No tasks currently, add one to get started!</h4>}</Fragment>;
};

Tasks.propTypes = {
	tasks: PropTypes.array,
	deleteTask: PropTypes.func,
	setTasks: PropTypes.func
};

export default Tasks;
