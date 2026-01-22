//Benny

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
import Consistency from "../../PageObjects/FinancialPlannerPOM/Consistencytest";

describe("TC_FP_All_Consistency test", () => {
  let data; // for csv

  before(() => {
    cy.task("csv:parseFromDropbox").then((d) => {
      data = d[0];
    });
  });

  // -------- LOGIN + PLAN FLOW ----------

  const loginAndCreatePlan = () => {
    const LoginPage = new Login();
    const PlannerPage = new Planner();
    const PersonalPage = new Personal();
    const MedicarePage =  Medicare;
    const PreMedicarePage = new PreMedicare();
    const LongTermCarePage = new Longtermcare();
    const HealthExpensesPage = new HealthExpenses();
    const MedicarebundlePage = new Medicarebundle();
    const FundWithInvestmentPage = new fundwithinvestment();
    const LongTermCareExpensePage = new LongTermCareExpenses();
    const ReportbuilderPage = new Reportbuilder();

    cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner");

    // --- Login ---
    LoginPage.setEMailUserID(data.UserID);
    LoginPage.setPassword(data.Password);
    LoginPage.clickLogin();

    // --- Personal ---
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

    // include spouse
    PersonalPage.clickIncludeSpouse(true);
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

    // --- Medicare tab ---
    PersonalPage.clickMedicare();
    PersonalPage.setTaxfillingstatusAlert();

    MedicarePage.clickmedicaretab();
    MedicarePage.CheckMedicareYearAndAge();
    MedicarePage.selectYearAndLifeExpectancyAge();
    MedicarePage.chooseMagitierOption(data.MAGItier);
    MedicarePage.CheckPartALabel();
    MedicarePage.CheckPartACheckBox();
    MedicarePage.CheckPartBLabel();
    MedicarePage.CheckPartBCheckBox();
    MedicarePage.CheckPartDLabel();
    MedicarePage.CheckPartDCheckBox();
    MedicarePage.clickSupplementPlanDropDown(data.SupplementPlanDropDown);
    MedicarePage.CheckDentalLabel();
    MedicarePage.CheckDentalCheckBox();

    // Spouse 
    MedicarePage.CheckMedicareYearAndAgeSpouse();
    MedicarePage.selectYearAndLifeExpectancyAgeSpouse();
    MedicarePage.chooseMagitierOptionSpouse(data.MAGItierSpouse);
    MedicarePage.CheckPartBLabelSpouse();
    MedicarePage.CheckPartBCheckBoxSpouse();
    MedicarePage.CheckPartDLabelSpouse();
    MedicarePage.CheckPartDCheckBoxSpouse();
    MedicarePage.clickSupplementPlanDropDownSpouse(data.SupplementPlanDropDownSpouse);

    // --- Pre-Medicare ---
    PreMedicarePage.clickpremedicarepage();
    PreMedicarePage.setplantypeoption();
    PreMedicarePage.viewplantype();
    PreMedicarePage.chooseplantypeGoldEPO();
    PreMedicarePage.viewspouseplantype();
    PreMedicarePage.choosespouseplantypeGoldEPO();

    // --- Long Term Care ---
    LongTermCarePage.setlongtermcare();
    LongTermCarePage.clickrunanalysis();
    LongTermCarePage.clickrunanalysisbutton();

    // --- Tab hops ---
    HealthExpensesPage.clickhealthcareexpenses();
    cy.wait(4000);
    MedicarebundlePage.clickmedicarebundlelink();
    cy.wait(8000);
    FundWithInvestmentPage.fundWithInvestmentlinkClick();
    cy.wait(4000);
    LongTermCareExpensePage.clicklongtermcareexpenseslink();
    cy.wait(4000);
    
  };
beforeEach(() => {
  // 1) Create / restore session
  cy.session("FP session", loginAndCreatePlan);

  // 2) Every test: go to Health Expenses page
  cy.visit(
    "http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection"
  );

  cy.location("hash", { timeout: 20000 }).should(
    "eq",
    "#long_expense_projection"
  );
});

  it("TC_FP_All_Consistency test: Primary on Health Expenses Page_01", () => {
    
    cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_expense_projection");

      cy.wait(5000);
    const ConsistencytestPage = new Consistency();
    const HealthExpensesPage = new HealthExpenses();

    ConsistencytestPage.setAgePrimary().then((value) => {
      cy.log("Primary Age from UI = " + value);
      cy.wait(2000);
    });
    
    ConsistencytestPage.setRetirementAgePrimary().then((value) => {
      cy.log("Primary Retirement Age from UI = " + value);
      cy.wait(2000);
    });

    ConsistencytestPage.setRetirementYearPrimary().then((value) => {
      cy.log("Primary Retirement Year from UI = " + value);
      cy.wait(2000);
    });

    ConsistencytestPage.setLifeExpectancyPrimary().then((value) => {
      cy.log("Life Expectancy from UI = " + value);
      cy.wait(2000);
    });

    ConsistencytestPage.setHealthProfilePrimary().then((value) => {
      cy.log("Health Profile from UI = " + value);
      cy.wait(2000);
    });

    ConsistencytestPage.setSupplementPrimary().then((value) => {
      cy.log("Supplement from UI = " + value);
      cy.wait(2000);
    });
    
     ConsistencytestPage.setMedicareEligibleYearPrimary().then((value) => {
      cy.log("Medicare Eligible Year Primary from UI = " + value);
      cy.wait(2000);
    });

     ConsistencytestPage.setExpectedIncomeDuringMedicarePrimary().then((value) => {
      cy.log("Expected Income During Medicare Primary from UI = " + value);
      cy.wait(2000);
    }); 

    ConsistencytestPage.setTaxFilingStatusPrimary().then((value) => {
      cy.log("Tax Filing Status from UI = " + value);
      cy.wait(2000);
    });
  })

  it("TC_FP_All_Consistency test: Spouse on Health Expenses Page_02", () => {
    
    cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_expense_projection");

      cy.wait(5000);
    const ConsistencytestPage = new Consistency();
    const HealthExpensesPage = new HealthExpenses();

    HealthExpensesPage.verifyviewexpense();
    cy.wait(2000);
    HealthExpensesPage.setviewexpenseOptions();
    cy.wait(2000);
    HealthExpensesPage.selectviewexpensespouse();
    cy.wait(2000);

    ConsistencytestPage.setAgeSpouse().then((value) => {
      cy.log("Spouse Age from UI = " + value);
      cy.wait(2000);
    });

    ConsistencytestPage.setRetirementAgeSpouse().then((value) => {
      cy.log("Spouse Retirement Age from UI = " + value);
      cy.wait(2000);
    });
    ConsistencytestPage.setRetirementYearSpouse().then((value) => {
      cy.log("Spouse Retirement Year from UI = " + value);
      cy.wait(2000);
    });
    ConsistencytestPage.setLifeExpectancySpouse().then((value) => {
      cy.log("Spouse Life Expectancy from UI = " + value);
      cy.wait(2000);
    });
    ConsistencytestPage.setHealthProfileSpouse().then((value) => {
      cy.log("Spouse HealthProfile from UI = " + value);
      cy.wait(2000);
    });
    ConsistencytestPage.setSupplementSpouse().then((value) => {
      cy.log("Spouse Supplement from UI = " + value);
      cy.wait(2000);
    });
     ConsistencytestPage.setMedicareEligibleYearSpouse().then((value) => {
      cy.log("Medicare Eligible Year Spouse from UI = " + value);
      cy.wait(2000);
    });

     ConsistencytestPage.setExpectedIncomeDuringMedicareSpouse().then((value) => {
      cy.log("Expected Income During Medicare Spouse from UI = " + value);
      cy.wait(2000);
    }); 
    ConsistencytestPage.setTaxFilingStatusSpouse().then((value) => {
      cy.log("Spouse Tax Filing Status from UI = " + value);
      cy.wait(2000);
    });
  })

it("TC_FP_All_Consistency test: Health Expense Value on Health Expenses Page for Primary matches Fund with Investment_03",() => {
      cy.visit(
        "http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_expense_projection");

      cy.wait(5000);

      const ConsistencytestPage = new Consistency();
      const FundWithInvestmentPage = new fundwithinvestment();

      ConsistencytestPage.setPresentValueAtRetirementPrimary().then((value) => {
      cy.log("PresentValueAtRetirement Primary from UI = " + value);
      cy.wait(2000);
      });
      ConsistencytestPage.setTotalHealthcareExpensesPrimary().then((value) => {
      cy.log("Total Healthcare Expenses Primary from UI = " + value);
      cy.wait(2000);
    });
      cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/planner#fund_with_investment');
      cy.wait(4000);

      ConsistencytestPage.setPVExpenseFundwithInvestmentPrimary().then((value) => {
      cy.log("PV Expense Fund with Investment Primary from UI = " + value);
      cy.wait(2000);
  });
});

it("TC_FP_All_Consistency test: Health Expense Value on Health Expenses Page for Spouse matches Fund with Investment_04",() => {
      
        cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_expense_projection");

      cy.wait(5000);

      const ConsistencytestPage = new Consistency();
      
      const FundwithinvestmentPage = new fundwithinvestment();
      FundwithinvestmentPage.fundWithInvestmentlinkClick();
      FundwithinvestmentPage.SelectviewexpenseSpouse();

      ConsistencytestPage.setPresentValueAtRetirementSpouse().then((value) => {
      cy.log("PresentValueAtRetirement Spouse from UI = " + value);
      cy.wait(2000);
      });

      ConsistencytestPage.setTotalHealthcareExpensesSpouse().then((value) => {
      cy.log("Total Healthcare Expenses Spouse from UI = " + value);
      cy.wait(2000);
      });
      cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/planner#fund_with_investment');
      cy.wait(4000);

      ConsistencytestPage.setPVExpenseFundwithInvestmentSpouse().then((value) => {
      cy.log("PV Expense Fund with Investment Spouse from UI = " + value);
      cy.wait(2000);
  });
    });

    it("TC_FP_All_Consistency test: Primary on Fund with Investment Page_05",() => {
      cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#fund_with_investment");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#fund_with_investment");

      cy.wait(5000);
      const ConsistencytestPage = new Consistency();
      const FundWithInvestmentPage = new fundwithinvestment();

      ConsistencytestPage.setRetirementAgeFundwithInvestmentPrimary().then((value) => {
      cy.log("Retirement Age Fund with Investment Primary from UI = " + value);
      cy.wait(2000);
      });

      ConsistencytestPage.setMedicareEligibilityAgeFundwithInvestmentPrimary().then((value) => {
      cy.log("Medicare Eligibility Age Fund with Investment Primary from UI = " + value);
      cy.wait(2000);
      });

      ConsistencytestPage.setLifeExpectancyFundwithInvestmentPrimary().then((value) => {
      cy.log("Life Expectancy Fund with Investment Primary from UI = " + value);
      cy.wait(2000);
      });
    });

    it("TC_FP_All_Consistency test: Spouse on Fund with Investment Page_06",() => {
      cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#fund_with_investment");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#fund_with_investment");

      cy.wait(5000);
      const ConsistencytestPage = new Consistency();
    
      const FundwithinvestmentPage = new fundwithinvestment();
      FundwithinvestmentPage.fundWithInvestmentlinkClick();
      FundwithinvestmentPage.SelectviewexpenseSpouse();

      ConsistencytestPage.setRetirementAgeFundwithInvestmentSpouse().then((value) => {
      cy.log("Retirement Age Fund with Investment Spouse from UI = " + value);
      cy.wait(2000);
      });

      ConsistencytestPage.setMedicareEligibilityAgeFundwithInvestmentSpouse().then((value) => {
      cy.log("Medicare Eligibility Age Fund with Investment Spouse from UI = " + value);
      cy.wait(2000);
      });

      ConsistencytestPage.setLifeExpectancyFundwithInvestmentSpouse().then((value) => {
      cy.log("Life Expectancy Fund with Investment Spouse from UI = " + value);
      cy.wait(2000);
      });
  })
  it("TC_FP_All_Consistency test: Primary on Long Term Care Expense Page_07",() => {
      cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_term_care_expenses");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_term_care_expenses");

      cy.wait(5000);

      let value1, value2, value3,value4, value5, value6;;
      const toNum = (text) => Number(text.replace(/[^0-9.-]/g, ""));

      const ConsistencytestPage = new Consistency();
      const LongTermCareExpense = new LongTermCareExpenses;


      ConsistencytestPage.setTotalPresentValueExpensesLTCEPrimary().then((value) => {
      cy.log("Total Present Value Expenses LTCE Primary from UI = " + value);
      cy.wait(4000);
      });

      ConsistencytestPage.setTotalFutureValueExpensesLTCEPrimary().then((value) => {
      cy.log("Total Future Value Expenses LTCE Primary from UI = " + value);
      cy.wait(4000);
      });

      ConsistencytestPage.setAdultDayCarePresentValuePrimary().then((text) => {
      cy.log("Adult Day Care PV Primary from UI = " + text);
      value1= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setInHomeCarePresentValuePrimary().then((text) => {
      cy.log("In Home Care Present Value Primary from UI = " + text);
        value2= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setNursingCarePresentValuePrimary().then((text) => {
      cy.log("Nursing Care Present Value Primary from UI = " + text);
        value3= toNum(text);
      cy.wait(4000);
      });

      cy.then(() => {
      const sum =   value1 +value2 +value3 ;
      cy.log("Sum of components = " + sum);
      cy.log("Total Present Value Expenses LTCE Primary from UI =  " + sum );
      cy.wait(4000);
      })
   
      ConsistencytestPage.setAdultDayCareFutureValuePrimary().then((text) => {
      cy.log("Adult Day Care Future Value Primary from UI = " + text);
      value4= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setInHomeCareFutureValuePrimary().then((text) => {
      cy.log("InHome Care Future Value Primary from UI = " + text);
      value5= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setNursingCareFutureValuePrimary().then((text) => {
      cy.log("Nursing Care Future Value Primary from UI = " + text);
      value6= toNum(text);
      cy.wait(4000);
      });

      cy.then(() => {
      const sum =   value4 +value5 +value6 ;
      cy.log("Sum of components = " + sum);
      cy.log("Total Future Value Expenses LTCE Primary from UI =  " + sum );
      cy.wait(4000);
      });
});
it("TC_FP_All_Consistency test: Spouse on Long Term Care Expense Page_08",() => {
      cy.visit("http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_term_care_expenses");
      
        cy.location("hash", { timeout: 20000 }).should("eq","#long_term_care_expenses");

      cy.wait(5000);

      let value1, value2, value3,value4, value5, value6;;
      const toNum = (text) => Number(text.replace(/[^0-9.-]/g, ""));

      const ConsistencytestPage = new Consistency();
      const LongTermCareExpense = new LongTermCareExpenses;


      ConsistencytestPage.setTotalPresentValueExpensesLTCESpouse().then((value) => {
      cy.log("Total Present Value Expenses LTCE Spouse from UI = " + value);
      cy.wait(4000);
      });

      ConsistencytestPage.setTotalFutureValueExpensesLTCESpouse().then((value) => {
      cy.log("Total Future Value Expenses LTCE Spouse from UI = " + value);
      cy.wait(4000);
      });

      ConsistencytestPage.setAdultDayCarePresentValueSpouse().then((text) => {
      cy.log("Adult Day Care PV Spouse from UI = " + text);
      value1= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setInHomeCarePresentValueSpouse().then((text) => {
      cy.log("In Home Care Present Value Spouse from UI = " + text);
        value2= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setNursingCarePresentValueSpouse().then((text) => {
      cy.log("Nursing Care Present Value Spouse from UI = " + text);
        value3= toNum(text);
      cy.wait(4000);
      });

      cy.then(() => {
      const sum =   value1 +value2 +value3 ;
      cy.log("Sum of components = " + sum);
      cy.log("Total Present Value Expenses LTCE Spouse from UI =  " + sum );
      cy.wait(4000);
      })
   
      ConsistencytestPage.setAdultDayCareFutureValueSpouse().then((text) => {
      cy.log("Adult Day Care Future Value Spouse from UI = " + text);
      value4= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setInHomeCareFutureValueSpouse().then((text) => {
      cy.log("InHome Care Future Value Spouse from UI = " + text);
      value5= toNum(text);
      cy.wait(4000);
      });

      ConsistencytestPage.setNursingCareFutureValueSpouse().then((text) => {
      cy.log("Nursing Care Future Value Spousefrom UI = " + text);
      value6= toNum(text);
      cy.wait(4000);
      });

      cy.then(() => {
      const sum =   value4 +value5 +value6 ;
      cy.log("Sum of components = " + sum);
      cy.log("Total Future Value Expenses LTCE Spouse from UI =  " + sum );
      cy.wait(4000);
      });
});
});

