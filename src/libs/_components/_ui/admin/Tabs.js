import React, { Component } from "react";


class Tabs extends Component {
  
  state = {
    selected: this.props.selected || 0 ,
     selectedTab:""
  };
  // push= useHistory();

  handleChange(index,elem) {
    console.log(index,elem.props.title)
    this.props.setTab(index === 0 ? "driver" : index === 1 ? "booking" : "vehicle")
    this.setState({ selected: index });
    // this.props.selectedTab( elem.props.title );
    
  }

  render() {
    return (
      <>
        <ul class={"tabClass"}>
          {console.log("selected",this.props.selected)}
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "selected" : "";
            return (
              <li
                key={index}
                className={style}
                onClick={() => this.handleChange(index,elem)}
              >
                {elem.props.title}:{elem.props.title === "Driver" ? this.props.TotalCount.totalDriver :
                  elem.props.title === "Booking" ? this.props.TotalCount.totalBooking :
                    this.props.TotalCount.totalBuses
                }
              </li>
            );
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
      </>
    );
  }
}
export default Tabs;