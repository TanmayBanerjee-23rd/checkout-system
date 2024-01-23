import CheckoutSystem from "./checkout-system";

const pricingRules = {
  atv: (price: number, count: number) => {
    // buy 2 get 1 free

    const pairsof3 = Math.floor(count / 3);

    const unpaired = count - 3 * pairsof3;

    const costOfTwo = 2 * price;

    return pairsof3 * costOfTwo + price * unpaired;
  },
  ipd: (price: number, count: number) => {
    // if count is > 4 set price to 499.99

    if (count > 4) {
      return 499.99 * count;
    } else {
      return price * count;
    }
  },
};

const co = new CheckoutSystem(pricingRules);

/* test set 1 */

// co.scan("atv");
// co.scan("atv");
// co.scan("atv");
// co.scan("vga");

/* test set 2 */

co.scan("atv");
co.scan("ipd");
co.scan("ipd");
co.scan("atv");
co.scan("ipd");
co.scan("ipd");
co.scan("ipd");

co.total();
