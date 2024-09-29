class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('The only transport town')
    }
}
const transport = new Vehicle('Ricksha', '30000');
console.log(transport);

class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price)
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}
const transport2 = new Bus('Volvo', '6000000', '45', '600');
console.log(transport2)

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}
const transport3 = new Truck('mahendro', '4500000', '40tn');
console.log(transport3);