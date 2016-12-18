import { XboxNotifierPage } from './app.po';

describe('xbox-notifier App', function() {
  let page: XboxNotifierPage;

  beforeEach(() => {
    page = new XboxNotifierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
