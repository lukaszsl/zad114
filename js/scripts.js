$(function() {

	var percentage = 10;

	function Phone(brand, price, color, year){
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.year = year || 'not defined';
	}

	Phone.prototype.printInfo = function() {
		console.log('The phone brand is ' + this.brand + ', the color is '+ this.color + ' and the price is ' + this.price + '$.\nThe year of this phone is ' + this.year + ' !');
	}

	Phone.prototype.discount = function(discountOnPhone) {
		var discount = this.price*(discountOnPhone/100),
			newPrice = this.price - discount;
		console.log('Your discount on this phone is ' + discount + '$ !\nYour NEW price is ' + newPrice + '$ !!!');
	}

	var iPhone6s = new Phone('Apple', 500, 'Gold', 2017),
		galaxyS6 = new Phone('Samsung', 450, 'Black', 2016),
		one = new Phone('OnePlus', 300, 'Silver');

	var phones = [iPhone6s, galaxyS6, one];

	phones.forEach(function(phone, i) {
		phones[i].printInfo();
		phones[i].discount(percentage);
	});

});

