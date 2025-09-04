import { first } from "lodash";

class fundwithinvestment {
  ViewExpensesDropdownEle = '[id ="healthcareExpensesType"]';
  PrimaryNameEle = "div.col-lg-3.col-md-3.pl-0";
  ViewInputEle = '[id="brokerage_details_previous_button"]';
  PVforTotalHealthcareExpensesEle =
    '[id="brokerage_information_healthcare_expenses"]';
  AgeExpensesBeginEle = '[id="brokerage_information_brokerage_income_age"]';
  HealthcareGoaltoFundEle = '[id="brokerage_level_of_protection_slider"]';
  PVExpensestoFundEle = '[id="brokerage_information_covered_by_investments"]';
  PVExpensesnotFundedEle = "[class='col-lg-12 col-md-12 pl-0 pr-0']";
  CurrentSavingsAllocatedToHealthcareEle =
    '[id="brokerage_current_savings_slider"]';

  PreMedicareEle = 'a[href="#preMedicare"]';
  LongTermCareEle = 'a[href="#longTerm"]';
  RunAnalysisEle = '[id="submitButtonShowPopupClick"]';
  RunAnalysisPopupEle = '[id="medicare_information_show_popup_no_button"]';
  HealthcareExpensesEle = 'a[href="#HealthcareExpenses"]';
  MedicareBundlesEle = 'a[href="#MedicareBundles"]'; ////a[@class='nav-link medicareBundleClass ui-link'][normalize-space()='Healthcare Expenses']
  //FundWithInvestmentEle = "//a[@class='nav-link ui-link active']";
  ActiveFundWithInvestmentEle =
    '//a[@class="nav-link ui-link active" and @href="#FundWithInvestment"]';
  FundWithInvestmentEle = 'a[href="#FundWithInvestment"]';

  clickHealthcareExpensesEle(HealthcareExpenses) {
    cy.get(this.HealthcareExpensesEle).first().click();
    cy.wait(4000);
  }
  clickPreMedicare(PreMedicare) {
    cy.get(this.PreMedicareEle).first().click();
    cy.wait(5000);
  }

  clickLongTermCare(LongTermCare) {
    cy.get(this.LongTermCareEle).first().click();
    cy.wait(5000);
  }

  runAnalysisButtonClick(RunAnalysis) {
    cy.get(this.RunAnalysisEle).first().click();
    cy.wait(2000);
  }
  clickRunAnalysisPopup(RunAnalysisPopup) {
    cy.get(this.RunAnalysisPopupEle).first().click();
    cy.wait(2000);
  }
  medicareBundlesClick() {
    cy.wait(4000);
    cy.get(this.MedicareBundlesEle)
      .should("not.have.class", "disabledAnchorTag")
      .first()
      .click();
    cy.wait(5000);
  }
  fundWithInvestmentClick() {
    //cy.wait(5000);
    cy.xpath(this.ActiveFundWithInvestmentEle).should("be.visible").click();
    cy.get(this.FundWithInvestmentEle).first().should("be.visible").click();

    //.should(($el) => {
    //expect($el).not.to.have.class("disabledAnchorTag").first().click();
    cy.wait(5000);
  }
}

/*  setViewExpensesDropdown(ViewExpensesDropdown) {
    //dropdown selection for primary.
    cy.get(this.ViewExpensesDropdownEle)
      .should("be.visible")
      .within(() => {
        cy.get("option").should("contain", "Primary");
        cy.get("option").should("contain", "Spouse");
      });
  }
  setViewExpensesDropdown(ViewExpensesDropdown) {
    cy.get(this.ViewExpensesDropdownEle).select("1");
    cy.wait(4000);
  }*/
//}
export default fundwithinvestment;
