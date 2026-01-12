import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import Healthexpenses from "../../PageObjects/FinancialPlannerPOM/HealthCareExpensePage";
import Medicarebundle from "../../PageObjects/FinancialPlannerPOM/MedicareBundlePage";


describe('Medicarebundle', () => {

        let testData;

    before(() => {
        cy.task('csv:parseFromDropbox').then((data) => {
            testData = data;
        });
    });
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage = Medicare;
        const PreMedicarePage = new PreMedicare();
        const LongTermCarePage = new Longtermcare();
        const HealthExpensesPage = new Healthexpenses();



        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner');
        // cy.fixture('FinancialPlanner').then((data) => {

        LoginPage.setEMailUserID(testData.UserID);
        LoginPage.setPassword(testData.Password);
        LoginPage.clickLogin();
        PlannerPage.setClient();
        PersonalPage.setClientEmail(testData.ClientEmail);
        PersonalPage.setFirstName(testData.FirstName);
        PersonalPage.setLastName(testData.LastName);
        PersonalPage.setGender(testData.Gender);
        PersonalPage.setMonthofBirth(testData.MonthofBirth);
        PersonalPage.setYearofBirth(testData.YearofBirth);
        PersonalPage.setHealthProfile(testData.HealthProfile);
        PersonalPage.setLifeExpectancy(testData.LifeExpectancy);
        PersonalPage.setTobaccoUser(testData.TobaccoUser);
        PersonalPage.setRetirementAge(testData.RetirementAge);
        PersonalPage.setCurrentZipCode(testData.CurrentZipcode);
        PersonalPage.setRetirementZipCode(testData.RetirementZipcode);
        PersonalPage.setTaxFilingStatus(testData.TaxFilingStatus);
        PersonalPage.clickIncludeSpouse();
        PersonalPage.setSpouseFirstName(testData.SpouseFirstName);
        PersonalPage.setSpouseLastName(testData.SpouseLastName);
        PersonalPage.setSpouseGender(testData.SpouseGender);
        PersonalPage.setSpouseMonthofBirth(testData.SpouseMonthofBirth);
        PersonalPage.setSpouseYearofBirth(testData.SpouseYearofBirth);
        PersonalPage.setSpouseHealthProfile(testData.SpouseHealthProfile);
        PersonalPage.setSpouseLifeExpectancy(testData.SpouseLifeExpectancy);
        PersonalPage.setSpouseTobaccoUser(testData.SpouseTobaccoUser);
        PersonalPage.setSpouseRetirementAge(testData.SpouseRetirementAge);
        PersonalPage.setSpouseCurrentZipCode(testData.SpouseCurrentZipcode);
        PersonalPage.setSpouseRetirementZipCode(testData.SpouseRetirementZipcode);
        PersonalPage.clickMedicare(); // will click the Medicare tab
        PersonalPage.setTaxfillingstatusAlert();
        MedicarePage.clickmedicaretab();
        MedicarePage.CheckMedicareYearAndAge();
        MedicarePage.selectYearAndLifeExpectancyAge();
        MedicarePage.chooseMagitierOption();
        MedicarePage.CheckPartALabel();
        MedicarePage.CheckPartACheckBox();
        MedicarePage.SelectDentalProfile();
        MedicarePage.CheckMedicareYearAndAgeSpouse();
        MedicarePage.selectYearAndLifeExpectancyAgeSpouse();
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




    }
    beforeEach(function () {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#medicare_bundles');

    });

    it('TC_FP_MBundle_01', () => { //landing page
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.clickmedicarebundlelink();

    })
    it('TC_FP_MBundle_02', () => { //view input button
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.clickviewinputbutton();

    })
    it('TC_FP_MBundle_03', () => { //primary name display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.clickviewinputbutton();

    })
    it('TC_FP_MBundle_04', () => { //primary name display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.primarynamedisplay();

    })
    it('TC_FP_MBundle_05', () => { //medicarebundle title
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.checkmedicarebundletitle();

    })
    it('TC_FP_MBundle_06', () => { //numberofrowsandcol
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.numberofrowsandcol();

    })
    it('TC_FP_MBundle_07', () => { //numberofcol
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.numberofcol();

    })
    it('TC_FP_MBundle_08', () => { //medicare component title
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.checkmedicarecomponenttitle();

    })
    it('TC_FP_MBundle_09', () => { //spousename display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.verifyspousename();

    })
    it('TC_FP_MBundle_10', () => { //spousename display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.eachrowsexecuting();

    })
    it('TC_FP_MBundle_11', () => { //spousename display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.verifyspouserowsandcolumn();

    })
    it('TC_FP_MBundle_12', () => { //spousename display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.verifyspousenoofrows();

    })
    it('TC_FP_MBundle_13', () => { //spousename display
        const Medicarebundlepage = new Medicarebundle;
        Medicarebundlepage.spouseallrowsdisplay();

    })
})