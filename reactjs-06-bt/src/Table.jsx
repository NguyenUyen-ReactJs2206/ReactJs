import React from "react"

export default function Table({ listData, onSearch }) {
  return (
    <div class="container mt-3">
      <div class="input-group mb-3 mt-3">
        <input type="text" class="form-control" placeholder="Some text" onChange={(e) => onSearch(e.target.value)} />
        <button class="btn btn-outline-primary" type="button">Basic Button</button>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
          <li class="offset-md-9">
            <select class="form-control form-control-sm" id="sortBy" onChange={(e) => sortBy(e.target.value)}>
              <option>Sort By</option>
              <option value="name">Name</option>
              <option value="salary">Salary</option>
            </select>
          </li>
        </ol>
      </nav>

      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {listData.map(({ id, first_name, last_name, email, gender, age, salary }, index) => (
            <tr>
              <td>{id}</td>
              <td>{first_name}</td>
              <td>{last_name}</td>
              <td>{email}</td>
              <td>{gender}</td>
              <td>{age}</td>
              <td>{salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





