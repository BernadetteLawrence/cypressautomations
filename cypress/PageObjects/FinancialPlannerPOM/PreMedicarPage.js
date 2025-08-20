class PreMedicare{
personalpagelink="#personal_information_collapsible_div > .ui-collapsible-content > .nav-link";
premedicarelink="#pre_medicare_collapsible_div";
taxfiling="#preMedicare > :nth-child(1) > .mb-2 > strong.displayInlineBlock";
taxfilingstatusind="#preMedicare > :nth-child(1) > .mb-2 > .expected_Tax_Filing_Status_During_Medicare";
primary=".primaryFormPremedicare > .sub-title";
primaryname=".primaryFormPremedicare > .primaryName";
plantypeoptions="#insurance_plan_information_plan_id option";
plantype="#insurance_plan_information_plan_id";
spousefielddis="#spouseinsurance_plan_information_metallic_plan";
tooltip=".primaryFormPremedicare > .floating-label > .help-icon > .icon";
monthlypremiumprimary=".primaryFormPremedicare > :nth-child(4) > .card-body > .row > .col-lg-12 > div";
monthlypremiumvalueprimary="#insurance_plan_information_monthly_insurance_premium";
annualdeductibleprimary=".primaryFormPremedicare > :nth-child(5) > .card-header";
annualdeductiblevalueprimary="#insurance_plan_information_deductible_in_network";
annualoopprimary=".primaryFormPremedicare > :nth-child(6) > .card-header";
annualoopvalueprimary="#insurance_plan_information_oop_in_network";
coinsuranceprimary=".primaryFormPremedicare > :nth-child(7) > .card-header";
coinsurancevalueprimary="#insurance_plan_information_co_insurance_in_network";
spouse="#preMedicare > :nth-child(1) > .offset-lg-1 > .sub-title";
spousename="#preMedicare > :nth-child(1) > .offset-lg-1 > .spouseNameset";
spouseplantypeoption="#insurance_plan_information_plan_id option";
plantypespouse="#spouseinsurance_plan_information_plan_id";
spousemonthlypremium=".offset-lg-1 > :nth-child(4) > .card-body > .row > .col-lg-12 > div";
spousemonthlypremiumvalue="#spousespouseinsurance_plan_information_monthly_insurance_premium";
spouseannualdeductible="#preMedicare > :nth-child(1) > .offset-lg-1 > :nth-child(5) > .card-header";
spouseannualdeductiblevalue="#spouseinsurance_plan_information_deductible_in_network";
spouseannualoop="#preMedicare > :nth-child(1) > .offset-lg-1 > :nth-child(6) > .card-header";
spouseannualoopvalue="#spouseinsurance_plan_information_oop_in_network";
spousecoinsurance="#preMedicare > :nth-child(1) > .offset-lg-1 > :nth-child(7) > .card-header";
spousecoinsurancevalue="#spouseinsurance_plan_information_co_insurance_in_network";

clickpersonalpage(personalpage)
{cy.get (this.personalpagelink)
    .click()
    .should('contain.text', 'Pre-Medicare')
    cy.wait(1000);
}
clickpremedicarepage(premedicarepage){
    cy.get(this.premedicarelink)
    .click()
      cy.wait(1000)
}


 
 settaxfilingprimary(taxfiling){
    cy.get(this.taxfiling)
    .click()
     .should('be.visible')
      cy.wait(1000)
   
   }          
settaxfilingind(taxfilingstatus){
    cy.get(this.taxfilingstatusind)
    .click()
    .should('be.visible')
  cy.wait(1000)
}
setprimary(primary){
    cy.get(this.primary)
    .click()
    .should('be.visible')
     cy.wait(1000)
}
setprimaryname(primaryname){
    cy.get(this.primaryname)
    .click()
    .should('be.visible')
     cy.wait(1000)
}
 setplantypeoption(plantypeopt) {
    cy.get(this.plantypeoptions)
      .should('be.visible')
      .each(($option, index) => {
  const text = $option.text().trim(); 
  cy.log(`Option ${index + 1}: ${text}`);
  console.log(`Option ${index + 1}: ${text}`);
  cy.wait(1000);
});
        
  }

viewplantype(plantype){
    cy.get(this.plantype)
    .should('be.visible')
    cy.wait(1000)

}

viewplantypelength(plantypelength){
    cy.get(this.plantype)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(1000)
}
chooseplantypeGoldEPO(plantypeslectiongold){
    cy.get(this.plantype)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
   cy.get(this.plantype)
 .select('2025Texas48453GoldEPOHealthSherpa')
   .should('have.value', '2025Texas48453GoldEPOHealthSherpa')
     cy.wait(1000)
}

chooseplantypeSilverEPO(plantypeslectionsilver){
    cy.get(this.plantype)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.get(this.plantype)
      .select('2025Texas48453SilverEPOHealthSherpa')
      .should('have.value', '2025Texas48453SilverEPOHealthSherpa')
      cy.wait(1000)
}
checktooltipicon(tooltipicon){
  cy.get(this.tooltip)
  .should('be.visible')          
  .click()
     cy.wait(1000)
}
checkmonthlypremiumpri(monthlypremiumprimary)
{
  cy.get(this.monthlypremiumprimary)
  .should('be.visible')
     cy.wait(1000)
}
checkmonthlypremiumvalue(monthlypremiumvaluepri)
{
  cy.get(this.monthlypremiumvalueprimary)
  .should('have.text', '$ 1,338')
     cy.wait(1000)
}
checkannualdeductiblepri(annualdeductibleprimary)
{
  cy.get(this.annualdeductibleprimary)
  .should('be.visible')
     cy.wait(1000)
}
checkannualdeductiblevaluepri(annualdeductiblevaluepri){
  cy.get(this.annualdeductiblevalueprimary)
  .should('have.text', '$ 1,375')
     cy.wait(1000)
}
checkannualooppri(annualoopprimary)
{
  cy.get(this.annualoopprimary)
  .should('be.visible')
     cy.wait(1000)
}
checkannualoopvaluepri(annualoopvalueprimary)
{
  cy.get(this.annualoopvalueprimary)
  .should('have.text', '$ 7,329')
     cy.wait(1000)
}
checkcoinsurancepri(annualcoinsuranceprimary)
{
  cy.get(this.coinsuranceprimary)
  .should('be.visible')
     cy.wait(1000)
}
checkcoinsurancevaluepri(annualcoinsurancevalueprimary)
{
  cy.get(this.coinsurancevalueprimary)
  .should('have.text', '0 %')
     cy.wait(1000)
}
verifyspousefield(premedicarepage){
    cy.get(this.premedicarelink)
    .click()
    cy.wait(1000)
  }
  setspouse(spouse){
    cy.get(this.spouse)
    .click()
    .should('be.visible')
     cy.wait(1000)

}
setspousename(spousename){
    cy.get(this.spousename)
    .click()
    .should('be.visible')
     cy.wait(1000)
}
 setplantypeoptionspouse(spouseplantypeopt) {
    cy.get(this.spouseplantypeoption)
      .should('be.visible')
      .each(($option, index) => {
  const text = $option.text().trim(); 
  cy.log(`Option ${index + 1}: ${text}`);
  console.log(`Option ${index + 1}: ${text}`);
  cy.wait(1000);
});

}
viewspouseplantype(spouseplantype){
    cy.get(this.plantypespouse)
    .should('be.visible')
    cy.wait(1000)

}
viewspouseplantypelength(spouseplantypelength){
    cy.get(this.plantypespouse)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(1000)
}
choosespouseplantypeGoldEPO(spouseplantypeslectiongold){
    cy.get(this.plantypespouse)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
   cy.get(this.plantypespouse)
 .select('2025Texas48453GoldEPOHealthSherpa')
   .should('have.value', '2025Texas48453GoldEPOHealthSherpa')
     cy.wait(1000)
}
checkmonthlypremiumspouse(monthlypremiumspouse)
{
  cy.get(this.spousemonthlypremium)
  .should('be.visible')
     cy.wait(1000)
}
checkmonthlypremiumvaluespouse(monthlypremiumvaluespouse)
{
  cy.get(this.spousemonthlypremiumvalue)
  .should('have.text', '$ 1,338')
     cy.wait(1000)
}
checkannualdeductiblespouse(annualdeductiblespouse)
{
  cy.get(this.spouseannualdeductible)
  .should('be.visible')
     cy.wait(1000)
}
checkannualdeductiblevaluespouse(annualdeductiblevaluespouse){
  cy.get(this.spouseannualdeductiblevalue)
  .should('have.text', '$ 1,375')
     cy.wait(1000)
}
checkannualoopspouse(annualoopspouse)
{
  cy.get(this.spouseannualoop)
  .should('be.visible')
     cy.wait(1000)
}
checkannualoopvaluespouse(annualoopvalueprimary)
{
  cy.get(this.spouseannualoopvalue)
  .should('have.text', '$ 7,329')
     cy.wait(1000)
}
checkcoinsurancespouse(annualcoinsurancespouse)
{
  cy.get(this.spousecoinsurance)
  .should('be.visible')
     cy.wait(1000)
}
checkcoinsurancevaluespouse(annualcoinsurancevaluespouse)
{
  cy.get(this.spousecoinsurancevalue)
  .should('have.text', '0 %')
     cy.wait(1000)
}
choosespouseplantypeSilverEPO(spouseplantypeslectionsilver){
    cy.get(this.plantypespouse)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.get(this.plantypespouse)
      .select('2025Texas48453SilverEPOHealthSherpa')
      .should('have.value', '2025Texas48453SilverEPOHealthSherpa')
      cy.wait(1000)
}

}

export default PreMedicare;