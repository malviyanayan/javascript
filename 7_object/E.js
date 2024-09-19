// Declearing functions in js

let pen = {
    BrandName : "cello",
    color : "Blue",
    price : 5.6,
    type : "Ball",

    showInfo : function(){
        console.log("Brand Name : " + this.BrandName);
        console.log("Color : " + this.color);
        console.log("Price : " + this.price);
        console.log("Ballpen : " + this.type);
    }
}

// console.log(pen.showInfo()); // show info does not return anything accept defoult value
pen.showInfo()