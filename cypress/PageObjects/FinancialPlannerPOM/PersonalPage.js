class Personal     
{
ClientEmailEle='#create_new_plan_email_address';
FirstNameEle="#member_name";
LastNameEle='#member_lastname';
GenderEle="label[for='genderMale']";
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
TobaccoUserYesEle="label[for='tobacco_userYes']";
TobaccoUserEle="label[for='tobacco_userNo']";
RetirementAgeEle='#create_new_plan_retirement_age';
CurrentZipCodeEle='#create_new_plan_current_zip_code';
RetirementZipCodeEle='#create_new_plan_zip_code';
TaxFilingStatusEle="label[for='create_new_tax_filing_individual']";
TaxFilingStatusJointEle="label[for='create_new_tax_filing_jointly']"
IncludeSpouseEle="#includeSpouse";
SpouseFirstNameEle='#spousemember_name';
SpouseLastNameEle='#spousemember_lastname';
SpouseGenderEle="label[for='female']";
SpouseMonthofBirthEle='#spousemonth_of_birth';
SpouseYearofBirthEle='#spouseyear_of_birth';
SpouseHealthProfileOptEle="#spousecreate_new_plan_health_profile"
SpouseHealthProfileEle="#spousecreate_new_plan_health_profile"
SpouseLifeExpectancyEle='#spousecreate_new_plan_life_expectancy'
SpouseTobaccoUserEle="label[for='spousetobacco_userNo']"
SpouseRetirementAgeEle='#spousecreate_new_plan_retirement_age'
SpouseCurrentZipCodeEle='#spousecreate_new_plan_current_zip_code'
SpouseRetirementZipCodeEle='#spousecreate_new_plan_zip_code'
MedicareEle='.nav-link.medicareInfoDisableClass.ui-link'
TaxfillingstatusAlertEle='#planstarusOK';

setClientEmail(ClientEmail) {
  cy.get(this.ClientEmailEle, { timeout: 20000 })
    .should('be.visible')     // wait first
    .type('newteamfp@gmail.com')
    .should('have.value', 'newteamfp@gmail.com');
}
setFirstName(FirstName) {
  cy.get(this.FirstNameEle).should('be.visible')
    .type("Paul")
    cy.wait(2000);
}
setLastName(LastName)
{
cy.get(this.LastNameEle).should('be.visible')
    .type("Peter")
     cy.wait(2000);
}
setGender(Gender)
{
  cy.get(this.GenderEle)
      .should('be.visible')
  .click();   
  cy.wait(2000);   
}
setMonthofBirth(MonthofBirth)
{
cy.get(this.MonthofBirthEle).select("September").should('have.value', '9');
cy.wait(2000);  
}
setYearofBirth(YearofBirth)
{
    cy.get(this.YearofBirthEle).select("1970").should('have.value', '1970');  
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
    cy.get(this.HealthProfileEle).select("2");
    cy.wait(2000);
}
setLifeExpectancy(LifeExpectancy)
{
    cy.get(this.LifeExpectancyEle).click();
    cy.wait(2000);    
}
setTobaccoUser(TobaccoUser)
{
    cy.get(this.TobaccoUserEle).click();
    cy.wait(2000);
}
setRetirementAge(RetirementAge)
{
    cy.get(this.RetirementAgeEle).clear().type("55");
    cy.wait(2000);
}
setCurrentZipCode(CurrentZipCode)
{
    cy.get(this.CurrentZipCodeEle).type("83642");
    cy.wait(2000);
}
setRetirementZipCode(RetirementZipCode)
{
    cy.get(this.RetirementZipCodeEle).type('{selectAll}{backspace}')
    .type("78745").should('have.value', '78745');
    cy.wait(2000);
}
setTaxFilingStatus(TaxFilingStatus)
{
    cy.get(this.TaxFilingStatusEle).click();
    cy.wait(2000);
}
clickIncludeSpouse(IncludeSpouse)
{
    cy.get(this.IncludeSpouseEle).check({ force: true }).should('be.checked')
    cy.wait(2000);
}
setSpouseFirstName(SpouseFirstName)
{
    cy.get(this.SpouseFirstNameEle).should('be.visible').type('Rose')
    cy.wait(2000);
}
setSpouseLastName(SpouseLastName)
{
cy.get(this.SpouseLastNameEle).should('be.visible').type("Peter");
cy.wait(2000);
}
setSpouseGender(SpouseGender)
{ 
  cy.get(this.SpouseGenderEle).should('be.visible').click();
  cy.wait(2000);  
}
setSpouseMonthofBirth(SpouseMonthofBirth)
{
cy.get(this.SpouseMonthofBirthEle).select("June").should('have.value', '6');
cy.wait(2000);  
}
setSpouseYearofBirth(SpouseYearofBirth)
{
    cy.get(this.SpouseYearofBirthEle).select("1972").should('have.value', '1972');
    cy.wait(2000);    
}
setSpouseHealthProfileOpt(SpouseHealthProfileOpt)
{
cy.get(this.SpouseHealthProfileOptEle).each(($el, index, $list) => {
  cy.log($el.text()); // Print option text in Cypress runner
    cy.wait(2000);
});
}
setSpouseHealthProfile(SpouseHealthProfile)
{
    cy.get(this.SpouseHealthProfileEle).select('2');
    cy.wait(2000);   
    // cy.get(SpouseHealthProfileEle).select('2')
}
setSpouseLifeExpectancy(SpouseLifeExpectancy)
{
    cy.get(this.SpouseLifeExpectancyEle).click();
    cy.wait(2000);    
}
setSpouseTobaccoUser(SpouseTobaccoUser)
{
    cy.get(this.SpouseTobaccoUserEle).should('be.visible').click();
    cy.wait(2000);
    //cy.get(SpouseTobaccoUserEle).click()
}
setSpouseRetirementAge(SpouseRetirementAge)
{
    cy.get(this.SpouseRetirementAgeEle).clear().type("55");
    cy.wait(2000);
}
setSpouseCurrentZipCode(SpouseCurrentZipCode)
{
    cy.get(this.SpouseCurrentZipCodeEle).clear().type("83642");
    cy.wait(2000);
}
setSpouseRetirementZipCode(SpouseRetirementZipCode)
{
    cy.get(this.SpouseRetirementZipCodeEle).clear()
    .type('78745').should('have.value', '78745');
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