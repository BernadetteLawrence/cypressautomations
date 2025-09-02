// cypress/PageObjects/FinancialPlannerPOM/PlannerPage.js
class Planner {
  constructor() {
    this.WelcomeUserEle = '#logged_in_user_name';
    this.UserIDEle = '#logged_in_user_name';
    this.HomeEle = '.icon.icon-home';
    this.HelpIconEle = '#ventaOption_plan_summary i.icon.icon-info';
    this.SettingEle ='.icon.icon-setting';
    this.ChangePasswordEle='a[data-target="#changepassword"]';
    this.EditProfileEle='#ventaOption_edit_profile';
    this.LogoutEle ='.icon.icon-logout';
    this.ClientEle  = '#gotoCreatePlan';
    this.SearchEle  = '#plans_search';
    this.CompareEle = '#comparePlansIcon';
    this.ExpandPlanEle = 'tbody > tr:nth-child(2) > td.details-control';
    this.CollapsePlanEle = '.details-control.cmtable-spacetd.details-control-close';
    this.FirstPageEle ='tbody tr:nth-child(1) td:nth-child(1) ul:nth-child(1) li:nth-child(1)';
    this.PreviousPageEle ='tbody tr:nth-child(1) td:nth-child(1) ul:nth-child(1) li:nth-child(1)';
    this.NextPageEle ='tbody tr:nth-child(1) td:nth-child(1) ul:nth-child(1) li:nth-child(5)';
    this.LastPageEle ='tbody tr:nth-child(1) td:nth-child(1) ul:nth-child(1) li:nth-child(5)';
    this.DeleteClientPlanEle='#deletePlan-0';
    this.PlanCreateEle='a[title="Create Plan"][onclick^="planCreate("]';
    this.ViewPlanEle='#viewPlan-0-0';
    this.EditPlanEle='#editPlan-0-1';
    this.DeleteIndividualPlanEle='#deletePlan-0-0';
    this.editPrimaryFirstNameEle='#member_name';
    this.editPrimaryLastNameEle='#member_lastname';
    this.editGenderEle="label[for='genderMale']";
this.editMonthofBirthEle='#month_of_birth';
this.editYearofBirthEle='#year_of_birth';
this.editHealthProfileOptEle="#health_profile";
this.editHealthProfileEle="#health_profile";
this.editBestHealthEle="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
this.editGoodHealthEle="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
this.editModerateHealthEle="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
this.editPoorHealthEle="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
this.editSickEle="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(5) > select:nth-child(1)";
this.editLifeExpectancyEle='#create_new_plan_life_expectancy';
this.editTobaccoUserYesEle="label[for='tobacco_userYes']";
this.editTobaccoUserEle="label[for='tobacco_userNo']";
this.editRetirementAgeEle='#create_new_plan_retirement_age';
this.editCurrentZipCodeEle='#create_new_plan_current_zip_code';
this.editRetirementZipCodeEle='#create_new_plan_zip_code';
//this.editTaxFilingStatusEle="label[for='create_new_tax_filing_individual']";cant edit when plan is in editmode 
//this.editTaxFilingStatusJointEle="label[for='create_new_tax_filing_jointly']"
this.editIncludeSpouseEle="#includeSpouse";
this.editSpouseFirstNameEle='#spousemember_name';
this.editSpouseLastNameEle='#spousemember_lastname';
this.editSpouseGenderEle="label[for='female']";
this.editSpouseMonthofBirthEle='#spousemonth_of_birth';
this.editSpouseYearofBirthEle='#spouseyear_of_birth';
this.editSpouseHealthProfileOptEle="#spousecreate_new_plan_health_profile"
this.editSpouseHealthProfileEle="#spousecreate_new_plan_health_profile"
this.editSpouseLifeExpectancyEle='#spousecreate_new_plan_life_expectancy'
this.editSpouseTobaccoUserEle="label[for='spousetobacco_userNo']"
this.editSpouseRetirementAgeEle='#spousecreate_new_plan_retirement_age'
this.editSpouseCurrentZipCodeEle='#spousecreate_new_plan_current_zip_code'
this.editSpouseRetirementZipCodeEle='#spousecreate_new_plan_zip_code'
this.editMedicareEle='.nav-link.medicareInfoDisableClass.ui-link'
//this.editTaxfillingstatusAlertEle='#planstarusOK';

  }
  waitForLoad() {
    cy.get(this.ClientEle, { timeout: 20000 }).should('be.visible');
  }
  typeSearch(value) {
    cy.get(this.SearchEle).should('be.visible').clear().type('newteamfp@gmail.com').click();
  }

  clickCompare() {
    cy.get(this.CompareEle).should('be.visible').click();
    cy.wait(2000);
  }
  setClient() {
    cy.get(this.ClientEle).should('be.visible').click();
    cy.wait(2000);
  }
  clickHome()  {
    cy.get(this.HomeEle).should('be.visible').click();
  }
  clickHelpIcon()  {
    cy.get(this.HelpIconEle).should('be.visible').click();
    cy.wait(2000);
  }
  clickSetting()  {
    cy.get(this.SettingEle).should('be.visible').click();
    cy.wait(2000);
  }
  clickChangePassword()  {
    cy.get(this.ChangePasswordEle).should('be.visible').click();
    cy.wait(2000);
  }
  clickEditProfile()  {
    cy.get(this.EditProfileEle).should('be.visible').click();
    cy.wait(2000);
  }
  clickLogout()  {
    cy.get(this.LogoutEle).should('be.visible').click();
    cy.wait(2000);
}
clickExpandPlan()  {
    cy.get(this.ExpandPlanEle).should('be.visible').click();
    cy.wait(2000);
}
clickCollapsePlan()  {
    cy.get(this.CollapsePlanEle).should('be.visible').click();
    cy.wait(2000);
}
clickFirstPage()  {
    cy.get(this.FirstPageEle).should('be.visible').click();
    cy.wait(2000);
}
clickPreviousPage()  {
    cy.get(this.PreviousPageEle).should('be.visible').click();
    cy.wait(2000);
}
clickNextPage()  {
    cy.get(this.NextPageEle).scrollIntoView(({ offset: { top: -150, left: 0 } })).should('be.visible')
    .click({force: true});
    cy.wait(2000);
}
clickLastPage()  {
    cy.get(this.LastPageEle).scrollIntoView({ offset: { top: -150, left: 0 } }).should('be.visible').
    click({force: true});
    cy.wait(2000);
}
clickDeleteClientPlan()  {
    cy.get(this.DeleteClientPlanEle).should('be.visible').click( {force: true}) ;
    cy.wait(2000);
}
clickPlanCreate()  {
    cy.get(this.PlanCreateEle).should('be.visible').first().click({force: true}) ;
    cy.wait(2000);
}
clickViewPlan()  {
  cy.get(this.ViewPlanEle).scrollIntoView().should('be.visible').
  first().click({force: true}) ;
    cy.wait(2000);
}
clickDeleteIndividualPlan()   {
  cy.get(this.DeleteIndividualPlanEle).scrollIntoView().should('be.visible').
  first().click({force: true}) ;
    cy.wait(2000);
}
clickeditPrimaryFirstName()   {
  cy.get(this.editPrimaryFirstNameEle).should('be.visible').click( {force: true}) ;
    cy.wait(2000);
}
}
export default Planner;
