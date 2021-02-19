import api from '../../api';

const index = async () => {
  try {
    const { data } = await api.get('/todo');
    return data;
  } catch (error) {
    throw Error('Could not load the tasks.');
  }
};

const show = async id => {
  try {
    const { data } = await api.get(`/todo/${id}`);
    return data;
  } catch (error) {
    throw Error('Could not load the tasks.');
  }
};

const create = async todo => {
  try {
    const { data } = await api.post(`/todo`, todo);
    return data;
  } catch (error) {
    throw Error('It was not possible to create a task.');
  }
};

const update = async todo => {
  try {
    const { data } = await api.put(`/todo/${todo.id}`, {
      title: todo.title,
      content: todo.content,
      completed: todo.completed,
    });
    return data;
  } catch (error) {
    throw Error('Could not update task.');
  }
};

const delet = async id => {
  try {
    const { data } = await api.delete(`/todo/${id}`);
    return data;
  } catch (error) {
    throw Error('It was not possible to delete the task.');
  }
};

export default { index, show, create, update, delet };
