import api from '../../api';

const index = async () => {
  try {
    const { data } = await api.get('/todo');
    return data;
  } catch (error) {
    throw Error('Não foi possivel carregar as anotações');
  }
};

const show = async id => {
  try {
    const { data } = await api.get(`/todo/${id}`);
    return data;
  } catch (error) {
    throw Error('Não foi possivel carregar as anotações');
  }
};

const create = async todo => {
  try {
    const { data } = await api.post(`/todo`, todo);
    return data;
  } catch (error) {
    throw Error('Não foi possivel criar a anotação');
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
    throw Error('Não foi possivel atualizar a anotação');
  }
};

const delet = async id => {
  try {
    const { data } = await api.delete(`/todo/${id}`);
    return data;
  } catch (error) {
    throw Error('Não foi possivel deletar a anotação');
  }
};

export default { index, show, create, update, delet };
