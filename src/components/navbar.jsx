import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    // const total = this.props.habits.length;
    return (
      <div className="navbar">
        <i class="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <div className="navbar-count">{this.props.totalCount}</div>
      </div>
    );
  }
}

export default Navbar;
