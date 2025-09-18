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
      cy.get(this.MedicareLink)
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
    checkMedicareFromYearAndAge(MedicareFromYearAndAge) {
        cy.get(this.MedicareFromYearAndAge)
        .should('be.visible')
        cy.wait(1000)
    }
    checkMedicareFromYearAndAge(MedicareFromYearAndAge){
        cy.get(this.MedicareFromYearAndAge)
            
            .each(($option, index) => {
               const text = $option.text().trim();
               const value = $option.attr('value');
               cy.log(`Option ${index + 1}: ${text} (value=${value})`);
               console.log(`Option ${index + 1}: ${text} (value=${value})`);
               });
        cy.wait(1000)
    }

    selectMedicareToYearAndAge(MedicareToYearAndAge){
        cy.get(this.MedicareToYearAndAge)
        .select('2061    |    91');
        cy.wait(1000)
    }
    verifymagitiername(MAGIlabel){
        cy.get(this.MAGIlabel)
        .should('be.visible')
        cy.wait(1000)

    }
 magitieroptiondropdown(MAGItier){
        cy.get(this.MAGItier)
                .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

  }

LengthOfMagitierOption(MAGItier){
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

}

export default Medicare;