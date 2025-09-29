import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
//import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage";
import Fundwithinvestment from "../../PageObjects/FinancialPlannerPOM/fundwithinvestmentPage";

describe("try", () => {
  const loginSetup = () => {
    const LoginPage = new Login();
    const PlannerPage = new Planner();
    const PersonalPage = new Personal();
    //const MedicarePage = Medicare;
    const PreMedicarePage = new PreMedicare();
    const LongTermCarePage = new Longtermcare();
    const fundwithinvestmentPage = new Fundwithinvestment();

    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner"
    );
    cy.fixture("FinancialPlanner").then((data) => {
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

      //MedicarePage.CheckMedicareYearAndAge();
      //MedicarePage.selectYearAndLifeExpectancyAge();
      //MedicarePage.chooseMagitierOption();
      /* PreMedicarePage.clickpremedicarepage();
      PreMedicarePage.clickpersonalpage();
      PreMedicarePage.clickpremedicarepage();
      PreMedicarePage.setplantypeoption();
      PreMedicarePage.viewplantype();
      PreMedicarePage.chooseplantypeGoldEPO();
      PreMedicarePage.viewspouseplantype();
      PreMedicarePage.choosespouseplantypeGoldEPO();
      LongTermCarePage.setlongtermcare();
      LongTermCarePage.clickmedicaretab();
      LongTermCarePage.clickpremedicarepage();
      LongTermCarePage.setlongtermcare();
      LongTermCarePage.selectqualityofcareoption();
      LongTermCarePage.selectyearsofadultdaycareoption();
      LongTermCarePage.selectyearsofinhomecareoption();
      LongTermCarePage.selectyearsofnursingcareoption();
      LongTermCarePage.checkspousequalityofcareoption();
      LongTermCarePage.selectspouseyearsofadultdaycareoption();
      LongTermCarePage.selectspouseinhomecareoption();
      LongTermCarePage.selectspousenursingcareoption();
      LongTermCarePage.clickcancelbutton();
      LongTermCarePage.verifypopupmessage();
      LongTermCarePage.clickcancelbuttoninside();*/
      fundwithinvestmentPage.clickPreMedicare();
      fundwithinvestmentPage.clickLongTermCare();
      fundwithinvestmentPage.runAnalysisButtonClick();
      fundwithinvestmentPage.clickRunAnalysisPopup();
      fundwithinvestmentPage.medicareBundlesClick();

      cy.visit(
        "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
      );
    });
  };
  beforeEach(() => {
    // Create/restore the session before each test

    cy.session("login", loginSetup, {
      validate: () => {
        cy.url().should("not.include", "/login");
      },
    });

    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
    );
    cy.wait(5000);
  });

  it.skip("TC_FP_01 - Verify View Expenses Of label ", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyViewExpensesOf();
  });

  it.skip("TC_FP_FundwithInvest_02 - Verify View Expenses Dropdown Options", () => {
    cy.url().should("include", "fund_with_investment");

    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyDropdownOptions();
    cy.log("Dropdown options verified");
  });

  it.skip("TC_FP_FundwithInvest_03 - Select View Expenses Primary from Dropdown", () => {
    cy.url().should("include", "fund_with_investment");
    cy.visit(
      "https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#fund_with_investment"
    );
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyDropdownOptions();
    fundwithinvestmentPage.selectviewexpenseprimary();
    cy.log("Primary option selected");
  });

  it.skip("TC_FP_FundwithInvest_04 - Verify Primary Name Displayed", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyDropdownOptions();
    fundwithinvestmentPage.selectviewexpenseprimary();
    fundwithinvestmentPage.checkprimaryname();
    cy.log("Primary name verified");
  });
  it.skip("TC_FP_FundwithInvest_05 - Verify View Input Button", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyViewInputButton();
  });
  it.skip("TC_FP_FundwithInvest_06 - Click On View Input Button", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.ClickViewInputButton();
  });

  it.skip("TC_FP_FundwithInvest_07 - Verify PV for Total Healthcare expenses ", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyPVforTotalHealthcareExpenses();
    cy.log("PV for Total Healthcare expenses label verified");
  });

  it.skip("TC_FP_FundwithInvest_08 - Verify Age Expenses Begin", () => {
    cy.url().should("include", "fund_with_investment");

    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyAgeExpensesBegin();
    cy.log("Age Expenses Begin verified");
  });

  it.skip("TC_FP_FundwithInvest_09  - Verify Percentage of Healthcare Goal to Fund", () => {
    cy.url().should("include", "fund_with_investment");

    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyPercentageOfHealthcareGoalToFundValue();
    cy.log("Percentage of Healthcare Goal to Fund verified");
  });
  it.skip("TC_FP_FundwithInvest_10 - Verify Stepper for Percentage of Healthcare Goal to Fund", () => {
    cy.url().should("include", "fund_with_investment");

    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyStepperPercentageOfHealthcareGoalToFund();
    cy.log("Stepper for Percentage of Healthcare Goal to Fund verified");
  });
  it.skip("TC_FP_FundwithInvest_11 - Verify At Retirement Label", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyAtRetirement();
    cy.log("At Retirement label verified");
  });
  it.skip("TC_FP_FundwithInvest_12 - Verify PV for Expenses to Fund ", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyPVForExpensesToFund();
    cy.log("PV for Expenses to Fund verified");
  });
  it.skip("TC_FP_FundwithInvest_13 - Verify PV for Expenses not Funded ", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyPVForExpensesnotFunded();
    cy.log("PV for Expenses not Funded verified");
  });
  it.skip("TC_FP_FundwithInvest_14 - Verify Current Savings Allocated to Healthcare ", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyCurrentSavingsAllocatedToHealthcare();
    cy.log("Current Savings Allocated to Healthcare verified");
  });
  it.skip("TC_FP_FundwithInvest_15 - Verify Investment Profile Dropdown", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyInvestmentProfileDropdownOptions();
    cy.log("Investment Profile Dropdown options verified");
  });
  it.skip("TC_FP_FundwithInvest_16 - Select Moderate from Investment Profile Dropdown", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectModerateFromInvestmentProfileDropdown();
    cy.log("Moderate option selected from Investment Profile Dropdown");
  });
  it.skip("TC_FP_FundwithInvest_17 - Verify Years to Save", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyYearsToSave();
    cy.log("Years to Save label verified");
  });
  it.skip("TC_FP_FundwithInvest_18 - Verify Years to Save Slider", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyYearsToSaveSlider();
    cy.log("Years to Save Slider verified");
  });
  it.skip("TC_FP_FundwithInvest_19 - Verify Reset Years to Save Button", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyResetYearsToSaveButton();
    cy.log("Reset Years to Save Button verified");
  });
  it.skip("TC_FP_FundwithInvest_20 - Verify Calculate Savings Button", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyCalculateSavingsButton();
    cy.log("Calculate Savings Button verified");
  });
  it.skip("TC_FP_FundwithInvest_21 - Click Calculate Savings Button", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.clickCalculateSavingsButton();
    cy.log("Calculate Savings Button clicked");
  });
  it.skip("TC_FP_FundwithInvest_22 - Verify Monthly Savings Required", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyMonthlySavingsRequired();
    cy.log("Monthly Savings Required verified");
  });
  it.skip("TC_FP_FundwithInvest_23 - Verify Monthly Savings Amount", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.verifyMonthlySavingsRequiredValue();
    cy.log("Monthly Savings Amount verified");
  });
  it.skip("TC_FP_FundwithInvest_24 - Verify Annual Savings Checkbox", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyAnnualSavings();
    fundwithinvestmentPage.ClickCheckboxAnnualSavings();
    cy.log("Annual Savings Checkbox verified");
  });
  it.skip("TC_FP_FundwithInvest_25 - Verify Annual Expenses Checkbox", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyAnnualExpenses();
    fundwithinvestmentPage.ClickCheckboxAnnualExpenses();
    cy.log("Annual Expenses Checkbox verified");
  });
  it.skip("TC_FP_FundwithInvest_26 - Verify Year-end Healthcare Savings Balance Checkbox", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyYearendHealthcareSavingsBalance();
    fundwithinvestmentPage.ClickCheckboxYearendHealthcareSavingsBalance();
    cy.log("Year-end Healthcare Savings Balance Checkbox verified");
  });
  it.skip("TC_FP_FundwithInvest_27 - Retirement age of Primary", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyRetirementAgePrimary();
    cy.log("Retirement age of Primary verified");
  });
  it.skip("TC_FP_FundwithInvest_28 - Medicare Eligibility Age of Primary", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyMedicareEligibilityAgePrimary();
    cy.log("Medicare Eligibility Age of Primary verified");
  });
  it.skip("TC_FP_FundwithInvest_29 - Life Expectancy of Primary", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.VerifyLifeExpectancyPrimary();
    cy.log("Life Expectancy of Primary verified");
  });
  it.skip("TC_FP_FundwithInvest_30 - Select Spouse from view expenses dropdown", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    cy.log("Spouse selected from view expenses dropdown");
  });
  it.skip("TC_FP_FundwithInvest_31 - Verify Spouse Name Displayed", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.Checkspousename();
    cy.log("Spouse name verified");
  });
  it.skip("TC_FP_FundwithInvest_32 - Verify PV for Total Healthcare Expenses of Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyPVforTotalHealthcareExpensesSpouse();
    cy.log("PV for Total Healthcare Expenses of Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_33 - Verify Age Expenses Begin for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyAgeExpensesBeginSpouse();
    cy.log("Age Expenses Begin for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_34 - Verify Percentage of Healthcare Goal to Fund for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyPercentageOfHealthcareGoalToFundSpouse();
    cy.log("Percentage of Healthcare Goal to Fund for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_35 - Verify Stepper for Percentage of Healthcare Goal to Fund for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyStepperPercentageOfHealthcareGoalToFundSpouse();
    cy.log(
      "Stepper for Percentage of Healthcare Goal to Fund for Spouse verified"
    );
  });
  it.skip("TC_FP_FundwithInvest_36 - Verify PV for Expenses to Fund for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyPVForExpensesToFundSpouse();
    cy.log("PV for Expenses to Fund for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_37 - Verify PV for Expenses not Funded for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyPVForExpensesnotFundedSpouse();
    cy.log("PV for Expenses not Funded for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_38 - Verify Current Savings Allocated to Healthcare for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.VerifyCurrentSavingsAllocatedToHealthcareSpouse();
    cy.log("Current Savings Allocated to Healthcare for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_39 - Select Investment Profile Dropdown for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.Checkspousename();
    //fundwithinvestmentPage.VerifyInvestmentProfileDropdownOptions();
    fundwithinvestmentPage.SelectModerateFromInvestmentProfileDropdownSpouse();
    cy.log("Investment Profile Dropdown for Spouse selected");
  });
  it.skip("TC_FP_FundwithInvest_40 - Verify Years to Save for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.verifyYearsToSaveSpouse();
    cy.log("Years to Save for Spouse label verified");
  });
  it.skip("TC_FP_FundwithInvest_41 - Verify Years to Save Slider for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.verifyYearsToSaveSliderSpouse();
    cy.log("Years to Save Slider for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_42 - Verify Reset Years to Save Button for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.verifyResetYearsToSaveButtonSpouse();
    cy.log("Reset Years to Save Button for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_43 - Verify Calculate Savings Button for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.verifyCalculateSavingsButtonSpouse();
    cy.log("Calculate Savings Button for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_44 - Click Calculate Savings Button for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    cy.log("Calculate Savings Button for Spouse clicked");
  });
  it.skip("TC_FP_FundwithInvest_45 - Verify Monthly Savings Required for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.verifyMonthlySavingsRequiredSpouse();
    cy.log("Monthly Savings Required for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_46 - Verify Annual Savings for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyAnnualSavingsSpouse();
    fundwithinvestmentPage.ClickCheckboxAnnualSavingsSpouse();
    cy.log("Annual Savings for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_47 - Verify Annual Expenses Required for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyAnnualExpensesSpouse();
    fundwithinvestmentPage.ClickCheckboxAnnualExpensesSpouse();
    cy.log("Annual Expenses Required for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_48 - Verify Year-end Healthcare Savings Balance for Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyYearendHealthcareSavingsBalanceSpouse();
    fundwithinvestmentPage.ClickCheckboxYearendHealthcareSavingsBalanceSpouse();
    cy.log("Year-end Healthcare Savings Balance for Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_49 - Retirement age of Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyRetirementAgeSpouse();
    cy.log("Retirement age of Spouse verified");
  });
  it.skip("TC_FP_FundwithInvest_50 - Medicare Eligibility Age of Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyMedicareEligibilityAgeSpouse();
    cy.log("Medicare Eligibility Age of Spouse verified");
  });
  it("TC_FP_FundwithInvest_51 - Life Expectancy of Spouse", () => {
    const fundwithinvestmentPage = new Fundwithinvestment();
    fundwithinvestmentPage.SelectviewexpenseSpouse();
    fundwithinvestmentPage.clickCalculateSavingsButtonSpouse();
    fundwithinvestmentPage.VerifyLifeExpectancySpouse();
    cy.log("Life Expectancy of Spouse verified");
  });
});
