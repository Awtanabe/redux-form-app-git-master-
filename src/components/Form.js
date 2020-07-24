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


let ContactForm = props => {
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

ContactForm = reduxForm({
   form: 'contact'
})(ContactForm)


export default ContactForm