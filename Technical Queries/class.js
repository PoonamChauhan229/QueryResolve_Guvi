// write a class to calculate uber price.
// 10km
// 10*3=30Rs
class Uber{
    
    constructor(km)
    {
        this.km = km;
        this.Price = this.km*3
    }

    getPrice()
    {
        
        return `Charges for the ride is ${this.Price}`
    }

    applyDiscount()
    {
        var Discount = (25/this.Price)*100
        var DiscountedPrice = this.Price-Discount
        return `Discounted Charges for the ride is ${DiscountedPrice}`
    }
}

const Ride5=new Uber()

const Ride1 = new Uber(30)
console.log(Ride1.getPrice())
console.log(Ride1.applyDiscount())

