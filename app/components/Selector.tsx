import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
    data: DataEle[]
    defaultValue: string
}
interface DataEle {
    title: string,
    value: string,
}

const Selector = ({ data, defaultValue }: Props) => {

    const dataRef = useRef(null)
    const [dataUnit, setDataUnit] = useState(defaultValue)
    const [dataMenu, setDataMenu] = useState(false)


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (dataRef.current === e.target) {
                setDataMenu(true)
                console.log('open')
            } else {
                if (dataMenu) {
                    setDataMenu(false)
                    console.log('close')
                }
            }
        })
    }, [dataMenu])




    return (
        <div className='relative'>
            <div ref={dataRef} className='border w-fit flex gap-5 px-5 py-2 rounded-md relative'>
                <p className='pointer-events-none'>{dataUnit ? dataUnit : defaultValue}</p>
                <Image
                    className='pointer-events-none'
                    src='/chevron-up-down.svg'
                    alt=''
                    width={20}
                    height={20}
                />
                {dataMenu && <div className='absolute border bg-slate-50 shadow-md left-0 top-[110%] max-h-[200px] overflow-y-scroll z-10'>
                    {data.map((ele, i) => (
                        <p key={i} className='px-4 py-3 w-[150px] cursor-pointer hover:bg-blue-200' style={{ borderBottom: data.length - 1 === i ? 'none' : '1px solid #ddd' }} onClick={() => {
                            setDataUnit(ele.value)
                            setDataMenu(false)
                            console.log('done!')
                        }}>{ele.title}</p>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}

export default Selector