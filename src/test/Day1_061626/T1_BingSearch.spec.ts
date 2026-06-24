import { test, expect} from '@playwright/test';


test('Bing search test', async ({ page }) => {


//navigate to bing.com
await page.goto('https://www.bing.com/');

//enter a keyword on the search field 
await page.locator("//*[@name='q']").fill('soccer');

await page.waitForTimeout(2000); //wait for 2 seconds before submitting the search


//submit with keyboard enter 
await page.keyboard.press('Enter'); 

//wait a few seconds for the results to load
await page.waitForTimeout(3000);

//capture the search result text
let results = await page.locator("//*[@class='sb_count']").textContent();
console.log(results)
let arrayResults = results?.split(' ');
console.log("Search number is :" + arrayResults?.[1])

});