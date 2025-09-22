class Longtermcare{
    longtermcarelink="#long_term_care_div > .nav-link";
    taxfilingdisplay="div[id='longTerm'] strong[class='displayInlineBlock']";
    taxfilingstatus="#longTerm > .row > .mb-2 > .expected_Tax_Filing_Status_During_Medicare";
    primarydisplay="#longTerm > .row > div.col-lg-5 > .sub-title";
    primaryname=".primaryName";
    qualityofcarenamedisplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > label:nth-child(2)";
    Qualityofcareoption="#primary_currentLifeStyleExpenses";
    yearsofadultdaycarediplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > label:nth-child(2)";
    yearsofadultdaycareoption="#numberOfAdultDayHealthCareLTCYears";
    yearsofinhomecaredisplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > label:nth-child(2)";
    yearsofinhomecareoption="#primary_numberOfLTCYears";
    yearsofnursinghomecaredisplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > label:nth-child(2)";
    yearsofnursinghomecareoption="#care_type_radio";
    helpicon="#longTerm > .row > div.col-lg-5 > :nth-child(3) > .help-icon > .icon";
    spousedisplay="fieldset[class='col-lg-5 col-md-12 offset-lg-1 offset-md-0 spouseForm'] h2[class='sub-title mb-4']";
    spousename=".spouseNameset";
    spousequalityofcaredisplay="#body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(1) > div:nth-child(3) > label:nth-child(2)";
    spouseqaulityofcareoption="#spouse_currentLifeStyleExpenses";
    spouseyearsofadultdaycarediplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(1) > div:nth-child(4) > label:nth-child(2)";
    spouseyearsofadultdaycareoption="#spousenumberOfAdultDayHealthCareLTCYears";
    spouseyearsofinhomecaredisplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(1) > div:nth-child(5) > label:nth-child(2)";
    spouseyearsofinhomecareoption="#spouse_numberOfLTCYears";
    spouseyearsofnursinghomecaredisplay="body > div:nth-child(11) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > fieldset:nth-child(3) > div:nth-child(1) > div:nth-child(6) > label:nth-child(2)";
    spouseyearsofnursinghomecareoption="#spousecare_type_radio";
    runanalysisbutton="#submitButtonShowPopupClick";
    cancelbutton=".btn.btn-white.home_page_button.ui-btn.ui-shadow.ui-corner-all";
    popupmessage="#medicare_information_show_popup_p";
    editinputbutton="#medicare_information_show_popup_yes_button";
    runanalysisinsidebutton="#medicare_information_show_popup_no_button";
    cancelbuttonpopupmessage="#create_plan_delete_confirm_popup_p";
    cancelokbutton="#create_plan_delete_confirm_popup_okay_button";
    cancelcancelbutton="#create_plan_delete_confirm_popup_cancel_button";
    premedicarelink="#pre_medicare_collapsible_div";
    Medicarelink='a[href="#medicare"]';
   
   
setlongtermcare(longtermcare){
    cy.get(this. longtermcarelink)
    .click()
    cy.wait(2000)
}
checktaxfilingdisplay(taxfilingdisplay){
    cy.get(this.taxfilingdisplay)
    .should('be.visible')
cy.wait(2000)
}
checktaxfilingstatus(taxfilingstatus){
    cy.get(this. taxfilingstatus)
    .should('be.visible')
    cy.wait(2000)

}
checkprimarydisplay(primarydisplay){
    cy.get(this. taxfilingstatus)
    .should('be.visible')
    cy.wait(2000)
}
checkprimaryname(primaryname)
{
    cy.get(this.primaryname)
    .should('be.visible')
    cy.wait(2000)
}
checkqualityofcarename(qualityofcarename){
    cy.get(this. qualityofcarenamedisplay)
    .should('be.visible')
}
verifyqualityofcareoption(qualityofcareoption){
    cy.get(this. Qualityofcareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
});
    
  cy.wait(2000);
}
checkqualityofcareoption(plantypelength){
    cy.get(this.Qualityofcareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 3)
    cy.wait(2000)
}
selectqualityofcareoption(qualityofcareoption){
    cy.get(this.Qualityofcareoption)
.select('Comfortable')
.should('have.value', '1')
cy.wait(1000)
}

