"use client"
import { useState } from "react";
import Card from '../../../../components/card';
import { METHODS } from "http";

export default function AdminWork(){
    const [data, setData] = useState({
        title:'',
        employeType:'',
        companyName:'',
        location:'',
        startDate:'',
        endDate:'',
    });

    const optEmployeType = [
        {label:'Full Time', value:'full-time'},
        {label:'Part Time', value:'part-time'},
        {label:'Contract', value:'contract'},
        {label:'Internship', value:'internship'}
      ]
    
      const optLocation = [
        {label:'Onsite', value:'nsite'},
        {label:'WFH', value:'wfh'},
      ]

    const inputHandler=(e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    async function onSubmitData() {
        try{
            if(typeof req.body !== "object"){
                throw new Error('invalid request')
            }

            let myWork = await db.collection("work").insertOne(req.body);
            res.json({ data: myWork });
        }catch(err){
            res.status(422).json({ message: err.message});
        }
    }

    return(<>
        <Card title="Work From" className="pb-5">
            <div className="w-full my-2">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={inputHandler}
                    className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>employe Type</label>
                <select
                    type="employeType"
                    onChange={inputHandler}
                    className="w-full border my-input-text">
                    {
                        optEmployeType &&
                        optEmployeType.map((item, key)=>
                            <option key={key} value={item.value}>{item.label} </option>)
                    }
                </select>
            </div>
            
            <div className="w-full my-2">
                <label>companyName</label>
                <input
                    name="companyName"
                    type="text"
                    onChange={inputHandler}
                    className="w-full border my-input-text"/>
            </div>
            
            <div className="w-full my-2">
                <label>Location</label>
                <select
                    name="location"
                    onChange={inputHandler}
                    className="w-full border my-input-text">
                    {
                        optLocation &&
                        optLocation.map((item, key)=>
                            <option key={key} value={item.value}>{item.label} </option>
                        )
                    }
                </select>
            </div>

            <div className="w-full my-2">
                <label>Start Date</label>
                <input
                    name="startDate"
                    onChange={inputHandler}
                    type="date"
                    className="w-full border my-input-text"/>
            </div>

            <div className="w-full my-2">
                <label>End Date</label>
                <input
                    name="endDate"
                    onChange={inputHandler}
                    type="date"
                    className="w-full border my-input-text"/>
            </div>
            
            <button className="mx-1 h-9 items-center justify-center px-4 rounded-md bg-amber-500">
                <label>Submit Data</label>
            </button>
            
            <Card title="List Of Work" style="mt-5">
                adafaev
            </Card>
        </Card>
    </>
    
    );
}