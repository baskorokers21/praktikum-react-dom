import React from 'react'

class Karya extends React.Component {
    render() {
        return(
            <div className="container">
                <h2>Ini Karya</h2>
                    <table className="table table-stripped">
                    <thead>
      <tr>
        <th>karya</th>
        <th>apa</th>
        <th>yang dibuat</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>gaada kyknya bu</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>masih kynya bu</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>hbs ini buat bu</td>
        <td>gambar kadal</td>
        <td>tapi gaada harganya bu</td>
      </tr>
    </tbody>
                    </table>
            </div>
        )
    }
}

export default Karya;