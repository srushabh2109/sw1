

const Stories = ({stories}) =>{

    return(
         stories.map(ss=>{
            return(
                <div className="d-flex Story-month-data">
                <div className="Story-month">
                    <span className="text-gray fw_6 fs_18">{Object.keys(ss)}</span>
                </div>
                <div className="Story-month-description">
                    <span className="text-gray fs_18">{Object.values(ss)}</span>
                </div>
            </div>
            )
        })
    )

}

export default Stories;