class Reportbuilder {
    
    reportbuilderlink = "#pdf_generator_option_page > .plan-header > .nav-tabs-wrapper > .planoutput-nav > :nth-child(5) > .nav-link";
    nameofreportbuilder = "#report_builder_member_name";
    defaulttitle = "#pdf_generator_options_form > :nth-child(1) > :nth-child(1) > .mb-2";
    checkreporttitle = ":nth-child(1) > .mb-4 > .card-header";
    coverpagetitle = "div[id='pdf_generator_option_page'] div[class='col-lg-5 col-md-12'] div[class='card mb-4'] div[class='row'] div:nth-child(1)";
    introductiontitle = ".row > :nth-child(11)";
    medicalexpensetitle = ".row > :nth-child(13)";
    appendixtitle = ":nth-child(1) > .mb-0 > .card-header";
    personalassumptiontitle = ":nth-child(1) > .mb-0 > .card-body > .row > :nth-child(1)";
    premedicareassumptiontitle = ".mb-0 > .card-body > .row > :nth-child(3)";
    medicareassumptiontitle = ".mb-0 > .card-body > .row > :nth-child(5)";
    disclosuretitle = ".mb-0 > .card-body > .row > :nth-child(7)";
    youcanchoosetitle = ".include-spouse-cpbox > .mb-2";
    additionalanalysistitle = ".include-spouse-cpbox > .mb-4 > .card-header";
    medicarebundles = ".mb-4 > .card-body > .row > :nth-child(1) > .position-relative > .mb-1";
    longtermcareexpenses = ".mb-4 > .card-body > .row > :nth-child(2) > .position-relative > .mb-1";
    lifetimexpensedetail = ":nth-child(3) > .position-relative > .mb-1";
    checkboxmedicarebundles = "#pdf_medicare_what_if_analysis_info";
    checkboxlongtermcareexp = "#pdf_long_term_care_details_info";
    checkboxlifetimeexpense = 'input[name="pdf_lifetime_expense_details_info"]';
    appendixheading = ".include-spouse-cpbox > .card.mb-0 > .card-header";
    termsandcondition = ".card.mb-0 > .card-body > .row > :nth-child(1) > .position-relative > .mb-1";
    formoreinfo = ".card.mb-0 > .card-body > .row > :nth-child(2) > .position-relative > .mb-1";
    checkboxtermsandcondi = "#pdf_terms_info";
    checkboxformorinfo = "#pdf_appendix_info";
    emailpdf = "#email_pdf_submit";
    emailpopupnotemessage = "div[id='emailPdf'] i:nth-child(1)";
    enteremail = "#email_confirm";
    sendemail = "#mail_confirmation_submit_button";
    cancelemail = "#emailPdf > .modal-dialog > .modal-content > .modal-footer > .btn-secondary";
    generatepdf = "#pdf_submit";
    viewinputbutton = "#pdf_generator_option_page_previous_button";
    //funwithinvestment="cy.get('#medicare_bundles > .plan-header > .nav-tabs-wrapper > .planoutput-nav > :nth-child(3) > .nav-link')";



