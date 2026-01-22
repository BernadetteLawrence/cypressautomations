//Leeli

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


describe('consistency', () => {
  let testData;

  before(() => {
    cy.task("csv:parseFromDropbox").then((data) => {
      testData = data[0];
      cy.log("Loaded test data:", testData);
    });
  });

  const loginSetup = () => {
    const LoginPage = new Login();
    const PlannerPage = new Planner();
    const PersonalPage = new Personal();
    const MedicarePage = Medicare;
    const PreMedicarePage = new PreMedicare();
    const LongtermCarePage = new Longtermcare();
    const HealthExpensesPage = new HealthExpenses();
    const Medicarebundlepage = new Medicarebundle();
    const FundWithInvestmentPage = new fundwithinvestment();
    const LongTermCareExpense = new LongTermCareExpenses();
    const ReportBuilderPage = new Reportbuilder();

    cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/login');

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
    MedicarePage.chooseMagitierOption(testData.MAGItier);
   MedicarePage.clickSupplementPlanDropDown(testData.SupplementPlanDropDown);
    MedicarePage.CheckMedicareYearAndAgeSpouse();
    MedicarePage.clickSupplementPlanDropDownSpouse(testData.SupplementPlanDropDownSpouse);
    PreMedicarePage.clickpremedicarepage();
    //PreMedicarePage.clickpersonalpage();
    //PreMedicarePage.clickpremedicarepage();
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
    LongtermCarePage.clickrunanalysis();
    LongtermCarePage.clickrunanalysisbutton();
    HealthExpensesPage.clickhealthcareexpenses();
    HealthExpensesPage.checkpresentvalueatretirementprimary();
    HealthExpensesPage.checktotalhealthcareexpenseprimary();
    HealthExpensesPage.checktotalselectedexpenseprimary();
    HealthExpensesPage.checkpresentvaluesurchargeretirementprimary();
    HealthExpensesPage.checktotalirmaasurchargeprimary();
    HealthExpensesPage.viewinteractivecalculationsonthegraph();
    HealthExpensesPage.retirementageprimary();
    HealthExpensesPage.lifeexpectancyprimary();
    HealthExpensesPage.healthprofileprimary();
    HealthExpensesPage.retirementyearprimary();
    HealthExpensesPage.medicareeligibleyearprimary();
    HealthExpensesPage.supplementprimary();
    HealthExpensesPage.checkmedicaredentalprimary();
    HealthExpensesPage.Taxfilingstatusprimary();
    Medicarebundlepage.clickmedicarebundlelink();
    FundWithInvestmentPage.fundWithInvestmentlinkClick();
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.clicklongtermcareexpenseslink();
    LongTermCareExpense.viewPrimaryTable();
    LongTermCareExpense.viewPrimaryAllRow();
    LongTermCareExpense.viewSpouseTable();
    LongTermCareExpense.viewSpouseAllRow();
    ReportBuilderPage.clickreportbuilder();
  };

  beforeEach(() => {
    cy.session('login', loginSetup, {
      validate: () => {
        cy.url().should('not.include', '/login');
      }
    });

    cy.visit('http://169.61.105.110/New_FP/Dzee/financial_planner/planner#long_expense_projection');
    cy.get("div[class='col-lg-12 col-md-12 p-3']").should('be.visible');
  });


  it('TC_FP_All_Consistency test 2: Verify Consistency between Personal Info and Health Care Expense - Primary_01', () => {

    const HealthExpensesPage = new HealthExpenses();
             //----------------Life expectancy---------------------
    // Capture Life Expectancy from Health Expenses Page
    cy.get('.life_expectancy_expense_projection') 
      .first() 
      .should('exist')
      .and('be.visible')
      .invoke('text')
      .then((healthLE) => {
        const healthLETrimmed = healthLE.trim();
        cy.log('Life Expectancy on Health Expenses Page: ' + healthLETrimmed);
        console.log('Life Expectancy on Health Expenses Page:', healthLETrimmed);

        // Assert against test data (the value typed as 91 in Personal Page)
        expect(healthLETrimmed).to.eq(testData.LifeExpectancy);
      });
      //----------------Retirement Age---------------------
    // Capture Retirement Age from Health Expenses Page
    cy.get('.retirement_age_expense_projection') // visible span showing retirement age
      .first() // ensure only first match is read
      .should('exist')
      .and('be.visible')
      .invoke('text')
      .then((healthRetirementAge) => {
        const healthAgeTrimmed = healthRetirementAge.trim();
        cy.log('Retirement Age on Health Expenses Page: ' + healthAgeTrimmed);
        console.log('Retirement Age on Health Expenses Page:', healthAgeTrimmed);
        // comapring this value with Personal Page
        expect(healthAgeTrimmed).to.eq(testData.RetirementAge);
      });
    //----------------Health Profile---------------------
    // Capture Health Profile from Health Expenses Page
    cy.get('.health_profile_expense_projection') 
      .first() 
      .should('exist')
      .and('be.visible')
      .invoke('text')
      .then((healthProfileText) => {
        const healthProfileTrimmed = healthProfileText.trim();
        cy.log('Health Profile on Health Expenses Page: ' + healthProfileTrimmed);
        console.log('Health Profile on Health Expenses Page:', healthProfileTrimmed);

        // comapring this value with Personal Page
        expect(healthProfileTrimmed).to.eq(testData.HealthProfile);
      });

      //----------------Retirement Year---------------------

    const yearOfBirth = Number(testData.YearofBirth); // e.g., 1970
    const retirementAge = Number(testData.RetirementAge); // e.g., 55

    // Calculate expected retirement year
    const expectedRetirementYear = yearOfBirth + retirementAge;
    cy.log("Expected Retirement Year = " + expectedRetirementYear);

    // Get Retirement Year displayed on Health Expenses page
    cy.get('.retirement_year_expense_projection')
      .first()
      .invoke('text')
      .then((displayedYear) => {
        const trimmedYear = displayedYear.trim();
        cy.log("Displayed Retirement Year = " + trimmedYear);

        expect(Number(trimmedYear)).to.eq(expectedRetirementYear);
      });
    //------------------Medicare Year---------------------
    const medicareAge = 65; 
    const expectedMedicareYear = yearOfBirth + medicareAge; // 2035
    cy.log("Expected Medicare Year: " + expectedMedicareYear);
    
    cy.get('.medicare_eligible_year_expense_projection')
      .invoke('text')
      .then((healthYear) => {
        const healthTrimmed = healthYear.trim();
        cy.log("Healthcare Expenses Page Medicare Year: " + healthTrimmed);
        // Compare calculated year vs displayed year
        expect(healthTrimmed).to.eq(expectedMedicareYear.toString());
      });
    /*//------------------Supplement Plan---------------------
    // Extract selected plan  from csv
    const selectedPlan = testData.SupplementPlanDropDown; // "Medigap (Plan G)" i used in my csv 
    const match = selectedPlan.match(/\((.*?)\)/);
    const selectedPlanLetter = match ? match[1].trim() : selectedPlan.trim();

    cy.log("Selected Plan Letter: " + selectedPlanLetter);

    // Wait until Healthcare Expenses page shows the correct plan
    cy.get('.supplement_expense_projection', {timeout: 10000}) 
      .should(($span) => {
        const text = $span.text().trim();
        expect(text).to.eq(selectedPlanLetter);
      });*/
    //----------------expexted income---------------------------
    
    // 1️⃣ Read Healthcare Expense displayed value
    cy.get('.expected_Income_During_Medicare')
      .should('be.visible')
      .invoke('text')
      .then((healthText) => {

        const healthTrimmed = healthText.trim();
        cy.log("Healthcare Page Value: " + healthTrimmed);

        // 2️⃣ Expected value from CSV (MAGI Tier 3)
        const expectedFromCSV = testData.MAGItier.trim();

        // 3️⃣ Verify Healthcare page is correct
        expect(healthTrimmed).to.eq(expectedFromCSV);
      });
      //----------Tax Filing Status---------------------------
    cy.get('.expected_Tax_Filing_Status_During_Medicare')
      .first() 
      .invoke('text')
      .then((healthText) => {
        const healthTrimmed = healthText.trim();
        cy.log("Healthcare Page Tax Filing Status: " + healthTrimmed);
        const expectedStatus = testData.TaxFilingStatus.trim();  // coming from csv
        expect(healthTrimmed).to.eq(expectedStatus);
      });
    //-----------------Current Age---------------------
    // 1️⃣ Calculate expected age
    const currentYear = new Date().getFullYear(); 
    const expectedAge = currentYear - yearOfBirth; // 2025 - 1970 = 55
    cy.log("Expected Age: " + expectedAge);

    // 3️⃣ Get the age displayed on Healthcare Expense page
    cy.get('.current_age_expense_projection')
      .first() 
      .invoke('text')
      .then((healthText) => {
        const healthAge = parseInt(healthText.trim());
        cy.log("Healthcare Page Age: " + healthAge);
        expect(healthAge).to.eq(expectedAge);
      });

  })
 it("TC_FP_All_Consistency test 2: Verify Consistency between Personal Info and Health Care Expense - Spouse_02",
  () => {
    const HealthExpensesPage = new HealthExpenses();

    // ✅ Wait for API after switching spouse (important)
    cy.intercept("GET", "**/Get_healthcare_expenses*").as("getHealthcareExpenses");

    // ✅ Select Spouse
    HealthExpensesPage.selectviewexpensespouse();

    // ✅ Wait for spouse data to load
    cy.wait("@getHealthcareExpenses", { timeout: 30000 });

    // ✅ Make sure the page section is visible
    cy.get("div.col-lg-12.col-md-12.p-3", { timeout: 20000 }).should("be.visible");

    // ✅ Wait until “Age” is populated (this ensures projection values are loaded)
    cy.get(".current_age_expense_projection", { timeout: 20000 })
      .eq(0)
      .invoke("text")
      .should("not.be.empty");

    // ---------------- AGE ----------------
    const spouseYearOfBirth = parseInt(testData.SpouseYearofBirth);
    const currentYear = new Date().getFullYear();
    const expectedSpouseAge = currentYear - spouseYearOfBirth;
    cy.log("Expected Spouse Age: " + expectedSpouseAge);

    cy.get(".current_age_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const displayedAge = parseInt(Cypress.$($elements[spouseIndex]).text().trim());
        cy.log("Healthcare Page Spouse Age: " + displayedAge);
        expect(displayedAge).to.eq(expectedSpouseAge);
      });

    // ---------------- RETIREMENT AGE ----------------
    const expectedSpouseRetirementAge = String(testData.SpouseRetirementAge).trim();
    cy.log("Expected Spouse Retirement Age: " + expectedSpouseRetirementAge);

    cy.get(".retirement_age_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const displayedAge = Cypress.$($elements[spouseIndex]).text().trim();
        cy.log("Healthcare Page Spouse Retirement Age: " + displayedAge);
        expect(displayedAge).to.eq(expectedSpouseRetirementAge);
      });

    // ---------------- LIFE EXPECTANCY ----------------
    const expectedSpouseLE = String(testData.SpouseLifeExpectancy).trim();
    cy.log("Expected Spouse Life Expectancy: " + expectedSpouseLE);

    cy.get(".life_expectancy_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const spouseLE = Cypress.$($elements[spouseIndex]).text().trim();
        cy.log("Healthcare Page Spouse Life Expectancy: " + spouseLE);
        expect(spouseLE).to.eq(expectedSpouseLE);
      });

    // ---------------- HEALTH PROFILE ----------------
    const expectedSpouseHealth = String(testData.SpouseHealthProfile).trim();
    cy.log("Expected Spouse Health Profile: " + expectedSpouseHealth);

    cy.get(".health_profile_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const spouseHealth = Cypress.$($elements[spouseIndex]).text().trim();
        cy.log("Healthcare Page Spouse Health Profile: " + spouseHealth);
        expect(spouseHealth).to.eq(expectedSpouseHealth);
      });

    // ---------------- RETIREMENT YEAR ----------------
    const spouseRetAgeNum = parseInt(testData.SpouseRetirementAge);
    const expectedSpouseRetirementYear = spouseYearOfBirth + spouseRetAgeNum;
    cy.log("Expected Spouse Retirement Year: " + expectedSpouseRetirementYear);

    cy.get(".retirement_year_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const spouseYear = parseInt(Cypress.$($elements[spouseIndex]).text().trim());
        cy.log("Healthcare Page Spouse Retirement Year: " + spouseYear);
        expect(spouseYear).to.eq(expectedSpouseRetirementYear);
      });

    // ---------------- MEDICARE ELIGIBLE YEAR ----------------
    const expectedMedicareYear = spouseYearOfBirth + 65;
    cy.log("Expected Spouse Medicare Eligibility Year: " + expectedMedicareYear);

    cy.get(".medicare_eligible_year_expense_projection", { timeout: 20000 })
      .then(($elements) => {
        const spouseIndex = $elements.length > 1 ? 1 : 0;
        const spouseMedYear = parseInt(Cypress.$($elements[spouseIndex]).text().trim());
        cy.log("Healthcare Page Spouse Medicare Year: " + spouseMedYear);
        expect(spouseMedYear).to.eq(expectedMedicareYear);
      });

    // ============================================================
    // ✅ EXPECTED INCOME DURING MEDICARE (RELIABLE WAY: View Input)
    // ============================================================

    // 1) Get expected from Medicare dropdown (current selected)
    cy.get("#spouseplan_information_expected_income_during_medicare option:selected", { timeout: 20000 })
      .invoke("text")
      .then((t) => t.replace(/\s+/g, " ").trim())
      .then((expectedIncome) => {
        cy.log("Expected Income (Medicare dropdown): " + expectedIncome);

        // 2) Open Health Expenses -> View Input
        cy.contains("button, a", "View Input", { timeout: 20000 })
          .should("be.visible")
          .click({ force: true });

        // 3) Read the same dropdown inside View Input (Health Expenses)
        cy.get("#spouseplan_information_expected_income_during_medicare option:selected", {
          timeout: 20000,
        })
          .invoke("text")
          .then((t2) => t2.replace(/\s+/g, " ").trim())
          .then((healthInputIncome) => {
            cy.log("Health Expenses (View Input) Income: " + healthInputIncome);
            expect(healthInputIncome).to.eq(expectedIncome);
          });
      });

    // ---------------- TAX FILING STATUS ----------------
    // Read from projection list using label (more stable than class)
    const expectedStatus = String(testData.TaxFilingStatus).trim();

    cy.contains("strong", "Tax Filing Status :", { timeout: 20000 })
      .parent()
      .invoke("text")
      .then((txt) => {
        const healthStatus = txt
          .replace("Tax Filing Status :", "")
          .replace(/\s+/g, " ")
          .trim();

        cy.log("Healthcare Page Tax Filing Status: " + healthStatus);
        cy.log("Expected Tax Filing Status: " + expectedStatus);

        expect(healthStatus).to.eq(expectedStatus);
      });
  }
);


  it('TC_FP_All_Consistency test 2: Verify PV Value - Primary_03', () => {
    const extractPV = (text) => {
      return text.replace(/[$,\s]/g, '').trim();
    };
//---------pv value primary comparing eith healthcare and fund page-------------------
   
    const HealthExpensesPage = new HealthExpenses();
    const FundWithInvestmentPage = new fundwithinvestment();

    // 1️⃣ Go to Healthcare Expenses page
    HealthExpensesPage.clickhealthcareexpenses();

    // 2️⃣ Capture Healthcare PV and STORE it safely
    cy.get('#pv_at_retirement')
      .should('be.visible')
      .should(($el) => {
        const text = $el.text().trim();
        const normalized = extractPV(text);
        expect(normalized, 'Healthcare PV should not be empty or 0').to.not.be.empty;
        expect(normalized, 'Healthcare PV should not be 0').to.not.eq('0');
      })
      .invoke('text')
      .then((text) => {
        const healthcarePV = extractPV(text); 
        cy.log('Healthcare PV (normalized): ' + healthcarePV);
        cy.wrap(healthcarePV).as('healthcarePV');
      });
//-----------------fund page pv value comparing with healthcare pv value-----------------
   
// 3️⃣ Go to Fund With Investment page
    FundWithInvestmentPage.fundWithInvestmentlinkClick();

    // 4️⃣ Read Fund PV and compare 
    cy.get('@healthcarePV').then((healthcarePV) => {
      cy.get('#brokerage_information_healthcare_expenses')
        .should('be.visible')
        .invoke('text')
        .then((fundText) => {
          const fundPV = extractPV(fundText); // Normalize: remove $, commas, spaces
          cy.log('Fund PV (normalized): ' + fundPV);
          cy.log('Healthcare PV (normalized): ' + healthcarePV);

          // ✅ Final assertion
          expect(fundPV, `Fund PV (${fundPV}) should equal Healthcare PV (${healthcarePV})`).to.eq(healthcarePV);
        });
    });
  });
