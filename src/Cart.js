import React, {Component} from "react";
import Card from './Cardrender';

class Cart extends Component{
    constructor(props){
        super(props)
        this.state = ({
            data : sessionStorage.getItem('selected')?JSON.parse(sessionStorage.getItem('selected')):[]
        })
    }
    removeItemFromCart = (index)=>{
        var tempdata = this.state.data;
        tempdata[index].isSelected=false;
        this.setState({data:tempdata})
        sessionStorage.setItem('selected',JSON.stringify(tempdata))
    }
    render(){
        return(
            <div>
                {this.state.data.map((item, index) => {
                    return  item.isSelected &&
                    <Card item={item} index={index} onClick={this.removeItemFromCart}/>
                })}
            </div>
        )
    }
}

export default Cart;