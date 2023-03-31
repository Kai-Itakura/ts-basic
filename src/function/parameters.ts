/* オプションパラメーターを持つ関数 */
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameter sample 1: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameter sample 2: User is not signed in.')
    return false
  }
}

/* デフォルトパラメーターを持つ関数 */
export const isUserSignedIn2 = (userId: string, userName = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameter sample 3: User is signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameter sample 4: User is not signed in.')
    return false
  }
}

/* レストパラメーターを持つ関数 */
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
