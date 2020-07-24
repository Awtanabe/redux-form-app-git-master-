import React from 'react'
import {Field,reduxForm} from 'redux-form'

// class Form extends React.Component {

//   render () {
//     return(
//       <div>
//         <form>
//           <input type="text"/>
//           <input type="submit" value="送信"/>
//         </form>
//       </div>
//     )
//   }
// }

function submit(values){
  // print the form values to the console
  return console.log(values)
}

let Contact2Form = props => {
  const {handleSubmit} = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

Contact2Form = reduxForm({
   form: 'sample'
})(Contact2Form)


export default Contact2Form