    clickreportbuilder() {
        cy.get(this.reportbuilderlink)
            .click({
                force: true
            })
    }
    membername() {
        cy.get(this.nameofreportbuilder, {
                timeout: 10000
            })
            .should('be.visible')
            .should('contain.text', 'Paul Peter')
        cy.wait(1000)
    }
    checkdefaulttitle() {
        cy.get(this.defaulttitle)
            .should('be.visible')
            .should('contain.text', 'By Default Included In Report')
    }
    checkreportname() {
        cy.get(this.checkreporttitle)
            .should('be.visible')
            .should('contain.text', 'Report')

    }
    checkcoverpagetitle() {
        cy.get(this.coverpagetitle)
            .should('be.visible')
            .should('contain.text', 'Cover Page')
    }
    checkintroductiontitle() {
        cy.get(this.introductiontitle)
            .should('be.visible')
            .should('contain.text', 'Introduction')
    }
    checkmedicaltitle() {
        cy.get(this.medicalexpensetitle)
            .should('be.visible')
            .should('contain.text', 'Medical Expenses')
    }
    checkappendixtitle() {
        cy.get(this.appendixtitle)
            .should('be.visible')
            .should('contain.text', 'Appendix')
    }
    checkpersonalassumptiontitle() {
        cy.get(this.personalassumptiontitle)
            .should('be.visible')
            .should('contain.text', 'Personal Assumptions')

    }
    checkpremedicareassumptiontitle() {
        cy.get(this.premedicareassumptiontitle)
            .should('be.visible')
            .should('contain.text', 'Pre-Medicare Insurance Assumptions')
    }
    checkmedicareassumptiontitle() {
        cy.get(this.medicareassumptiontitle)
            .should('be.visible')
            .should('contain.text', 'Medicare Assumptions')
    }
    checkdisclosuretitle() {
        cy.get(this.disclosuretitle)
            .should('be.visible')
            .should('contain.text', 'Disclosure')
    }
    checkthetitle() {
        cy.get(this.youcanchoosetitle)
            .should('be.visible')
            .should('contain.text', 'You Can Choose')
    }
    checkadditionalanalysistitle() {
        cy.get(this.additionalanalysistitle)
            .should('be.visible')
            .should('contain.text', 'Additional Analysis')
    }
    verifymedicarebundlename() {
        cy.get(this.medicarebundles)
            .should('be.visible')
            .should('contain.text', 'Medicare Bundles')
    }

    medicarebundlescheckbox() {
        cy.get(this.checkboxmedicarebundles)
            .check({
                force: true
            })
            //.uncheck ({ force: true })  
            .should('be.checked')
        //.should('not.be.checked')
    }
    verifylongtermcareexpensesname() {
        cy.get(this.longtermcareexpenses)
            .should('be.visible')
            .should('contain.text', 'Long Term Care Expenses')
    }
    longtermcareexpensescheckbox() {
        cy.get(this.checkboxlongtermcareexp)
            .check({
                force: true
            })
            //.uncheck ({ force: true })  
            .should('be.checked')
        //.should('not.be.checked')
    }
    verifylifetimexpensedetailname() {
        cy.get(this.lifetimexpensedetail)
            .should('be.visible')
            .should('contain.text', 'Lifetime Expense Detail')
    }
    lifetimeexpensecheckbox() {
        cy.get(this.checkboxlifetimeexpense, {
                timeout: 10000
            })
            .check({
                force: true
            })
            //.uncheck ({ force: true })  
            .should('be.checked')
        //.should('not.be.checked')
    }
    verifyheadingappendix() {
        cy.get(this.appendixheading)
            .should('be.visible')
            .should('contain.text', 'Appendix')
    }
    verifytermsandcondition() {
        cy.get(this.termsandcondition)
            .should('be.visible')
            .should('contain.text', 'Terms & Definitions')

    }
    verifyformoreinfo() {
        cy.get(this.formoreinfo)
            .should('be.visible')
            .should('contain.text', 'For More Information')
    }
    termsandconditioncheckbox() {
        cy.get(this.checkboxtermsandcondi, {
                timeout: 10000
            })
            .check({
                force: true
            })
            //.uncheck ({ force: true })  
            .should('be.checked')
        //.should('not.be.checked')
    }
    formoreinfocheckbox() {
        cy.get(this.checkboxformorinfo, {
                timeout: 10000
            })
            .check({
                force: true
            })
            //.uncheck ({ force: true })  
            .should('be.checked')
        //.should('not.be.checked')
    }
    checkemailpdfbuton() {
        cy.get(this.emailpdf)
            .click()
    }
    checkemailpopup() {
        cy.get(this.emailpopupnotemessage)
            .should('contain.text', ' Please view PDF before sending mail.')
    }
    enteremailcolumn() {
        cy.get(this.enteremail)
            .click()
            .type('leeli@gmail.com')
    }
    sendemailbutton() {
        cy.get(this.sendemail)
            .click({force:true})
    }
    cancelemailbutton() {
        cy.get(this.cancelemail)
            .click({force:true})
    }
    generatepdfverify() {
        cy.get(this.generatepdf)
            .should('be.visible')
            .should('not.be.disabled')
            .click({force:true});
    }
    viewinput() {
        cy.get(this.viewinputbutton)
            .click()
    }

}
export default Reportbuilder;