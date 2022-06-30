const designWidth = 414

const PX2REM=(px:number)=>{
    return px/designWidth + 'rem'
}


const green = 'rgba(98, 179, 123, 100)'

export {PX2REM,green}