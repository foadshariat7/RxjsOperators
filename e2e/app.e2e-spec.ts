import { RxjsOperatorsPage } from './app.po';

describe('rxjs-operators App', () => {
  let page: RxjsOperatorsPage;

  beforeEach(() => {
    page = new RxjsOperatorsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
