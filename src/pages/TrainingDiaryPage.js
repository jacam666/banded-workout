import React, { useState } from 'react';
//import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../styles/TrainingDiary.css"


export default function TrainingDiaryPage() {
    const initialExerciseData = new Array(9).fill({ name: '', weight: '', sets: '', reps: '' });
    const [exerciseData, setExerciseData] = useState(initialExerciseData);

    const handleCellChange = (rowIndex, columnName, value) => {
        const updatedData = [...exerciseData];
        updatedData[rowIndex] = { ...updatedData[rowIndex], [columnName]: value };
        setExerciseData(updatedData);
    };

    return (
        <div className="training-container">
            
            <div className='table-container'>
            <h1 className='training-diary-heading'>Training Log</h1>
                <table className='table-contents-container'>
                    <thead>
                        <tr className='training-table-headings'>
                        <th scope='col'></th>
                            <th scope='col'>Exercise</th>
                            <th scope='col'>Weight</th>
                            <th scope='col'>Sets</th>
                            <th scope='col'>Reps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exerciseData.map((exercise, rowIndex) => (
                            <tr key={rowIndex}>
                                <td>{rowIndex + 1}</td>
                                <td>
                                    <input className='input-container'
                                        type="text"
                                        value={exercise.name}
                                        onChange={(e) => handleCellChange(rowIndex, 'name', e.target.value)}
                                        key={`name-${rowIndex}`}
                                    />
                                </td>
                                <td>
                                    <input className='input-container'
                                        type="text"
                                        value={exercise.weight}
                                        onChange={(e) => handleCellChange(rowIndex, 'weight', e.target.value)}
                                        key={`weight-${rowIndex}`}
                                    />
                                </td>
                                <td>
                                    <input className='input-container'
                                        type="text"
                                        value={exercise.sets}
                                        onChange={(e) => handleCellChange(rowIndex, 'sets', e.target.value)}
                                        key={`sets-${rowIndex}`}
                                    />
                                </td>
                                <td>
                                    <input className='input-container'
                                        type="text"
                                        value={exercise.reps}
                                        onChange={(e) => handleCellChange(rowIndex, 'reps', e.target.value)}
                                        key={`reps-${rowIndex}`}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}