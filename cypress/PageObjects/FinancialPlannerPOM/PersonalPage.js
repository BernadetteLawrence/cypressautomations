class Personal     
{
ClientEmailEle='#create_new_plan_email_address';
FirstNameEle="#member_name";
LastNameEle='#member_lastname';
GenderEle="fieldset[id='primaryForm'] div[class='mb-4']";
MonthofBirthEle='#month_of_birth';
//MonthofBirthDropdownEle="#month_of_birth";
YearofBirthEle='#year_of_birth';
HealthProfileOptEle="#health_profile";
HealthProfileEle="#health_profile";
BestHealth="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
GoodHealth="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
ModerateHealth="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
PoorHealth="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
Sick="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
LifeExpectancyEle='#create_new_plan_life_expectancy';
TobaccoUserEle='input[name="tobacco_user"]';
TobaccoUserYesEle="label[for='tobacco_userYes']";
TobaccoUserNoEle="label[for='tobacco_userNo']";
RetirementAgeEle='#create_new_plan_retirement_age';
CurrentZipCodeEle='#create_new_plan_current_zip_code';
RetirementZipCodeEle='#create_new_plan_zip_code';
TaxFilingStatusEle='fieldset#primaryForm input[name="create_new_plan_tax_status_radio"]';       
TaxFilingStatusIndEle="label[for='create_new_tax_filing_individual']";
TaxFilingStatusJointEle="label[for='create_new_tax_filing_jointly']"
IncludeSpouseEle="#includeSpouse";
SpouseFirstNameEle='#spousemember_name';
SpouseLastNameEle='#spousemember_lastname';
SpouseGenderEle='fieldset#spouseForm input[name="spousegender"]';
SpouseMonthofBirthEle='#spousemonth_of_birth';
SpouseYearofBirthEle='#spouseyear_of_birth';
SpouseHealthProfileOptEle="#spousecreate_new_plan_health_profile"
SpouseHealthProfileEle="#spousecreate_new_plan_health_profile"
SpouseLifeExpectancyEle='#spousecreate_new_plan_life_expectancy'
SpouseTobaccoUserEle='fieldset#spouseForm input[name="tobacco_user"]';
SpouseRetirementAgeEle='#spousecreate_new_plan_retirement_age'
SpouseCurrentZipCodeEle='#spousecreate_new_plan_current_zip_code'
SpouseRetirementZipCodeEle='#spousecreate_new_plan_zip_code'
MedicareEle='.nav-link.medicareInfoDisableClass.ui-link'
TaxfillingstatusAlertEle='#planstarusOK';

setClientEmail(ClientEmail) {
    cy.get(this.ClientEmailEle, { timeout: 20000 })
    .should('be.visible')     // wait first
    .type(ClientEmail, { force: true })
    //.should('have.value', (ClientEmail));
     cy.wait(2000); 
}
setFirstName(FirstName) {
    cy.get(this.FirstNameEle).should('be.visible')
    .type(FirstName,{force:true})
    cy.wait(2000);
}
setLastName(LastName)
{
    cy.get(this.LastNameEle).should('be.visible')
    .type(LastName,{force:true})
    cy.wait(2000);
}
setGender(Gender)
{
  cy.get(this.GenderEle).contains('label', String(Gender)).click();
  cy.wait(2000);   
}
 setMonthofBirth(MonthofBirth) { 
    const val = String(Number(MonthofBirth));
    // Wait until options are loaded
    cy.get(this.MonthofBirthEle, { timeout: 20000 })
      .should('be.visible')
      .find('option')
      .should('have.length.greaterThan', 1);

    // Select by value
    cy.get(this.MonthofBirthEle).select(val, { force: true });
    cy.wait(2000); 
  }
 
setYearofBirth(YearofBirth)
{
    const val = String(YearofBirth).trim();   

    cy.get(this.YearofBirthEle, { timeout: 20000 })
    .should('be.visible')
    .find('option').should('have.length.gt', 1);   

   cy.get(this.YearofBirthEle).select(val, { force: true });
   cy.wait(2000); 
}
setHealthProfileOpt(HealthProfileOpt)
{
cy.get(this.HealthProfileOptEle).should('be.visible').within(() => {
    cy.get('option').should('contain', 'Best Health');
    cy.get('option').should('contain', 'Good Health');
    cy.get('option').should('contain', 'Moderate Health');
    cy.get('option').should('contain', 'Poor Health');
    cy.get('option').should('contain', 'Sick');
    cy.wait(2000);
  });

}
setHealthProfile(HealthProfile)
{   
    cy.get(this.HealthProfileEle, { timeout: 20000 })
    .should('be.visible')
    .find('option')
    .should('have.length.gt', 1);            // make sure options are loaded

    cy.get(this.HealthProfileEle)
    .select(String(HealthProfile), { force: true });
     cy.wait(2000); 
}
setLifeExpectancy(LifeExpectancy)
{
    cy.get(this.LifeExpectancyEle).click();
    cy.wait(2000);    
}
setTobaccoUser(TobaccoUser)
{
   
    const v = /yes/i.test(String(TobaccoUser)) ? 'Yes' : 'No';
    cy.get(`fieldset#primaryForm input[name="tobacco_user"][value="${v}"]`)
    .check({ force: true });
     cy.wait(2000); 
}
setRetirementAge(RetirementAge)
{
    cy.get(this.RetirementAgeEle).clear() .type(RetirementAge,{force:true});
     cy.wait(2000);
}
setCurrentZipCode(CurrentZipCode)
{
    cy.get(this.CurrentZipCodeEle).clear() .type(CurrentZipCode,{force:true});
    cy.wait(2000);
}
setRetirementZipCode(RetirementZipCode)
{
    cy.get(this.RetirementZipCodeEle).type('{selectAll}{backspace}')
    .type(RetirementZipCode,{force:true});
    cy.wait(2000);
}
setTaxFilingStatus(TaxFilingStatus)
{
    const v = /joint/i.test(String(TaxFilingStatus)) ? 'jointly' : 'individual';
    cy.get(`fieldset#primaryForm input[name="create_new_plan_tax_status_radio"][value="${v}"]`)
    .check({ force: true });
     cy.wait(2000); 
  }
clickIncludeSpouse(IncludeSpouse)
{
    cy.get(this.IncludeSpouseEle).check({ force: true }).should('be.checked')
    cy.wait(2000);
}
setSpouseFirstName(SpouseFirstName)
{
    cy.get(this.SpouseFirstNameEle).should('be.visible')
    .type(SpouseFirstName,{force:true})
    cy.wait(2000);
}
setSpouseLastName(SpouseLastName)
{
    cy.get(this.SpouseLastNameEle).should('be.visible')
    .type(SpouseLastName,{force:true})
    cy.wait(2000);
}
setSpouseGender(SpouseGender)
{ 
    const v = /fem/i.test(String(SpouseGender)) ? 'Female' : 'Male';
    cy.get(`fieldset#spouseForm input[name="spousegender"][value="${v}"]`)
    .check({ force: true })
    .should('be.checked');
     cy.wait(2000); 
}
setSpouseMonthofBirth(SpouseMonthofBirth)
{
    
   // const val = String(SpouseMonthofBirth || '6').trim();
    
    const val = String(Number(SpouseMonthofBirth));//for fixture
    // Wait until options are loaded
    cy.get(this.SpouseMonthofBirthEle, { timeout: 20000 })
      .should('be.visible')
      .find('option')
      .should('have.length.greaterThan', 1);

    // Select by value
    cy.get(this.SpouseMonthofBirthEle).select(val, { force: true });
    cy.wait(2000); 
  }

setSpouseYearofBirth(SpouseYearofBirth)
{
    const val = String(SpouseYearofBirth).trim();   //for fixture
    //const val = String(SpouseYearofBirth || '1972').trim();
    cy.get(this.SpouseYearofBirthEle, { timeout: 20000 })
    .should('be.visible')
    .find('option').should('have.length.gt', 1);   

   cy.get(this.SpouseYearofBirthEle).select(val, { force: true });   
   cy.wait(2000); 
}
setSpouseHealthProfileOpt(SpouseHealthProfileOpt)
{
    cy.get(this.SpouseHealthProfileOptEle).each(($el, index, $list) => {
    cy.log($el.text()); // Print option text in Cypress runner
    cy.wait(2000);
});
}
setSpouseHealthProfile(SpouseHealthProfile) {
  cy.get(this.SpouseHealthProfileEle, { timeout: 20000 })
    .should('be.visible')
    .find('option')
    .should('have.length.gt', 1);

 // const val = String(SpouseHealthProfile || 'Good Health').trim(); // fallback ok
  cy.get(this.SpouseHealthProfileEle)
    .select(String(SpouseHealthProfile), { force: true });   // <-- use val here
  cy.wait(2000);
}

setSpouseLifeExpectancy(SpouseLifeExpectancy)
{
    cy.get(this.SpouseLifeExpectancyEle).click();
    cy.wait(2000);    
}
setSpouseTobaccoUser(SpouseTobaccoUser)
{
    const v = /^yes$/i.test(String(SpouseTobaccoUser)) ? 'Yes' : 'No';

    cy.get(`fieldset#spouseForm input[type="radio"][value="${v}"]`)
    .first()
    .check({ force: true });
}
setSpouseRetirementAge(SpouseRetirementAge)
{
    cy.get(this.SpouseRetirementAgeEle).clear() .type(SpouseRetirementAge,{force:true});
    cy.wait(2000);
}
setSpouseCurrentZipCode(SpouseCurrentZipCode)
{
    cy.get(this.SpouseCurrentZipCodeEle).clear() .type(SpouseCurrentZipCode,{force:true});
    cy.wait(2000);
}
setSpouseRetirementZipCode(SpouseRetirementZipCode)
{
    cy.get(this.SpouseRetirementZipCodeEle).clear() .type(SpouseRetirementZipCode,{force:true});
    cy.wait(2000);
}
clickMedicare(Medicare)
{
    cy.get(this.MedicareEle).click()
    cy.wait(2000);
}
setTaxfillingstatusAlert(TaxfillingstatusAlert)
{
   cy.contains('Tax filling status cannot be changed').should('be.visible');
   cy.get(this.TaxfillingstatusAlertEle).should('be.visible').click({ force: true });
   cy.wait(4000);
}

}
export default Personal;