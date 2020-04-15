import React, { Component } from 'react';

// const Array = () => {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const ListItems = array.map((number) => <li>{number}</li>);

//   return <div>{ListItems}</div>;
// };

const array = [1, 2, 3, 4, 5, 6];

class Array extends Component {
  state = {
    numbersList: array,
  };

  removeHandler = (index) => {
    const oldArray = this.state.numbersList;
    oldArray.splice(index);
    this.setState({ numbersList: oldArray });
    console.log('Clicked', index);
  };
  render() {
    const listItems = this.state.numbersList.map((number, index) => (
      <li key={index} onClick={this.removeHandler.bind(this, index)}>
        {number}
      </li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Array;
