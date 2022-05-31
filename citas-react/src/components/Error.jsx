import { useState,useEffect } from "react/cjs/react.development"

const Error = ({children}) => {
  return (
    <div className="bg-red-500 text-center font-bold text-white p-3 mb-3 rounded-sm">
       {children}
    </div>
  )
}

export default Error