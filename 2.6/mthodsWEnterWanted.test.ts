import {Builder, By, until, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class enterWanted {
    //first we need our driver and url;
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html';
    //Locators go below
    headerInput: By = By.name('hdrInput');
    mkeInput: By = By.name('mkeInput');
    oaiInput: By = By.name('oriInput');
    submitBtn: By = By.id('saveBtn');
    errorHeader: By = By.id('validHeader');
    cancelBtn: By = By.id('clearBtn');
    //constructor goes here
    constructor(driver: WebDriver) {
        this.driver = driver;
    };
    //methods go below
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.headerInput));
    };
// navigate to the url and then waits until the header input is located.
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    // finds an element and returns it for user purpose.
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    };
    //gets the input element, clears the input element and send the keys
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return(await this.driver.findElement(elementBy)).click();
    };
    // locates the element and then clicks on that element.
};

