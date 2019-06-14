import React, {Component} from 'react';
// var state = {count: 1}
class Cardrender extends Component{
    constructor(props){
        super(props)
        this.state = ({ 
            count: 1,
            price: 0,
        });
    }
    // componentWillUnmount(){
    //     state= this.state;
    // }
    render(){
        return(
            <div className= "col-md-3" style={{'padding': '10px'}}>
                  <div className="card" style={{'width':'180px'}}>
                    <img className="card-img-top" src={this.props.item.image} alt={this.props.item.name} style={{'width':'100%'}}/>
                    <div className="card-body" style={{'textAlign': 'center'}}>
                    <h4 className="card-title">{this.props.item.name}</h4>
                    <p className="card-text">{this.props.item.desc}</p>
                    <div style={{'padding':'5px'}}>
                        <button className="btn btn-primary" onClick={()=>this.props.onClick(this.props.index)}>{!this.props.item.isSelected?'Add To Cart':'Remove From Cart'}</button>
                    </div>
                    <br/>
                    {this.props.item.isSelected &&
                        <div style={{'display':'list-item','paddingBottom':'5px'}}> <button style={{'borderRadius':'50%'}} onClick={()=>this.setState({count: this.state.count+1})} className="btn btn-info"> <i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                        <b> Qty</b> : {this.state.count}
                     <button className="btn btn-info" style={{'borderRadius':'50%'}} onClick={(this.state.count >1) ?()=>this.setState({count:this.state.count-1}):()=>this.props.onClick(this.props.index)}> <i className="fa fa-minus-circle" aria-hidden="true"></i></button> </div>}
                    
                    </div>
                </div>
            </div>
        )
    }
}
export default Cardrender;