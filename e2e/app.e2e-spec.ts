import { CoralinePage } from './app.po';

describe('coraline App', () => {
  let page: CoralinePage;

  beforeEach(() => {
    page = new CoralinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
