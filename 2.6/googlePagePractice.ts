import {By, until, WebDriver, WebElement }  from "selenium-webdriver"

export class GooglePage {
    //required parameters in order to use the class outside of the page.
    driver: WebDriver;
    url: string = 'https://www.google.com';
    //locators in interact with the page
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');
    //this is setting the parameters as properties to use the class as an object.
    constructor(driver:WedDriver, url:string){
        this.driver = driver;
        this.url = url;
    };
    import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export class GooglePage {
    //required parameters in order to use the class outside of the page.
    driver: WebDriver; 
    url: string = 'https://www.google.com/'; 
    //locators to interact with the page
    searchBar: By = By.name('q'); 
    results: By = By.id('rcnt'); 
    //this is setting the parameters as properties to use the class as an object. 
    async navigate() {
        await this.driver.get(this.url); 
        await this.driver.wait(until.elementLocated(this.searchBar)); 
    }; 
    // navigates to the url and then waits until the header input is located.
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy)); 
        let element = await this.driver.findElement(elementBy); 
        await this.driver.wait(until.elementIsVisible(element)); 
        return element; 
    }; 
    //finds and element and returns it for user purpose.
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
    //gets the input element, clears the input element and sends the keys
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return (await this.driver.findElement(elementBy)).click(); 
    }; 
    //locates the element and then clicks on that element.
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy)); 
        return this.driver.findElement(elementBy).getText(); 
    }; 
    //gets the text of the selected element.
    async search(searchTerm: string) {
        return this.sendKeys(this.searchBar, `${searchTerm}\n`); 
    }; 
    //sending whatever the users gives it and hitting enter after it types
    async getResults() {
        return this.getText(this.results); 
    }; 
}; 
    //gets the text of the selected element.
    async search(searchTerm: string) {
        return this.sendKeys(this.searchBar, `${searchTerm}\n`);
    };
    //sending whatever the users give it and hitting enter after it types.
    async getResults() {
        return this.getText(this.results);
    };
};