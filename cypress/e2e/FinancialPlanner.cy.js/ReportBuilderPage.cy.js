import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/Medicare";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import HealthExpenses from "../../PageObjects/FinancialPlannerPOM/HealthExpensesPage";
import Medicarebundle from "../../PageObjects/FinancialPlannerPOM/MedicareBundlePage";
import Fundwithinvestment from  "../../PageObjects/FinancialPlannerPOM/fundwithinvestment";
import LongTermCareExpenses from "../../PageObjects/FinancialPlannerPOM/Longtermcareexpensespage";
import Reportbuilder from "../../PageObjects/FinancialPlannerPOM/ReportBuilderPage";

describe('reportbuilder', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage = Medicare;
        const PreMedicarePage = new PreMedicare();
        const LongTermCarePage = new Longtermcare();
        const HealthExpensesPage = new HealthExpenses();
        const Medicarebundlepage = new Medicarebundle();
        const LongTermCareExpense = new LongTermCareExpenses();
        const fundwithinvestment = new Fundwithinvestment();
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
            MedicarePage.SelectSupplementPlanN();
            MedicarePage.SelectDentalProfile();
            MedicarePage.CheckMedicareYearAndAgeSpouse();
            MedicarePage.selectYearAndLifeExpectancyAgeSpouse();
            MedicarePage.SelectSupplementPlanNSpouse()
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
            HealthExpensesPage.checkpresentvalueatretirementprimary();
            HealthExpensesPage.checktotalhealthcareexpenseprimary();
            HealthExpensesPage.checktotalselectedexpenseprimary();
            HealthExpensesPage.checkpresentvaluesurchargeretirementprimary();
            HealthExpensesPage.checktotalirmaasurchargeprimary();
            HealthExpensesPage.viewinteractivecalculationsonthegraph();
            HealthExpensesPage.checkmedicarepartaprimary();
            HealthExpensesPage.checkmedicarepartbprimary();
            HealthExpensesPage.checkmedicaresupplementplanprimary();
            HealthExpensesPage.checkmedicarepartdprimary();
            HealthExpensesPage.checkmedicaredentalprimary();
            HealthExpensesPage.selectviewexpensespouse();
            HealthExpensesPage.checktotalhealthcareexpensespouse();
            HealthExpensesPage.checktotalselectedexpensespouse();
            HealthExpensesPage.checkpresentvaluesurchargeretirementspouse();
            HealthExpensesPage.checktotalirmaasurchargespouse();
            HealthExpensesPage.viewinteractivecalculationsonthegraphspouse();
            HealthExpensesPage.checkpostretirementpremedicarepremiumspouse();
            Medicarebundlepage.clickmedicarebundlelink();
           // Medicarebundlepage.eachrowsexecuting();
            Medicarebundlepage.numberofrowsandcol();
            Medicarebundlepage.spouseallrowsdisplay();
            fundwithinvestment.fundWithInvestmentlinkClick();
            LongTermCareExpense.clicklongtermcareexpenseslink();
                     
        })

    }

    beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#pdf_generator_option_page');
    });


    it('TC_FP_Report_01', () => { //reportbuilder landing page
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.clickreportbuilder();
    })
    it('TC_FP_Report_02', () => { //membername
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.membername();
    })
    it('TC_FP_Report_03', () => { //default title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkdefaulttitle();
    })
    it('TC_FP_Report_04', () => { //Report title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkreportname();

    })
    it('TC_FP_Report_05', () => { //cover page
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkcoverpagetitle();

    })

    it('TC_FP_Report_06', () => { //introduction title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkintroductiontitle();

    })
    it('TC_FP_Report_07', () => { //Medical title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkmedicaltitle();

    })
    it('TC_FP_Report_08', () => { //appendix title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkappendixtitle();

    })
    it('TC_FP_Report_09', () => { //personal assumption title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkpersonalassumptiontitle();

    })
    it('TC_FP_Report_10', () => { // pre-medicare assumption title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkpremedicareassumptiontitle();

    })
    it('TC_FP_Report_11', () => { //medicare assumption title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkmedicareassumptiontitle();

    })
    it('TC_FP_Report_12', () => { //disclosure title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkdisclosuretitle();

    })
    it('TC_FP_Report_13', () => { // you can choose
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkthetitle();

    })
    it('TC_FP_Report_14', () => { //Additional analysis
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkadditionalanalysistitle();

    })

    it('TC_FP_Report_15', () => { //medicare bundle
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifymedicarebundlename();

    })
    it('TC_FP_Report_16', () => { //checkbox of medicare bundle
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.medicarebundlescheckbox();

    })
    it('TC_FP_Report_17', () => { //long term care
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifylongtermcareexpensesname();

    })
    it('TC_FP_Report_18', () => { //check box of long term care
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.longtermcareexpensescheckbox();

    })
    it('TC_FP_Report_19', () => { //life time expense
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifylifetimexpensedetailname();

    })
    it('TC_FP_Report_20', () => { //checkbox of life time expense
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.lifetimeexpensecheckbox();

    })

    it('TC_FP_Report_21', () => { //appendix title
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifyheadingappendix();

    })
    it('TC_FP_Report_22', () => { //terms and condition
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifytermsandcondition();

    })
    it('TC_FP_Report_23', () => { //for more information  
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.verifyformoreinfo();

    })
    it('TC_FP_Report_24', () => { //terms and condition checkbox
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.termsandconditioncheckbox();

    })
    it('TC_FP_Report_25', () => { //more information checkbox
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.formoreinfocheckbox();

    })
    it('TC_FP_Report_26', () => { // Email PDF
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkemailpdfbuton();

    })
    it('TC_FP_Report_27', () => { //popup EmailPDF
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkemailpdfbuton();
        ReportBuilderPage.checkemailpopup();
    })
    it('TC_FP_Report_28', () => { //Enter Email
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkemailpdfbuton();
        ReportBuilderPage.enteremailcolumn();
    })
    it('TC_FP_Report_29', () => { //Send Email
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkemailpdfbuton();
        ReportBuilderPage.enteremailcolumn();
        ReportBuilderPage.sendemailbutton();
    })
    it('TC_FP_Report_30', () => { //Cancel Email
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.checkemailpdfbuton();
        ReportBuilderPage.enteremailcolumn();
        ReportBuilderPage.cancelemailbutton();
    })
    it('TC_FP_Report_31', () => { //view input
        const ReportBuilderPage = new Reportbuilder();
        ReportBuilderPage.viewinput();
    })
    it('TC_FP_Report_32', () => { //Generate PDF
        const ReportBuilderPage = new Reportbuilder();
      ReportBuilderPage.generatepdfverify();
    })
})
   
    









