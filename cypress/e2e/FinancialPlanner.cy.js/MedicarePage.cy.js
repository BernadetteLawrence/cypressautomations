import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";

describe('Medicare', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        //const MedicarePage = new Medicare();

        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner');
        cy.fixture('FinancialPlanner').then((data) => {

            LoginPage.setEMailUserID("data.UserID");
            LoginPage.setPassword("data.Password");
            LoginPage.clickLogin();
            PlannerPage.setClient();
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
             
            // cy.url().should('not.include', '/login');
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
     it('TC_FP_MEDI_01', () => {                //landing on medicareTab ;
       const MedicarePage= new Medicare();
        MedicarePage.clickmedicaretab();
})
it('TC_FP_MEDI_02', () => {   
     const MedicarePage= new Medicare();             //tax filing label display
    MedicarePage.landingmedicaretab(); 
    MedicarePage.clickmedicaretab();   
    MedicarePage.CheckTaxFilingPrimaryStatus()


})
 it('TC_FP_MEDI_03', () => {                //tax filing status
       //const MedicarePage = new Medicare();
      //  Medicare.personalclick();
       const MedicarePage= new Medicare();
       MedicarePage.landingmedicaretab(); 
       MedicarePage.clickmedicaretab();
       MedicarePage.CheckTaxFilingPrimary();
       MedicarePage.CheckTaxFilingPrimaryStatus();
 })
 it('TC_FP_MEDI_04', () => {                //primary display
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.CheckPrimaryNameDisplay();
        
 })
   it('TC_FP_MEDI_05', () => {                //primary name
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.checkPrimaryName();      

 })
 it('TC_FP_MEDI_06', () => {                //year and age
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.checkMedicareFromYearAndAge();
       

 })
  it('TC_FP_MEDI_07', () => {                // year and life expectancy visible
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.checkMedicareFromYearAndAge();   

 })
 it('TC_FP_MEDI_08', () => {                //choose yaer and life expectancy
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.checkMedicareFromYearAndAge();
        MedicarePage.selectMedicareToYearAndAge();
 })
  it('TC_FP_MEDI_09', () => {                //magi tier visible
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.verifymagitiername();
        MedicarePage. magitieroptiondropdown();
 })
 it('TC_FP_MEDI_10', () => {                //magi tier dropdown
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.verifymagitiername();
        MedicarePage. magitieroptiondropdown();
        
 })
  it('TC_FP_MEDI_11', () => {                //length of magitier option
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.verifymagitiername();
        MedicarePage. magitieroptiondropdown();
        MedicarePage.LengthOfMagitierOption();
 })
   it('TC_FP_MEDI_12', () => {                //choose magi tier optiom
        const MedicarePage = new Medicare();
        MedicarePage.PersonalClick();
        MedicarePage.clickmedicaretab();
        MedicarePage.verifymagitiername();
        MedicarePage. magitieroptiondropdown();
        MedicarePage.LengthOfMagitierOption();
        MedicarePage.chooseMagitierOption();
 })
});



