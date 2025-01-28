document.getElementById('calculateBtn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100;
  const gaugeNeedle = document.querySelector('.needle');
  const bmiValue = document.getElementById('bmiValue');
  const bmiCategory = document.getElementById('bmiCategory');

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiValue.textContent = '--';
    bmiCategory.textContent = 'Please enter valid inputs.';
    gaugeNeedle.style.transform = 'rotate(0deg)';
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  bmiValue.textContent = bmi;

  let category = '', rotation = 0;

  if (bmi < 18.5) {
    category = 'Underweight';
    rotation = -60; 
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal weight';
    rotation = -20; 
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    rotation = 20; 
  } else if (bmi >= 30 && bmi <= 34.9) {
    category = 'Obesity Class 1';
    rotation = 45; 
  } else if (bmi >= 35 && bmi <= 39.9) {
    category = 'Obesity Class 2';
    rotation = 70; 
  } else {
    category = 'Obesity Class 3';
    rotation = 90; 
  }

  bmiCategory.textContent = category;
  gaugeNeedle.style.transform = `rotate(${rotation}deg)`;
});
