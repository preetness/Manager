import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeDetails extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Name" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="555-111-1234" />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button buttonText="Create" />
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeDetails;
