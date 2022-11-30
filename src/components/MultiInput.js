import React, { useState } from 'react'

export default function MultiInput() {

    const [userReg, setUserreg] = useState({
        username: "",
        email: "",
        website: "",
        gender: "",
        phone: "",
        address: ""
    })
    const [records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserreg({ ...userReg, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecords = { ...userReg, id: new Date().getTime().toString() }
        setRecords([...records, newRecords]);
        setUserreg({ username: "", email: "", website: "", gender: "", phone: "", address: "" });
    }

    const hnadleClear = (e) => {
        e.preventDefault();
        setUserreg({ username: "", email: "", website: "", gender: "", phone: "", address: "" });
    }

    return (
        <> <h1>Student Enrollment Form</h1>
            <div className='multi-input'>
                <form onSubmit={handleSubmit} className='form-input'>
                    <h2> Registration Form</h2>
                    <table>
                        <tr>
                            <td><label htmlFor="username">Full Name</label></td>
                            <td> <input type='text' onChange={handleInput} name='username' id='username' value={userReg.username}></input>
                            </td></tr>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td><input type='email' onChange={handleInput} name='email' id='email' value={userReg.email}></input>
                            </td></tr>
                        <tr>
                            <td><label htmlFor="website">Website</label></td>
                            <td>  <input type='website' onChange={handleInput} name='website' id='website' value={userReg.website}></input></td></tr>
                        <tr> <td><label htmlFor="gender">Gender</label></td>
                            <td> <input type="radio" name="gender" onChange={handleInput} id="gender" value="Male" checked={userReg.gender == "Male"} />Male
                                <input type="radio" name="gender" onChange={handleInput} id="gender" value="Female" checked={userReg.gender == "Female"} />Female </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="phone">Phone No</label></td>
                            <td><input type='tel' onChange={handleInput} name='phone' id='phone' value={userReg.phone}></input></td></tr>
                        <tr>
                            <td><label htmlFor="address">Address</label></td>
                            <td><textarea rows="4" type='text' onChange={handleInput} name='address' id='address' value={userReg.address}></textarea></td>
                        </tr>
                        <tr>
                            <td> <button className='btn-input' type='submit' onClick={handleSubmit} id='submit'>Submit</button>
                            </td>
                            <td>
                                <button className='btn-input' onClick={hnadleClear} id='clear'>Clear</button>
                            </td>
                        </tr>
                    </table>
                </form>

                <div className='display-item'>
                    <h2>Enrolled students</h2>
                    {
                        records.map((curEle,) => {
                            const { username, email, website, gender, phone, id, address, skill } = curEle;

                            return (

                                <div className='display-input' key={id}>
                                    <p>{username}</p>
                                    <p>{email}</p>
                                    <p>{website}</p>
                                    <p>{gender}</p>
                                    <p>{phone}</p>
                                    <p>{address}</p>
                                    <p>{skill}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
