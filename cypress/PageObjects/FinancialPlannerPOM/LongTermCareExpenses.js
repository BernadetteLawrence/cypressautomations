class LongTermCareExpenses {
    longtermcareexpenseslinkEle="a[class='nav-link ui-link active']";
    primaryandnameEle="div[class='col-6'] h6:nth-child(1)";
    PrimaryTotalPresentValueExpensesEle="div[id='long_term_care_expenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1) h6:nth-child(1)";
    PrimaryTotalFutureValueExpensesEle="div[id='long_term_care_expenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1) h6:nth-child(1)";
    PrimaryFutureValueYaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(9) > text:nth-child(1) > tspan:nth-child(1)";
    PrimaryYearXaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(8) > text:nth-child(1) > tspan:nth-child(1)";
    PrimaryBarGraphEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > rect:nth-child(3)";
    PrimaryRedAdultDayCareEle=".highcharts-point[x='30.5'][y='164.5']";
    PrimaryBlueInHomeCareEle=".highcharts-point[x='133.5'][y='72.5']";
    PrimaryGreenNursingCareEle=".highcharts-point[x='236.5'][y='50.5']";
    PrimaryTableEle="table[class='table table-bordered table-striped table-fixed-header mb-0']";
    PrimaryRowEle="table[class='table table-bordered table-striped table-fixed-header mb-0']>thead>tr";
    PrimaryAllRowEle="table[class='table table-bordered table-striped table-fixed-header mb-0']>tbody>tr";
    PrimaryRowColumnEle="table[class='table table-bordered table-striped table-fixed-header mb-0']>tbody>tr>td";
    SpouseandnameEle="div[class='col-6 ltce-spousetable'] h6:nth-child(1)";
    SpouseTotalPresentValueExpensesEle="body div[id='long_term_care_expenses'] div[class='wrapper yearly-summary create-plan-wrapper row-offcanvas clearfix toggled'] div[class='content output-plan-content'] div[class='tab-content'] div[id='LongTermCareExpenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1)";
    SpouseTotalFutureValueExpensesEle="body div[id='long_term_care_expenses'] div[class='wrapper yearly-summary create-plan-wrapper row-offcanvas clearfix toggled'] div[class='content output-plan-content'] div[class='tab-content'] div[id='LongTermCareExpenses'] div[class='row justify-content-center text-center mt-4 mb-3'] div:nth-child(1)";
    SpouseFutureValueYaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(9) > text:nth-child(1) > tspan:nth-child(1)";
    SpouseYearXaxisEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(8) > text:nth-child(1) > tspan:nth-child(1)";
    SpouseBarGraphEle="body > div:nth-child(21) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > rect:nth-child(3)";
    SpouseRedAdultDayCareEle=".highcharts-point[x='30.5'][y='159.5']";
    SpouseBlueInHomeCareEle=".highcharts-point[x='133.5'][y='56.5']";
    SpouseGreenNursingCareEle=".highcharts-point[x='236.5'][y='31.5']";
    SpouseTableEle=".table.table-bordered.table-striped.table-fixed-header.OutputPSTable2nd.ltce-spousetable.mb-0";
    SpouseRowEle=".table.table-bordered.table-striped.table-fixed-header.OutputPSTable2nd.ltce-spousetable.mb-0>thead";
    SpouseAllRowEle=".table.table-bordered.table-striped.table-fixed-header.OutputPSTable2nd.ltce-spousetable.mb-0>tbody>tr";
    SpouseRowColumnEle=".table.table-bordered.table-striped.table-fixed-header.OutputPSTable2nd.ltce-spousetable.mb-0>tbody>tr>td";
     constructor() {
    // container for the Long Term Care Expenses section (use whichever id exists)
    this.panel = '#LongTermCareExpenses, #long_term_care_expenses';
  }

  // helper: 0 = Primary (left), 1 = Spouse (right)
  getChart(idx = 0) {
    return cy.get(this.panel).find('svg').eq(idx);
  }
    clicklongtermcareexpenseslink(longtermcareexpenseslink){
        cy.get(this.longtermcareexpenseslinkEle)
        .click();
        cy.wait(4000)
    }
    viewprimaryandname(primaryandname){
        cy.get(this.primaryandnameEle).should("be.visible");
        cy.wait(4000);
    }
    viewPrimaryTotalPresentValueExpenses(PrimaryTotalPresentValueExpenses){
        cy.get(this.PrimaryTotalPresentValueExpensesEle).should("be.visible");
        cy.wait(4000);
    }
     viewPrimaryTotalFutureValueExpenses(TotalPrimaryFutureValueExpenses){
        cy.get(this.PrimaryTotalFutureValueExpensesEle).should("be.visible");
        cy.wait(4000);
    }
      viewPrimaryBarGraph(PrimaryBarGraph){
      this.getChart(0).find('.highcharts-series rect.highcharts-point:visible')
      .should('have.length.greaterThan', 0);
      cy.wait(4000);
    }
    viewPrimaryFutureValueYaxis(PrimaryFutureValueYaxis){
        this.getChart(0).contains('text, tspan', /Future/i).should('exist');
        this.getChart(0).contains('text, tspan', /Value/i).should('exist');
        cy.wait(4000);
    }
    viewPrimaryYearXaxis(PrimaryYearXaxis){
       this.getChart(0).contains('text, tspan', /^Year$/i).should('exist');
       cy.wait(4000);
    }
     
     viewPrimaryRedAdultDayCare(PrimaryRedAdultDayCare){
        cy.contains('PRIMARY', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'Adult Day Care'));
        cy.wait(4000);
    }
    viewPrimaryBlueInHomeCare(PrimaryBlueInHomeCare){
        cy.contains('PRIMARY', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'In Home Care'));
        cy.wait(4000);
    }
    viewPrimaryGreenNursingCare(PrimaryGreenNursingCare){
        cy.contains('PRIMARY', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'Nursing Care'));
        cy.wait(4000);
    }
    viewPrimaryTable(PrimaryTable){
        cy.get(this.PrimaryTableEle).should("be.visible");
        cy.wait(4000);
    }
    viewPrimaryRow(PrimaryRow){
        cy.get(this.PrimaryRowEle).should("be.visible").should("have.length", "1");
        cy.wait(4000);
    }
    viewPrimaryRowColumn(PrimaryRowColumn){
        cy.get(this.PrimaryRowColumnEle).should("be.visible").should("have.length", "22");
        cy.wait(4000);
    }
    viewPrimaryRow(PrimaryRow){
        cy.get(this.PrimaryRowEle)
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within(()=>
            {
                cy.get("th").each( ($col, index, $cols)=>{
                cy.log($col.text());
                })
            })
        })
        }
        viewPrimaryAllRow(PrimaryAllRow){
        cy.get(this.PrimaryAllRowEle)
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within(()=>
            {
                cy.get("td").each( ($col, index, $cols)=>{
                cy.log($col.text());
                })
            })
        })
        }
        viewSpouseandname(Spouseandname){
        cy.get(this.SpouseandnameEle).should("be.visible");
        cy.wait(4000);
    }
    viewSpouseTotalPresentValueExpenses(SpouseTotalPresentValueExpenses){
        cy.get(this.SpouseTotalPresentValueExpensesEle).should("be.visible");
        cy.wait(4000);
    }
     viewSpouseTotalFutureValueExpenses(TotalSpouseFutureValueExpenses){
        cy.get(this.SpouseTotalFutureValueExpensesEle).should("be.visible");
        cy.wait(4000);
    }
      viewSpouseBarGraph(SpouseBarGraph){
      this.getChart(0).find('.highcharts-series rect.highcharts-point:visible')
      .should('have.length.greaterThan', 0);
      cy.wait(4000);
    }
    viewSpouseFutureValueYaxis(SpouseFutureValueYaxis){
        this.getChart(0).contains('text, tspan', /Future/i).should('exist');
        this.getChart(0).contains('text, tspan', /Value/i).should('exist');
        cy.wait(4000);
    }
    viewSpouseYearXaxis(SpouseYearXaxis){
       this.getChart(0).contains('text, tspan', /^Year$/i).should('exist');
       cy.wait(4000);
    }
     
     viewSpouseRedAdultDayCare(SpouseRedAdultDayCare){
        cy.contains('SPOUSE', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'Adult Day Care'));
        cy.wait(4000);
    }
    viewSpouseBlueInHomeCare(SpouseBlueInHomeCare){
        cy.contains('SPOUSE', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'In Home Care'));
        cy.wait(4000);
    }
    viewSpouseGreenNursingCare(SpouseGreenNursingCare){
        cy.contains('SPOUSE', { matchCase: false, timeout: 20000 }).scrollIntoView();
        this.getChart(0)
        .find('.highcharts-series.highcharts-series-0 rect.highcharts-point:visible')
        .should('have.length.greaterThan', 0)
        .each($bar => cy.wrap($bar).should('be.visible'));//.and('contain.text', 'Nursing Care'));
        cy.wait(4000);
    }
    viewSpouseTable(SpouseTable){
        cy.get(this.SpouseTableEle).should("be.visible");
        cy.wait(4000);
    }
    viewSpouseRow(SpouseRow){
        cy.get(this.SpouseRowEle).should("be.visible").should("have.length", "1");
        cy.wait(4000);
    }
    viewSpouseRowColumn(SpouseRowColumn){
        cy.get(this.SpouseRowColumnEle).should("be.visible").should("have.length", "22");
        cy.wait(4000);
    }
    viewSpouseRow(SpouseRow){
        cy.get(this.SpouseRowEle)
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within(()=>
            {
                cy.get("th").each( ($col, index, $cols)=>{
                cy.log($col.text());
                })
            })
        })
        }
        viewSpouseAllRow(SpouseAllRow){
        cy.get(this.SpouseAllRowEle)
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within(()=>
            {
                cy.get("td").each( ($col, index, $cols)=>{
                cy.log($col.text());
                })
            })
        })
        }
    
}
export default LongTermCareExpenses;
