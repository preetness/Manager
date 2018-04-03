import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import { connect } from 'react-redux';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>Save Changes</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
