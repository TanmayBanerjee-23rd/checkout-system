export interface iProduct {
  SKU: string;
  Name: string;
  Price: number;
}

export interface iProducts {
  [key: string]: iProduct;
}

export interface iPricingRules {
  [key: string]: (price: number, count: number) => number;
}

export interface iScannedProductCount {
  [key: string]: number;
}
