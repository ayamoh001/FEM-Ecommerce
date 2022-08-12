export const caculateDiscount = (price,discount,n) =>{
    return parseFloat(((price/100) * (discount ? discount : 100))*(n ? n : 1)).toFixed(2)
  }