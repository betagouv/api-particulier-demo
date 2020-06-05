import puppeteer from "puppeteer";
import { Injectable } from "@nestjs/common";

let browser: puppeteer.Browser;

(async function() {
  browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });
})();

const wait = async function(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
};

@Injectable()
export class ConnexionFrancaiseService {
  async getMonCompteFormation(taxNumber: string, password: string) {
    let amount;
    const page = await browser.newPage();

    await page.goto(
      "https://www.moncompteformation.gouv.fr/espace-prive/html/#/compte-utilisateur/connexion"
    );

    try {
      // On page Mon compte formation
      const fcButtonSelector = 'img[src="styles/theme/img/logos/logo-fc.svg"]';
      await page.waitFor(fcButtonSelector);

      // Click on the FC button
      await page.click(fcButtonSelector);

      // Wait for the FC page to be loaded
      const dgfipButtonSelector = 'button[data-name="dgfip"]';
      await page.waitFor(dgfipButtonSelector);

      // Click on the DGFIP button
      await page.click(dgfipButtonSelector);

      // Wait for the DGFIP page to be loaded
      const taxNumberInputSelector = 'input.form-control[name="spi_tmp"]';
      await page.waitFor(taxNumberInputSelector);

      await wait(100);
      // Type the DGFIP SPI
      await page.focus(taxNumberInputSelector);
      await page.type(taxNumberInputSelector, taxNumber);

      // Click on the "validate" button
      await page.click("button#btnAction");

      // Wait for the password input to appear
      const passwordInputSelector = 'input.form-control[name="pwd_tmp"]';
      await page.waitFor(passwordInputSelector);

      await wait(200);
      // Type the DGFIP password
      await page.focus(passwordInputSelector);
      await page.type(passwordInputSelector, password);
      // //   Click on the "validate" button
      await page.click("button#btnAction");

      // Wait for the Mon compte formation page to appear
      const amountSelector = "div.droits-montant-euros";
      await page.waitFor(amountSelector);

      // Get the amount
      amount = await page.$eval(amountSelector, (el: any) => el.innerText);

      await page.close();
    } catch (error) {
      await page.screenshot({ path: "error.png" });
      await page.close();
      throw error;
    }

    return amount;
  }
}
