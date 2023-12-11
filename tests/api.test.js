const supertest = require('supertest');
const assert = require('assert');
const server = require('../src/index');
const api = supertest(server);

describe('API TEST Users', () => {
  test('Comprobar que devuelve un array de usuarios', async () => {
    await api
      .get('/users/getusers')
      .expect(200)
      .expect('Content-type', /json/)
      .expect((res) => {
        assert(
          Array.isArray(res.body),
          'El cuerpo de la petición devuelve un array'
        );
      });
  });

  test('Crear un usuario', async () => {
    const newUser = {
      name: 'Alejandra',
      email: 'ale@example.com',
      birthDate: '17-09-1960',
      address: {
        street: 'Tita Merello',
        state: 'Buenos Aires',
        city: 'Distrito Federal',
        country: 'Argentina',
        zip: '1428',
      },
    };
    const response = await api.post('/users/createUsers').send(newUser);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('_id');
  });

  test('Obtener un usuario por su Id', async () => {
    const userId = '6576888e4e782e6be5aff537'; // asegúrate de que sea un _id de usuario válido
    const response = await api.get(`/users/getusersById/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  test('Actualizar un usuario por ID', async () => {
    const userId = '6576888e4e782e6be5aff537'; // asegúrate de que sea un _id de usuario válido
    const updatedUser = { birthDate: '17-08-1960' };
    const response = await api
      .put(`/users/updateUsersById/${userId}`)
      .send(updatedUser);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  test('Eliminar un usuario por ID', async () => {
    const userId = '1'; // asegúrate de que sea un _id de usuario válido
    const response = await api.delete(`/users/deleteUsersById/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'User deleted' });
  });
});
