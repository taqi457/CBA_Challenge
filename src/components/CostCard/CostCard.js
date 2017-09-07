import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";

const CostCard = ({ toy1, toy2, profitHandler }) => (
      <Card>
        <CardHeader>
          <strong>Cost Calculations</strong>
        </CardHeader>
        <CardBlock className="card-body">
          <Form className="form-horizontal">
             <FormGroup row>
               <Col md="6">
                 <Label htmlFor="toy1-amount">How many toys per year?</Label>
               </Col>
               <Col xs="12" md="6">
                 <Row>
                   <Col xs="6">
                     <InputGroup>
                       <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                       <Input type="number" id="toy1-amount" name="toy1-amount" value={toy1.amount}
                         onChange={ (e) => profitHandler('toy1', 'amount', e.target.value, toy1, toy2) } placeholder="Amount..."/>
                     </InputGroup>
                 </Col>
                   <Col xs="6">
                     <InputGroup>
                       <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                       <Input type="number" id="toy2-amount" name="toy2-amount" value={toy2.amount}
                         onChange={ (e) => profitHandler('toy2', 'amount', e.target.value, toy2, toy1) }
                          placeholder="Amount..."/>
                     </InputGroup>
                  </Col>
                 </Row>
               </Col>
             </FormGroup>
             <FormGroup row>
               <Col md="6">
                 <Label htmlFor="toy1-defective-amount">Number of defective toys per year</Label>
               </Col>
               <Col xs="12" md="6">
                 <Row>
                   <Col xs="6">
                     <InputGroup>
                       <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                       <Input type="number" id="toy1-defective-amount" value={toy1.defectiveAmount} name="toy1-defective-amount" readOnly/>
                     </InputGroup>
                   </Col>
                   <Col xs="6">
                     <InputGroup>
                       <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                       <Input type="number" id="toy2-defective-amount" value={toy2.defectiveAmount} name="toy2-defective-amount" readOnly/>
                     </InputGroup>
                   </Col>
                 </Row>
               </Col>
             </FormGroup>
             <strong>Labor Costs/Test</strong>
               <FormGroup row>
                 <Col md="6">
                   <Label htmlFor="toy1-material-cost">Material Cost/Toy</Label>
                 </Col>
                 <Col xs="12" md="6">
                   <Row>
                     <Col xs="6">
                       <InputGroup>
                         <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                         <Input type="number" value="5" id="toy1-material-cost" value={toy1.materialCostPerToy} name="toy1-material-cost" readOnly/>
                       </InputGroup>
                     </Col>
                     <Col xs="6">
                       <InputGroup>
                         <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                         <Input type="number" id="toy2-material-cost" value={toy2.materialCostPerToy} name="toy2-material-cost" readOnly/>
                       </InputGroup>
                     </Col>
                   </Row>
                 </Col>
               </FormGroup>
               <FormGroup row>
                 <Col md="6">
                   <Label htmlFor="toy1-assembler">Who assembles the toys?</Label>
                 </Col>
                 <Col xs="12" md="6">
                   <Row>
                     <Col xs="6">
                      <Input type="select" onChange={ (e) => profitHandler('toy1', 'assembler', e.target.value, toy1, toy2) } value={toy1.assembler} name="toy1-assembler" id="toy1-assembler">
                        <option value="thirdParty">Third Party</option>
                        <option value="technician">Technician</option>
                      </Input>
                     </Col>
                     <Col xs="6">
                       <Input type="select" onChange={ (e) => profitHandler('toy2', 'assembler', e.target.value, toy1, toy2) } value={toy2.assembler} name="toy2-assembler" id="toy2-assembler">
                         <option value="thirdParty">Third Party</option>
                         <option value="technician">Technician</option>
                       </Input>
                     </Col>
                   </Row>
                 </Col>
               </FormGroup>
               <strong>Material Costs</strong>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-test-cost">Cost Per Test</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-test-cost" value={toy1.costPerTest} name="toy1-test-cost" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-test-cost" value={toy2.costPerTest} name="toy2-test-cost" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-annual-test-cost">Annual Cost of Tests</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-annual-test-cost" value={toy1.annualCostOfTest} name="toy1-annual-test-cost" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-annual-test-cost" value={toy2.annualCostOfTest} name="toy2-annual-test-cost" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <strong>Labor Costs</strong>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-labor-cost">Cost of Labor per Toy</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-labor-cost" value={toy1.costOfLaborPerToy} name="toy1-labor-cost" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-labor-cost" value={toy2.costOfLaborPerToy} name="toy2-labor-cost" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-annual-labor-cost">Annual Labor Cost of Toys</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-annual-labor-cost" value={toy1.annualLaborCost} name="toy1-annual-labor-cost" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-annual-labor-cost" value={toy2.annualLaborCost} name="toy2-annual-labor-cost" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <strong>Defective Toys</strong>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-number-of-defective-toys">Number of Defective Toys</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-number-of-defective-toys" value={toy1.numberOfAnnualDefectiveToys} name="toy1-number-of-defective-toys" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-number-of-defective-toys" value={toy2.numberOfAnnualDefectiveToys} name="toy2-number-of-defective-toys" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-sales-lost-from-defective-toys">Sales Lost from Defective Toys</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-sales-lost-from-defective-toys" value={toy1.salesLostFromDefectiveToys} name="toy1-sales-lost-from-defective-toys" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-sales-lost-from-defective-toys" value={toy2.salesLostFromDefectiveToys} name="toy2-sales-lost-from-defective-toys" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <strong>&nbsp;</strong>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-total-functional">TOTAL FUNCTIONAL TOYS</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <Input type="number" id="toy1-total-functional" value={toy1.totalFunctionalToys} name="toy1-total-functional" readOnly/>
                       </Col>
                       <Col xs="6">
                         <Input type="number" id="toy2-total-functional" value={toy2.totalFunctionalToys} name="toy2-total-functional" readOnly/>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-total-sale-value">TOTAL SALE VALUE</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-total-sale-value" value={toy1.totalSalesValue} name="toy1-total-sale-value" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-total-sale-value" value={toy2.totalSalesValue} name="toy2-total-sale-value" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-total-sales">TOTAL SALES</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-total-sales" value={toy1.totalSales} name="toy1-total-sales" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-total-sales" value={toy2.totalSales} name="toy2-total-sales" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
                 <FormGroup row>
                   <Col md="6">
                     <Label htmlFor="toy1-total-profits">TOTAL PROFITS</Label>
                   </Col>
                   <Col xs="12" md="6">
                     <Row>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy1-total-profits" value={toy1.totalProfits} name="toy1-total-profits" readOnly/>
                         </InputGroup>
                       </Col>
                       <Col xs="6">
                         <InputGroup>
                           <InputGroupAddon><i className="fa fa-dollar"></i></InputGroupAddon>
                           <Input type="number" id="toy2-total-profits" value={toy2.totalProfits} name="toy2-total-profits" readOnly/>
                         </InputGroup>
                       </Col>
                     </Row>
                   </Col>
                 </FormGroup>
            </Form>
         </CardBlock>
      </Card>
    );
export default CostCard;
