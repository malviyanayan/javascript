let y = [2.3, 5.67, 90.9, 87.009];
let x = y;

x[0] = 999; // js array use shalo copy means
// if we are changing in x so that is also affect y becouse both are denoting same object
console.log(y); 
console.log(x);