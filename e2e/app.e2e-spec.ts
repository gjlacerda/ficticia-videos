import { FicticiaVideosPage } from './app.po';

describe('ficticia-videos App', () => {
  let page: FicticiaVideosPage;

  beforeEach(() => {
    page = new FicticiaVideosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
