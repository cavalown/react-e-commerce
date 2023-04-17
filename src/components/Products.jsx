import React, { Component } from 'react'

export default class Products extends Component {
  render() {
    return (
      <div className="row row-cols-3 g-3">
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567691334394-c0d00a7716db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">草莓慕斯<span className="float-end">NT$220</span></h6>
              <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">巧克力聖代<span className="float-end">NT$ 180</span></h6>
              <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567691334394-c0d00a7716db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">草莓慕斯<span className="float-end">NT$220</span></h6>
              <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1567691334394-c0d00a7716db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">草莓慕斯<span className="float-end">NT$220</span></h6>
              <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
