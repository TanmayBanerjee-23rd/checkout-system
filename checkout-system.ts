import {
  iPricingRules,
  iProduct,
  iProducts,
  iScannedProductCount,
} from "./interfaces";
import Products from "./products.json";

class CheckoutSystem {
  private readonly products: iProducts = Products;

  private scannedProductsCount: iScannedProductCount = {};
  private uniqueSkus: string[] = [];
  private scannedSkus: string = "";

  constructor(private pricingRules: iPricingRules) {}

  scan(itemSKU: string) {
    this.scannedSkus += itemSKU + ", ";

    if (this.scannedProductsCount[itemSKU]) {
      this.scannedProductsCount[itemSKU]++;
    } else {
      this.uniqueSkus.push(itemSKU);
      this.scannedProductsCount[itemSKU] = 1;
    }
  }

  total() {
    let totalPrice = 0.0;

    this.uniqueSkus.forEach((sku: string) => {
      if (this.pricingRules[sku]) {
        totalPrice += this.pricingRules[sku](
          this.products[sku].Price,
          this.scannedProductsCount[sku]
        );
      } else {
        totalPrice += this.products[sku].Price * this.scannedProductsCount[sku];
      }
    });

    console.log(
      "SKU's Scanned: ",
      this.scannedSkus.substring(0, this.scannedSkus.length - 2)
    );
    console.log("Total Expected: $", totalPrice);

    return totalPrice;
  }
}

export default CheckoutSystem;
