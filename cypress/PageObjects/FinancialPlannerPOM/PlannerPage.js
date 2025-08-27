// cypress/PageObjects/FinancialPlannerPOM/PlannerPage.js
class Planner {
  constructor() {
    this.clientEle  = '#gotoCreatePlan';
    this.searchEle  = '#plans_search';
    this.compareEle = '#comparePlansIcon';
  }

  // ✅ Wait for a reliable marker that proves the page is ready
  waitForLoad() {
    cy.get(this.clientEle, { timeout: 20000 }).should('be.visible');
  }

  clickClient() {
    cy.get(this.clientEle).should('be.visible').click();
  }

  typeSearch(value) {
    cy.get(this.searchEle).should('be.visible').clear().type(value);
  }

  clickCompare() {
    cy.get(this.compareEle).should('be.visible').click();
  }
}

export default Planner;
