import { A4DatatablePrimeNgPage } from './app.po';

describe('a4-datatable-prime-ng App', () => {
  let page: A4DatatablePrimeNgPage;

  beforeEach(() => {
    page = new A4DatatablePrimeNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
