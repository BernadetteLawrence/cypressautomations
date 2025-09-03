import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
//import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
//import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
//import LongtermCare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import HealthExpenses from "../../PageObjects/FinancialPlannerPOM/HealthExpensesPage";

describe('Personal', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const plannerPage = new Planner();
        const PersonalPage= new Personal();
        //const MedicarePage = new Medicare();
        //const PreMedicarePage = new PreMedicare();
        //const LongTermCarePage = new LongtermCare();
       // const PreMedicarePage= new PreMedicare();
       const HealthExpensesPage= new HealthExpenses();

    cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner');
        cy.fixture('FinancialPlanner').then((data) => {

            LoginPage.setEMailUserID("data.UserID");
            LoginPage.setPassword("data.Password");
            LoginPage.clickLogin();
            plannerPage.setClient();
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
            PersonalPage.clickMedicare(); // will click the Medicare tab
            PersonalPage.setTaxfillingstatusAlert();
    })
}
beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#create_new_plan');
    
    });
    it('TC_FP_HealthExpense_01', () => { 
         const HealthExpensesPage = new HealthExpenses();
            HealthExpensesPage.clickpersonalpage();
            HealthExpensesPage. clickmedicarepage();
            HealthExpensesPage.clickpremedicarepage();
            HealthExpensesPage.clicklongtermcarepage();
            HealthExpensesPage.clickrunanalysis();
            HealthExpensesPage.clickrunanalysispopup();
            HealthExpensesPage.clickhealthcareexpenses();
    
})
it.only('TC_FP_HealthExpense_02', () => { 
         const HealthExpensesPage = new HealthExpenses();
            HealthExpensesPage.clickpersonalpage();
            HealthExpensesPage. clickmedicarepage();
            HealthExpensesPage.clickpremedicarepage();
            HealthExpensesPage.clicklongtermcarepage();
            HealthExpensesPage.clickrunanalysis();
            HealthExpensesPage.clickrunanalysispopup();
            HealthExpensesPage.clickhealthcareexpenses();
            HealthExpensesPage.clickviewexpense();
})
})