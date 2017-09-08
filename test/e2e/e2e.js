var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:3001/index/index');
// driver.findElement(By.id('hand')).click();
for (var i = 0; i < 10; i++) {
	setTimeout(function() {
		driver.findElement(By.id('hand')).click();
	}, 1000);
}
driver.wait(until.titleIs('点赞'), 1000);
driver.quit();