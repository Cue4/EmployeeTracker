const pool = require('../config/connection');

// Function to create a new role
const createRole = async (title, departmentId) => {
  const query = 'INSERT INTO roles (title, department_id) VALUES ($1, $2) RETURNING *';
  const values = [title, departmentId];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating role:', err);
    throw err;
  }
};

// Function to get all roles
const getAllRoles = async () => {
  try {
    const query = 'SELECT * FROM roles';
    const result = await pool.query(query);
    return result.rows;
  } catch (err) {
    console.error('Error fetching roles:', err);
    throw err;
  }
};

// Function to get a role by ID
const getRoleById = async (id) => {
  const query = 'SELECT * FROM roles WHERE id = $1';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching role:', err);
    throw err;
  }
};

// Function to update a role
const updateRole = async (id, title, departmentId) => {
  const query = 'UPDATE roles SET title = $1, department_id = $2 WHERE id = $3 RETURNING *';
  const values = [title, departmentId, id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error updating role:', err);
    throw err;
  }
};

// Function to delete a role
const deleteRole = async (id) => {
  const query = 'DELETE FROM roles WHERE id = $1 RETURNING *';
  const values = [id];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error deleting role:', err);
    throw err;
  }
};
const viewAllRoles = async () => {
  try {
  const result = await getAllRoles();
  console.log(result);

  if (result && result.rows) {
    console.table(result.rows);
  }else {
    console.error('No roles found or result.rows is undefined.');
  }
}catch (err) {
    console.error('Error while fetching roles:', err);
  }
};


module.exports = {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
  viewAllRoles,
};

