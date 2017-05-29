import { AngularTestExamplesPage } from './app.po';

describe('angular-test-examples App', () => {
  let page: AngularTestExamplesPage;

  beforeEach(() => {
    page = new AngularTestExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
