// import React from 'react'


// const Card1 = (props) => {
//   return (
//     <div>
//       <h1>name:{props.myname}.</h1>
//       <p>age:{props.age}</p>
//       <p>salary:{props.salary}</p>
//     </div>
//   )
// }

// export default Card1


import React from 'react'

const Card1 = (data) => {
  return (
    <div>
      <p>Name:{data.name}</p>
      <p>age:{data.age}</p>
    </div>
  )
}

export default Card1

