import Login from "../../PageObjects/FinancialPlannerPOM/LoginPage";
import Planner from "../../PageObjects/FinancialPlannerPOM/PlannerPage";
import Personal from "../../PageObjects/FinancialPlannerPOM/PersonalPage";
import Medicare from "../../PageObjects/FinancialPlannerPOM/Medicare";
import PreMedicare from "../../PageObjects/FinancialPlannerPOM/PreMedicarePage";

describe('PreMedicare', () => {
    const loginSetup = () => {
        const LoginPage = new Login();
        const PlannerPage = new Planner();
        const PersonalPage = new Personal();
        const MedicarePage = Medicare;


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
            MedicarePage.CheckPartALabel();
            MedicarePage.CheckPartACheckBox();
            MedicarePage.SelectDentalProfile();
            MedicarePage.CheckMedicareYearAndAgeSpouse();
            MedicarePage.selectYearAndLifeExpectancyAgeSpouse();

          
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

   it('TC_FP_PRE-MEDI_01', () => { //pre-medicare landing
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();

    })
    it('TC_FP_PRE-MEDI_02', () => { //check text contain pre-medicare
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();

    })
    it('TC_FP_PRE-MEDI_03', () => { //check text contain tax filing
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.settaxfilingprimary();


    })
    it('TC_FP_PRE-MEDI_04', () => { //check tax filing status
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.settaxfilingind();

    })

    it('TC_FP_PRE-MEDI_05', () => { //check text contains primary
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setprimary();

    })
    it('TC_FP_PRE-MEDI_06', () => { //check primary contains text 'paul'
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setprimaryname();

    })
    it('TC_FP_PRE-MEDI_07', () => { //dropdown options
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setplantypeoption();

    })
    it('TC_FP_PRE-MEDI_08', () => { //check all the dropdown are visible
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();

    })
    it('TC_FP_PRE-MEDI_09', () => { //check plantype length according to the provided zipcode
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
    })
    it('TC_FP_PRE-MEDI_10', () => { //choose plan type Gold EPO
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();

    })
    it('TC_FP_PRE-MEDI_11', () => { //choose plan type Silver EPO
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeSilverEPO();

    })
    it('TC_FP_PRE-MEDI_12', () => { //check tooltip
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.checktooltipicon();

    })
    it('TC_FP_PRE-MEDI_13', () => { //check monthly premium primary
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkmonthlypremiumpri();
    })
    it('TC_FP_PRE-MEDI_14', () => { //check monthly premium value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkmonthlypremiumpri();
        PreMedicarePage.checkmonthlypremiumvalue();
    })
    it('TC_FP_PRE-MEDI_15', () => { //check Annual Deductible
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkannualdeductiblepri();
    })
    it('TC_FP_PRE-MEDI_16', () => { //check Annual Deductible value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkannualdeductiblepri();
        PreMedicarePage.checkannualdeductiblevaluepri();
    })
    it('TC_FP_PRE-MEDI_17', () => { //check Annual OOP
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkannualooppri();
    })
    it('TC_FP_PRE-MEDI_18', () => { //check Annual OOP value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkannualooppri();
        PreMedicarePage.checkannualoopvaluepri();
    })
    it('TC_FP_PRE-MEDI_19', () => { //check co-insurance
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkcoinsurancepri();
    })
    it('TC_FP_PRE-MEDI_20', () => { //choose co-insurance value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkcoinsurancepri();
        PreMedicarePage.checkcoinsurancevaluepri();
    })
    it('TC_FP_PRE-MEDI_21', () => {
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewplantype();
        PreMedicarePage.viewplantypelength();
        PreMedicarePage.chooseplantypeGoldEPO();
        PreMedicarePage.checkmonthlypremiumpri();
        PreMedicarePage.checkmonthlypremiumvalue();
        PreMedicarePage.checkcoinsurancevaluepri();
        PreMedicarePage.checkannualdeductiblepri();
        PreMedicarePage.checkannualdeductiblevaluepri();
        PreMedicarePage.checkannualooppri();
        PreMedicarePage.checkannualoopvaluepri();
        PreMedicarePage.checkcoinsurancepri();
        PreMedicarePage.checkcoinsurancevaluepri();
    })
    it('TC_FP_PRE-MEDI_22', () => { //spouse field is enabled
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
    })
    it('TC_FP_PRE-MEDI_23', () => { //check text contains spouse
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.setspouse();
    })
    it('TC_FP_PRE-MEDI_24', () => { //check text contains spouse name 'rose'
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setspouse();
        PreMedicarePage.setspousename();
    })

    it('TC_FP_PRE-MEDI_25', () => { //view plan type options
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setplantypeoptionspouse();
    })
    it('TC_FP_PRE-MEDI_26', () => { //view spouse plan type option
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
    })
    it('TC_FP_PRE-MEDI_27', () => { //check spouse plan type length
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
    })

    it('TC_FP_PRE-MEDI_28', () => { //choose paln type as "GOld EPO"
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
    })
    it('TC_FP_PRE-MEDI_29', () => { //Choose plan type as"Silver EPO"
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeSilverEPO();
    })

    it('TC_FP_PRE-MEDI_30', () => { //check spouse tooltip
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.checktooltipicon();
    })
    it('TC_FP_PRE-MEDI_31', () => { //check spouse monthly premium text 
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkmonthlypremiumspouse();
    })
    it('TC_FP_PRE-MEDI_32', () => { //check spouse monthly premium value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkmonthlypremiumspouse();
        PreMedicarePage.checkmonthlypremiumvaluespouse();
    })
    it('TC_FP_PRE-MEDI_33', () => { //check Annual Deductible text
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        //PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkannualdeductiblespouse();

    })

    it('TC_FP_PRE-MEDI_34', () => { //check spouse Annual Deductible value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkannualdeductiblespouse();
        PreMedicarePage.checkannualdeductiblevaluespouse();
    })
    it('TC_FP_PRE-MEDI_35', () => { //check spouse Annual OOP text
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkannualoopspouse();

    })
    it('TC_FP_PRE-MEDI_36', () => { //check spouse Annual OOP value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkannualoopspouse();
        PreMedicarePage.checkannualoopvaluespouse();
    })
    it('TC_FP_PRE-MEDI_37', () => { //check spouse coinsurance text 
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        //PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkcoinsurancespouse();

    })
    it('TC_FP_PRE-MEDI_38', () => { //check spouse coinsurance value
        const PreMedicarePage = new PreMedicare();
        PreMedicarePage.verifyspousefield();
        PreMedicarePage.clickpersonalpage();
        PreMedicarePage.clickpremedicarepage();
        // PreMedicarePage.setplantypeoptionspouse();
        PreMedicarePage.viewspouseplantype();
        PreMedicarePage.viewspouseplantypelength();
        PreMedicarePage.choosespouseplantypeGoldEPO();
        PreMedicarePage.checkcoinsurancespouse();
        PreMedicarePage.checkcoinsurancevaluespouse();
    })

})