import React, { Component } from "react";
import './App.css'
import ft from "./facetattoo.jpg";



class DatabaseSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.selectedOption);

    var selection= this.state.selectedOption
    var opt= []
    opt.push(selection);
    const options = {
        method: "POST",
        body: JSON.stringify(opt),
        headers: {
          "Content-Type": "application/json"
      }
    }
   console.log(JSON.stringify(opt));
    fetch("http://localhost:3001/faces/api/v1", options)
        .then(res => res.json())
        .then(data => {
            this.props.pCallback(data);
            
        })
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>


      <div class="page-section" className="db_select">
          <div class="container">
            <div class="row">
              <div class="col-lg-12" >
                <div class="card-service wow fadeInUp" >
                  <div class="header">
                  <img src={ft} width="200px"/>
                  </div>
                  <div class="body">
                    <h3 class="text-secondary">Face_Tattoo</h3>
                    <h5>A Dataset created and annotated by Sabanci University Students, containing images of faces with tattoos!</h5>
                    <input
                  type="radio"
                  value= "FaceTattoo"
                  checked={this.state.selectedOption === "FaceTattoo"}
                  onChange={this.onValueChange}
                />
                  </div>
                </div>
              </div>
              
            </div>
            <button className="btn btn-primary btn-lg" className="center" type="submit">
          Submit
        </button>
          </div> 
          
        </div> 
      </form>
    );
  }
}

export default DatabaseSelection ;

// 
/* <div>
Selected option is : {this.state.selectedOption}
</div> */