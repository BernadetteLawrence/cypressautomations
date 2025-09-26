import { first } from "lodash";

class FundWithInvestment {
  ViewExpensesOfEle =
    "div[id='fund_with_investment'] div[class='form-group row mb-0']";
  ViewExpensesDropdownEle =
    "div.form-group select.form-control, body > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select.form-control";
  ViewExpensesOfPrimaryEle =
    "body > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)";
  PrimaryNameEle =
    "div[id='fund_with_investment'] div[class='col-lg-3 col-md-3 pl-0']";
  ViewInputEle = '[id="brokerage_details_previous_button"]';
  PVforTotalHealthcareExpensesLabelEle =
    "div[class='col-lg-8 col-md-6'] div[class='fwi-label']";

  AgeExpensesBeginLabelEle =
    "div[class='col-lg-4 col-md-6'] div[class='fwi-label']";
  //AgeExpensesBeginPrimaryEle = "#brokerage_information_brokerage_income_age";
  PercentageOfHealthcareGoalToFundEle =
    "div[class='col-lg-5 col-md-12 include-spouse-cpbox fwi-topspce offset-lg-1 offset-md-0 pl-0 pr-0'] div[class='fwi-label']";
  StepperFieldPercentageOfHealthcareGoalToFundEle =
    "div[id='slider1'] div[class='ui-slider-range ui-corner-all ui-widget-header ui-slider-range-min']";

  AtRetirementEle = "div[class='col-lg-12 mb-4 pl-0 pr-0']";

  PVForExpensestoFundEle =
    "div[class='col-lg-12 col-md-12 pl-0 pr-0'] div[class='row'] div:nth-child(1) div:nth-child(1)";
  PVForExpensesnotFundedEle =
    "div[class='col-lg-12 col-md-12 pl-0 pr-0'] div[class='row'] div:nth-child(2) div:nth-child(1)";

  CurrentSavingsAllocatedToHealthcareEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
  InvestmentProfileDropdownOptionsEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)";
  InvestmentProfileDropdownSelectionEle =
    "#brokerage_details_investment_profile";
  YearsToSaveEle = ".fwi-label.col-3";
  YearsToSaveSliderEle = "#YouHaveSave_Slider";
  ResetYearsToSaveButtonEle = "#resetYearsToSaveBtn";
  CalculateSavingsButtonEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)";
  MonthlySavingsRequiredEle = "div[class='col-9'] div[class='fwi-label']";
  MonthlySavingsRequiredValueEle = "#monthlysavingFund";
  AnnualSavingsEle = "label[for='AnnualSavingsChk']";
  AnnualExpensesEle = "label[for='AnnualExpensesChk']";
  YearendHealthcareSavingsBalanceEle = "label[for='YearendHSBalanceCsk']";
  RetirementAgePrimaryEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)";
  MedicareEligibilityAgePrimaryEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
  LifeExpectancyPrimaryEle =
    "body > div:nth-child(20) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)";
  ViewExpensesOfSpouseEle =
    "body > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)";
  SpouseNameEle =
    "body > div:nth-child(20) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)";
  PreMedicareEle = 'a[href="#preMedicare"]';
  LongTermCareEle = 'a[href="#longTerm"]';
  RunAnalysisEle = '[id="submitButtonShowPopupClick"]';
  RunAnalysisPopupEle = '[id="medicare_information_show_popup_no_button"]';
  HealthcareExpensesEle = 'a[href="#HealthcareExpenses"]';
  MedicareBundlesEle = 'a[href="#MedicareBundles"]';
  ActiveFundWithInvestmentEle = '//a[@class="nav-link ui-link active"]';
  //'//a[@class="nav-link ui-link active" and @href="#FundWithInvestment"]';

  FundWithInvestmentEle = 'a[href="#FundWithInvestment"]';

  clickHealthcareExpensesEle() {
    cy.get(this.HealthcareExpensesEle).first().click();
    cy.wait(4000);
  }
  clickPreMedicare() {
    cy.wait(2000); // Give time for any previous actions to complete

    // More robust element handling with retry and timeout
    cy.get(this.PreMedicareEle, { timeout: 10000 })
      .should("exist")
      .and("be.visible")
      .then(($el) => {
        // Log for debugging
        cy.log("Found PreMedicare element:", $el);

        // Ensure element is in view
        $el[0].scrollIntoView();

        // Check if element is actually clickable
        cy.wrap($el)
          .should("not.be.disabled")
          .and("be.visible")
          .first()
          .click({ force: true }); // force: true helps with any overlay issues
      });

    // Wait for navigation/loading after click
    cy.wait(6000);
  }

  clickLongTermCare() {
    cy.get(this.LongTermCareEle).first().click();
    cy.wait(5000);
  }

  runAnalysisButtonClick() {
    cy.get(this.RunAnalysisEle).first().click();
    cy.wait(2000);
  }
  clickRunAnalysisPopup() {
    cy.get(this.RunAnalysisPopupEle).first().click();
    cy.wait(2000);
  }
  medicareBundlesClick() {
    cy.wait(4000);
    cy.get(this.MedicareBundlesEle)
      .should("not.have.class", "disabledAnchorTag")
      .first()
      .click();
    cy.wait(5000);
  }
  verifyViewExpensesOf() {
    cy.get(this.ViewExpensesOfEle)
      .should("be.visible")
      .and("contain.text", "View Expenses of");
    cy.wait(2000);
  }

  verifyDropdownOptions() {
    // Debug step
    cy.get(this.ViewExpensesDropdownEle).then(($el) => {
      cy.log("Found element:", $el);
    });

    return cy
      .get(this.ViewExpensesDropdownEle)
      .should("exist")
      .and("be.visible")
      .then(($el) => {
        // Force the element to be visible if it's hidden by parent
        if (!$el.is(":visible")) {
          cy.wrap($el).invoke("show");
        }
      })
      .find("option")
      .then(($opts) => {
        const texts = [...$opts].map((o) => o.innerText.trim());
        cy.log("Options found:", texts); // Debug step
        expect(texts).to.include("Primary");
        expect(texts).to.include("Spouse");
      });
  }

  selectviewexpenseprimary() {
    // First ensure we're on the right section and element exists
    cy.get(this.ViewExpensesOfPrimaryEle)
      .should("exist")
      .and("be.visible")
      .then(($el) => {
        // Force visibility if needed
        if (!$el.is(":visible")) {
          cy.wrap($el).invoke("show");
        }
        // Scroll element into view
        $el[0].scrollIntoView();
      })
      .wait(1000) // Wait for any animations
      .select("Primary")
      .should("have.value", "primary");

    cy.wait(2000);
  }

  checkprimaryname() {
    cy.get(this.PrimaryNameEle)
      .should("be.visible")
      .and("contain.text", "Paul Peter");
    cy.wait(2000);
  }
  VerifyViewInputButton() {
    cy.get(this.ViewInputEle).should("exist").and("be.visible");
  }
  ClickViewInputButton() {
    // First verify the button exists and is visible
    cy.get(this.ViewInputEle).should("exist").and("be.visible").click();
  }

  verifyPVforTotalHealthcareExpenses() {
    cy.get(this.PVforTotalHealthcareExpensesLabelEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "PV for Total Healthcare expenses");

    cy.wait(2000);
  }

  verifyAgeExpensesBegin() {
    cy.get(this.AgeExpensesBeginLabelEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Age Expenses Begin");

    cy.wait(2000);
  }

  verifyPercentageOfHealthcareGoalToFundValue() {
    cy.get(this.PercentageOfHealthcareGoalToFundEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "% of Healthcare Goal to Fund");

    cy.wait(1000);
  }

  verifyStepperPercentageOfHealthcareGoalToFund() {
    cy.get(this.StepperFieldPercentageOfHealthcareGoalToFundEle)
      .should("exist")
      .and("be.visible");

    cy.wait(1000);
  }
  VerifyAtRetirement() {
    cy.get(this.AtRetirementEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "At Retirement");
  }
  VerifyPVForExpensesToFund() {
    cy.get(this.PVForExpensestoFundEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "PV for expenses to fund");
    cy.wait(1000);
  }
  VerifyPVForExpensesnotFunded() {
    cy.get(this.PVForExpensesnotFundedEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "PV for expenses not funded");
    cy.wait(1000);
  }
  VerifyCurrentSavingsAllocatedToHealthcare() {
    cy.get(this.CurrentSavingsAllocatedToHealthcareEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Current Savings Allocated to Healthcare");
    cy.wait(1000);
  }

  VerifyInvestmentProfileDropdownOptions() {
    cy.get(this.InvestmentProfileDropdownSelectionEle)
      .should("exist")
      .and("be.visible")
      .then(($el) => {
        if (!$el.is(":visible")) {
          cy.wrap($el).invoke("show");
        }

        // Get all options and their text
        const $options = $el.find("option");
        const optionTexts = [...$options].map((opt) => opt.textContent.trim());

        // Debug log
        cy.log("Available options:", optionTexts);

        // Check for partial text matches
        const hasConservative = optionTexts.some((text) =>
          text.includes("Conservative")
        );
        const hasModerate = optionTexts.some((text) =>
          text.includes("Moderate")
        );
        const hasAggressive = optionTexts.some((text) =>
          text.includes("Aggressive")
        );

        expect(hasConservative).to.be.true;
        expect(hasModerate).to.be.true;
        expect(hasAggressive).to.be.true;
      });

    cy.wait(1000);
  }
  SelectModerateFromInvestmentProfileDropdown() {
    cy.get(this.InvestmentProfileDropdownSelectionEle)
      .should("exist")
      .and("be.visible")
      .then(($dropdown) => {
        // Find the option that contains "Moderate"
        const moderateOption = $dropdown
          .find("option")
          .filter((_, el) => el.textContent.includes("Moderate"))
          .first();

        // Select by value
        cy.wrap($dropdown)
          .select(moderateOption.val())
          .should(($el) => {
            const selectedText = $el.find(":selected").text();
            expect(selectedText).to.include("Moderate");
          });
      });

    cy.wait(2000);
  }
  verifyYearsToSave() {
    cy.get(this.YearsToSaveEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Years to Save");
    cy.wait(1000);
  }
  verifyYearsToSaveSlider() {
    cy.get(this.YearsToSaveSliderEle).should("exist").and("be.visible");
    cy.wait(1000);
  }
  verifyResetYearsToSaveButton() {
    cy.get(this.ResetYearsToSaveButtonEle).should("exist").and("be.visible");
    cy.wait(1000);
  }
  verifyCalculateSavingsButton() {
    cy.get(this.CalculateSavingsButtonEle).should("exist").and("be.visible");
    cy.wait(1000);
  }

  clickCalculateSavingsButton() {
    // First verify the button exists and is visible
    cy.get(this.CalculateSavingsButtonEle)
      .should("exist")
      .and("be.visible")
      .and("not.be.disabled")
      .then(($btn) => {
        // Scroll into view if needed
        $btn[0].scrollIntoView();
        // Click the button
        cy.wrap($btn).click();
      });

    // Wait for any calculations to complete
    cy.wait(2000);
  }

  verifyMonthlySavingsRequired() {
    cy.get(this.MonthlySavingsRequiredEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Monthly Savings Required");
    cy.wait(1000);
  }
  verifyMonthlySavingsRequiredValue() {
    cy.get(this.MonthlySavingsRequiredValueEle)
      .should("exist")
      .and("be.visible")
      // Wait for the element to have some text content
      .should(($val) => {
        expect($val.text().trim()).to.not.be.empty;
      })
      .then(($val) => {
        const text = $val.text().trim();
        cy.log(`Found value: ${text}`); // Debug log

        // More flexible regex that allows for different currency formats
        const currencyRegex = /^\$?\s*\d{1,3}(,?\d{3})*(\.\d{0,2})?$/;

        if (!currencyRegex.test(text)) {
          throw new Error(
            `Invalid currency format. Found: "${text}". Expected format like: $1,234.56`
          );
        }

        // Additional check to ensure the value is a reasonable number
        const numericValue = Number(text.replace(/[$,]/g, ""));
        if (isNaN(numericValue)) {
          throw new Error(
            `Value could not be converted to a number: "${text}"`
          );
        }

        // Log the parsed value for debugging
        cy.log(`Parsed value: ${numericValue}`);
      });

    cy.wait(1000);
  }
  VerifyAnnualSavings() {
    cy.get(this.AnnualSavingsEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Annual Savings");
    cy.wait(1000);
  }
  ClickCheckboxAnnualSavings() {
    cy.get(this.AnnualSavingsEle)
      .should("exist")
      .and("be.visible")
      .click({ force: true });
  }
  VerifyAnnualExpenses() {
    cy.get(this.AnnualExpensesEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Annual Expenses");
    cy.wait(1000);
  }
  ClickCheckboxAnnualExpenses() {
    cy.get(this.AnnualExpensesEle)
      .should("exist")
      .and("be.visible")
      .click({ force: true });
  }
  VerifyYearendHealthcareSavingsBalance() {
    cy.get(this.YearendHealthcareSavingsBalanceEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Year-end Healthcare Savings Balance");
    cy.wait(1000);
  }
  ClickCheckboxYearendHealthcareSavingsBalance() {
    cy.get(this.YearendHealthcareSavingsBalanceEle)
      .should("exist")
      .and("be.visible")
      .click({ force: true });
  }
  VerifyRetirementAgePrimary() {
    cy.get(this.RetirementAgePrimaryEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Retirement Age");

    cy.wait(1000);
  }
  VerifyMedicareEligibilityAgePrimary() {
    cy.get(this.MedicareEligibilityAgePrimaryEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Medicare Eligibility Age");

    cy.wait(1000);
  }
  VerifyLifeExpectancyPrimary() {
    cy.get(this.LifeExpectancyPrimaryEle)
      .should("exist")
      .and("be.visible")
      .and("contain.text", "Life Expectancy");

    cy.wait(1000);
  }
  selectviewexpenseSpouse() {
    // First ensure we're on the right section and element exists
    cy.get(this.ViewExpensesOfSpouseEle)
      .should("exist")
      .and("be.visible")
      .then(($el) => {
        // Log for debugging
        cy.log("Found ViewExpensesOfSpouse element:", $el);

        // Ensure element is in view
        $el[0].scrollIntoView();

        // Force visibility if needed
        if (!$el.is(":visible")) {
          cy.wrap($el).invoke("show");
        }

        // Select Spouse and verify
        cy.wrap($el)
          .should("not.be.disabled")
          .select("Spouse")
          .should("have.value", "spouse");
      });
    cy.wait(4000);
  }
  checkspousename() {
    cy.get(this.SpouseNameEle)
      .should("be.visible")
      .and("contain.text", "Rose Peter");
    cy.wait(2000);
  }
}
export default FundWithInvestment;
