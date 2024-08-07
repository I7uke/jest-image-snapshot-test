// eslint is looking for `puppeteer` at root level package.json
// eslint-disable-next-line import/no-unresolved
const puppeteer = require("puppeteer");

describe("index page click button", () => {
  let browser;

  beforeAll(async () => {
    // Запускаем браузер
    browser = await puppeteer.launch();
  });

  it("index page click button", async () => {
    // Создаем новую страницу
    const page = await browser.newPage();
    await page.setViewport({ width: 900, height: 900 });
    // Переходим на страницу
    await page.goto("http://localhost:8080");
    //Делаем клик на кнопке
    page.click("#buttonOpen");
    // Делаем снимок страницы
    const image = await page.screenshot({ fullPage: true });
    // Сверяем снимок с уже существующим снимком
    expect(image).toMatchImageSnapshot();
  });

  afterAll(async () => {
    // Закрываем браузер
    await browser.close();
  });
});
