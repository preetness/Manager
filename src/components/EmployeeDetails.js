import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeUpdate, employeeDetails } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeDetails extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeDetails({
      name,
      phone,
      shift: shift || 'Not currently scheduled.'
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button buttonText="Create" onPress={this.onButtonPress.bind(this)} />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeDetails })(
  EmployeeDetails
);
