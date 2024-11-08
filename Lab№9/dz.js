// Виведення картинки яка складається з зірочок
function Task1(){
    const startLength = 9;
    const  maxSteps = 5;
    for (let i = 1; i <= maxSteps; i ++) {
        console.log('*'.repeat(startLength + i * 2));
    }
    for (let i = maxSteps ; i >= 1; i--) {
        console.log('*'.repeat(startLength + i * 2));
    }
}
Task1();
// Таймер
function Task2_Variant1(){
    const endTime = Date.now() + 10000;
    while (true) {
        const remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            console.log("Таймер завершився");
            break;
        }
    }
}
Task2_Variant1();

// Присвоєння значення 0 за допомогою soeedometer
const car = {
    speedometer: 0
}