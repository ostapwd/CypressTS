import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import usersParabank from "../../../data/ParaBank/usersParabank";
import { ContactPageParabank } from "../../../support/pagesParaBank/contactPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();
const contactPage = new ContactPageParabank();

describe('Test suite to verify send to customer care', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApi();
    });

    it('Verify elements on the contact page', () => {
        mainPage
            .clickButtonContactPage()
            .urlVerify(urlsPagesParabank.contactPageUrl)
        mainPage
            .getPageLabel()
                .should('contain','Customer Care')
        contactPage
            .getContactForm()
                .should('be.visible')
                .and('contain', 'Name')
                .and('contain', 'Email')
                .and('contain', 'Phone')
                .and('contain', 'Message')
        contactPage
            .getButtonContactForm()
                .should('be.visible')
                .and('have.value','Send to Customer Care')
                .and('have.attr', 'type', 'submit')
    });

    it('Verify a can user send to customer care', () => {
        mainPage
            .clickButtonContactPage()
            .fillFieldsTheContactForm()
            .sendContactForm()
        mainPage
            .getPageLabel()
                .should('contain','Customer Care')
                .and('contain',`Thank you ${usersParabank.newUser.userName}`)
    });
});