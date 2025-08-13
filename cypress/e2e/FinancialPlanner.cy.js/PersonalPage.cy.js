import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage"
let LoginPage, PlannerPage, PersonalPage;
beforeEach(() => {
    LoginPage = new Login();
    PlannerPage = new Planner();
    PersonalPage = new Personal();

    cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner');
    LoginPage.setEMailUserID("data.UserID");
    LoginPage.setPassword("data.Pssword");
    LoginPage.clickLogin();
    PlannerPage.setClient();
});
it('Personal Information', () => {
PersonalPage.setClientEmail("data.ClientEmail");
PersonalPage.setFirstName("data.FirstName");
PersonalPage.setLastName("data.LastName");
PersonalPage.setGender("data.Gender");
PersonalPage.setMonthofBirth("data.MonthofBirth");
PersonalPage.setYearofBirth("data.YearofBirth");
PersonalPage.setHealthProfile("data.HealthProfile");
PersonalPage.setLifeExpectancy("data.LifeExpectancy");
PersonalPage.setTobaccoUser("data.TobaccoUser");
PersonalPage.setRetirementAge("data.RetirementAge");
PersonalPage.setCurrentZipCode("data.CurrentZipcode");
PersonalPage.setRetirementZipCode("data.RetirementZipcode");
PersonalPage.setTaxFilingStatus("data.TaxFilingStatus");
PersonalPage.clickIncludeSpouse("data.SpouseFirstName");
PersonalPage.setSpouseFirstName("SpouseLastName");
PersonalPage.setSpouseLastName("data.SpouseLastName");
PersonalPage.setSpouseGender("data.SpouseGender");
PersonalPage.setSpouseMonthofBirth("data.SpouseMonthofBirth");
PersonalPage.setSpouseYearofBirth("data.SpouseYearofBirth");
PersonalPage.setSpouseHealthProfile("data.SpouseHealthProfile");
PersonalPage.setSpouseLifeExpectancy("data.SpouseLifeExpectancy");
PersonalPage.setSpouseTobaccoUser("data.SpouseTobaccoUser");
PersonalPage.setSpouseRetirementAge("data.SpouseRetirementAge");
PersonalPage.setSpouseCurrentZipCode("data.SpouseCurrentZipcode");
PersonalPage.setSpouseRetirementZipCode("data.SpouseRetirementZipcode");
PersonalPage.clickMedicare();  // will click the Medicare tab
PersonalPage.setTaxfillingstatusAlert();
});