it("TC_FP_All_Consistency test 2: Verify PV Value - Spouse_04", () => {
  const HealthExpensesPage = new HealthExpenses();
  const FundWithInvestmentPage = new fundwithinvestment();

  const extractPV = (text) => String(text).replace(/[$,\s]/g, "").trim();

  const waitForNonZeroPV = (selector) => {
    return cy
      .get(selector, { timeout: 30000 })
      .scrollIntoView()
      .should("be.visible")
      .should(($el) => {
        const pv = extractPV($el.text());
        // retries until non-zero numeric
        expect(pv, `PV should be non-zero for ${selector}`).to.match(/^[1-9]\d*$/);
      })
      .invoke("text")
      .then(extractPV);
  };

  // ================= HEALTHCARE =================
  HealthExpensesPage.clickhealthcareexpenses();
  cy.get("div.col-lg-12.col-md-12.p-3", { timeout: 20000 }).should("be.visible");

  // capture primary PV (optional - mainly to confirm spouse switch worked)
  waitForNonZeroPV("#pv_at_retirement").then((primaryPV) => {
    cy.log("Healthcare PRIMARY PV = " + primaryPV);
    cy.wrap(primaryPV).as("healthPrimaryPV");
  });

  // switch to spouse + capture spouse PV
  cy.get("@healthPrimaryPV").then((healthPrimaryPV) => {
    cy.contains("div", "View Expenses of", { timeout: 20000 })
      .parent()
      .find("select")
      .should("be.visible")
      .select("Spouse");

    cy.contains("div", "View Expenses of")
      .parent()
      .find("select")
      .should("have.value", "spouse");

    // wait until pv is non-zero (and ideally changed from primary)
    waitForNonZeroPV("#pv_at_retirement").then((healthcareSpousePV) => {
      cy.log("Healthcare SPOUSE PV = " + healthcareSpousePV);

      // spouse should differ from primary (if your app sometimes equals, remove this)
      expect(
        healthcareSpousePV,
        `Spouse PV should differ from Primary PV. primary=${healthPrimaryPV}, spouse=${healthcareSpousePV}`
      ).to.not.eq(String(healthPrimaryPV));

      cy.wrap(healthcareSpousePV).as("healthcareSpousePV");
    });
  });

  // ================= FUND WITH INVESTMENT =================
  FundWithInvestmentPage.fundWithInvestmentlinkClick();
  cy.get("#fund_with_investment", { timeout: 20000 }).should("exist");

  // switch spouse on fund page
  FundWithInvestmentPage.SelectviewexpenseSpouse();

  // confirm spouse selected
  cy.get(FundWithInvestmentPage.ViewExpensesOfPrimaryEle, { timeout: 20000 })
    .should("exist")
    .should("have.value", "spouse");

  // compare fund PV with healthcare spouse PV
  cy.get("@healthcareSpousePV").then((healthcareSpousePV) => {
    waitForNonZeroPV("#brokerage_information_healthcare_expenses").then((fundSpousePV) => {
      cy.log("Fund SPOUSE PV = " + fundSpousePV);
      cy.log("Healthcare SPOUSE PV = " + healthcareSpousePV);

      expect(
        fundSpousePV,
        `Fund Spouse PV (${fundSpousePV}) should equal Healthcare Spouse PV (${healthcareSpousePV})`
      ).to.eq(String(healthcareSpousePV));
    });
  });
});

  it("TC_FP_All_Consistency test 2: Verify Retirement Age, Retirement Year, Medicare Eligible Year, and Life Expectancy consistency for Primary_05",
  () => {
    const extractNumber = (text) => {
      const match = String(text).match(/\d+/);
      return match ? parseInt(match[0], 10) : NaN;
    };

    const HealthExpensesPage = new HealthExpenses();
    const FundWithInvestmentPage = new fundwithinvestment(); // ✅ use ONE variable name

    // Expected from CSV
    const personalYearOfBirth = parseInt(testData.YearofBirth, 10);
    const expectedRetirementAge = String(testData.RetirementAge).trim();
    const expectedLifeExpectancy = String(testData.LifeExpectancy).trim();

    const calculatedRetirementYear =
      personalYearOfBirth + parseInt(expectedRetirementAge, 10);
    const calculatedMedicareEligibleYear = personalYearOfBirth + 65;

    // ---------------- HEALTH EXPENSES PAGE ----------------
    HealthExpensesPage.clickhealthcareexpenses();

    cy.get(".retirement_age_expense_projection", { timeout: 20000 })
      .first()
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(expectedRetirementAge);
      });

    cy.get(".retirement_year_expense_projection", { timeout: 20000 })
      .first()
      .invoke("text")
      .then((text) => {
        expect(parseInt(text.trim(), 10)).to.eq(calculatedRetirementYear);
      });

    cy.get(".medicare_eligible_year_expense_projection", { timeout: 20000 })
      .first()
      .invoke("text")
      .then((text) => {
        expect(parseInt(text.trim(), 10)).to.eq(calculatedMedicareEligibleYear);
      });

    cy.get(".life_expectancy_expense_projection", { timeout: 20000 })
      .first()
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.eq(expectedLifeExpectancy);
      });

    // ---------------- FUND WITH INVESTMENT PAGE ----------------
    FundWithInvestmentPage.fundWithInvestmentlinkClick(); // ✅ THIS WAS MISSING

    cy.location("hash", { timeout: 20000 }).should("include", "fund_with_investment");

    cy.get("#fund_with_investment", { timeout: 20000 })
      .scrollIntoView()
      .should("be.visible");

    // Retirement Age (Fund)
    const expectedAgeNum = parseInt(testData.RetirementAge, 10);

