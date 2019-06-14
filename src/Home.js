import React, {Component} from "react";
import Card from './Cardrender';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = ({
            data : !sessionStorage.getItem('selected')?[{
                "name" : "casual Shirt",
                "size" : "Medium",
                "for" : "Men",
                "cloth" : "Cotton",
                "image": "https://5.imimg.com/data5/OX/PN/MY-42298819/men-27s-stylish-shirt-500x500.jpg",
                "desc" : "100% cotton mens casual shirts best suited for office",
                "price": "1000"
              },{
                "name" : "T Shirt",
                "size" : "Small",
                "for" : "Men",
                "cloth" : "Cotton",
                "image": "https://sc01.alicdn.com/kf/HTB1NzTAJVXXXXXAXVXXq6xXFXXXC.jpg",
                "desc" : "T shirts best suited for antum season",
                "price" : "800"
              },{
                "name" : "Round Collor T Shirt",
                "size" : "Medium",
                "for" : "Men",
                "cloth" : "Cotton",
                "image": "https://www.kingsize.com.au/user/images/21363_1000_1000.jpg?t=1804170830",
                "desc" : "Suitable for all seasons and ocasstions",
                "price" : "500"
              },{
                "name" : "Trousers",
                "size" : "30",
                "for" : "Men",
                "cloth" : "Cotton",
                "image" : "https://i.ebayimg.com/images/g/i3UAAOSwPHxa4vGs/s-l300.jpg",
                "desc" : "Available at best prices for smart causals and formal",
                "price" : "1800"
              },{
                "name" : "casual",
                "size" : "32",
                "for" : "Men",
                "cloth" : "Cotton",
                "image" : "https://ae01.alicdn.com/kf/HTB1A7hAbpmWBuNjSspdq6zugXXap/2018-Four-Seasons-Wild-Men-s-Casual-Pants-Fashion-Men-s-Casual-Long-Pants-Young-Men.jpg",
                "desc" : "Slim fit for regular use blabal bla bla",
                "price" : "899"
              },{
                "name" : "Cotton Jeans",
                "size" : "Medium",
                "for" : "Men",
                "cloth" : "Cotton",
                "image": "https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_jpg,h_581,q_85,w_581/v1/i/b478a8b3_6d48.jpg",
                "desc" : "New trending brands for all occassions blablabla",
                "price" : "999"
              }].map((item) => {item.isSelected = false;return item;}):JSON.parse(sessionStorage.getItem('selected'))
        })
    }

    addItemToCart = (index)=>{
        var tempdata = this.state.data;
        tempdata[index].isSelected=true;
        this.setState({data:tempdata})
        sessionStorage.setItem('selected',JSON.stringify(tempdata))
    }
    
    render(){
        return(
            <div>
                 {this.state.data.map((item, index) => {
                     return  !item.isSelected &&
                     <Card item={item} index={index} onClick={this.addItemToCart}/>
                })}
            </div>
        )
    }
}

export default Home;