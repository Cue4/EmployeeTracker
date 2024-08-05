const inquirer = require('inquirer');
const pool = require('./config/connection');  

// Function to create a new employee
const createEmployee = async (name, roleId, departmentId) => {
  const query = 'INSERT INTO employees (name, role_id, department_id) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, roleId, departmentId];
  try {
    const result = await pool.query(query, values);
    console.log('Employee Created:', result.rows[0]);
  } catch (err) {
    console.error('Error creating employee:', err);
  }
};

// Function to display main menu
const mainMenu = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'Add New Employee',
      'View All Employees',
      'Exit'
    ],
  });

  switch (action) {
    case 'Add New Employee':
      await addNewEmployee();
      break;
    case 'View All Employees':
      await viewAllEmployees();
      break;
    case 'Exit':
      process.exit();
  }
};

// Function to add a new employee
const addNewEmployee = async () => {
  const { name, roleId, departmentId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the employee\'s name:',
    },
    {
      type: 'number',
      name: 'roleId',
      message: 'Enter the employee\'s role ID:',
    },
    {
      type: 'number',
      name: 'departmentId',
      message: 'Enter the employee\'s department ID:',
    },
  ]);

  await createEmployee(name, roleId, departmentId);
  await mainMenu();
};

// Function to view all employees
const viewAllEmployees = async () => {
  try {
    const result = await pool.query('SELECT * FROM employeestracker');
    console.log('Employees:', result.rows);
  } catch (err) {
    console.error('Error fetching employees:', err);
  }
  await mainMenu();
};


mainMenu();
