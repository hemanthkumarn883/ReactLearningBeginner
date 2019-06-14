// import React, {Component} from 'react';
// import './App.css'
// import Child from './firstChild';

// let state =  {
//     name: '',
//     // greeting: `Good ${this.props.time}, `,
//     sum : 0,
//     incval : 0,

  
//   };
// // First we create our class
// class Parent extends Component {
//   // Then we add our constructor which receives our props
//   constructor(props) {
//     super(props);
//     // Next we establish our state
//     this.state = state;
//     // To use the 'this' keyword, we need to bind it to our function
//     this.onChange = this.onChange.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.incmyval = this.incmyval.bind(this);
//     this.childref = React.createRef();
//   }
//   componentWillUnmount(){
//     console.log( 'component will unmount');
//     state = this.state;
//     console.log(' state is '+JSON.stringify((state)));
//   }

//   incmyval(e){
//     console.log( ' value of inc is  '+this.state.incval)
//     this.setState({incval: this.state.incval+1})
//     this.childref.current.showAlert();
//     // this.refs.child.showAlert(); //another way to reference to call child state and function
//   }
  
//   // A custom function to change the name in our state to match the user input
//   onChange(e) {
//     this.setState({
//       name: e.target.value
//     })
//   }

//    handleChange(e) {
//     console.log(' this is name '+e.target.name+' value '+e.target.value+' checked or not '+e.target.checked)
//         this.setState({sum: (e.target.checked?(parseInt(this.state.sum)+parseInt(e.target.value)):(parseInt(this.state.sum)-parseInt(e.target.value)))});

//     }
//   // The render function, where we actually tell the browser what it should show
//   render() {
//  var mylist = [1,2,3,4,5,6].map((singleValue) =>(
//           <div><br></br>     <label className="label"> {singleValue}:</label><input className="input" type="checkbox" value={singleValue} onChange={this.handleChange}/></div>
//             ));
//     return (
//       <div>
//           {/* <Row>
//             <Col m={6} s={12}>
//                 <Card header={<CardTitle />} title="Card Title" reveal={<p />}>
//                     <p>
//                         <a href="#">
//                              This is a link
//                         </a>
//                     </p>
//                 </Card>
//             </Col>
//         </Row> */}

//         <section className="section">
//           <label className="label">Name:</label>
//           <input className="input" name="name" placeholder="Enter your name..." onChange={this.onChange} />
//             <section className="section">
//                 {this.props.name}
//               <p>{this.state.greeting} {this.state.name}</p>
//             </section>
//           <p>{this.state.name}, Pelse select below check boxes To sum Up </p>
//             {mylist}
//         </section>
//            <section className="section">
//         <p>Sum of checked values is : {this.state.sum}</p>
//         <p> count is {this.state.incval}</p>
//         <button onMouseOver = {this.incmyval}>Click to Increment</button>
//         </section>
//       <Child name={this.state.name} ref={this.childref} increment ={this.incmyval} />
//       {/* <Child name={this.state.name} ref='child' increment ={this.incmyval} />*/}
//       {/* another way ot call child comp function and update its status */}
//       </div>
//     )
//   }
// }


// export default Parent;
