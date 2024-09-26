const pool = require('../config/connection');

// Function to create a new employee
const createEmployee = async (name, roleId, departmentId) => {
  const query = 'INSERT INTO employees (name, role_id, department_id) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, roleId, departmentId];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating employee:', err);
    throw err;
  }
};

// Function to get all employees
const getAllEmployees = async () => {
  const query = 'SELECT * FROM employee';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error fetching employees:', err);
    throw err;
  }
};

// Function to get an employee by ID
const getEmployeeById = async (id) => {
  const query = 'SELECT * FROM employees WHERE id = $1';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching employee:', err);
    throw err;
  }
};

// Function to update an employee
const updateEmployee = async (id, name, roleId, departmentId) => {
  const query = 'UPDATE employees SET name = $1, role_id = $2, department_id = $3 WHERE id = $4 RETURNING *';
  const values = [name, roleId, departmentId, id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error updating employee:', err);
    throw err;
  }
};

// Function to delete an employee
const deleteEmployee = async (id) => {
  const query = 'DELETE FROM employees WHERE id = $1 RETURNING *';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error deleting employee:', err);
    throw err;
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