checkyearsofadultdaycare(adultdaycare){
    cy.get(this. yearsofadultdaycarediplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyyearsofadultdaycareoption(adultdaycareoption){
    cy.get(this. yearsofadultdaycareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

}
checkyearsofadultdaycareoption(adultdaycareoption){
    cy.get(this. yearsofadultdaycareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(2000)
}
selectyearsofadultdaycareoption(adultdaycareoption){
    cy.get(this. yearsofadultdaycareoption)
    .select('1')
.should('have.value', '1')
cy.wait(1000)

}
checkyearsofinhomecare(inhomecare){
    cy.get(this. yearsofinhomecaredisplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyyearsofinhomecareoption(inhomecareoption){
    cy.get(this. yearsofinhomecareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

}
checkyearsofinhomecareoption(inhomecareoption){
    cy.get(this. yearsofinhomecareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(2000)
}
selectyearsofinhomecareoption(inhomecareoption){
    cy.get(this. yearsofinhomecareoption)
    .select('1',{ force: true })
.should('have.value', '1')
cy.wait(1000)

}
checkyearsofnursingcare(nursingcare){
    cy.get(this. yearsofnursinghomecaredisplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyyearsofnursingcareoption(nursingcareoption){
    cy.get(this. yearsofnursinghomecareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

}
checkyearsofnursingcareoption(nursingcareoption){
    cy.get(this. yearsofnursinghomecareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(2000)
}
selectyearsofnursingcareoption(nursingcareoption){
    cy.get(this. yearsofnursinghomecareoption)
    .select('1')
.should('have.value', '1')
cy.wait(1000)

}
verifyhelpicon(helpicon){
    cy.get(this.helpicon)
    .should('be.visible')
    .click()
}
verifyspousedisplay(spousedisplay){
    cy.get(this.spousedisplay)
    .should('be.visible')
    cy.wait(2000)
}
verifyspousename(spousename){
    cy.get(this.spousename)
    .should('be.visible')
}
clickpremedicarepage(premedicarepage){
    cy.get(this. premedicarelink)
    .click()
}
checkspousequalityofcarename(spousequalityofcarename){
    cy.get(this.spousequalityofcaredisplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyspousequalityofcareoption(spousequalityofcareoption){
    cy.get(this. spouseqaulityofcareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
});
    
  cy.wait(2000);
}
checkspousequalityofcareoption(spouseplantypelength){
    cy.get(this.spouseqaulityofcareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 3)
    cy.wait(2000)
}
selectspousequalityofcareoption(spousequalityofcareoption){
    cy.get(this.spouseqaulityofcareoption)
.select('Comfortable')
.should('have.value', '1')
cy.wait(1000)
}

checkspouseyearsofadultdaycaredisplay(spouseadultdaycare){
    cy.get(this.spouseyearsofadultdaycarediplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyspouseyearsofadultdaycareoption(spouseadultdaycareoption){
    cy.get(this.spouseyearsofadultdaycareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

}
checkspouseyearsofadultdaycareoption(spouseadultdaycareoption){
    cy.get(this.spouseyearsofadultdaycareoption)
    .should('be.visible')
    .find('option')
    .should('have.length', 11)
    cy.wait(2000)
}
selectspouseyearsofadultdaycareoption(spouseadultdaycareoption){
    cy.get(this.spouseyearsofadultdaycareoption)
    .select('1')
.should('have.value', '1')
cy.wait(1000)

}
checkspouseyearsofinhomecaredisplay(spouseinhomecaredisplay){
    cy.get(this.spouseyearsofinhomecaredisplay)
    .should('be.visible')
    cy.wait(1000)
}
verifyspouseinhomecareoption(spouseinhomecare){
    cy.get(this. spouseyearsofinhomecareoption)
     .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)

}
checklengthofspouseinhomecare(lengthofinhomecare){
    cy.get(this.spouseyearsofinhomecareoption)
    .find('option')
    .should('be.visible')
    .should('have.length', 11 )
    cy.wait(1000)

}
selectspouseinhomecareoption(slectoption){
    cy.get(this.spouseyearsofinhomecareoption)
    .select('1',{ force: true })
    .should('have.value', '1')
    cy.wait(1000)
}
checkspousenursingcaredisplay(spousenursingcaredisplay){
    cy.get(this.spouseyearsofnursinghomecaredisplay)
    .should('be.visible'  )
        cy.wait(1000)
  
}

verifyspousenursingcareoption(spousenursingcareoption)
{
    cy.get(this. spouseyearsofnursinghomecareoption)
    .each(($option, index) => {
  const text = $option.text().trim();
  const value = $option.attr('value');
  cy.log(`Option ${index + 1}: ${text} (value=${value})`);
  console.log(`Option ${index + 1}: ${text} (value=${value})`);
  });
  cy.wait(1000)
    
}
checklengthofspousenursingcareoption(spouselengthnursingcare){
    cy.get(this. spouseyearsofnursinghomecareoption)
    .find('option')
    .should('be.visible')
    .should('have.length', 11 )
    cy.wait(1000)
}
selectspousenursingcareoption(nursingcareoptionspouse){
    cy.get(this.spouseyearsofnursinghomecareoption)
    .select('1')
    .should('have.value', '1')
    cy.wait(1000)
}
clickmedicaretab(medicaretab){
    cy.get(this.Medicarelink)
    .click()
    cy.wait(1000)
}
clickrunanalysis(runanalysisbutton)
{
    cy.get(this.runanalysisbutton)
    .click()
    cy.wait(1000)
}
verifypopupmessage(popupmessage){
    cy.get(this.popupmessage)
     .should('be.visible')
  .and('contain.text', 'Do you want to Run Analysis now or review and edit inputs?');
  cy.wait(1000)

}
clickeditinputs(editinput){
    cy.get(this.editinputbutton)
    .should('be.visible')
    .click()
    cy.wait(1000)
}
clickrunanalysisbutton(runanalysisbuttoninside)
{
    cy.get(this.runanalysisinsidebutton)
    .click()
    cy.wait(1000)
}
clickcancelbutton(cancelbutton){
    cy.get(this.cancelbutton)
    .should('be.visible')
    .click()
    cy.wait(1000)
}
verifypopupmessage(popmessagecancelbutton)
{
    cy.get(this. cancelbuttonpopupmessage)
    .should('contain.text','You are in process of creating the plan. Going to home screen will delete your plan.')
    cy.wait(1000)
}
clickokbutton(okbutton){
    cy.get(this.cancelokbutton)
    .click()
    cy.wait(1000)
}
clickcancelbuttoninside(cancelbuttoninside){
    cy.get(this.cancelcancelbutton)
    .click()
    cy.wait(1000)
}
}
export default Longtermcare;

   