import { Google } from "./baseGooglePage";
const google = new Google();

test('do a search', async () => {
    await google.navigate();
    await google.searchBar('Chicago Bears');
    let results = await google.getResults();
    expect(results).toContain('Chicago Bears');
    await google.driver.quit();
});