import inventory from "./inventory.js";
import {tvTypes,
        tvSold,
        tvAmbi,
        tvPriceSort} from "./opdracht1.js";
import {totalSoldLog,
        totalStockLog} from "./opdracht2.js";
import {tvBrandsFun} from "./opdracht3.js";
import {tvFun} from "./opdracht4.js";
import {buttonElement1,
        buttonElement2,
        buttonElement3,
        showAmbi,
        showPrice,
        showSold} from "./bonus.js";


console.log("opdracht 1a", tvTypes);
console.log("opdracht 1b", tvSold);
console.log("opdracht 1c", tvAmbi);
console.log("opdracht 1d", tvPriceSort);
console.log("opdracht 2a:", totalSoldLog);
console.log("opdracht 2c:", totalStockLog);

//opdracht 3
tvBrandsFun(inventory);
//opdracht 4
tvFun(inventory);
//bonus opdracht

buttonElement1.addEventListener('click', ()=>{
        showPrice(tvPriceSort);
        tvFun(tvPriceSort);
});
buttonElement2.addEventListener('click', ()=>{
        showAmbi(tvAmbi);
        tvFun(tvAmbi);
});
buttonElement3.addEventListener('click', ()=>{
        showSold(tvSold);
        tvFun(tvSold);
});

