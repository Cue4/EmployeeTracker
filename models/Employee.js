const pool = require('../config/connection');

const createEmployee = async (first_name, last_name, roleId) => {
  const query = 'INSERT INTO employee (first_name, last_name, role_id) VALUES ($1, $2, $3) RETURNING *';
  const values = [first_name, last_name, roleId];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating employees:', err);
    throw err;
  }
};

const getAllEmployees = async () => {
  const query = 'SELECT * FROM employee';
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error fetching employee:', err);
    throw err;
  }
};

const getEmployeeById = async (id) => {
  const query = 'SELECT * FROM employee WHERE id = $1';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching employees:', err);
    throw err;
  }
};

const updateEmployee = async (id, name, roleId, departmentId) => {
  const query = 'UPDATE employee SET name = $1, role_id = $2, department_id = $3 WHERE id = $4 RETURNING *';
  const values = [name, roleId, departmentId, id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error updating employees:', err);
    throw err;
  }
};

const deleteEmployee = async (id) => {
  const query = 'DELETE FROM employee WHERE id = $1 RETURNING *';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error deleting employees:', err);
    throw err;
  }
};

const viewEmployee = async () => {
  const query = `
    SELECT employee.id, employee.name, roles.title AS role, departments.name AS department
    FROM employee
    JOIN roles ON employee.role_id = roles.id
    JOIN departments ON employee.department_id = departments.id;
  `;
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error fetching employees with role and department details:', err);
    throw err;
  }
};

module.exports = {
  createEmployee,
  viewEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};