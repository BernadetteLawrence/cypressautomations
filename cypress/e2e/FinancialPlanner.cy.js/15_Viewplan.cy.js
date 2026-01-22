import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage"; 
import HealthExpenses from "../../PageObjects/FinancialPlannerPOM/HealthExpensesPage";
import Medicarebundle from "../../PageObjects/FinancialPlannerPOM/MedicareBundlePage";
import fundwithinvestment from "../../PageObjects/FinancialPlannerPOM/fundwithinvestmentPage";
import LongTermCareExpenses from "../../PageObjects/FinancialPlannerPOM/LongTermCareExpenses";
import Reportbuilder from "../../PageObjects/FinancialPlannerPOM/ReportBuilderPage";

describe('Smoke test', () => {
    let data;                               //for csv

    before(() => {
        cy.task('csv:parseFromDropbox').then((d) => {
            data = d[0];
        });
    });
    
        const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage = Medicare;
        const PreMedicarePage = new PreMedicare();
        const LongTermCarePage = new Longtermcare();
        const HealthExpensesPage = new HealthExpenses();
        const Medicarebundlepage = new Medicarebundle();
        const fundwithinvestmentPage= new fundwithinvestment();
        const LongTermCareExpense = new LongTermCareExpenses();
        const ReportbuilderPage= new Reportbuilder();
        
        cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/planner');
        //cy.fixture('FinancialPlanner').then((data) => {

            LoginPage.setEMailUserID(data.UserID);
            LoginPage.setPassword(data.Password);
            LoginPage.clickLogin();
            PlannerPage.setClient();
            PersonalPage.setClientEmail(data.ClientEmail);
            PersonalPage.setFirstName(data.FirstName);
            PersonalPage.setLastName(data.LastName);
            PersonalPage.setGender(data.Gender);
            PersonalPage.setMonthofBirth(data.MonthofBirth);
            PersonalPage.setYearofBirth(data.YearofBirth);
            PersonalPage.setHealthProfile(data.HealthProfile);
            PersonalPage.setLifeExpectancy(data.LifeExpectancy);
            PersonalPage.setTobaccoUser(data.TobaccoUser);
            PersonalPage.setRetirementAge(data.RetirementAge);
            PersonalPage.setCurrentZipCode(data.CurrentZipcode);
            PersonalPage.setRetirementZipCode(data.RetirementZipcode);
            PersonalPage.setTaxFilingStatus(data.TaxFilingStatus);
            PersonalPage.clickIncludeSpouse(data.SpouseFirstName);
            PersonalPage.setSpouseFirstName(data.SpouseFirstName);
            PersonalPage.setSpouseLastName(data.SpouseLastName);
            PersonalPage.setSpouseGender(data.SpouseGender);
            PersonalPage.setSpouseMonthofBirth(data.SpouseMonthofBirth);
            PersonalPage.setSpouseYearofBirth(data.SpouseYearofBirth);
            PersonalPage.setSpouseHealthProfile(data.SpouseHealthProfile);
            PersonalPage.setSpouseLifeExpectancy(data.SpouseLifeExpectancy);
            PersonalPage.setSpouseTobaccoUser(data.SpouseTobaccoUser);
            PersonalPage.setSpouseRetirementAge(data.SpouseRetirementAge);
            PersonalPage.setSpouseCurrentZipCode(data.SpouseCurrentZipcode);
            PersonalPage.setSpouseRetirementZipCode(data.SpouseRetirementZipcode);
            PersonalPage.clickMedicare(); // will click the Medicare tab
            PersonalPage.setTaxfillingstatusAlert();
            MedicarePage.clickmedicaretab();
            //MedicarePage.CheckMedicareYearAndAge();
            //MedicarePage.selectYearAndLifeExpectancyAge();
            //MedicarePage.chooseMagitierOption();//MagiTier1
           // MedicarePage.CheckPartALabel();  //PartA
           // MedicarePage.CheckPartACheckBox();
           // MedicarePage.CheckPartBLabel();   //PartB
           // MedicarePage.CheckPartBCheckBox();
            //MedicarePage.CheckPartDLabel();    //PartD
           // MedicarePage.CheckPartDCheckBox(); 
           // MedicarePage.selectNoMedigapOption();  //No Medigap
           // MedicarePage.CheckDentalLabel();
           // MedicarePage.CheckDentalCheckBox();     //Dental
           // MedicarePage.CheckMedicareYearAndAgeSpouse();
           // MedicarePage.selectYearAndLifeExpectancyAgeSpouse();
           // MedicarePage.chooseMagitierOptionSpouse();  //MagiTier 1   No PartA
           // MedicarePage.CheckPartBLabelSpouse();     //PartB
           // MedicarePage.CheckPartBCheckBoxSpouse(); 
           // MedicarePage.CheckPartDLabelSpouse();   //PartD
           // MedicarePage.CheckPartDCheckBoxSpouse(); 
           // MedicarePage.selectNoMedigapOptionSpouse();   //No Medigap
                //MedicarePage.CheckDentalLabelSpouse();    //Dental
                //MedicarePage.CheckDentalCheckBoxSpouse();
                //MedicarePage.selectspouseYearAndLifeExpectancyAge();
            PreMedicarePage.clickpremedicarepage();
            cy.wait(2000);
            //PreMedicarePage.setplantypeoption();
            //PreMedicarePage.viewplantype();
            //PreMedicarePage.chooseplantypeGoldEPO();
            PreMedicarePage.viewspouseplantype();
            cy.wait(2000);
            //PreMedicarePage.choosespouseplantypeGoldEPO();
            LongTermCarePage.setlongtermcare();
            cy.wait(2000);
            LongTermCarePage.clickrunanalysis();
            cy.wait(2000);
            LongTermCarePage.clickrunanalysisbutton();
            cy.wait(2000);
            HealthExpensesPage.clickhealthcareexpenses();
            cy.wait(2000);
            Medicarebundlepage.clickmedicarebundlelink();
            cy.wait(2000);
            fundwithinvestmentPage.fundWithInvestmentlinkClick();
            cy.wait(2000);
            LongTermCareExpense.clicklongtermcareexpenseslink();
            cy.wait(2000);
            ReportbuilderPage.clickreportbuilder();
            ReportbuilderPage.generatepdfverify();
            cy.wait(2000);
            ReportbuilderPage.clickhome();
            cy.wait(2000);
            PlannerPage.clickExpandPlan(); 
            cy.wait(2000);
            PlannerPage.clickonecheckbox();
            cy.wait(2000);
            PlannerPage.clickViewPlan(); 
            cy.wait(2000);
            HealthExpensesPage.clickhealthcareexpenses();
            cy.wait(2000);
            Medicarebundlepage.clickmedicarebundlelink();
            cy.wait(2000);
            fundwithinvestmentPage.fundWithInvestmentlinkClick();
            cy.wait(2000);
            LongTermCareExpense.clicklongtermcareexpenseslink();
            cy.wait(2000);
            ReportbuilderPage.clickreportbuilder();
            cy.wait(2000);
            ReportbuilderPage.generatepdfverify();
            cy.wait(2000);
            //ReportbuilderPage.generatepdfverify();
            // cy.url().should('not.include', '/login');

       // }) fixture
    }
     beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/planner#pdf_generator_option_page');
    });
    it ("TC_FP_01_View Plan", () =>  {
        

    })
})