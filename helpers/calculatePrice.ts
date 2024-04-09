export const caculateDiscount = (price: number, discount: number, n?: number): number => {
  return parseFloat((((price / 100) * (discount ? discount : 100)) * (n ? n : 1)).toString())
}