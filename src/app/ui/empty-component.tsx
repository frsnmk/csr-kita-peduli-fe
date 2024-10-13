import Image from 'next/image'
import React from 'react'

const EmptyComponent = () => {
  return (
    <div className="flex justify-center pt-10">
        {/* <Image width={300} height={300} src={'/empty_data_csr.svg'} alt="" /> */}
        Tidak ada data
    </div>
  )
}

export default EmptyComponent
