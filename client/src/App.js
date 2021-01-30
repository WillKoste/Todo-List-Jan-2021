import React, {useState, useEffect} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import axios from 'axios';

import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [tasks, setTasks] = useState([]);
	// useState([
	// {
	// 	id: 1,
	// 	text: 'Doctors Appointment',
	// 	day: 'Feb 5th at 2:30pm',
	// 	reminder: true
	// },
	// {
	// 	id: 2,
	// 	text: 'Meeting at School',
	// 	day: 'Feb 6th at 1:30pm',
	// 	reminder: false
	// },
	// {
	// 	id: 3,
	// 	text: 'Food Shopping',
	// 	day: 'Feb 5th at 3:30pm',
	// 	reminder: false
	// },
	// {
	// 	id: 4,
	// 	text: 'Tax Parade',
	// 	day: 'Feb 6th at 8:30am',
	// 	reminder: true
	// },
	// {
	// 	id: 5,
	// 	text: 'Cheer at the Ball Game',
	// 	day: 'Feb 9th at 3:42am',
	// 	reminder: true
	// }
	// ]);

	const fetchData = async () => {
		const res = await axios.get(`http://localhost:5000/todos`);
		setTasks(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const addTask = async (formData) => {
		if (formData.text === '' || formData.day === '') {
			alert('Please include all fields');
		} else {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			};

			const res = await axios.post(`http://localhost:5000/todos`, formData, config);

			fetchData();
		}
	};

	const deleteTask = async (id) => {
		const res = await axios.delete(`http://localhost:5000/todos/${id}`);

		fetchData();
	};

	// const toggleReminder = async (id) => {
	// 	const taskToToggle = await fetchTask(id)
	// 	const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
	// }

	return (
		<div className='container'>
			<Header title='Task Tracker' setShowModal={setShowModal} showModal={showModal} />
			{showModal && <AddTask addTask={addTask} setShowModal={setShowModal} />}
			<Tasks tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
		</div>
	);
};

export default App;
