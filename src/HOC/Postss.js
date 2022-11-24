import React from 'react'
import ItemDetails from '../Components/ItemDetails';
import withApi from './withApi'

const Postss = ({data}) => {
  console.log(data);
  return (
    <div>Postss
      {data.slice(0, 10).map((elem, index) => (
        <ItemDetails
          key={index}
          id={elem.id}
          title={elem.title}
          completed={elem.completed}
        />
      ))}
    </div>
  )
}

export default withApi(Postss, 'posts')