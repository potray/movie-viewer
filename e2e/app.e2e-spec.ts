import { MovieViewerPage } from './app.po';

describe('movie-viewer App', () => {
  let page: MovieViewerPage;

  beforeEach(() => {
    page = new MovieViewerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
