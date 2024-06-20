"use strict";
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
let answer = storeCarInfo('Honda', 'Civic', { colour: 'black' }, { feature: ['Power Window', 'Power Stairing', 'Navigation'] });
console.log(answer);
