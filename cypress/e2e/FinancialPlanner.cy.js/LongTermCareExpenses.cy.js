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

describe('LongTermCareExpenses', () => {
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
            MedicarePage.selectYearAndLifeExpectancyAgeSpouse();
            MedicarePage.chooseMagitierOptionSpouse();
            MedicarePage.SelectSupplementPlanNSpouse();
            MedicarePage.CheckDentalLabelSpouse();
            MedicarePage.CheckDentalCheckBoxSpouse();
            //MedicarePage.selectspouseYearAndLifeExpectancyAge();
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
            Medicarebundlepage.clickmedicarebundlelink();
            fundwithinvestmentPage.fundWithInvestmentlinkClick();
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
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#long_term_care_expenses');
    });
    it('TC_FP_LongTermCareExpenses_01', () =>{                           //landing page
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();

})
it('TC_FP_LongTermCareExpenses_02', () =>{                           //primary name
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewprimaryandname();

})
it('TC_FP_LongTermCareExpenses_03', () =>{                           //primary TotalPresentValueExpenses
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTotalPresentValueExpenses();

})
it('TC_FP_LongTermCareExpenses_04', () =>{                           //primary name TotalFutureValueExpenses
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTotalFutureValueExpenses();
})
it('TC_FP_LongTermCareExpenses_05', () =>{                           // PrimaryBarGraph
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
})
it('TC_FP_LongTermCareExpenses_06', () =>{                           // viewPrimaryFutureValueYaxis
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
    LongTermCareExpense.viewPrimaryFutureValueYaxis();
})
it('TC_FP_LongTermCareExpenses_07', () =>{                           //viewPrimaryYearXaxis
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
    LongTermCareExpense.viewPrimaryYearXaxis();
})
it('TC_FP_LongTermCareExpenses_08', () =>{                           //viewPrimaryRedAdultDayCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
    LongTermCareExpense.viewPrimaryRedAdultDayCare();
    })
it('TC_FP_LongTermCareExpenses_09', () =>{                           //viewPrimaryBlueInHomeCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
    LongTermCareExpense.viewPrimaryBlueInHomeCare();

})
it('TC_FP_LongTermCareExpenses_10', () =>{                           //viewPrimaryGreenNursingCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryBarGraph();
    LongTermCareExpense.viewPrimaryGreenNursingCare();
   
})
it('TC_FP_LongTermCareExpenses_11', () =>{                           //viewPrimaryTable
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
   })
it('TC_FP_LongTermCareExpenses_12', () =>{                           //viewPrimaryRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
    LongTermCareExpense.viewPrimaryRow();
   })
it('TC_FP_LongTermCareExpenses_13', () =>{                           //viewPrimaryRowColumn
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
    LongTermCareExpense.viewPrimaryRowColumn();
   })
   it('TC_FP_LongTermCareExpenses_14', () =>{                           //viewPrimaryRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
    LongTermCareExpense.viewPrimaryRow();
   })
   it('TC_FP_LongTermCareExpenses_15', () =>{                           //viewPrimaryAllRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
    LongTermCareExpense.viewPrimaryAllRow();
   })
   it('TC_FP_LongTermCareExpenses_16', () =>{                           //Spouse name
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.viewSpouseandname();
   })
   it('TC_FP_LongTermCareExpenses_17', () =>{                           //SpouseTotalPresentValueExpenses
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.viewSpouseandname();
    LongTermCareExpense.viewSpouseTotalPresentValueExpenses();
   })
   it('TC_FP_LongTermCareExpenses_18', () =>{                           //SpouseTotalFutureValueExpenses
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.viewSpouseandname();
    LongTermCareExpense.viewSpouseTotalFutureValueExpenses();
   })
   it('TC_FP_LongTermCareExpenses_19', () =>{                           // SpouseBarGraph
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
})
it('TC_FP_LongTermCareExpenses_20', () =>{                           // SpouseFutureValueYaxis
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
    LongTermCareExpense.viewSpouseFutureValueYaxis();
})
it('TC_FP_LongTermCareExpenses_21', () =>{                           //SpouseYearXaxis
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
    LongTermCareExpense.viewSpouseYearXaxis();
})
it('TC_FP_LongTermCareExpenses_22', () =>{                           //SpouseRedAdultDayCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
    LongTermCareExpense.viewSpouseRedAdultDayCare();
})
it('TC_FP_LongTermCareExpenses_23', () =>{                           //SpouseBlueInHomeCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
    LongTermCareExpense.viewSpouseBlueInHomeCare();
})
it('TC_FP_LongTermCareExpenses_24', () =>{                           //SpouseGreenNursingCare
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseBarGraph();
    LongTermCareExpense.viewSpouseGreenNursingCare(); 
})
it('TC_FP_LongTermCareExpenses_25', () =>{                           //SpouseTable
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseTable();
   })
   it('TC_FP_LongTermCareExpenses_26', () =>{                           //SpouseRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseTable();
    LongTermCareExpense.viewSpouseRow();
   })
   it('TC_FP_LongTermCareExpenses_27', () =>{                           //SpouseRowColumn
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseTable();
    LongTermCareExpense.viewSpouseRowColumn();
   })
   it('TC_FP_LongTermCareExpenses_28', () =>{                           //SpouseRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseTable();
    LongTermCareExpense.viewSpouseRow();
   })
   it('TC_FP_LongTermCareExpenses_29', () =>{                           //SpouseAllRow
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewSpouseTable();
    LongTermCareExpense.viewSpouseAllRow();
   })
   it('TC_FP_LongTermCareExpenses_30', () =>{                           //View Input
    const LongTermCareExpense = new LongTermCareExpenses;
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.clickviewInput();
})
})