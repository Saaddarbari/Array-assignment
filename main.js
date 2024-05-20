// Part 1: Basic Arrays - Product Inventory
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
console.log("Part 1 :Basic Arrays - Product Inventory");
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
var product = [
    {
        name: "Shirt",
        price: 500,
        inventory: { stock: 10, colorOption: ["red", "yellow", "white"] },
    },
    {
        name: "Shoes",
        price: 2500,
        inventory: { stock: 5, colorOption: ["blue", "black", "white"] },
    },
    {
        name: "laptop",
        price: 45000,
        inventory: { stock: 10, colorOption: ["white", "grey", "black"] },
    },
];
function changeColor(product, newColor) {
    if (newColor === 'red') {
        product.price = product.price - (product.price * 10 / 100);
    }
    else if (newColor === 'blue') {
        product.price = product.price - (product.price * 5 / 100);
    }
    return product;
}
;
product[0] = changeColor(product[1], "red");
console.log("Product ".concat(product[0].name));
console.log("Price ".concat(product[0].price));
console.log("Stock ".concat(product[0].inventory.stock));
// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades:
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
console.log("Part 2: Multi-Dimensional Arrays and Tuples - Student Grades:");
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
var student = [
    {
        name: "Saad",
        grades: [90, 85, 87]
    },
    {
        name: "Ali",
        grades: [70, 88, 57]
    },
    {
        name: "Hamza",
        grades: [56, 47, 66]
    }
];
function calculateAverageGrade(student) {
    var total = student.grades.reduce(function (sum, grade) { return sum + grade; }, 0);
    return total / student.grades.length;
}
student.forEach(function (student) {
    var avgGrade = calculateAverageGrade(student);
    console.log("Student: ".concat(student.name, ", Average Grade: ").concat(avgGrade.toFixed(2)));
});
// Part 3 : Array with Types and Indexing - Employee Salaries:
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
console.log("Part 3 : Array with Types and Indexing - Employee Salaries:");
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
var employee = [
    {
        name: "Ali", hoursWorked: 8, hourlyRate: 120, salary: 0
    },
    {
        name: "Haider", hoursWorked: 10, hourlyRate: 150, salary: 0
    },
    {
        name: "Saad", hoursWorked: 12, hourlyRate: 200, salary: 0
    }
];
function calculateSalery(employee) {
    var Salary = employee.hoursWorked * employee.hourlyRate;
    var bonusSalary = employee.hoursWorked >= 20 ? 0.1 : 0;
    var totalbonusAmount = Salary * bonusSalary;
    return Salary + totalbonusAmount;
}
;
employee.forEach(function (employee) {
    var Salary = calculateSalery(employee);
    console.log("Name: ".concat(employee.name, " ,hourlyrate: ").concat(employee.hourlyRate, ", Salary: ").concat(Salary.toFixed(2)));
});
console.log("==== x ==== ==== x ==== ==== x ==== ==== x ==== ==== x ====");
