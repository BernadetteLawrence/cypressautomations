class Personal     
{
ClientEmailEle='[id="create_new_plan_email_address"]';
FirstNameEle='[id="member_name"]';
LastNameEle='[id="member_lastname"]';
GenderEle="label[for='genderMale']";
MonthofBirthEle='[id="month_of_birth"]';
YearofBirthEle='[id="year_of_birth"]';
HealthProfileOptEle="select[id='health_profile']";
HealthProfileEle="select[id='health_profile']";
LifeExpectancyEle='[id="create_new_plan_life_expectancy"]';
TobaccoUserEle="label[for='tobacco_userNo']";
RetirementAgeEle='[id="create_new_plan_retirement_age"]';
CurrentZipCodeEle='[id="create_new_plan_current_zip_code"]';
RetirementZipCodeEle='[id="create_new_plan_zip_code"]';
TaxFilingStatusEle="label[for='create_new_tax_filing_individual']";
IncludeSpouseEle="label[for='includeSpouse']";
SpouseFirstNameEle='[id="spousemember_name"]';
SpouseLastNameEle='[id="spousemember_lastname"]';
SpouseGenderEle="label[for='genderMale']";
SpouseMonthofBirthEle='[id="spousemonth_of_birth"]';
SpouseYearofBirthEle='[id="spouseyear_of_birth"]';
SpouseHealthProfileOptEle="select[id='spousecreate_new_plan_health_profile']"
SpouseHealthProfileEle="select[id='spousecreate_new_plan_health_profile']"
SpouseLifeExpectancyEle='[id="spousecreate_new_plan_life_expectancy"]'
SpouseTobaccoUserEle="label[for='spousetobacco_userNo']"
SpouseRetirementAgeEle='[id="spousecreate_new_plan_retirement_age"]'
SpouseCurrentZipCodeEle='[id="spousecreate_new_plan_current_zip_code"]'
SpouseRetirementZipCodeEle='[id="spousecreate_new_plan_zip_code"]'
MedicareEle=('a[href="#medicare"]')
TaxfillingstatusAlertEle='[id="planstarusOK"]';

setClientEmail(ClientEmail)
{
cy.get(this.ClientEmailEle).type("newteamfp@gmail.com");
}
setFirstName(FirstName)
{
    cy.get(this.FirstNameEle).type("Paul")
}
setLastName(LastName)
{
cy.get(this.LastNameEle).type("Peter")
}
setGender(Gender)
{
  cy.get(this.GenderEle).should('be.visible').click();  
}
setMonthofBirth(MonthofBirth)
{
cy.get(this.MonthofBirthEle).select("September").should('have.value', '9')  
}
setYearofBirth(YearofBirth)
{
    cy.get(this.YearofBirthEle).select("1970").should('have.value', '1970')  
    cy.wait(4000)  
}
setHealthProfileOpt(HealthProfileOpt)
{
cy.get(this.HealthProfileOptEle).should('be.visible').within(() => {
    cy.get('option').should('contain', 'Best Health');
    cy.get('option').should('contain', 'Good Health');
    cy.get('option').should('contain', 'Moderate Health');
    cy.get('option').should('contain', 'Poor Health');
    cy.get('option').should('contain', 'Sick');
  });
}
setHealthProfile(HealthProfile)
{   
    cy.get(this.HealthProfileEle).select("2")
}
setLifeExpectancy(LifeExpectancy)
{
    cy.get(this.LifeExpectancyEle).click()    
}
setTobaccoUser(TobaccoUser)
{
    cy.get(this.TobaccoUserEle).click()
}
setRetirementAge(RetirementAge)
{
    cy.get(this.RetirementAgeEle).clear().type("55")
}
setCurrentZipCode(CurrentZipCode)
{
    cy.get(this.CurrentZipCodeEle).clear().type("83642")
}
setRetirementZipCode(RetirementZipCode)
{
    cy.get(this.RetirementZipCodeEle).clear().type("78745")
}
setTaxFilingStatus(TaxFilingStatus)
{
    cy.get(this.TaxFilingStatusEle).click()
}
clickIncludeSpouse(IncludeSpouse)
{
    cy.get(this.IncludeSpouseEle).click()
}
setSpouseFirstName(SpouseFirstName)
{
    cy.get(this.SpouseFirstNameEle).type("Rose")
}
setSpouseLastName(SpouseLastName)
{
cy.get(this.SpouseLastNameEle).type("Peter")
}
setSpouseGender(SpouseGender)
{ 
  cy.get(this.SpouseGenderEle).should('be.visible').click();  
}
setSpouseMonthofBirth(SpouseMonthofBirth)
{
cy.get(this.SpouseMonthofBirthEle).select("June").should('have.value', '6')  
}
setSpouseYearofBirth(SpouseYearofBirth)
{
    cy.get(this.SpouseYearofBirthEle).select("1972").should('have.value', '1972')    
}
setSpouseHealthProfileOpt(SpouseHealthProfileOpt)
{
cy.get(this.SpouseHealthProfileOptEle).each(($el, index, $list) => {
  cy.log($el.text()); // Print option text in Cypress runner
});
}
setSpouseHealthProfile(SpouseHealthProfile)
{
    cy.get(this.SpouseHealthProfileEle).select('2')    
    // cy.get(SpouseHealthProfileEle).select('2')
}
setSpouseLifeExpectancy(SpouseLifeExpectancy)
{
    cy.get(this.SpouseLifeExpectancyEle).click()    
}
setSpouseTobaccoUser(SpouseTobaccoUser)
{
    cy.get(this.SpouseTobaccoUserEle).should('be.visible').click();
    //cy.get(SpouseTobaccoUserEle).click()
}
setSpouseRetirementAge(SpouseRetirementAge)
{
    cy.get(this.SpouseRetirementAgeEle).clear().type("55")
}
setSpouseCurrentZipCode(SpouseCurrentZipCode)
{
    cy.get(this.SpouseCurrentZipCodeEle).clear().type("83642")
}
setSpouseRetirementZipCode(SpouseRetirementZipCode)
{
    cy.get(this.SpouseRetirementZipCodeEle).clear().type("78745")
}
clickMedicare(Medicare)
{
cy.get(this.MedicareEle).click()
}
setTaxfillingstatusAlert(TaxfillingstatusAlert)
{
cy.contains('Tax filling status cannot be changed').should('be.visible');
cy.get(this.TaxfillingstatusAlertEle).should('be.visible').click();
cy.wait(4000);
}
}

export default Personal;