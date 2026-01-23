class Consistency 
{
    PresentValueAtRetirementPrimary="//h6[normalize-space()='Present Value At Retirement']";
    TotalHealthcareExpensesPrimary="//h6[normalize-space()='Total Healthcare Expenses']";
    AgePrimary="//strong[normalize-space()='Age :']/following-sibling::span";
                         //LABEL_TAG[normalize-space()='LABEL TEXT']/following-sibling::VALUE_TAG
    RetirementAgePrimary="//strong[normalize-space()='Retirement Age :']/following-sibling::span";
    LifeExpectancyPrimary="//strong[normalize-space()='Life Expectancy :']/following-sibling::span";
    HealthProfilePrimary="//strong[normalize-space()='Health Profile :']/following-sibling::span";
    RetirementYearPrimary="//strong[normalize-space()='Retirement Year :']/following-sibling::span";
    MedicareEligibleYearPrimary="//strong[normalize-space()='Medicare Eligible Year :']/following-sibling::span";
    SupplementPrimary="//strong[normalize-space()='Supplement :']/following-sibling::span";
    ExpectedIncomeDuringMedicarePrimary="//strong[normalize-space()='Expected Income During Medicare :']/following-sibling::span";
    TaxFilingStatusPrimary="//div[@class='col-lg-4 mb-2']//strong[contains(text(),'Tax Filing Status :')]/following-sibling::span";
    PVExpenseFundwithInvestmentPrimary="//div[normalize-space()='PV for Total Healthcare expenses']";
    RetirementAgeFundwithInvestmentPrimary="//div[contains(text(),'Retirement Age:')]";
    MedicareEligibilityAgeFundwithInvestmentPrimary="//div[contains(text(),'Medicare Eligibility Age : 65')]";
    LifeExpectancyFundwithInvestmentPrimary="//span[contains(@class,'life_expectancy_expense_projection')]";
    TotalPresentValueExpensesLTCEPrimary="//div[@class='col-3']//h6[contains(text(),'Total Present Value Expenses')]";
    TotalFutureValueExpensesLTCEPrimary="//body[1]/div[20]/div[2]/div[1]/div[1]/div[1]/div[2]/div[2]/h6[1]";
    AdultDayCarePresentValuePrimary="//td[@id='primary_ltc_adult_day_present_value']";
    InHomeCarePresentValuePrimary="//td[@id='primary_ltc_home_care_present_value']";
    NursingCarePresentValuePrimary="//td[@id='primary_ltc_nursing_present_value']";
    AdultDayCareFutureValuePrimary="//td[@id='primary_ltc_adult_day_future_value']";
    InHomeCareFutureValuePrimary="//td[@id='primary_ltc_home_care_future_value']";
    NursingCareFutureValuePrimary="//td[@id='primary_ltc_nursing_future_value']";
    PresentValueAtRetirementSpouse="//h6[normalize-space()='Present Value At Retirement']";
    TotalHealthcareExpensesSpouse="//h6[normalize-space()='Total Healthcare Expenses']";
    AgeSpouse="//strong[normalize-space()='Age :']/following-sibling::span";
    RetirementAgeSpouse="//strong[normalize-space()='Retirement Age :']/following-sibling::span";
    LifeExpectancySpouse="//strong[normalize-space()='Life Expectancy :']/following-sibling::span";
    HealthProfileSpouse="//strong[normalize-space()='Health Profile :']/following-sibling::span";
    RetirementYearSpouse="//strong[normalize-space()='Retirement Year :']/following-sibling::span";
    MedicareEligibleYearSpouse="//strong[normalize-space()='Medicare Eligible Year :']/following-sibling::span";
    SupplementSpouse="//strong[normalize-space()='Supplement :']/following-sibling::span";
    ExpectedIncomeDuringMedicareSpouse="//strong[normalize-space()='Expected Income During Medicare :']/following-sibling::span";
    TaxFilingStatusSpouse="//div[contains(@class,'col-lg-4 mb-2')]//strong[contains(text(),'Tax Filing Status :')]/following-sibling::span";
    PVExpenseFundwithInvestmentSpouse="//div[normalize-space()='PV for Total Healthcare expenses']";
    RetirementAgeFundwithInvestmentSpouse="//div[contains(text(),'Retirement Age:')]";
    MedicareEligibilityAgeFundwithInvestmentSpouse="//div[contains(text(),'Medicare Eligibility Age : 65')]";
    LifeExpectancyFundwithInvestmentSpouse="//span[contains(@class,'life_expectancy_expense_projection')]";
    TotalPresentValueExpensesLTCESpouse="//div[contains(@class,'col-3 ltce-spousetable')]//h6[contains(text(),'Total Present Value Expenses')]";
    TotalFutureValueExpensesLTCESpouse="//div[contains(@class,'col-3 ltce-spousetable')]//h6[contains(text(),'Total Future Value Expenses')]";
    AdultDayCarePresentValueSpouse="//td[@id='spouse_ltc_adult_day_present_value']";
    InHomeCarePresentValueSpouse="//td[@id='spouse_ltc_home_care_present_value']";
    NursingCarePresentValueSpouse="//td[@id='spouse_ltc_nursing_present_value']";
    AdultDayCareFutureValueSpouse="//td[@id='spouse_ltc_adult_day_future_value']";
    InHomeCareFutureValueSpouse="//td[@id='spouse_ltc_home_care_future_value']";
    NursingCareFutureValueSpouse="//td[@id='spouse_ltc_nursing_future_value']";

    //from Medicare Page adding locators
    toYearSel = '#toYear0';       // change to '#fromYear0' if you need the left one

getAgeFromToYear() {
  // selected option text is like "2035 | 65" → returns "65"
  return cy.get(this.toYearSel)
    .find('option:selected')
    .invoke('text')
    .then(t => t.split('|')[1].trim());
}
getYearFromToYear() {
  // value attribute is the year → "2035"
  return cy.get(this.toYearSel)
    .invoke('val')
    .then(v => String(v).trim());
}

   setPresentValueAtRetirementPrimary(){
   return cy.xpath(this.PresentValueAtRetirementPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setTotalHealthcareExpensesPrimary(){
   return cy.xpath(this.TotalHealthcareExpensesPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setAgePrimary() {
    return cy.xpath(this.AgePrimary)
      .invoke('text')
      .then(text => text.trim());
  }

setRetirementAgePrimary() {
  return cy.xpath(this.RetirementAgePrimary)
      .invoke('text')
      .then(text => text.trim());
  }

setLifeExpectancyPrimary() {
  return cy.xpath(this.LifeExpectancyPrimary)
    .invoke('text')
    .then(text => text.trim());  // "Life Expectancy : 91"
}

  setHealthProfilePrimary() {
    return cy.xpath(this.HealthProfilePrimary)
      .invoke('text')
      .then(text => text.trim());
  }

 setRetirementYearPrimary(){
   return cy.xpath(this.RetirementYearPrimary).parent() 
   .invoke ('text')
   .then(text => text.trim());  
  
 }
 setMedicareEligibleYearPrimary(){
   return cy.xpath(this.MedicareEligibleYearPrimary).parent() 
   .invoke ('text')
   .then(text=> text.trim());  
 }
 setSupplementPrimary(){
   return cy.xpath(this.SupplementPrimary).parent() 
   .invoke ('text')
   .then(text=> text.trim());  
 }
 setExpectedIncomeDuringMedicarePrimary(){
   return cy.xpath(this.ExpectedIncomeDuringMedicarePrimary).parent() 
   .invoke ('text')
   .then((text)=> text.trim());   
 }
 setTaxFilingStatusPrimary(){
   return cy.xpath(this.TaxFilingStatusPrimary).parent() 
   .invoke ('text')
   .then(text=> text.trim());  
 }
  setPVExpenseFundwithInvestmentPrimary(){
   return cy.xpath(this.PVExpenseFundwithInvestmentPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setRetirementAgeFundwithInvestmentPrimary(){
   return cy.xpath(this.RetirementAgeFundwithInvestmentPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setMedicareEligibilityAgeFundwithInvestmentPrimary(){
   return cy.xpath(this.MedicareEligibilityAgeFundwithInvestmentPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setLifeExpectancyFundwithInvestmentPrimary(){
   return cy.xpath(this.LifeExpectancyFundwithInvestmentPrimary).first()  
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setTotalPresentValueExpensesLTCEPrimary(){
   return cy.xpath(this.TotalPresentValueExpensesLTCEPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setTotalFutureValueExpensesLTCEPrimary(){
   return cy.xpath(this.TotalFutureValueExpensesLTCEPrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setAdultDayCarePresentValuePrimary() {
    return cy
    .xpath(this.AdultDayCarePresentValuePrimary)
    .invoke('text')
    .then((text) => text.trim());
  }

setInHomeCarePresentValuePrimary() {
    return cy
    .xpath(this.InHomeCarePresentValuePrimary)
    .invoke('text')
    .then((text) => text.trim());
}
setNursingCarePresentValuePrimary() {
  return cy
    .xpath(this.NursingCarePresentValuePrimary)
    .invoke('text')
    .then((text) => text.trim());
}

  setAdultDayCareFutureValuePrimary(){
   return cy.xpath(this.AdultDayCareFutureValuePrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setInHomeCareFutureValuePrimary(){
   return cy.xpath(this.InHomeCareFutureValuePrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setNursingCareFutureValuePrimary(){
   return cy.xpath(this.NursingCareFutureValuePrimary) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setPresentValueAtRetirementSpouse(){
   return cy.xpath(this.PresentValueAtRetirementSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setTotalHealthcareExpensesSpouse(){
   return cy.xpath(this.TotalHealthcareExpensesSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setAgeSpouse(){
   return cy.xpath(this.AgeSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setRetirementAgeSpouse(){
   return cy.xpath(this.RetirementAgeSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setLifeExpectancySpouse(){
   return cy.xpath(this.LifeExpectancySpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setHealthProfileSpouse(){
   return cy.xpath(this.HealthProfileSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setRetirementYearSpouse(){
   return cy.xpath(this.RetirementYearSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setMedicareEligibleYearSpouse(){
   return cy.xpath(this.MedicareEligibleYearSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setSupplementSpouse(){
   return cy.xpath(this.SupplementSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setExpectedIncomeDuringMedicareSpouse(){
   return cy.xpath(this.ExpectedIncomeDuringMedicareSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setTaxFilingStatusSpouse(){
   return cy.xpath(this.TaxFilingStatusSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setPVExpenseFundwithInvestmentSpouse(){
   return cy.xpath(this.PVExpenseFundwithInvestmentSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setRetirementAgeFundwithInvestmentSpouse(){
   return cy.xpath(this.RetirementAgeFundwithInvestmentSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setMedicareEligibilityAgeFundwithInvestmentSpouse(){
   return cy.xpath(this.MedicareEligibilityAgeFundwithInvestmentSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setLifeExpectancyFundwithInvestmentSpouse(){
   return cy.xpath(this.LifeExpectancyFundwithInvestmentSpouse).eq(1) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setTotalPresentValueExpensesLTCESpouse(){
   return cy.xpath(this.TotalPresentValueExpensesLTCESpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setTotalFutureValueExpensesLTCESpouse(){
   return cy.xpath(this.TotalFutureValueExpensesLTCESpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setAdultDayCarePresentValueSpouse(){
   return cy.xpath(this.AdultDayCarePresentValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setInHomeCarePresentValueSpouse(){
   return cy.xpath(this.InHomeCarePresentValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
 setNursingCarePresentValueSpouse(){
   return cy.xpath(this.NursingCarePresentValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setAdultDayCareFutureValueSpouse(){
   return cy.xpath(this.AdultDayCareFutureValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setInHomeCareFutureValueSpouse(){
   return cy.xpath(this.InHomeCareFutureValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
  setNursingCareFutureValueSpouse(){
   return cy.xpath(this.NursingCareFutureValueSpouse) 
   .invoke ('text')
   .then((text)=>{
   return text.trim();  
  }) 
 }
}  
export default Consistency





