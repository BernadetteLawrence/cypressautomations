import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage"; 
import Healthexpenses from "../../PageObjects/FinancialPlannerPOM/HealthCareExpensePage";
import Medicarebundle from "../../PageObjects/FinancialPlannerPOM/MedicareBundlePage";


describe('Medicarebundle', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage = Medicare;
        const PreMedicarePage = new PreMedicare();
        const LongTermCarePage = new Longtermcare();
        const HealthExpensesPage = new Healthexpenses();



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
            MedicarePage.clickmedicaretab();
            MedicarePage.CheckMedicareYearAndAge();
            MedicarePage.selectYearAndLifeExpectancyAge();
            MedicarePage.chooseMagitierOption();
            MedicarePage. CheckPartALabel();
            MedicarePage.CheckPartACheckBox();
            MedicarePage.SelectDentalProfile();
            MedicarePage.CheckMedicareYearAndAgeSpouse();
            MedicarePage.selectspouseYearAndLifeExpectancyAge();
            PreMedicarePage.clickpremedicarepage();
            PreMedicarePage.setplantypeoption();
            PreMedicarePage.viewplantype();
            PreMedicarePage.chooseplantypeGoldEPO();
            PreMedicarePage.viewspouseplantype();
            PreMedicarePage.choosespouseplantypeGoldEPO();
            LongTermCarePage.setlongtermcare();
            LongTermCarePage.clickrunanalysis();
            LongTermCarePage.clickrunanalysisbutton();
            HealthExpensesPage.clickhealthcareexpenses();



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
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#medicare_bundles');
    });

it('TC_FP_MBundle_01', () =>{                           //landing page
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.clickmedicarebundlelink();

})
it('TC_FP_MBundle_02', () =>{                         //view input button
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.clickviewinputbutton();

})
it('TC_FP_MBundle_03', () =>{                         //primary name display
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.clickviewinputbutton();

})
it('TC_FP_MBundle_04', () =>{                         //primary name display
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.primarynamedisplay();

})
it('TC_FP_MBundle_05', () =>{                         //medicarebundle title
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.checkmedicarebundletitle();

})
it('TC_FP_MBundle_06', () =>{                         //numberofrowsandcol
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.numberofrowsandcol();

})
it('TC_FP_MBundle_07', () =>{                         //numberofcol
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.numberofcol();

})
it('TC_FP_MBundle_08', () =>{                         //medicare component title
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.checkmedicarecomponenttitle();

})
it('TC_FP_MBundle_09', () =>{                         //spousename display
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.verifyspousename();

})
it('TC_FP_MBundle_10', () =>{                         //executing all rows primary
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.eachrowsexecuting();

})
it('TC_FP_MBundle_11', () =>{                         //spouse rows and col
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.verifyspouserowsandcolumn();

})
it('TC_FP_MBundle_12', () =>{                         //spouse rows
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.verifyspousenoofrows();

})
it('TC_FP_MBundle_13', () =>{                         //executing all rows spouse
    const Medicarebundlepage = new Medicarebundle;
    Medicarebundlepage.spouseallrowsdisplay();

})
})