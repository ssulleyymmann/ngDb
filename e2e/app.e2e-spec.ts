import { NgDbPage } from './app.po';

describe('ng-db App', function() {
  let page: NgDbPage;

  beforeEach(() => {
    page = new NgDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
