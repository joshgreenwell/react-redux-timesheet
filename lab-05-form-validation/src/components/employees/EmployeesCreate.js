import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee){
    this.props.actions.createEmployee(employee).then(() => {
      this.props.history.push('');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Timesheet Create</PageHeader>
        </Row>
        <Row>
          <EmployeeForm employees={this.props.employees} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

EmployeesCreate.defaultProps = {
  employee: {}
};

EmployeesCreate.propTypes = {
  //TODO: Require the employee proptype

  history: PropTypes.object
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    //TODO: bind the redux action creators to the component props here
    //actions: bindActionCreators(EmployeeActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeesCreate));
