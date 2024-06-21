import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';
//then we can start our class
export class Google extends BasePage {
    searchBar: By = By.id('APjFqb');
    results: By = By.id('cnt');
    constructor() {
        super({url: "https://www.google.com/"});
    };
    //then we can make our method specific for Google
    async earch(searchThing: string) {
        return this.setInput(this.searchBar, `${searchThing}\n`);
    };
    async getResults() {
        return this.getText(this.results);
    };
};