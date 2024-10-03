const inquirer = require('inquirer');
const pool = require('./config/connection');  
const {  
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee, } = require('./models/Employee');
const { 
  addDepartment,
  viewDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require('./models/Department');
const {
  createRole,
  getAllRoles,
  getRoleById,
  updateRole,
  deleteRole,
  viewAllRoles
} = require('./models/Role');

const logo = require('asciiart-logo');

const mainMenu = async () => {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Exit'
    ],
  });

  switch (action) {
    case 'View Departments':
      await viewDepartment();
      break;
    case 'View All Roles':
      await viewAllRoles();
      break;
    case 'View All Employees':
      await viewEmployee();
      break;
    case 'Add Department':
      await addDepartment();
      break;
    case 'Add Role':
      await addRole();
      break;
    case 'Add Employee':
      await addNewEmployee();
      break;
    case 'Update Employee Role':
      await updateRole();
      break;
    case 'Exit':
      process.exit();
  }
};

const addNewEmployee = async () => {
  const { first_name, last_name, roleId, departmentId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the employee\'s first name:',
    },
  {
    type: 'input',
    name: 'last_name',
    message: 'Enter the employee\'s last name:',
  },
    {
      type: 'number',
      name: 'roleId',
      message: 'Enter the employee\'s role ID:',
    }
  ]);

  await createEmployee(first_name, last_name, roleId);
  await mainMenu();

};

async function viewEmployee(){
  console.log('hello')
  let { rows } = await getAllEmployees()
  console.table (rows)
  await mainMenu();
}
startApp();

function startApp (){
  const logoText = logo({name:'A-TEAM'}).render()
  console.log(logoText)
  mainMenu()
}