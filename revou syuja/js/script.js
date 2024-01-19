document.addEventListener('DOMContentLoaded', () => {
    const areaForm = document.getElementById('area-form');
    const perimeterForm = document.getElementById('perimeter-form');

    // Calculate Area
    areaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const side = e.target.elements['area-side'].value;
        const area = side * side;

        displayResult('area-result', `Luas Persegi: ${area}`);
    });

    // Calculate Perimeter
    perimeterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const side = e.target.elements['perimeter-side'].value;
        const perimeter = side * 4;

        displayResult('perimeter-result', `Keliling Persegi: ${perimeter}`);
    });

    // Display Result
    function displayResult(resultId, resultMessage) {
        const resultElement = document.getElementById(resultId);
        resultElement.textContent = resultMessage;
    }
});