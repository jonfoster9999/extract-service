import { AbstractServicePage } from './app.po';

describe('abstract-service App', () => {
  let page: AbstractServicePage;

  beforeEach(() => {
    page = new AbstractServicePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
