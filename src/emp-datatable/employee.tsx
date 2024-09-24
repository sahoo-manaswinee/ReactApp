// src/emp-datatable/employee.tsx
import React from 'react';

// Define the type for employee data
interface Employee {
  name: string;
  age: number;
  email: string;
}

// Define the props for the component
interface EmployeeProps {
  data: Employee[];
}

const EmployeeTable: React.FC<EmployeeProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee, index) => (
          <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;