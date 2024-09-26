const inquirer = require('inquirer');
const pool = require('./config/connection');  
const {  
  createEmployee,
  getAllEmployees,
} = require('./models/Employee');
const { 
  addDepartment,
  getAllDepartments,
} = require('./models/Department');
const {
  createRole,
  getAllRoles,
} = require('./models/Role');

const logo = require('asciiart-logo');

// Function to view all departments
const viewDepartment = async () => {
  try {
    const { rows } = await getAllDepartments();
    console.table(rows);
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
};

// Main menu function
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
      await viewDepartment(); // Use await to ensure proper flow
      break;
    case 'View All Roles':
      await viewAllRoles(); // Ensure this function is defined
      break;
    case 'View All Employees':
      await viewAllEmployees(); // Ensure this function is defined and async
      break;
    case 'Add Department':
      await addDepartment(); // Ensure this function is defined and async
      break;
    case 'Add Role':
      await createRole(); // Ensure this function is defined and async
      break;
    case 'Add Employee':
      await addNewEmployee(); // Ensure this function is defined and async
      break;
    case 'Update Employee Role':
      await updateRole(); // Ensure this function is defined and async
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
    console.log('Viewing employees...');
    const { rows } = await getAllEmployees();
    console.table(rows);
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
  await mainMenu(); // Ensure this is awaited
};

// Start the application
const startApp = () => {
  const logoText = logo({ name: 'A-TEAM' }).render();
  console.log(logoText);
  mainMenu();
};

startApp();


// const inquirer = require('inquirer');
// const pool = require('./config/connection');  
// const {  
//   createEmployee,
//   getAllEmployees,
//   getEmployeeById,
//   updateEmployee,
//   deleteEmployee, } = require('./models/Employee');
// const { 
//   addDepartment,
//   getAllDepartments,
//   getDepartmentById,
//   updateDepartment,
//   deleteDepartment,
// } = require('./models/Department');
// const {
//   createRole,
//   getAllRoles,
//   getRoleById,
//   updateRole,
//   deleteRole,
// } = require('./models/Role');

// const logo = require('asciiart-logo');

// const viewDepartment = async () => {
//   const { rows } = await getAllDepartments();
//   console.table(rows);
// };

// const mainMenu = async () => {
//   const { action } = await inquirer.prompt({
//     type: 'list',
//     name: 'action',
//     message: 'What would you like to do?',
//     choices: [
//       'View Departments',
//       'View All Roles',
//       'View All Employees',
//       'Add Department',
//       'Add Role',
//       'Add Employee',
//       'Update Employee Role',
//       'Exit'
//     ],
//   });

//   switch (action) {
//     case 'View Departments':
//       viewDepartment();
//       break;
//     case 'View All Roles':
//       viewAllRoles();
//       break;
//     case 'View All Employees':
//       viewAllEmployees();
//       break;
//     case 'Add Department':
//       addDepartment();
//       break;
//     case 'Add Role':
//       addRole();
//       break;
//     case 'Add Employee':
//       addNewEmployee();
//       break;
//     case 'Update Employee Role':
//       updateRole();
//       break;
//     case 'Exit':
//       process.exit();
//   }
// };

// // Function to add a new employee
// const addNewEmployee = async () => {
//   const { name, roleId, departmentId } = await inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'Enter the employee\'s name:',
//     },
//     {
//       type: 'number',
//       name: 'roleId',
//       message: 'Enter the employee\'s role ID:',
//     },
//     {
//       type: 'number',
//       name: 'departmentId',
//       message: 'Enter the employee\'s department ID:',
//     },
//   ]);

//   await createEmployee(name, roleId, departmentId);
//   await mainMenu();
// };

// // Function to view all employees
// function viewAllEmployees () {
//   console.log('viewing employees');
//     getAllEmployees().then(({rows}) => {
//       console.log({rows});
//       let employees = rows
//       console.table(employees);
//     })

//  mainMenu();
// };

// startApp();

// function startApp (){
//   const logoText = logo({name:'A-TEAM'}).render()
//   console.log(logoText)
//   mainMenu()
// }