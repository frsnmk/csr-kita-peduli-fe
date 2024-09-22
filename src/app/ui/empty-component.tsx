import Image from 'next/image'
import React from 'react'

const EmptyComponent = () => {
  return (
    <div className="flex justify-center">
        <Image width={300} height={300} src={'/empty_data_csr.svg'} alt="" />
    </div>
  )
}

export default EmptyComponent
