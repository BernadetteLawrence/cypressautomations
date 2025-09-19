class LongTermCareExpenses {
    longtermcareexpenseslinkEle="a[class='nav-link ui-link active']";
    primaryandnameEle="div[class='col-6'] h6:nth-child(1)";
    PrimaryTotalPresentValueExpensesEle="div[id='long_term_care_expenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1) h6:nth-child(1)";
    PrimaryTotalFutureValueExpensesEle="div[id='long_term_care_expenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1) h6:nth-child(1)";
    PrimaryGraphEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > rect:nth-child(3)";
    PrimaryFutureValueYaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(9) > text:nth-child(1) > tspan:nth-child(1)";
    PrimaryYearXaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(8) > text:nth-child(1) > tspan:nth-child(1)";
    PrimaryAdultDayCareEle="div[class='col-lg-7 col-md-7 pl-0 pr-0'] th:nth-child(2)";
    PrimaryInHomeCareEle="div[class='col-lg-7 col-md-7 pl-0 pr-0'] th:nth-child(2)";
    PrimaryNursingCareEle="div[class='col-lg-7 col-md-7 pl-0 pr-0'] th:nth-child(2)";
    PrimaryCareBeginsEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)";
    PrimaryAgeEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)";
    PrimaryYearsofCareEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(1)";
    PrimaryFutureValueEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(1)";
    PrimaryPresentValueEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(1)";
    PrimaryPVasofyearEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(1)";
     constructor() {
    // container for the Long Term Care Expenses section (use whichever id exists)
    this.panel = '#LongTermCareExpenses, #long_term_care_expenses';
  }

  // helper: 0 = Primary (left), 1 = Spouse (right)
  getChart(idx = 0) {
    return cy.get(this.panel).find('svg').eq(idx);
  }
    clicklongtermcareexpenseslink(longtermcareexpenseslink){
        cy.get(this.longtermcareexpenseslinkEle)
        .click()
        cy.wait(1000)
    }
    viewprimaryandname(primaryandname){
        cy.get(this.primaryandnameEle).should("be.visible");
    }
    viewPrimaryTotalPresentValueExpenses(PrimaryTotalPresentValueExpenses){
        cy.get(this.PrimaryTotalPresentValueExpensesEle).should("be.visible");
    }
     viewPrimaryTotalFutureValueExpenses(TotalPrimaryFutureValueExpenses){
        cy.get(this.PrimaryTotalFutureValueExpensesEle).should("be.visible");
    }
    viewPrimaryGraph(PrimaryGraph){
        cy.get(this.PrimaryGraphEle).should("be.visible");
    }
    viewPrimaryFutureValueYaxis(PrimaryFutureValueYaxis){
        this.getChart(0).contains('text, tspan', /Future/i).should('exist');
  this.getChart(0).contains('text, tspan', /Value/i).should('exist');
    }
    viewPrimaryYearXaxis(PrimaryYearXaxis){
       this.getChart(0).contains('text, tspan', /^Year$/i).should('exist');
  
    }
    viewPrimaryAdultDayCare(PrimaryAdultDayCare){
        cy.get(this.PrimaryAdultDayCareEle).should("be.visible");
    }
    viewPrimaryInHomeCare(PrimaryInHomeCare){
        cy.get(this.PrimaryInHomeCareEle).should("be.visible");
    }
    viewPrimaryNursingCare(PrimaryNursingCare){
        cy.get(this.PrimaryNursingCareEle).should("be.visible");
    }
    viewPrimaryCareBegins(PrimaryCareBegins){
        cy.get(this.PrimaryCareBeginsEle).should("be.visible");
    }
    viewPrimaryAge(PrimaryAge){
        cy.get(this.PrimaryAgeEle).should("be.visible");
    }
    viewPrimaryYearsofCare(PrimaryYearsofCare){
        cy.get(this.PrimaryYearsofCareEle).should("be.visible");
    }
    viewPrimaryFutureValue(PrimaryFutureValue){
        cy.get(this.PrimaryFutureValueEle).should("be.visible");
    }
    viewPrimaryPresentValue(PrimaryPresentValue){
        cy.get(this.PrimaryPresentValueEle).should("be.visible");
    }
    viewPrimaryPVasofyear(PrimaryPVasofyear){
        cy.get(this.PrimaryPVasofyearEle).should("be.visible");
    }
}
export default LongTermCareExpenses;
