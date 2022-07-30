const designWidth = 414

const PX2REM=(px:number)=>{
    return px/designWidth + 'rem'
}


const green = 'rgb(48,112,196)' //'rgba(98, 179, 123, 100)'  

export {PX2REM,green}