class Medicarebundle{
    medicarebundlelink="#medicare_bundles > .plan-header > .nav-tabs-wrapper > .planoutput-nav > :nth-child(2) > .nav-link";
    viewinput="#compare_medical_bundle_previous_button";
    primaryname="table[class='table table-bordered table-striped table-fixed-header'] th[class='PSThead-noborder PSThead-MainTitle']";
    MedicareBundletitle="body > div:nth-child(22) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1)";
    rowsandcolumns="table[class='table table-bordered table-striped table-fixed-header']>tbody>tr";
    numberofcolumns="table[class='table table-bordered table-striped table-fixed-header']>thead>tr>th";
    spousename="table[class='table table-bordered table-striped table-fixed-header OutputPSTable2nd'] th[class='PSThead-noborder PSThead-MainTitle']";
    allrows="table[class='table table-bordered table-striped table-fixed-header']>tbody>tr";
    spouserowsandcol="table[class='table table-bordered table-striped table-fixed-header OutputPSTable2nd']>tbody>tr";
    spousenoofrows="table[class='table table-bordered table-striped table-fixed-header OutputPSTable2nd']>thead>tr>th";
    spouseallrows="table[class='table table-bordered table-striped table-fixed-header OutputPSTable2nd']>tbody>tr";
    medicarecomponent="#healthcare_expenses_details_popup_div > .table > :nth-child(3) > .blankrow > .PSThead-noborder";
    clickmedicarebundlelink(){
        cy.get(this.medicarebundlelink, { timeout: 10000 })
        .click({force:true})
        cy.wait(1000)
    }
    clickviewinputbutton(){
        cy.get(this.viewinput)
        .should('be.visible')
        .click()
        cy.wait(1000)
    }
    primarynamedisplay(){
        cy.get(this.primaryname)
        .should('be.visible')
    }
    checkmedicarebundletitle(){
        cy.get(this.MedicareBundletitle)
        .should('be.visible')
        .should('contain.text', ' Medicare Bundles ')
        cy.wait(1000)
    }
    numberofrowsandcol(){
        cy.get(this.rowsandcolumns)
        .should('have.length','23')
        cy.wait(1000)
    }
    numberofcol(){
        cy.get(this.numberofcolumns)
        .should('have.length','6')
    }
    checkmedicarecomponenttitle(){
        cy.get(this.medicarecomponent)
        .should('be.visible')
    }
    verifyspousename(){
        cy.get(this.spousename)
        .should('be.visible')
    }
    eachrowsexecuting(){
        cy.get(this.allrows)
        .each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols )=>{
                    cy.log($col.text());

                })
            })

        })
    }
    verifyspouserowsandcolumn(){
        cy.get(this.spouserowsandcol)
         .should('have.length','23')
        cy.wait(1000)

    }
    verifyspousenoofrows(){
        cy.get(this.spousenoofrows)
        .should('have.length','6')

    }
    spouseallrowsdisplay(){
        cy.get(this.spouseallrows).should('exist').each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols )=>{
                    cy.log($col.text());

                })
            })

        })

    }

}
export default Medicarebundle;