import React from 'react'
import Table from "../components/table";
import {blankPerson, newPerson, columns } from "../utilities/Utils";
import FormDialog from '../components/formDialog';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      data: newPerson(),
      columns: columns(this.updateData, this.deleteData)
    };

    this.updateData = this.updateData.bind(this);
  }
  updateData = (updatedData, index) => {
    let data= this.state.data;
    const newData = JSON.parse(JSON.stringify(data));
    newData[index] = updatedData
    this.setState({data: newData})
  }
  addData = (ds) => {
    let data= this.state.data;
    const newData = JSON.parse(JSON.stringify(data));
    newData.push(ds)
    this.setState({data: newData})
  }
  deleteData = (index) => {
    let data= this.state.data;
    let newData = JSON.parse(JSON.stringify(data));
    newData.splice(index, 1);
    this.setState({data: newData})
  }
  render() {
    const { data, columns } = this.state;
    return (
      <div>
        {data && (
        <Table
          data={data}
          columns={columns}
        ></Table>
        )}
        <FormDialog
          key={"edit"}
          data={blankPerson()}
          type={"add"}
          update={this.addData}
        ></FormDialog>
      </div>
    )
  }
}

export default Users;
