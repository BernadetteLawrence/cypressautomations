class Medicare{
  
MedicareLink='#medicare_collapsible_div > .ui-collapsible-content > .nav-link';
TaxFilingStatusTag='#plan_information_form > :nth-child(1) > .mb-2 > strong.displayInlineBlock';
ExpectedTaxFilingStatus='#plan_information_form > :nth-child(1) > .mb-2 > .expected_Tax_Filing_Status_During_Medicare';
PrimaryNameLabel='#plan_information_form > :nth-child(1) > div.col-lg-5 > .sub-title'
PrimaryName='#plan_information_form > :nth-child(1) > div.col-lg-5 > .primaryName';
medicareLink='a.nav-link[href="#medicare"]';
MedicareFromYearAndAge="#fromYear0";
MedicareToYearAndAge="#toYear0";
MAGIlabel='label[for="plan_information_expected_income_during_medicare"]';
MAGItier='#plan_information_expected_income_during_medicare';
PersonalLink='#personal_information_collapsible_div > .ui-collapsible-content > .nav-link';

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
      cy.get(this.medicareLink)
       .should('be.visible')
      .click()
      cy.wait(4000)
   }
    
   CheckTaxFilingPrimary(taxfilingprimary){
      cy.get(this.TaxFilingStatusTag)
      .should('be.visible')
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
            .should('have.value', MedicareFromYearAndAge)
        cy.wait(1000)
        
        cy.get(this.MedicareToYearAndAge)
            .should('have.value', MedicareToYearAndAge)
            .each(($option, index) => {
               const text = $option.text().trim();
               const value = $option.attr('value');
               cy.log(`Option ${index + 1}: ${text} (value=${value})`);
               console.log(`Option ${index + 1}: ${text} (value=${value})`);
               });
        cy.wait(1000)
    }

    selectYearAndLifeExpectancyAge(yearandage){
        cy.get(this.YearAndLifeExpectancyAge)
        .select('2061    |    91');
        cy.wait(1000)
    }
    verifymagitiername(magitiernamedisplay){
        cy.get(this.MAGItier)
        .should('be.visible')
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
        cy.get(this.magioption)
       .find('option')
    .should('be.visible')
    .should('have.length', 6 )
    cy.wait(1000) 
    }
    chooseMagitierOption(selectOption)
    {
        cy.get(this.magioption)
        .select('1')
    .should('have.value', '1')
    cy.wait(1000) 
    }

}

export default new Medicare;