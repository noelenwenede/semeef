import { SemeefPage } from './app.po';

describe('semeef App', () => {
  let page: SemeefPage;

  beforeEach(() => {
    page = new SemeefPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
