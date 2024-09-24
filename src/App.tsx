// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import React from 'react';
import EmployeeTable from './emp-datatable/employee';

const App: React.FC = () => {
  // Sample employee data
  const employeeData = [
    { name: 'Krishna', age: 24, email: 'krishna@example.com' },
    { name: 'Ganesh', age: 22, email: 'ganesh@example.com' },
    { name: 'Ram', age: 30, email: 'ram@example.com' },
  ];

  return (
    <div className="App">
      <h1>Employee Data</h1>
      {/* Pass employeeData as props to EmployeeTable */}
      <EmployeeTable data={employeeData} />
      <div>{process.env.REACT_APP_API_URL}</div>
    </div>
  );
};

export default App;