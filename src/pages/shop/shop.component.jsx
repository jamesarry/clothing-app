import React  from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';


class ShopPage extends React.Component{
    constructor(props){
      super(props);
       //Shop page api
      this.state = {
       collections: SHOP_DATA
      }
    }


    render(){
        //destructor our collections and loop through it and display only 4 items each
     const { collections} = this.state;
      return (<div className="shop-page">
        {
           collections.map(({ id, ...otherCollectionProps }) =>(
             <CollectionPreview key={id} {...otherCollectionProps} />
           ))
        }
      </div>);
    }
    
}

export default ShopPage;