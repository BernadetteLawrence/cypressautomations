import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import HealthExpenses from "../../PageObjects/FinancialPlannerPOM/HealthExpensesPage";

describe('Personal', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const plannerPage = new Planner();
        const PersonalPage= new Personal();
        const PreMedicarePage= new PreMedicare();
        const MedicarePage=  Medicare;
        const LongtermCarePage= new Longtermcare();

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
            MedicarePage.clickmedicaretab();
            MedicarePage.CheckMedicareYearAndAge();
            MedicarePage.selectYearAndLifeExpectancyAge();
            MedicarePage.chooseMagitierOption();
            MedicarePage.CheckPartALabel();
            MedicarePage.CheckPartACheckBox();
            MedicarePage.SelectSupplementPlanN();
            MedicarePage.CheckDentalLabel();
            MedicarePage.CheckDentalCheckBox();
            PreMedicarePage.clickpremedicarepage();
            PreMedicarePage.clickpersonalpage();
            PreMedicarePage.clickpremedicarepage();
            PreMedicarePage.setplantypeoption();
            PreMedicarePage.viewplantype();
            PreMedicarePage.chooseplantypeGoldEPO();
            PreMedicarePage.viewspouseplantype();
            PreMedicarePage.choosespouseplantypeGoldEPO();
            LongtermCarePage.setlongtermcare();
            LongtermCarePage.selectyearsofadultdaycareoption();
            LongtermCarePage.selectyearsofinhomecareoption();
            LongtermCarePage.selectyearsofnursingcareoption();
            LongtermCarePage.selectspouseyearsofadultdaycareoption();  
            LongtermCarePage.selectspouseinhomecareoption();
            LongtermCarePage.selectspousenursingcareoption();
    })
}

beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
       
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#long_expense_projection');
    
});

    it('TC_FP_HealthExpense_01', () => {     //Landing Page
            const HealthExpensesPage = new HealthExpenses();
            HealthExpensesPage.clickhealthcareexpenses();
            
    })
    
    it('TC_FP_HealthExpense_02', () => {   //verify view expense
            const HealthExpensesPage = new HealthExpenses();
            HealthExpensesPage.verifyviewexpense();
})
it('TC_FP_HealthExpense_03', () => {     //verify view expense dropdown
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
})
it('TC_FP_HealthExpense_04', () => {     //verify view expense primary
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
})
it('TC_FP_HealthExpense_05', () => {     //check primary name
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
})
it('TC_FP_HealthExpense_06', () => {     //check presentvalue at retirement primary
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.checkpresentvalueatretirementprimary();
})
it('TC_FP_HealthExpense_07', () => {     //total healthcare expense primary
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.checkpresentvalueatretirementprimary();
        HealthExpensesPage.checktotalhealthcareexpenseprimary();
})
it('TC_FP_HealthExpense_08', () => {     //total selected expense primary
       
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        //HealthExpensesPage.checkpresentvalueatretirementprimary();
        //HealthExpensesPage.checktotalhealthcareexpenseprimary();
        HealthExpensesPage.checktotalselectedexpenseprimary();

})
it('TC_FP_HealthExpense_09', () => {     //present value surcharge retirement primary
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.checkpresentvaluesurchargeretirementprimary();

})
it('TC_FP_HealthExpense_10', () => {     //total irmaa surcharge primary
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.checktotalirmaasurchargeprimary();

})
it('TC_FP_HealthExpense_11', () => {     //interactive calculations on the graph
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.viewinteractivecalculationsonthegraph();

})
it('TC_FP_HealthExpense_11', () => {     //interactive calculations on the graph elements
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.viewinteractivecalculationsonthegraph();
        HealthExpensesPage.checkpostretirementpremedicarepremiumprimary();
        HealthExpensesPage.checkpostretirementpremedicareoutofpocketprimary();
        HealthExpensesPage.checkmedicarepartaprimary();
        HealthExpensesPage.checkmedicarepartbprimary();
        HealthExpensesPage.checkmedicaresupplementplanprimary();
        HealthExpensesPage.checkmedicarepartdprimary();
        HealthExpensesPage.checkmedicaredentalprimary();
      
})
it('TC_FP_HealthExpense_12', () => {     //Summary
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpenseprimary();
        HealthExpensesPage.checkprimaryname();
        HealthExpensesPage.ageprimary();
        HealthExpensesPage.retirementageprimary();
        HealthExpensesPage.lifeexpectancyprimary();
        HealthExpensesPage.healthprofileprimary();
        HealthExpensesPage.retirementyearprimary();
        HealthExpensesPage.medicareeligibleyearprimary();
        HealthExpensesPage.supplementprimary();
        HealthExpensesPage.checkmedicaredentalprimary();
        HealthExpensesPage.Taxfilingstatusprimary();
      
})
it('TC_FP_HealthExpense_13', () => {     //Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
})
it('TC_FP_HealthExpense_14', () => {     //verify view expense Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
})
it('TC_FP_HealthExpense_15', () => {     ////check presentvalue at retirement Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        HealthExpensesPage.checkpresentvalueatretirementspouse();
})
it('TC_FP_HealthExpense_16', () => {     //total healthcare expense Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        //HealthExpensesPage.checkpresentvalueatretirementspouse();
        HealthExpensesPage.checktotalhealthcareexpensespouse();
})
it('TC_FP_HealthExpense_17', () => {     // //total selected expense Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        //HealthExpensesPage.checkpresentvalueatretirementspouse();
        HealthExpensesPage.checktotalselectedexpensespouse();
})
it('TC_FP_HealthExpense_18', () => {     //present value surcharge retirement Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        //HealthExpensesPage.checkpresentvalueatretirementspouse();
        HealthExpensesPage.checkpresentvaluesurchargeretirementspouse();
})
it('TC_FP_HealthExpense_19', () => {     //total irmaa surcharge Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        //HealthExpensesPage.checkpresentvalueatretirementspouse();
        HealthExpensesPage.checktotalirmaasurchargespouse();
})
it('TC_FP_HealthExpense_20', () => {      //interactive calculations on the graph Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        HealthExpensesPage.viewinteractivecalculationsonthegraphspouse();
        HealthExpensesPage.checkpostretirementpremedicarepremiumspouse();
        HealthExpensesPage.checkpostretirementpremedicareoutofpocketspouse();
        HealthExpensesPage.checkmedicarepartaspouse();
        HealthExpensesPage.checkmedicarepartbspouse();
        HealthExpensesPage.checkmedicaresupplementplanspouse();
        HealthExpensesPage.checkmedicarepartdspouse();
        HealthExpensesPage.checkmedicaredentalspouse();
})
it('TC_FP_HealthExpense_21', () => {      //Summary Spouse
        const HealthExpensesPage = new HealthExpenses();
        HealthExpensesPage.verifyviewexpense();
        HealthExpensesPage.setviewexpenseOptions();
        HealthExpensesPage.selectviewexpensespouse();
        HealthExpensesPage.checkspousename();
        HealthExpensesPage.agespouse();
        HealthExpensesPage.retirementagespouse();
        HealthExpensesPage.lifeexpectancyspouse();
        HealthExpensesPage.healthprofilespouse();
        HealthExpensesPage.retirementyearspouse();
        HealthExpensesPage.medicareeligibleyearspouse();
        HealthExpensesPage.supplementspouse();
        HealthExpensesPage.expectedincomeduringmedicarespouse();
        HealthExpensesPage.Taxfilingstatusspouse();
})  
})
