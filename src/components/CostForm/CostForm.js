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
          defectiveRate: .10,
          defectiveAmount:200,
          materialCostPerToy: 5.00,
          assembler: 'thirdParty',
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
          defectiveRate: .15,
          defectiveAmount: 375,
          materialCostPerToy: 5.50,
          assembler: 'technician',
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
          labels: ['Profits'],
          datasets: [
            {
              label: 'Toy 1',
              backgroundColor: 'rgba(40,180,180,0.1)',
              borderColor: 'rgba(40,180,180,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(40,180,180,.4)',
              hoverBorderColor: 'rgba(40,180,180,1)',
              data: [88000]
            },
            {
              label: 'Toy 2',
              backgroundColor: 'rgba(40,220,30,0.1)',
              borderColor: 'rgba(40,220,30,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(40,220,30,.4)',
              hoverBorderColor: 'rgba(40,220,30,1)',
              data: [75000]
            }
          ]
        }
      };
      this.profitHandler = this.profitHandler.bind(this);
      this.referenceHandler = this.referenceHandler.bind(this);
      this.calcBar = this.calcBar.bind(this);
  }

  calcBar(toy1, toy2) {
    let newBar = {...this.state.bar};
    newBar.datasets[0].data[0] = toy1.totalProfits;
    newBar.datasets[1].data[0] = toy2.totalProfits;
    console.log(newBar);
    this.setState({
      bar: newBar
    });
  }

  calcToy(toy, saleValueOfToys) {
    let newToy = {...toy};
    newToy.defectiveAmount = newToy.amount * newToy.defectiveRate;
    newToy.annualCostOfTest = newToy.amount * newToy.costPerTest;
    newToy.annualLaborCost = newToy.amount * newToy.costOfLaborPerToy;
    newToy.numberOfAnnualDefectiveToys = newToy.defectiveAmount;
    newToy.salesLostFromDefectiveToys = newToy.numberOfAnnualDefectiveToys * saleValueOfToys;
    newToy.totalFunctionalToys = newToy.amount - newToy.numberOfAnnualDefectiveToys;
    newToy.totalSalesValue = newToy.totalFunctionalToys * saleValueOfToys;
    newToy.totalSales = newToy.totalSalesValue - newToy.salesLostFromDefectiveToys;
    newToy.totalProfits = newToy.totalSales - newToy.annualLaborCost - newToy.annualCostOfTest;
    return newToy;
  }

  profitHandler(toy, element, value, toyElement, reference) {
    toyElement[element] = value;
    if(element == 'assembler') {
      toyElement['costOfLaborPerToy'] = reference ? reference[value] : this.state[value];
      console.log(toyElement.costOfLaborPerToy);
    }
    if(toy == 'toy1') {
      let newToy = this.calcToy(toyElement, this.state.saleValueOfToys);
      this.setState({
        toy1: newToy
      });
      this.calcBar(newToy, this.state.toy2);
    } else {
      let newToy = this.calcToy(toyElement, this.state.saleValueOfToys);
      this.setState({
        toy2: newToy
      })
      this.calcBar(this.state.toy1, newToy);
    }
  }

  referenceHandler(thirdParty, technician, saleValueOfToys) {
    this.setState({
      thirdParty: thirdParty,
      technician: technician,
      saleValueOfToys: saleValueOfToys
    });
    this.profitHandler('toy1', 'assembler', this.state.toy1.assembler, this.state.toy1, {thirdParty, technician});
    this.profitHandler('toy2', 'assembler', this.state.toy2.assembler, this.state.toy2, {thirdParty, technician});

  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="7">
            <CostCard toy1={this.state.toy1} toy2={this.state.toy2} profitHandler={this.profitHandler}/>
          </Col>
          <Col xs="12" sm="5">
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
                    redraw={true}
                    options={{
                      maintainAspectRatio: false,
                      scales: {
                          yAxes: [{
                            ticks: {
                              stepSize: 10000
                            }
                          }]
                      }
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
