class Vehicle{
    constructor(){
        this.color = 'White',
        this.type = 'Car'
    }
}

function getColor(vehicle) {
    return `The colour of the vehicle is ${vehicle.color}`
}

function getType(vehicle){
    return `The type of the vehicle is ${vehicle.type}`
}

export default Vehicle
export {getColor, getType} 