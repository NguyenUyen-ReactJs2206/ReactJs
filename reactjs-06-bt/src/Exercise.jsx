import React from 'react'

export default function Exercise({ listData }) {

    return (
        <div>
            {listData.map((item) => (
                <div className="container">
                    <div className="row" style={{ width: '1140px', border: '1px solid red' }}>
                        <div className="col-sm-1">
                            <input className="check form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </div>

                        <div className="col-sm-3">
                            <img src="https://tse4.mm.bing.net/th?id=OIP.Kw96lTMje36bSfYrpzuV3AHaHa&pid=Api&P=0" class="card-img-top" alt="img" />
                        </div>

                        <div className="col-sm-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.opt.map(sub => (<div>{sub.name}</div>) )} </p>
                                {/* <Form.Select aria-label="Default select example">
                                    {
                                        item.opt.map((sub) => (
                                            <option value={sub.name}>
                                                {sub.name}</option>

                                        ))
                                    }
                                </Form.Select> */}
                            </div>
                        </div>

                        <div className="group col-sm-2">
                            <h4>aaa</h4>
                            <h6>bbbb</h6>
                            <h4>ccc</h4>
                        </div>

                        <div className="col-sm-2">
                            <h4>ddd</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        // <div> {listData.map((item, index) => {
        //     console.log(item)
        //     return (
        //         <>
        //             <p>{item.opt.map(sub=>{ return(<div>{sub.name}</div>) })}</p>
        //             <p>{item.name}</p>
        //         </>
        //     )
        // })}</div>
    )
}
