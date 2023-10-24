import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../styles/TrainingDiary.css"

export default function TrainingDiaryPage() {
    return (
        <div className='table-container'>
            <MDBTable bordered>
            <MDBTableHead>
                <tr>
                    <th scope='col'>Exercise</th>
                    <th scope='col'>Weight</th>
                    <th scope='col'>Sets</th>
                    <th scope='col'>Reps</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <th scope='row'>1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>3</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>4</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>5</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>6</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>7</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>8</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>9</th>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope='row'>10</th>
                    <td></td>
                    <td></td>
                </tr>
            </MDBTableBody>
        </MDBTable>
        </div>
    );
}