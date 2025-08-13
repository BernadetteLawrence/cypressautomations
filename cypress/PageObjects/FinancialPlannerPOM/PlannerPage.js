class Planner
{
    ClientEle='[id="gotoCreatePlan"]';
    SearchEle='[id="plans_search"]';
    CompareEle='[id="comparePlansIcon"]';
    


    setClient(Client)
{
cy.get(this.ClientEle).click();
}
}

export default Planner;