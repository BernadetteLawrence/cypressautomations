import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage123";

describe('Medicare', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        //const Medicare = new Medicare();

        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner');
        cy.fixture('FinancialPlanner').then((data) => {

            LoginPage.setEMailUserID("data.UserID");
            LoginPage.setPassword("data.Password");
            LoginPage.clickLogin();
            PlannerPage.setClient();
            PersonalPage.setClientEmail("data.ClientEmail");
            PersonalPage.setFirstName("data.FirstName");
            PersonalPage.setLastName("data.LastName");
            PersonalPage.setGender("data.Gender");
            PersonalPage.setMonthofBirth("data.MonthofBirth");
            PersonalPage.setYearofBirth("data.YearofBirth");
            PersonalPage.setHealthProfile("data.HealthProfile");
            PersonalPage.setLifeExpectancy("data.LifeExpectancy");
            PersonalPage.setTobaccoUser("data.TobaccoUser");
            PersonalPage.setRetirementAge("data.RetirementAge");
            PersonalPage.setCurrentZipCode("data.CurrentZipcode");
            PersonalPage.setRetirementZipCode("data.RetirementZipcode");
            PersonalPage.setTaxFilingStatus("data.TaxFilingStatus");
            PersonalPage.clickIncludeSpouse("data.SpouseFirstName");
            PersonalPage.setSpouseFirstName("SpouseLastName");
            PersonalPage.setSpouseLastName("data.SpouseLastName");
            PersonalPage.setSpouseGender("data.SpouseGender");
            PersonalPage.setSpouseMonthofBirth("data.SpouseMonthofBirth");
            PersonalPage.setSpouseYearofBirth("data.SpouseYearofBirth");
            PersonalPage.setSpouseHealthProfile("data.SpouseHealthProfile");
            PersonalPage.setSpouseLifeExpectancy("data.SpouseLifeExpectancy");
            PersonalPage.setSpouseTobaccoUser("data.SpouseTobaccoUser");
            PersonalPage.setSpouseRetirementAge("data.SpouseRetirementAge");
            PersonalPage.setSpouseCurrentZipCode("data.SpouseCurrentZipcode");
            PersonalPage.setSpouseRetirementZipCode("data.SpouseRetirementZipcode");
            PersonalPage.clickMedicare(); // will click the Medicare tab
            PersonalPage.setTaxfillingstatusAlert();
             PersonalPage.clickMedicare();
            // cy.url().should('not.include', '/login');

        })
    } 
    beforeEach(() => {
        // Create/restore the session before each test
        cy.session('login', loginSetup, {
            validate: () => {
                cy.url().should('not.include', '/login');
            }
        });
        cy.visit('https://publicplan.aivante.net/New_FP/Dzee/financial_planner/planner#create_new_plan');
    });


    
     it('TC_FP_MEDI_01', () => {                //landing on medicareTab ;
       
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
})
it('TC_FP_MEDI_02', () => {                //tax filing label display
       
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.CheckTaxFilingPrimary()

})


 it('TC_FP_MEDI_03', () => {                //tax filing status
       
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.CheckTaxFilingPrimary();
        Medicare.CheckTaxFilingPrimaryStatus();
 })
    it('TC_FP_MEDI_04', () => {                //primary name label display
        
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.CheckPrimaryNameDisplay();
})

it('TC_FP_MEDI_05', () => {            //primary name

     Medicare.landingmedicaretab();
     Medicare.clickmedicaretab();
     Medicare.checkPrimaryName();

})
it('TC_FP_MEDI_06', () => {  //year and age display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckMedicareYearAndAge();
})
it('TC_FP_MEDI_07', () => {  //year and life expectancy age display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.selectYearAndLifeExpectancyAge();
})
it('TC_FP_MEDI_08', () => {  //Magi name display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.verifymagitiername();
})
it('TC_FP_MEDI_09', () => {  //Magi tier option
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.verifymagitiername();
    //Medicare.selectmagitiername();
    Medicare.LengthOfMagitierOption();
})
it('TC_FP_MEDI_10', () => {  //choose magi tier option 1

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOption();
}) 

/*it('Iterates through elements and performs actions', () => {
  //  cy.visit('https://example.com'); // Replace with your URL

    Medicare.getElements().then((elements) => {
      for (let i = 0; i < elements.length; i++) {
        Medicare.clickElement(i); // Click each element
        cy.log(`Clicked element at index ${i}`);
      }
    });
  });*/
it('TC_FP_MEDI_11', () => {  //Part A label and checkbox display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckPartALabel();
    Medicare.CheckPartACheckBox();
    //Medicare.clickPartACheckBox();

})
it('TC_FP_MEDI_12', () => {  //Monthly premium for A display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    //Medicare.CheckPartALabel();
   // Medicare.CheckPartACheckBox();
    Medicare.MonthlyPremiumforADisplay();
})
it('TC_FP_MEDI_13', () => {  //Part B label and checkbox display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckPartBLabel();
    Medicare.CheckPartBCheckBox();  
})

