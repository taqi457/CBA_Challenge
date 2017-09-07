import React, { Component } from 'react';
import {Row, Col, CardColumns, Card, CardHeader, CardBlock} from "reactstrap";
import CostCard from '../CostCard/';
import ReferenceCard from '../ReferenceCard/';
import {Bar} from "react-chartjs-2";


class CostForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        toy1: {
          amount: 2000,
          defectiveAmount:200,
          materialCostPerToy: 5.00,
          assembler: 'ThirdParty',
          costPerTest: 5,
          annualCostOfTest: 10000,
          costOfLaborPerToy: 3.00,
          annualLaborCost: 6000,
          numberOfAnnualDefectiveToys: 200,
          salesLostFromDefectiveToys: 13000,
          totalFunctionalToys: 1800,
          totalSalesValue: 117000,
          totalSales: 104000,
          totalProfits: 88000
        },
        toy2: {
          amount: 2500,
          defectiveAmount: 375,
          materialCostPerToy: 5.50,
          assembler: 'Technician',
          costPerTest: 6.00,
          annualCostOfTest: 13750,
          costOfLaborPerToy: 10.00,
          annualLaborCost: 25000,
          numberOfAnnualDefectiveToys: 375,
          salesLostFromDefectiveToys: 24375,
          totalFunctionalToys: 2125,
          totalSalesValue: 138125,
          totalSales: 113750,
          totalProfits: 75000
        },
        thirdParty: 3.00,
        technician: 10.00,
        saleValueOfToys: 65.00,
        bar: {
          labels: ['toys1'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(40,180,180,0.1)',
              borderColor: 'rgba(40,180,180,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(40,180,180,.4)',
              hoverBorderColor: 'rgba(40,180,180,1)',
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        }
      };
      this.profitHandler = this.profitHandler.bind(this);
      this.referenceHandler = this.referenceHandler.bind(this);
      this.calcReport = this.calcReport.bind(this);
  }

  calcReport(toy1, toy2, thirdParty, technician, saleValueOfToys) {

  }

  profitHandler(toy, element, value, toyElement) {
    let newToy = {...toyElement};
    newToy[element] = value;
    console.log("newToy", newToy);
    if(element == 'assembler') {
      newToy['costOfLaborPerToy'] = this.state[value];
    }
    if(toy == 'toy1') {
      this.setState({
        toy1: newToy
      })
    } else {
      this.setState({
        toy2: newToy
      })
    }
  }

  referenceHandler(thirdParty, technician, saleValueOfToys) {
    this.setState({
      thirdParty: thirdParty,
      technician: technician,
      saleValueOfToys: saleValueOfToys
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <CostCard toy1={this.state.toy1} toy2={this.state.toy2} profitHandler={this.profitHandler}/>
          </Col>
          <Col xs="12" sm="6">
            <ReferenceCard
              thirdParty={this.state.thirdParty}
              technician={this.state.technician}
              saleValueOfToys={this.state.saleValueOfToys}
              referenceHandler={this.referenceHandler}/>
            <Card>
              <CardHeader>
                Profits
              </CardHeader>
              <CardBlock className="card-body">
                <div className="chart-wrapper">
                  <Bar
                    data={this.state.bar}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

}

export default CostForm;
