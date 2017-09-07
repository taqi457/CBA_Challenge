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

const ReferenceCard = ({thirdParty, technician, saleValueOfToys, referenceHandler}) => (
      <Card>
        <CardHeader>
          <strong>Cost Calculations</strong>
        </CardHeader>
        <CardBlock className="card-body">
          <Form action="" method="post" className="form-horizontal">
             <FormGroup row>
               <Col md="9">
                 <Label htmlFor="thirdParty">Third Party</Label>
               </Col>
               <Col xs="12" md="3">
                 <Input type="number" id="thirdParty" value={thirdParty}
                   onChange={ (e) => referenceHandler(e.target.value, technician, saleValueOfToys)} name="toy2-amount" placeholder="Amount..."/>
               </Col>
             </FormGroup>
             <FormGroup row>
               <Col md="9">
                 <Label htmlFor="technician">Technician</Label>
               </Col>
               <Col xs="12" md="3">
                  <Input type="number" id="technician" value={technician}
                    onChange={ (e) => referenceHandler( thirdParty, e.target.value, saleValueOfToys)} name="toy2-amount" placeholder="Amount..."/>
               </Col>
             </FormGroup>
             <FormGroup row>
               <Col md="9">
                 <Label htmlFor="saleValueOfToys"><strong>Sale Value of Toys</strong></Label>
               </Col>
               <Col xs="12" md="3">
                  <Input type="number" id="saleValueOfToys" value={saleValueOfToys}
                    onChange={ (e) => referenceHandler(thirdParty, technician, e.target.value) } name="toy2-amount" placeholder="Amount..."/>
               </Col>
             </FormGroup>
          </Form>
        </CardBlock>
      </Card>
    );



export default ReferenceCard;
