import { NgCliWithCmptsPage } from './app.po';

describe('ng-cli-with-cmpts App', () => {
  let page: NgCliWithCmptsPage;

  beforeEach(() => {
    page = new NgCliWithCmptsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
