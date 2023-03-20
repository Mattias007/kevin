
import { getProductsData } from './app';
 
// const data = require('./app');
 



console.log(getProductsData)
test('checks to see if there is data', async () => {
    const response = await getProductsData();
    expect(response).toBe(Array)
})