// ✅ Fund: Age Expenses Begin value (55)
/*cy.contains("div", "Age Expenses Begin", { timeout: 20000 })
  .should("be.visible")
  .parent()
  .invoke("text")
  .then((raw) => {
    cy.log("RAW Age Expenses Begin block: [" + raw + "]");

    const match = raw.match(/\b\d+\b/);
    const fundRetAge = match ? parseInt(match[0], 10) : NaN;

    expect(fundRetAge, "Fund retirement age should be a number").to.not.be.NaN;
    expect(fundRetAge).to.eq(expectedAgeNum);
  });*/

    // Medicare Eligible Year (Fund) - using your POM locator
    cy.get(FundWithInvestmentPage.MedicareEligibilityAgePrimaryEle, { timeout: 20000 })
      .scrollIntoView()
      .should("exist")
      .invoke("text")
      .then((text) => {
        const yearMatches = text.match(/Year:\s*(\d{4})/);
        const fundMedicareYear = yearMatches ? parseInt(yearMatches[1], 10) : NaN;
        expect(fundMedicareYear).to.eq(calculatedMedicareEligibleYear);
      });

    // Life Expectancy (Fund) - using your POM locator
    cy.get(FundWithInvestmentPage.LifeExpectancyPrimaryEle, { timeout: 20000 })
      .scrollIntoView()
      .should("exist")
      .invoke("text")
      .then((text) => {
        const fundLE = extractNumber(text);
        expect(fundLE).to.eq(parseInt(expectedLifeExpectancy, 10));
      });
  }
);
  it('TC_FP_All_Consistency test 2: Verify Retirement Age, Retirement Year, Medicare Eligible Year, and Life Expectancy consistency for Spouse_06', () => {
    const extractNumber = (text) => {
      const match = text.match(/\d+/);
      return match ? parseInt(match[0]) : NaN;
    };

    const HealthExpensesPage = new HealthExpenses();
    const FundWithInvestmentPage = new fundwithinvestment();

    // --- Expected values from csv (Personal Page inputs) ---
    const personalYearOfBirth = parseInt(testData.SpouseYearofBirth); // e.g., 1970
    const expectedRetirementAge = testData.SpouseRetirementAge; // e.g., "55"
    const expectedLifeExpectancy = testData.SpouseLifeExpectancy; // e.g., "91"
    const currentYear = new Date().getFullYear(); 
    const calculatedRetirementYear = personalYearOfBirth + parseInt(expectedRetirementAge);
    const calculatedMedicareEligibleYear = personalYearOfBirth + 65; // Medicare age is fixed at 65

    cy.log(`Expected Retirement Age: ${expectedRetirementAge}`);
    cy.log(`Calculated Retirement Year: ${calculatedRetirementYear}`);
    cy.log(`Calculated Medicare Eligible Year: ${calculatedMedicareEligibleYear}`);
    cy.log(`Expected Life Expectancy: ${expectedLifeExpectancy}`);

    // --- Verify Healthcare Expenses Page ---
    HealthExpensesPage.clickhealthcareexpenses();
    cy.wait(2000);
    HealthExpensesPage.selectviewexpensespouse();
    cy.wait(6000);

    // Retirement Age
    cy.get('.retirement_age_expense_projection', {
        timeout: 10000
      })
      .first()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.eq(expectedRetirementAge);
        cy.log(`Healthcare Page - Retirement Age: ${text.trim()} (Matches expected)`);
      });

    // Retirement Year
    cy.get('.retirement_year_expense_projection', {
        timeout: 10000
      })
      .first()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(parseInt(text.trim())).to.eq(calculatedRetirementYear);
        cy.log(`Healthcare Page - Retirement Year: ${text.trim()} (Matches calculated)`);
      });

    // Medicare Eligible Year
    cy.get('.medicare_eligible_year_expense_projection', {
        timeout: 10000
      })
      .should('exist') 
      .invoke('text')
      .then((text) => {
        expect(parseInt(text.trim())).to.eq(calculatedMedicareEligibleYear);
        cy.log(`Healthcare Page - Medicare Eligible Year: ${text.trim()} (Matches calculated)`);
      });

    // Life Expectancy
    cy.get('.life_expectancy_expense_projection', {
        timeout: 10000
      })
      .first()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.eq(expectedLifeExpectancy);
        cy.log(`Healthcare Page - Life Expectancy: ${text.trim()} (Matches expected)`);
      });

    // --- Verify Fund With Investment Page ---
   FundWithInvestmentPage.fundWithInvestmentlinkClick();
    cy.wait(2000);
   FundWithInvestmentPage.SelectviewexpenseSpouse();
    cy.wait(4000);
    cy.get('#fund_with_investment').scrollIntoView().should('be.visible');
    cy.get('#brokerage_details_retirement_age', {
        timeout: 10000
      })
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then((text) => {
        cy.log('RAW Fund Retirement Age TEXT → [' + text + ']');
      });

    // Retirement Year
    cy.get('.retirement_year_expense_projection', {
        timeout: 10000
      })
      .first()
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then((text) => {
        const fundRetirementYear = parseInt(text.trim());
        expect(fundRetirementYear).to.eq(calculatedRetirementYear);
        cy.log(`Fund Page - Retirement Year: ${fundRetirementYear}`);
      });

    // Medicare Eligible Year
    cy.get(FundWithInvestmentPage.MedicareEligibilityAgePrimaryEle, {
        timeout: 10000
      })
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then((text) => {
        const yearMatches = text.match(/Year:\s*(\d{4})/);
        const fundMedicareYear = yearMatches ? parseInt(yearMatches[1]) : NaN;
        expect(fundMedicareYear).to.eq(calculatedMedicareEligibleYear);
        cy.log(`Fund Page - Medicare Eligible Year: ${fundMedicareYear}`);
      });

    cy.get(FundWithInvestmentPage.LifeExpectancyPrimaryEle, {
        timeout: 10000
      })
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then((text) => {
        const lifeExpectancy = extractNumber(text);

        expect(lifeExpectancy, 'Life Expectancy value')
          .to.eq(Number(expectedLifeExpectancy));

        cy.log(`Fund Page - Life Expectancy: ${lifeExpectancy}`);
      });
  });

  it('TC_FP_All_Consistency test 2: Verify Total LTC Present Value equals sum of individual PVs (Primary)_07', () => {
    const extractAmount = (text) => {
      return Number(text.replace(/[^0-9.-]+/g, ''));
    };

    const LongTermCareExpense = new LongTermCareExpenses();

    // 1️⃣ Navigate to Long Term Care Expenses tab
    LongTermCareExpense.clicklongtermcareexpenseslink();
    cy.wait(8000);

    // 2️⃣ Capture Adult Day Care PV
    cy.get('#primary_ltc_adult_day_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const adultDayPV = extractAmount(text);
        cy.wrap(adultDayPV).as('adultDayPV');
        cy.log('Adult Day Care PV: ' + adultDayPV);
      });

    // 3️⃣ Capture Home Care PV
    cy.get('#primary_ltc_home_care_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const homeCarePV = extractAmount(text);
        cy.wrap(homeCarePV).as('homeCarePV');
        cy.log('Home Care PV: ' + homeCarePV);
      });

    // 4️⃣ Capture Nursing Care PV
    cy.get('#primary_ltc_nursing_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const nursingPV = extractAmount(text);
        cy.wrap(nursingPV).as('nursingPV');
        cy.log('Nursing Care PV: ' + nursingPV);
      });

    // 5️⃣ Capture Total LTC PV
    cy.get('#total_ltc_pv_for_primary')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const totalPV = extractAmount(text);
        cy.wrap(totalPV).as('totalPV');
        cy.log('Total LTC PV (Displayed): ' + totalPV);
      });

    // 6️⃣ Calculate & Assert
    cy.get('@adultDayPV').then(adultDayPV => {
      cy.get('@homeCarePV').then(homeCarePV => {
        cy.get('@nursingPV').then(nursingPV => {
          cy.get('@totalPV').then(totalPV => {

            const calculatedTotalPV =
              adultDayPV + homeCarePV + nursingPV;

            cy.log(`Calculated Total LTC PV: ${calculatedTotalPV}`);
            cy.log(`Displayed Total LTC PV: ${totalPV}`);

            expect(
              calculatedTotalPV,
              'Sum of individual LTC Present Values should match Total LTC PV'
            ).to.eq(totalPV);

          });
        });
      });

    });

    // 2️⃣ Capture Adult Day Care FV
    cy.get('#primary_ltc_adult_day_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const adultDayFV = extractAmount(text);
        cy.wrap(adultDayFV).as('adultDayFV');
        cy.log('Adult Day Care FV: ' + adultDayFV);
      });

    // 3️⃣ Capture Home Care FV
    cy.get('#primary_ltc_home_care_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const homeCareFV = extractAmount(text);
        cy.wrap(homeCareFV).as('homeCareFV');
        cy.log('Home Care FV: ' + homeCareFV);
      });

    // 4️⃣ Capture Nursing Care FV
    cy.get('#primary_ltc_nursing_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const nursingFV = extractAmount(text);
        cy.wrap(nursingFV).as('nursingFV');
        cy.log('Nursing Care FV: ' + nursingFV);
      });

    // 5️⃣ Capture Total LTC FV
    cy.get('#total_ltc_fv_for_primary')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const totalFV = extractAmount(text);
        cy.wrap(totalFV).as('totalFV');
        cy.log('Total LTC FV (Displayed): ' + totalFV);
      });

    // 6️⃣ Calculate & Assert
    cy.get('@adultDayFV').then(adultDayFV => {
      cy.get('@homeCareFV').then(homeCareFV => {
        cy.get('@nursingFV').then(nursingFV => {
          cy.get('@totalFV').then(totalFV => {

            const calculatedTotalFV =
              adultDayFV + homeCareFV + nursingFV;

            cy.log(`Calculated Total LTC FV: ${calculatedTotalFV}`);
            cy.log(`Displayed Total LTC FV: ${totalFV}`);

            expect(
              calculatedTotalFV,
              'Sum of individual LTC Future Values should match Total LTC FV'
            ).to.eq(totalFV);

          });
        });
      });
    });
  });
  it('TC_FP_All_Consistency test 2: Verify Total LTC Present Value equals sum of individual PVs (Spouse)_08', () => {
    const extractAmount = (text) => {
      return Number(text.replace(/[^0-9.-]+/g, ''));
    };

    const LongTermCareExpense = new LongTermCareExpenses();

    // 1️⃣ Navigate to Long Term Care Expenses tab
    LongTermCareExpense.clicklongtermcareexpenseslink();
    cy.wait(8000);

    // 2️⃣ Capture Adult Day Care PV
    cy.get('#spouse_ltc_adult_day_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const adultDayPV = extractAmount(text);
        cy.wrap(adultDayPV).as('adultDayPV');
        cy.log('Adult Day Care PV: ' + adultDayPV);
      });

    // 3️⃣ Capture Home Care PV
    cy.get('#spouse_ltc_home_care_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const homeCarePV = extractAmount(text);
        cy.wrap(homeCarePV).as('homeCarePV');
        cy.log('Home Care PV: ' + homeCarePV);
      });

    // 4️⃣ Capture Nursing Care PV
    cy.get('#spouse_ltc_nursing_present_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const nursingPV = extractAmount(text);
        cy.wrap(nursingPV).as('nursingPV');
        cy.log('Nursing Care PV: ' + nursingPV);
      });

    // 5️⃣ Capture Total LTC PV
    cy.get('#total_ltc_pv_for_spouse')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const totalPV = extractAmount(text);
        cy.wrap(totalPV).as('totalPV');
        cy.log('Total LTC PV (Displayed): ' + totalPV);
      });

    // 6️⃣ Calculate & Assert
    cy.get('@adultDayPV').then(adultDayPV => {
      cy.get('@homeCarePV').then(homeCarePV => {
        cy.get('@nursingPV').then(nursingPV => {
          cy.get('@totalPV').then(totalPV => {

            const calculatedTotalPV =
              adultDayPV + homeCarePV + nursingPV;

            cy.log(`Calculated Total LTC PV: ${calculatedTotalPV}`);
            cy.log(`Displayed Total LTC PV: ${totalPV}`);

            expect(
              calculatedTotalPV,
              'Sum of individual LTC Present Values should match Total LTC PV'
            ).to.eq(totalPV);

          });
        });
      });

    });

    // 2️⃣ Capture Adult Day Care FV
    cy.get('#spouse_ltc_adult_day_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const adultDayFV = extractAmount(text);
        cy.wrap(adultDayFV).as('adultDayFV');
        cy.log('Adult Day Care FV: ' + adultDayFV);
      });

    // 3️⃣ Capture Home Care FV
    cy.get('#spouse_ltc_home_care_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const homeCareFV = extractAmount(text);
        cy.wrap(homeCareFV).as('homeCareFV');
        cy.log('Home Care FV: ' + homeCareFV);
      });

    // 4️⃣ Capture Nursing Care FV
    cy.get('#spouse_ltc_nursing_future_value')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const nursingFV = extractAmount(text);
        cy.wrap(nursingFV).as('nursingFV');
        cy.log('Nursing Care FV: ' + nursingFV);
      });

    // 5️⃣ Capture Total LTC FV
    cy.get('#total_ltc_fv_for_spouse')
      .scrollIntoView()
      .should('exist')
      .invoke('text')
      .then(text => {
        const totalFV = extractAmount(text);
        cy.wrap(totalFV).as('totalFV');
        cy.log('Total LTC FV (Displayed): ' + totalFV);
      });

    // 6️⃣ Calculate & Assert
    cy.get('@adultDayFV').then(adultDayFV => {
      cy.get('@homeCareFV').then(homeCareFV => {
        cy.get('@nursingFV').then(nursingFV => {
          cy.get('@totalFV').then(totalFV => {

            const calculatedTotalFV =
              adultDayFV + homeCareFV + nursingFV;

            cy.log(`Calculated Total LTC FV: ${calculatedTotalFV}`);
            cy.log(`Displayed Total LTC FV: ${totalFV}`);

            expect(
              calculatedTotalFV,
              'Sum of individual LTC Future Values should match Total LTC FV'
            ).to.eq(totalFV);

          });
        });
      });
    });
  });


})