import urlsPagesParabank from "../../../data/ParaBank/urlsPagesParabank";
import usersParabank from "../../../data/ParaBank/usersParabank";
import { ContactPageParabank } from "../../../support/pagesParaBank/contactPageParabank";
import { MainPageParabank } from "../../../support/pagesParaBank/mainPageParabank";

const mainPage = new MainPageParabank();
const contactPage = new ContactPageParabank();

describe('Test suite to verify send messages to customer care', () => {
    beforeEach('Opened the Main page', () => {
        mainPage.openApp().clickOnButtonContact();
    });

    it('Verify that a user is on the contact page', () => {
        contactPage.urlVerify(urlsPagesParabank.contactPageUrl).getPageLabel().should('contain','Customer Care')
    });

    it('Verify the contact form', () => {
        contactPage.getContactForm().should('be.visible').and('contain', 'Name').and('contain', 'Email').and('contain', 'Phone').and('contain', 'Message')
    });

    it('Verify the send button', () => {
        contactPage.getButtonContactForm().should('be.visible').and('have.value','Send to Customer Care').and('have.attr', 'type', 'submit')
    });

    it('Verify a can user send messages to customer care', () => {
        contactPage.fillFieldsTheContactForm().clickOnButtonSendContactForm()
        mainPage.getPageLabel().should('contain','Customer Care').and('contain',`Thank you ${usersParabank.newUser.userName}`)
    });
});