import React from "react"

const withHOCComponent = Component => ({data}) => {

    const filter = data.filter((el) => el.Country.includes("Un") && el)

    return <Component data={filter} />
}

const Table = ({data}) => {
    console.log(data)
    return (
        <div className='header-search'>
        <input className='header-input' onInput={this.filterCountryHendler} />
      </div>
    )
}

export default withHOCComponent(Table)



// import React from "react"

// const withHOCComponent = Component => ({data}) => {

//     const filter = data.filter((el) => el.Country.includes("Un") && el)

//     return <Component data={filter} />
// }

// const Table = ({data}) => {
//     console.log(data)
//     return (
//         <div>
//             6565
//         </div>
//     )
// }

// export default withHOCComponent(Table)