it('TC_FP_MEDI_14', () => {  //Monthly premium for B display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.MonthlyPremiumforBDisplay();   
})

it('TC_FP_MEDI_15', () => {  //Part D label and checkbox display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckPartDLabel();
    Medicare.CheckPartDCheckBox();  
})

it('TC_FP_MEDI_16', () => {  //Monthly premium for D display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.MonthlyPremiumforDDisplay();       
})

it('TC_FP_MEDI_17', () => {  //Annual OOP Cost for D display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.AnnualOOPCostForDDisplay();        
})

it('TC_FP_MEDI_18', () => {  //Supplement Plan (Medigap) label and dropdown display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
    Medicare.clickSupplementPlanDropDown();
})


it('TC_FP_MEDI_19', () => {    //select No Medigap option 
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
     Medicare.clickSupplementPlanDropDown();

    Medicare.selectNoMedigapOption();
    
    cy.wait(1000);
})
it('TC_FP_MEDI_20', () => {  //Select Supplement Plan G  
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
    Medicare.clickSupplementPlanDropDown();
    Medicare.SelectSupplementPlanG();
    //Medicare.viewMonthlyPremiumforSupplementPlanGDisplay();

})
it('TC_FP_MEDI_21', () => {  //Select Supplement Plan G and verify Monthly premium for Supplement Plan G display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
    Medicare.clickSupplementPlanDropDown();
    Medicare.SelectSupplementPlanG();
    Medicare.viewMonthlyPremiumforSupplementPlanGDisplay();

})

it('TC_FP_MEDI_22', () => {  //Select Supplement Plan N  

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
    Medicare.clickSupplementPlanDropDown();
    Medicare.SelectSupplementPlanN();
    //Medicare.MonthlyPremiumforSupplementPlanNDisplay();     
    
})
it('TC_FP_MEDI_23', () => {  //Select Supplement Plan N and verify Monthly premium for Supplement Plan N display

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSupplementPlanLabel();
    Medicare.clickSupplementPlanDropDown();
    Medicare.SelectSupplementPlanN();
    Medicare.MonthlyPremiumforSupplementPlanNDisplay();     
    
})
it('TC_FP_MEDI_24', () => {  //Dental label and checkbox display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
});

it('TC_FP_MEDI_25', () => {  //Dental checkbox
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();    
    Medicare.CheckDentalCheckBox();
});

it('TC_FP_MEDI_26', () => {  //Dental dropdown display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
    Medicare.clickDentalDropDown();
})
it('TC_FP_MEDI_27', () => {  //Select Dental profile
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
    Medicare.clickDentalDropDown();
    Medicare.SelectDentalProfile();
});
it('TC_FP_MEDI_28', () => {  //Verify Monthly premium for Dental display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
    Medicare.clickDentalDropDown();
    Medicare.SelectDentalProfile();
    Medicare.viewMonthlyPremiumforDental();
});

it('TC_FP_MEDI_29', () => {  //Verify Co-Insurance for Dental display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
    Medicare.clickDentalDropDown();
    Medicare.SelectDentalProfile();
    Medicare.viewCoInsuranceforDental();    
});

it('TC_FP_MEDI_30', () => {  //Verify Annual Max for Dental display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckDentalLabel();
    Medicare.clickDentalDropDown();
    Medicare.SelectDentalProfile();
    Medicare.viewAnnualMaxforDental();
});
it('TC_FP_MEDI_31', () => {  //Spouse  label display
       
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.CheckSpouseLabel();
});
it('TC_FP_MEDI_32', () => {                //spouse name  display
       
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.checkSpouseNameDisplay();  
});
it('TC_FP_MEDI_33', () => {            //spouse medicare year and age display
        Medicare.landingmedicaretab();
        Medicare.clickmedicaretab();
        Medicare.CheckMedicareYearAndAgeSpouse(); 
});

it('TC_FP_MEDI_34', () => {  //Magi tier option Lenghth display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.verifymagitiernameSpouse();
    Medicare.LengthOfMagitierOptionSpouse();
})
it('TC_FP_MEDI_35', () => {  //choose magi tier option 1

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse();
}) 

it('TC_FP_MEDI_36', () => {  //choose magi tier option 2

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse2();
}) 
it('TC_FP_MEDI_37', () => {  //choose magi tier option 3

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse3();

}) 
it('TC_FP_MEDI_38', () => {  //choose magi tier option 4

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse4();

}) 
it('TC_FP_MEDI_39', () => {  //choose magi tier option 5

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse5();
}) 
it('TC_FP_MEDI_40', () => {  //choose magi tier option 6

    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.chooseMagitierOptionSpouse6();
})


it('TC_FP_MEDI_41', () => {  //Spouse Part A label and checkbox display
    Medicare.landingmedicaretab();
    Medicare.clickmedicaretab();
    Medicare.CheckSpousePartALabel();
    Medicare.CheckSpousePartACheckBox();
})


});

