import { test, expect } from '@playwright/test';
test.describe('HSBC Action Item 5 - Playwright Test', () => {
    
    //Test Case 1: Verify HSBC Homepage Loads  
    //Step 1: Navigate to HSBC US homepage 
    //Step 2: Verify that page title contains HSBC 
    //Step 3: Verify that the page body contains HSBC text 
    test('Test Case 1: Verify HSBC homepage loads successfully', async ({ page }) => {
        await page.goto('https://www.us.hsbc.com/'); 
        await expect(page).toHaveTitle(/HSBC/); 
        await expect(page.locator('body')).toContainText('HSBC');
});

    //Test Case 2: Verify HSBC Credit Cards Page Opens Successfully 
    //Step 1: Navigate to the HSBC Credit Cards page 
    //Step 2: Verify that the URL contains credit-cards 
    //Step 3: Verify that the page body contains Credit Cards text 
    test('Test Case 2: Verify HSBC credit cards page opens successfully', async ({ page }) => {
        await page.goto('https://www.us.hsbc.com/credit-cards/');
        await expect(page).toHaveURL(/credit-cards/); 

        
        });
        
    }); 
