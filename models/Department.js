const pool = require('../config/connection');

// Function to create a new department
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

// Function to get all departments
const getAllDepartments = () => {
  const query = 'SELECT * FROM departments';
  try {
    const result = pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error fetching departments:', err);
    throw err;
  }
};

// Function to get a department by ID
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

// Function to update a department
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

// Function to delete a department
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
