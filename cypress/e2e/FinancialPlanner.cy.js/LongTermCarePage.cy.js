import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/MedicarePage";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";
import Longtermcare from "../../PageObjects/FinancialPlannerPOM/LongTermCarePage"; 

describe('longtermcare', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage =  Medicare;
        const PreMedicarePage = new PreMedicare();


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
            MedicarePage.clickmedicaretab();
            MedicarePage.CheckMedicareYearAndAge();
            MedicarePage.selectYearAndLifeExpectancyAge();
            MedicarePage.chooseMagitierOption();
            PreMedicarePage.clickpremedicarepage();
            PreMedicarePage.clickpersonalpage();
            PreMedicarePage.clickpremedicarepage();
            PreMedicarePage.setplantypeoption();
            PreMedicarePage.viewplantype();
            PreMedicarePage.chooseplantypeGoldEPO();
            PreMedicarePage.viewspouseplantype();
            PreMedicarePage.choosespouseplantypeGoldEPO();



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


     it('TC_FP_LongTermCare_01', () => {                  // LongTermCare Landing Page
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
               
     })
     it('TC_FP_LongTermCare_02', () => {                     //Tax filing display
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checktaxfilingdisplay();      
     })
     it('TC_FP_LongTermCare_03', () => {                  //Tax filing Status
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checktaxfilingstatus();      
     })
      it('TC_FP_LongTermCare_04', () => {                  //Primary Display
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkprimarydisplay();      
     })
      it('TC_FP_LongTermCare_05', () => {                 //Primary Name
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkprimaryname();      
     })
     it('TC_FP_LongTermCare_06', () => {                  //QualityofcarePrimary
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkqualityofcarename();      
     })
      it('TC_FP_LongTermCare_07', () => {                 //QualityofCareOptions
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.verifyqualityofcareoption();      
     })
     it('TC_FP_LongTermCare_08', () => {                 //SelectQualityofCareOptions
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();      
     })
     
     it('TC_FP_LongTermCare_09', () => {                     
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkqualityofcareoption();
        LongTermCarePage.selectqualityofcareoption();      
     })
     it('TC_FP_LongTermCare_10', () => {                 //YearsofAdultDayCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofadultdaycare();  
     })
     it('TC_FP_LongTermCare_11', () => {                    //YearsofAdultDayCareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofadultdaycare(); 
        LongTermCarePage.verifyyearsofadultdaycareoption(); 
     })
     it('TC_FP_LongTermCare_12', () => {                    //YearsofAdultDayCareoptionlength
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofadultdaycare(); 
        LongTermCarePage.verifyyearsofadultdaycareoption(); 
        LongTermCarePage.checkyearsofadultdaycareoption();    
        
     })
     it('TC_FP_LongTermCare_13', () => {                 //selectYearsofAdultDayCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofadultdaycare(); 
        LongTermCarePage.verifyyearsofadultdaycareoption(); 
        LongTermCarePage.checkyearsofadultdaycareoption();    
        LongTermCarePage.selectyearsofadultdaycareoption();
     })
     it('TC_FP_LongTermCare_14', () => {              //YearsofIn-HomeCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofinhomecare();  
     })
     it('TC_FP_LongTermCare_15', () => {                 //YearsofIn-HomeCareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofinhomecare(); 
        LongTermCarePage.verifyyearsofinhomecareoption(); 
     })
     it('TC_FP_LongTermCare_16', () => {                    //YearsofIn-HomeCarelength
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofinhomecare(); 
        LongTermCarePage.verifyyearsofinhomecareoption(); 
        LongTermCarePage.checkyearsofinhomecareoption();    
        
     })
     it('TC_FP_LongTermCare_17', () => {                 //selectYearsofIn-HomeCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.checkyearsofinhomecare();
        LongTermCarePage.verifyyearsofinhomecareoption(); 
        LongTermCarePage.checkyearsofinhomecareoption();    
        LongTermCarePage.selectyearsofinhomecareoption();
     })
     it('TC_FP_LongTermCare_18', () => {               //YearsofNursingCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofnursingcare();  
     })
     it('TC_FP_LongTermCare_19', () => {                //YearsofNursingCareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofnursingcare(); 
        LongTermCarePage.verifyyearsofnursingcareoption(); 
     })
     it('TC_FP_LongTermCare_20', () => {                  //YearsofNursingCarelength 
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.checkyearsofnursingcare(); 
        LongTermCarePage.verifyyearsofnursingcareoption(); 
        LongTermCarePage.checkyearsofnursingcareoption();    
        
     })
     it('TC_FP_LongTermCare_21', () => {               //selectYearsofNursingCare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();  
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();
        LongTermCarePage.checkyearsofnursingcare();
        LongTermCarePage.verifyyearsofnursingcareoption(); 
        LongTermCarePage.checkyearsofnursingcareoption();    
        LongTermCarePage.selectyearsofnursingcareoption();
     })
     it('TC_FP_LongTermCare_22', () => {               //help icon
       const LongTermCarePage = new Longtermcare();
       LongTermCarePage.setlongtermcare();
       LongTermCarePage.verifyhelpicon();
     })
     it('TC_FP_LongTermCare_23', () => {               //spousedisplay
       const LongTermCarePage = new Longtermcare();
       LongTermCarePage.setlongtermcare();
       LongTermCarePage.verifyspousedisplay();
     })
     it('TC_FP_LongTermCare_24', () => {                //spousename
       const LongTermCarePage = new Longtermcare();
       LongTermCarePage.setlongtermcare();
       LongTermCarePage.clickpremedicarepage();
       LongTermCarePage.setlongtermcare();
       LongTermCarePage.selectqualityofcareoption(); 
       LongTermCarePage.verifyspousedisplay();
       LongTermCarePage.verifyspousename();
     })
    it('TC_FP_LongTermCare_25', () => {                 //spouseQualityofcare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcarename();      
     })
    it('TC_FP_LongTermCare_26', () => {               //spouseQualityofcareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.verifyspousequalityofcareoption();      
     })
    it('TC_FP_LongTermCare_27', () => {                  //SelectspouseQualityofcare       
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectspousequalityofcareoption();      
     })
     
     it('TC_FP_LongTermCare_28', () => {             //spouseyearsofAdultDaycare  
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.checkspouseyearsofadultdaycaredisplay();      
     })
    it('TC_FP_LongTermCare_29', () => {               //spouseyearsofAdultDaycareoption  
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofadultdaycaredisplay(); 
        LongTermCarePage.verifyspouseyearsofadultdaycareoption(); 
     })
     it('TC_FP_LongTermCare_30', () => {               //spouseyearsofAdultDaycarelength  
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofadultdaycaredisplay(); 
        LongTermCarePage.verifyspouseyearsofadultdaycareoption(); 
        LongTermCarePage.checkspouseyearsofadultdaycareoption();    
        
     })
     it('TC_FP_LongTermCare_31', () => {                //selctspouseyearsofAdultDaycare  
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofadultdaycaredisplay(); 
        LongTermCarePage.verifyspouseyearsofadultdaycareoption(); 
        LongTermCarePage.checkspouseyearsofadultdaycareoption();    
        LongTermCarePage.selectspouseyearsofadultdaycareoption();


    })
    it('TC_FP_LongTermCare_32', () =>{                    //spouseyearsofIn-Homecare  
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofinhomecaredisplay();
    })
    it('TC_FP_LongTermCare_33', () =>{                    //spouseyearsofIn-Homecareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofinhomecaredisplay();
        LongTermCarePage.verifyspouseinhomecareoption();
       
    })
     it('TC_FP_LongTermCare_34', () =>{                   //spouseyearsofIn-Homecarelength
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofinhomecaredisplay();
        LongTermCarePage.verifyspouseinhomecareoption();
        LongTermCarePage.checklengthofspouseinhomecare();
       
    })
     it('TC_FP_LongTermCare_35', () =>{                   //selectspouseyearsofIn-Homecare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspouseyearsofinhomecaredisplay();
        LongTermCarePage.verifyspouseinhomecareoption();
        LongTermCarePage.checklengthofspouseinhomecare();
        LongTermCarePage.selectspouseinhomecareoption();
    })
     it('TC_FP_LongTermCare_36', () =>{                //spouseyearsofNursingcare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspousenursingcaredisplay();
    })
     it('TC_FP_LongTermCare_37', () =>{               //spouseyearsofNursingcareoption
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspousenursingcaredisplay();
        LongTermCarePage.verifyspousenursingcareoption();
    })
     it('TC_FP_LongTermCare_38', () =>{            //spouseyearsofNursingcarelength
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspousenursingcaredisplay();
        LongTermCarePage.verifyspousenursingcareoption();
        LongTermCarePage.checklengthofspousenursingcareoption();
    })
     it('TC_FP_LongTermCare_39', () =>{            //selectspouseyearsofNursingcare
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.checkspousequalityofcareoption();  
        LongTermCarePage.checkspousenursingcaredisplay();
        LongTermCarePage.verifyspousenursingcareoption();
        LongTermCarePage.checklengthofspousenursingcareoption();
        LongTermCarePage.selectspousenursingcareoption();
    })
    it('TC_FP_LongTermCare_40', () =>{                //RunAnalysis
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickrunanalysis();

    })
    it('TC_FP_LongTermCare_41', () =>{             //RunAnalysis-popup message
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickrunanalysis();
        LongTermCarePage.verifypopupmessage();

    })
     it('TC_FP_LongTermCare_42', () =>{            //RunAnalysis-Edit INputs
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickrunanalysis();
        LongTermCarePage.clickeditinputs();

    })
    it('TC_FP_LongTermCare_43', () =>{             //RunAnalysis- RunAnalysis
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickrunanalysis();
        LongTermCarePage.clickrunanalysisbutton();

    })
     it('TC_FP_LongTermCare_44', () =>{               //RunAnalysis-Cancel button
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickcancelbutton();

    })
     it('TC_FP_LongTermCare_45', () =>{               //RunAnalysis-popupmessage(cancel)
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickcancelbutton();
        LongTermCarePage.verifypopupmessage();
    })
    it('TC_FP_LongTermCare_46', () =>{               //RunAnalysis-'OK'
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickcancelbutton();
        LongTermCarePage.verifypopupmessage();
        LongTermCarePage.clickokbutton();
    })
    it('TC_FP_LongTermCare_47', () =>{               //RunAnalysis-'Cancel'
        const LongTermCarePage = new Longtermcare();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.clickmedicaretab();
        LongTermCarePage.clickpremedicarepage();
        LongTermCarePage.setlongtermcare();
        LongTermCarePage.selectqualityofcareoption();
        LongTermCarePage.selectyearsofadultdaycareoption();
        LongTermCarePage.selectyearsofinhomecareoption();  
        LongTermCarePage.selectyearsofnursingcareoption();
        LongTermCarePage.checkspousequalityofcareoption();
        LongTermCarePage.selectspouseyearsofadultdaycareoption();  
        LongTermCarePage.selectspouseinhomecareoption();
        LongTermCarePage.selectspousenursingcareoption();
        LongTermCarePage.clickcancelbutton();
        LongTermCarePage.verifypopupmessage();
        LongTermCarePage.clickcancelbuttoninside();
    })





})
