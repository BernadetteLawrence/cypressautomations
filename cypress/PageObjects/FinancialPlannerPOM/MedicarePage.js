class Medicare{

    constructor() {
        this.MedicareLink = '#medicare_collapsible_div > .ui-collapsible-content > .nav-link';

        this.TaxFilingStatusTag = '#plan_information_form > :nth-child(1) > .mb-2 > strong.displayInlineBlock';
        this.ExpectedTaxFilingStatus = '#plan_information_form > :nth-child(1) > .mb-2 > .expected_Tax_Filing_Status_During_Medicare';

        this.PrimaryNameLabel = '#plan_information_form > :nth-child(1) > div.col-lg-5 > .sub-title';
        this.PrimaryName = '#plan_information_form > :nth-child(1) > div.col-lg-5 > .primaryName';
        this.medicarehrefLink = 'a.nav-link[href="#medicare"]';
        this.MedicareFromYearAndAge = "#fromYear0";
        this.MedicareToYearAndAge = "#toYear0";

        this.MAGIlabel = 'label[for="plan_information_expected_income_during_medicare"]';
        this.MAGItier = '#plan_information_expected_income_during_medicare';

        this.PersonalLink = '#personal_information_collapsible_div > .ui-collapsible-content > .nav-link';

        this.PartALabel = 'div.col-lg-5 > :nth-child(5) > .card-header'; //Part A(Hospital)
        this.PartACheckBox = 'div.col-lg-5 > :nth-child(5) > .card-body > .row > :nth-child(1) > .md-checkbox > .pl-30';
        this.MonthlyPremiumforA = '#plan_information_part_a_monthly_premium';//Monthly Premium $518

       this.PartBLabel='div.col-lg-5 > :nth-child(6) > .card-header';//Part B (Doctor)
       this.PartBCheckBox = 'div.col-lg-5 > :nth-child(6) > .card-header > .md-checkbox';
       this.MonthlyPremiumforB = '#plan_information_part_b_collapsible > .col-lg-12 > .pt-pb-5';//Monthly Premium $185

       this.PartDLabel='div.col-lg-5 > :nth-child(7) > .card-header';//Part D (Drug)
       this.PartDCheckBox = 'div.col-lg-5 > :nth-child(7) > .card-header > .md-checkbox';
       this.MonthlyPremiumforD = '#plan_information_part_d_collapsible > .ui-collapsible-content > .col-lg-12 > :nth-child(1)';//Monthly Premium $36  
      this.AnnualOOPCostForD='#plan_information_part_d_collapsible > .ui-collapsible-content > .col-lg-12 > :nth-child(2)';//Annual OOP Cost $848
      this.NoMediGap="#plan_information_medicare_select";
      this.SupplementPlanLabel='div.col-lg-5 > :nth-child(8) > .card-body';//Supplement Plan (Medigap)
      this.SupplementPlanDropDown = '[name="plan_information_medicare_select"]'
      this.MedigapPlanG="#plan_information_medicare_select";//Select Medicare Plan G
      this.MonthlyPremiumforSupplementPlanG = "div[class='col-lg-8 plan_information_medigap_supplement_div'] div:nth-child(1)";//Monthly Premium $111

      this.MedigapPlanN='[name="plan_information_medicare_select"]';//Medigap Plan N
      this.PlanNMonthlyPremium='.card-body > .row > .col-lg-8 > div';//Monthly Premium $88
      this.DentalLabel='div.col-lg-5 > :nth-child(9) > .card-header';//Dental
      this.DentalCheckBox = 'div.col-lg-5 > :nth-child(9) > .card-header > .md-checkbox > label';     //Dental CheckBox 
      this.DentalDropDown='[name="plan_information_dental_health_grade_select"]';

      this.GoodDental='[name="plan_information_dental_health_grade_select"]';//Good

      this.DentalMonthlyPremium='#plan_information_dental_collapsible > .ui-collapsible-content > .row > .col-lg-12 > :nth-child(2)';//Monthly Premium $55
      this.DentalCoInsurance='#plan_information_dental_collapsible > .ui-collapsible-content > .row > .col-lg-12 > :nth-child(3)';//Co-Insurance 30%
      this.DentalAnnualMax='#plan_information_dental_collapsible > .ui-collapsible-content > .row > .col-lg-12 > :nth-child(4)';//Annual Max $1,300
    
    //Css locators for spouse
    this.SpouseLabel='#plan_information_form > :nth-child(1) > .offset-lg-1 > .sub-title';
    this.SpouseName='#plan_information_form > :nth-child(1) > .offset-lg-1 > .spouseNameset';
    this.MedicareFromYearAndAgeSpouse='[name="fromYearSpouse0"]';
    this.MedicareToYearAndAgeSpouse='[name="toYearSpouse0"]';
 
    this.MAGIlabelSpouse='#spouseplan_information_expected_income_during_medicare';
    this.MAGItierSpouse='#spouseplan_information_expected_income_during_medicare';

    this.SpouseLabelA='#plan_information_form > :nth-child(1) > .offset-lg-1 > :nth-child(5) > .card-header'; //Part A(Hospital)//spouseplan_information_part_a_checkbox
    this.SpousePartACheckBox='.offset-lg-1 > :nth-child(5) > .card-header > .md-checkbox > .dzee_sec_label';
    
      
    }

    PersonalClick(personalTab){
      cy.get(this.PersonalLink)
    .click()
    cy.wait(1000)


    }
    landingmedicaretab(medicaretab){
    cy.get(this.MedicareLink)
    .click()
    cy.wait(1000)
    }
   clickmedicaretab(medicareTab){
      cy.get(this.medicarehrefLink)
      
      .click()
      cy.wait(4000)
   }
    
   CheckTaxFilingPrimary(taxfilingprimary){
      cy.get(this.TaxFilingStatusTag)
      //.should('be.visible')
      cy.wait(1000)
  }

    CheckTaxFilingPrimaryStatus(taxFilingStatus){
      cy.get(this.ExpectedTaxFilingStatus)
      .should('be.visible')
      cy.wait(1000)
   }

    CheckPrimaryNameDisplay(primaryNameDisplay){
      cy.get(this.PrimaryNameLabel)
      .should('be.visible')
      cy.wait(1000)
   }

   checkPrimaryName(primaryName){
        cy.get(this.PrimaryName)
        .should('be.visible')
        cy.wait(1000)

    }
    CheckMedicareYearAndAge(MedicareFromYearAndAge, MedicareToYearAndAge) {
        cy.get(this.MedicareFromYearAndAge)
            .should('be.visible')
        cy.wait(1000)
        
        cy.get(this.MedicareToYearAndAge)
            .should('be.visible')
            .each(($option, index) => {
               const text = $option.text().trim();
               const value = $option.attr('value');
               cy.log(`Option ${index + 1}: ${text} (value=${value})`);
               console.log(`Option ${index + 1}: ${text} (value=${value})`);
               });
        cy.wait(1000)
    }

    selectYearAndLifeExpectancyAge(yearandage){
        cy.get(this.MedicareToYearAndAge)
        .select('2061    |    91');
        cy.wait(1000)
    }
    verifymagitiername(magitiernamedisplay){
        cy.get(this.MAGIlabel)
        .should('exist')
        cy.wait(1000)

    }
 magitieroptiondropdown(magidropdown){
        cy.get(this.magioption)
                .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

  }

LengthOfMagitierOption(magitieroption){
        cy.get(this.MAGItier)
       .find('option')
    .should('be.visible')
    .should('have.length', 6 )
    cy.wait(1000) 
    }
    chooseMagitierOption(selectOption)
    {
        cy.get(this.MAGItier)
        .select('1')
    .should('have.value', '1')
    cy.wait(1000) 
    } 

/*getElements() {
    return cy.get('.list > li'); // Selector for multiple elements
  }
  clickElement(index) {
    this.getElements().eq(index).click(); // Click a specific element by index
  }*/

  CheckPartALabel(partAlabel){
    cy.get(this.PartALabel)
    .should('exist');
    cy.wait(1000)
  }

  CheckPartACheckBox(partAcheckbox){
    cy.get(this.PartACheckBox).click({ force: true });
    cy.get(this.PartACheckBox).should('contain.text', 'Purchased');
    cy.wait(1000)
  }

  MonthlyPremiumforADisplay(monthlypremiumforA){
        cy.get(this.PartACheckBox).click({ force: true });
        cy.get(this.PartACheckBox).should('exist').and('contain.text', 'Purchased');
        cy.get(this.MonthlyPremiumforA).should('be.visible');
    cy.wait(1000)
    }

    CheckPartBLabel(partBLabel){
        cy.get(this.PartBLabel)
        .should('exist');
        cy.wait(1000)
      } 

      CheckPartBCheckBox(partBcheckbox){
        cy.get(this.PartBCheckBox).click({ force: true });
        cy.wait(1000)
      } 

      MonthlyPremiumforBDisplay(monthlypremiumforB){
            cy.get(this.PartBCheckBox).click({ force: true });
           cy.get(this.PartBCheckBox).should('exist');
           cy.get(this.MonthlyPremiumforB).should('exist');
           cy.get(this.MonthlyPremiumforB).should('contain.text', 'Monthly Premium -   $ 185');
        cy.wait(1000)
        } 

        CheckPartDLabel(partDLabel){
            cy.get(this.PartDLabel)
            .should('exist');
            cy.wait(1000)
        }

        CheckPartDCheckBox(partDcheckbox){
            cy.get(this.PartDCheckBox).click({ force: true });
            cy.wait(1000)
        }

        MonthlyPremiumforDDisplay(monthlypremiumforD){
            cy.get(this.PartDCheckBox).click({ force: true });
            cy.get(this.PartDCheckBox).should('exist');
            cy.get(this.MonthlyPremiumforD).should('exist');
            cy.get(this.MonthlyPremiumforD).should('contain.text', 'Monthly Premium -   $ 36');
            cy.wait(1000)
        }

        AnnualOOPCostForDDisplay(annualOOPCostForD){
            cy.get(this.AnnualOOPCostForD).should('exist');
            cy.get(this.AnnualOOPCostForD).should('contain.text', 'Annual Out of Pocket -   $ 848');
            cy.wait(1000)
        }
        CheckSupplementPlanLabel(supplementPlanLabel){
            cy.get(this.SupplementPlanLabel)
            .should('exist');
            cy.wait(1000)
        }   
        clickSupplementPlanDropDown(supplementPlanDropDown){
            cy.get(this.SupplementPlanDropDown).should('be.visible').within(() => {
             cy.get('option').should('contain', 'No Medigap / Medicare Advantage');
             cy.get('option').should('contain', 'Medigap (Plan G)');
             cy.get('option').should('contain', 'Medigap (Plan N)');
             cy.wait(2000);
  });
};
selectNoMedigapOption(NoMedigapOption){
  cy.get(this.NoMediGap).scrollIntoView()
  .should('be.enabled')
  .select('No Medigap / Medicare Advantage', { force: true })
  .find('option:selected')
  .should('have.text', 'No Medigap / Medicare Advantage');
        }

        SelectSupplementPlanG(selectSupplementPlanG){
            cy.get(this.MedigapPlanG)
            .scrollIntoView()
  .should('be.enabled')
  .select('Medigap (Plan G)', { force: true })
  .find('option:selected')
  .should('have.text', 'Medigap (Plan G)');
        }
      
        viewMonthlyPremiumforSupplementPlanGDisplay(monthlypremiumforSupplementPlanG){
            cy.get(this.MonthlyPremiumforSupplementPlanG).should('exist');
            cy.get(this.MonthlyPremiumforSupplementPlanG).should('contain.text', 'Monthly Premium -   $ 111');
            cy.wait(1000);
           
        } 

        SelectSupplementPlanN(selectSupplementPlanN){
            cy.get(this.MedigapPlanG)
            .scrollIntoView()
  .should('be.enabled')
  .select('Medigap (Plan N)', { force: true })
  .find('option:selected')
  .should('have.text', 'Medigap (Plan N)');
        }
        
        MonthlyPremiumforSupplementPlanNDisplay(monthlypremiumforSupplementPlanN){
          cy.get(this.MonthlyPremiumforSupplementPlanG).should('exist');
            cy.get(this.MonthlyPremiumforSupplementPlanG).should('contain.text', 'Monthly Premium -   $ 88');
            cy.wait(1000);
        }
     CheckDentalLabel(dentalLabel){
            cy.get(this.DentalLabel)
            .should('exist');
            cy.wait(1000)
        }

        CheckDentalCheckBox(dentalCheckBox){
            cy.get(this.DentalCheckBox).click({ force: true });
            cy.wait(1000)
        }   

         clickDentalDropDown(dentalDropDown){
           
            cy.get('[id="plan_information_dental_health_grade_select"]').scrollIntoView()
              .within(() => {
                  cy.get('option').should('contain', 'Good');
                  cy.get('option').should('contain', 'Average');
                  cy.get('option').should('contain', 'Poor');
                  cy.wait(2000);
              });

            }

   SelectDentalProfile(selectDentalProfile){
    cy.get(this.GoodDental)
    .scrollIntoView()
    .should('be.enabled')
    .select('Good', { force: true })
    .find('option:selected')
    .should('have.text', 'Good');
     }

        viewMonthlyPremiumforDental(monthlypremiumforDental){
            cy.get(this.DentalMonthlyPremium).should('exist');
            cy.get(this.DentalMonthlyPremium).should('contain.text', 'Monthly premium -   $ 55');
            cy.wait(1000);
           
        } 
        viewCoInsuranceforDental(coInsuranceforDental){
            cy.get(this.DentalCoInsurance).should('exist');
            cy.get(this.DentalCoInsurance).should('contain.text', 'Co-insurance-   30 %');
            cy.wait(1000);  
        }
        viewAnnualMaxforDental(annualMaxforDental){
            cy.get(this.DentalAnnualMax).should('exist');
            cy.get(this.DentalAnnualMax).should('contain.text', 'Annual Maximum-   $ 1,300');
            cy.wait(1000);  
        } 

        // checking For Spouse


        CheckSpouseLabel(spouseLabel){
            cy.get(this.SpouseLabel)
            .should('be.visible')
            cy.wait(1000)
        }

   checkSpouseNameDisplay(spouseName){
        cy.get(this.SpouseName)
        .should('be.visible')
        cy.wait(1000)

    }
    CheckMedicareYearAndAgeSpouse(MedicareFromYearAndAgeSpouse, MedicareToYearAndAgeSpouse) {
        cy.get(this.MedicareFromYearAndAgeSpouse)
            .should('be.visible')
        cy.wait(1000)
        cy.get(this.MedicareToYearAndAge)
            .should('be.visible')
            .each(($option, index) => {
               const text = $option.text().trim();
               const value = $option.attr('value');
               cy.log(`Option ${index + 1}: ${text} (value=${value})`);
               console.log(`Option ${index + 1}: ${text} (value=${value})`);
               });
        cy.wait(1000)   
    }
    verifymagitiernameSpouse(magitiernamedisplaySpouse){
        cy.get(this.MAGIlabelSpouse)
        .should('exist')
        cy.wait(1000)   
    }

    LengthOfMagitierOptionSpouse(magitieroption){
        cy.get(this.MAGItierSpouse)
       .find('option')
    .should('be.visible')
    .should('have.length', 6 )
    cy.wait(1000) 
    }

    chooseMagitierOptionSpouse(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('1')
    .should('have.value', '1')
    cy.wait(1000) 
    } 
    chooseMagitierOptionSpouse2(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('2')
    .should('have.value', '2')
    cy.wait(1000) 
    } 
    chooseMagitierOptionSpouse3(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('3')
    .should('have.value', '3')
    cy.wait(1000) 
    } 
    chooseMagitierOptionSpouse4(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('4')
    .should('have.value', '4')
    cy.wait(1000) 
    } 
    chooseMagitierOptionSpouse5(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('5')
    .should('have.value', '5')
    cy.wait(1000) 
    } 
    chooseMagitierOptionSpouse6(selectOption)
    {
        cy.get(this.MAGItierSpouse)
        .select('6')
    .should('have.value', '6')
    cy.wait(1000) 
    }   

    CheckSpousePartALabel(partAlabel){
    cy.get(this.SpouseLabelA)
    .should('exist');
    cy.wait(1000)
  }

  CheckSpousePartACheckBox(partAcheckbox){
    cy.get(this.SpousePartACheckBox).click({ force: true });
    cy.get(this.SpousePartACheckBox).should('contain.text', '');
    cy.wait(1000)
  }
}


export default new Medicare();