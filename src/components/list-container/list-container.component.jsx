import React from "react";
import './list-container.style.scss';
import Lists from '../lists/lists.component';


const ListContainer = (props) => {
    const { data } = props
    return(
        <section className='container'>
        {
          data.map((data, index) => {
              return(
                <Lists key={index} data={data} />
              )
          })
        }
      </section>
    )
}

export default ListContainer;