import React, { useState } from "react";

// TASK 3.
// Дан массив с работниками. У каждого работника есть имя, фамилия, количество отработанных дней и зарплатная ставка за день. Выведите этих работников на экран в виде таблицы. Сделайте так, чтобы в последней колонке автоматически рассчитывалась зарплата работника (количество отработанных дней умножить на ставку). Сделайте так, чтобы количество дней и ставка выводились в виде инпутов. Если поредактировать эти инпуты - зарплата также должна поменяться. Под таблицей также выведите суммарную зарплату всех работников.

let employees = [
  { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
  { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
  { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
  { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
  { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
  { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
  { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
  { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
  { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
  { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28 },
  { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72 },
];

const Employees = () => {
  const [employeeList, setEmployeeList] = useState(employees);

  function changeDaysCount(employee, value) {
    let newEmp = employeeList.map((item) => {
      if (item.name === employee.name) {
        return { ...item, days: +value };
      } else {
        return item;
      }
    });
    setEmployeeList(newEmp);
  }

  function changePerDaySalary(employee, value) {
    let newEmp = employeeList.map((item) => {
      if (item.name === employee.name) {
        return { ...item, salaryPerDay: +value };
      } else {
        return item;
      }
    });
    setEmployeeList(newEmp);
  }

  return (
    <>
      <table border={2} width="100%">
        <caption>Employees</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days</th>
            <th>Salary Per Day</th>
            <th>Total Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>
                <input
                  type="number"
                  onChange={(e) => changeDaysCount(item, e.target.value)}
                  value={item.days}
                />
              </td>
              <td>
                <input
                  type="number"
                  onChange={(e) => changePerDaySalary(item, e.target.value)}
                  value={item.salaryPerDay}
                />
              </td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>
        TOTAL:{" "}
        {employeeList.reduce(
          (acc, curr) => acc + curr.days * curr.salaryPerDay,
          0
        )}
      </h3>
    </>
  );
};

export default Employees;
