import { LoaderCircle } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-tranparent">
    <LoaderCircle className="animate-spin text-mainColor/50 w-16 h-16" />
  </div>
  )
}

export default Loader
