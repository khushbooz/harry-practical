import React from 'react'

export default function Alert(props) {
    const handleChange = (word) => {
        const lower = word.toLowerCase();
       return lower.charAt(0).toUppercase + lower.slice(1);
    }
  return (
    <div>
      { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.type} : {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>}
    </div>
  )
}
