import React, { Component } from 'react';
import { CartContext } from '../store';
import { useState } from 'react';

export default function Cart() {
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          <tr>
            <td>
              <a href="#">x</a>
            </td>
            <td>
              <img
                src="https://images.unsplash.com/photo-1567691334394-c0d00a7716db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGRlc3NlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=''
                className="table-img"
              />
            </td>
            <td>
              草莓慕斯
              <br />
              <small className="text-muted">NT$ 220</small>
            </td>
            <td>
              <select name="" id="" className="form-select"></select>
            </td>
            <td className="text-end">NT$ 440</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額 NT$ 440
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
