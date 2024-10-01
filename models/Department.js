const pool = require('../config/connection');

const addDepartment = async (name) => {
  const query = 'INSERT INTO departments (name) VALUES ($1) RETURNING *';
  const values = [name];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating department:', err);
    throw err;
  }
};

const viewDepartment = async () => {
  try {
    const { rows } = await getAllDepartments();
    console.table(rows);
  } catch (err) {
    console.error('Error fetching departments:', err);
  }
};

const getAllDepartments = () => {
  const query = 'SELECT * FROM departments';
  try {
    const result = pool.query(query);
    console.log(result);
    return result.rows;
  } catch (err) {
    console.error('Error fetching departments:', err);
    throw err;
  }
};

const getDepartmentById = async (id) => {
  const query = 'SELECT * FROM departments WHERE id = $1';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching department:', err);
    throw err;
  }
};

const updateDepartment = async (id, name) => {
  const query = 'UPDATE departments SET name = $1 WHERE id = $2 RETURNING *';
  const values = [name, id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error updating department:', err);
    throw err;
  }
};

const deleteDepartment = async (id) => {
  const query = 'DELETE FROM departments WHERE id = $1 RETURNING *';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error deleting department:', err);
    throw err;
  }
};

module.exports = {
  addDepartment,
  viewDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
