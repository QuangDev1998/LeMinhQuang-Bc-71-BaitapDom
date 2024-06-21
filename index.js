function ex1() {
    let SalaryOfDay = +document.getElementById("input-1DaySalary").value;
    let DayWorking = +document.getElementById("input-DayWorking").value;
  
    let Salary = document.getElementById("output-Salary");
  
    Salary.innerHTML = `Tiền Lương Của Nhân Viên Là : ${
      SalaryOfDay * DayWorking
    } VNĐ`;
  }
  
  function ex2() {
    let num1 = +document.getElementById("input-numberOne").value;
    let num2 = +document.getElementById("input-numberTwo").value;
    let num3 = +document.getElementById("input-numberThree").value;
    let num4 = +document.getElementById("input-numberFour").value;
    let num5 = +document.getElementById("input-numberFive").value;
    let average = document.getElementById("output-Average");
  
    average.innerHTML = `Trung Bình Của 5 Số Là : ${
      (num1 + num2 + num3 + num4 + num5) / 5
    }`;
  }
  
  function ex3() {
    const usd = parseFloat(document.getElementById('input-usd').value);
    const exchangeRate = 24000; // Example exchange rate
    if (!isNaN(usd)) {
        const vnd = usd * exchangeRate;
        document.getElementById('output-vnd').textContent = 'Số tiền VND: ' + vnd.toLocaleString() + ' VND';
    } else {
        document.getElementById('output-vnd').textContent = 'Vui lòng nhập giá trị hợp lệ.';
    }
}
  
function ex4() {
  const length = parseFloat(document.getElementById('input-length').value);
  const width = parseFloat(document.getElementById('input-width').value);

  if (!isNaN(length) && !isNaN(width)) {
      const perimeter = 2 * (length + width);
      const area = length * width;
      document.getElementById('output-calculate').textContent = `Chu vi: ${perimeter.toFixed(2)} - Diện tích: ${area.toFixed(2)}`;
  } else {
      document.getElementById('output-calculate').textContent = 'Vui lòng nhập giá trị hợp lệ.';
  }
}
function ex5() {
  const number = document.getElementById('input-number').value;
  if (number.length === 2) {
      const digit1 = parseInt(number[0]);
      const digit2 = parseInt(number[1]);
      if (!isNaN(digit1) && !isNaN(digit2)) {
          const sum = digit1 + digit2;
          document.getElementById('output-sum').textContent = 'Tổng 2 Kí Số: ' + sum;
      } else {
          document.getElementById('output-sum').textContent = 'Vui lòng nhập số hợp lệ.';
      }
  } else {
      document.getElementById('output-sum').textContent = 'Vui lòng nhập số có 2 chữ số.';
  }
}