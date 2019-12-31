import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

 class Directory extends React.Component {
    constructor(){
      super();

      this.state = {
         sections: [{
           title: 'hat',
           imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
           id: 1,
           linkUrl: 'hats'
         },

         {
          title: 'jacket',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: ''
        },

        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        },

        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/women.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },

        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 45,
          linkUrl: ''
        }
        ]
      }
    }
    /** Loop through the sections from the state and pass the array to MenuItem component. We can use destructor to get them *
     * We can used ES6 spread operator avoid writing out the rest of our destructor. you can give any name e.g otherSectionProps*/
  render(){
    return(
      <div className="directory-menu">
           {this.state.sections.map(({ id, ...otherSectionProps}) =>(
             <MenuItem  key={id} {...otherSectionProps}/>
           ))}
      </div>
    )
  }
}

export default Directory;