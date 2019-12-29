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
           id: 1
         },

         {
          title: 'jacket',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },

        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },

        {
          title: 'women',
          imageUrl: 'https://i.ibb.co/GCCdy8t/women.png',
          size: 'large',
          id: 4
        },

        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 45
        }
        ]
      }
    }
    /** Loop through the sections from the state and pass the array to MenuItem component. We can use destructor to get them */
  render(){
    return(
      <div className="directory-menu">
           {this.state.sections.map(({title, imageUrl, size, id}) =>(
             <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size}/>
           ))}
      </div>
    )
  }
}

export default Directory;