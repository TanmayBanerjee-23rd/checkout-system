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

describe("Checkout System!", () => {
  test("Buy 2 Apple TV's and get 1 Free :: ", () => {
    const co = new CheckoutSystem(pricingRules);

    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");

    expect(co.total()).toBe(249);
  });

  test("Buy 4+ Super Ipads at $499.99 each :: ", () => {
    const co = new CheckoutSystem(pricingRules);

    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");

    expect(co.total()).toBe(2718.95);
  });
});
