import inventory from "./inventory.js";
import {tvTypes,
        tvSold,
        tvAmbi,
        tvPriceSort} from "./opdracht1.js";
import {totalSoldLog,
        totalStockLog} from "./opdracht2.js";
import {tvBrandsFun} from "./opdracht3.js";


console.log("opdracht 1a", tvTypes);
console.log("opdracht 1b", tvSold);
console.log("opdracht 1c", tvAmbi);
console.log("opdracht 1d", tvPriceSort);
console.log("opdracht 2a:", totalSoldLog);
console.log("opdracht 2c:", totalStockLog);

tvBrandsFun(inventory);

