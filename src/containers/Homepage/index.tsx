import React, { Component } from 'react';

const initialState = { count: 0 };
type State = Readonly<typeof initialState>;

export default class HomepageContainer extends Component<object, State> {
  readonly state: State = initialState;

  render() {
    const { count } = this.state;
    return (<div>
      --{count}
      <p>homepage container~</p>
      <button onClick={() => this.setState({ count: count + 1 })}>button</button>
    </div>);
  }
};
