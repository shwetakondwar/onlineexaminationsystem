import React from 'react'
import '../css/exampage.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const Exampage = (props) => {
    const quesno = useRef(1);
    const history = useNavigate();
    let dta = parseInt(0);
    const [MyArray, setMyArray] = useState([]);
    const marks = useRef(dta);
    const [btntxtval, setbtntxtval] = useState("Save & Next");
    const location = useLocation();
    let [quesvalue, setquesvalue] = useState(0)
    const { userid, examid, passobj, totalmarks, subname } = location.state;
    var { minutes } = location.state;
    var minutees = minutes;
    var minutees1 = minutees;
    const [data, setdata] = useState([])
    const [load, setload] = useState(false);
    const [element, setelement] = useState(null);
    useEffect(() => {
        async function fetchExamUpcoming() {
            let response = await fetch('http://127.0.0.1:8000/student/examsquestions/' + examid)
            let data = await response.json();
            setdata(data);
            console.log(data);
            setload(true);
            if (data.length > 0) {
                // data = data.sort(() => Math.random() - 0.5)git credential-manager uninstall
                setelement(data[0]);
                try {
                    document.getElementById("timeremain").innerHTML = `${minutees1}`;

                } catch (error) {
                    console.log("")
                }
                for (let i = 1; i <= data.length; i++) {
                    setMyArray(oldArray => [...oldArray, i]);
                }
            }
        }
        fetchExamUpcoming();
    }, [examid, minutees1]);
    console.log(passobj);
    async function postexamresult() {

        var result = "NA";
        if (marks.current >= (totalmarks * 35 / 100)) {
            result = "PASS";
        }
        else {
            result = "FAILED";
        }
        try {
            const was = await fetch('http://127.0.0.1:8000/student/postresult/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: subname,
                    exam_id: examid,
                    student_id: userid,
                    is_attempted: true,
                    obtained_marks: marks.current,
                    result: result,
                    user_name: passobj.user_name

                })
            })
            console.log(marks.current);
        }
        catch (error) {

        }
    }
    const clearresponse = (e) => {
        document.querySelector('input[type=radio][name=chc]:checked').checked = false;
    }
    const changeques = (e) => {
        var radio = document.querySelector('input[type=radio][name=chc]:checked');


        if (radio != null) {
            if (parseInt(radio.value) === element.correctoption) {
                marks.current = marks.current + element.marks;
                console.log(marks.current);
            }
            try { document.getElementById(`lowerques${quesno.current}`).className = "attempted" } catch (error) { console.log(error) }
            radio.checked = false;
        }
        setquesvalue(quesvalue = quesvalue + 1);
        quesno.current = quesno.current + 1;

        if (quesvalue === (data.length - 1)) {
            setbtntxtval("Save & Submit");
        }

        if (quesvalue >= data.length) {
            submit();
        }
        else {
            setelement(data[quesvalue]);
        }
    }
    const abcd = setInterval(function () {
        minutees = minutees - 1;
        try {
            document.getElementById("timeremain").innerHTML = `${minutees} `;
            // clearInterval(myvar);
        } catch (error) {
            console.log("")
        }
        if (minutees === 1) {

            try {
                document.getElementById("redtime").className = "redtime";
                // clearInterval(myvar);
            } catch (error) {
                console.log("");
            }

            let seconds = 60;
            const lmn = setInterval(function () {
                seconds = seconds - 1;
                if (seconds === 0) {
                    submit()
                    clearInterval(lmn);
                }
            }, 1000);

        }
    }, 60000);
    const submit = async () => {
        await postexamresult();
        setTimeout(function () {
            props.showalert("your test submitted succesfully", "success");
            history('/studenthomepage', {
                state: {
                    email: passobj.email,
                    stream: passobj.stream, year: passobj.year, id: passobj.id,
                    reloadloca: true
                }
            });
        }, 2000);

    }
    return (
        <>{
            load && (element !== null) &&
            (
                <div className='abcd7'>
                    <div id="redtime" className="uppertime">
                        <p className='tushar4'>{passobj.user_name}</p>
                        <p className='tushar5'>Question No: {quesno.current} </p>

                    </div>
                    <div className='mainbox'>



                        <div className="maindiv">
                            <div className="upperdiv">
                                <div className="upperques">
                                    <p className="topques">Q  .{element.ques}</p>
                                </div>
                                <div className="chcg">
                                    <div className="choicesblock">
                                        {/* <p className="choicesspan">A</p> */}
                                        <label className="optionsofexam"><input className="insradio" name="chc" type="radio" value={1} />{element.opt1}</label>
                                        
                                    </div>
                                    <div className="choicesblock">
                                        {/* <p className="choicesspan">B</p> */}
                                        <label className="optionsofexam"><input className="insradio" name="chc" type="radio" value={2} />{element.opt2}</label>
                                        
                                    </div>
                                    <div className="choicesblock">
                                        {/* <p className="choicesspan">C</p> */}
                                        <label className="optionsofexam"> <input className="insradio" name="chc" type="radio" value="3" />{element.opt3}</label>
                                       
                                    </div>
                                    <div className="choicesblock">
                                        {/* <p className="choicesspan">D</p> */}
                                        <label className="optionsofexam"><input className="insradio" name="chc" type="radio" value="4" />{element.opt4}</label>
                                        
                                    </div>
                                </div>

                            </div>
                            <div className='buttonsfather'>
                                <button className="buttonofsavenext" onClick={clearresponse} type="submit">Clear Response</button>
                                <button className="buttonofsavenext" onClick={changeques} type="submit">{btntxtval}</button>
                                {/* <button className="buttonofsavenext" onClick={changeques} type="submit">{btntxtval}</button> */}
                            </div>



                        </div>
                        <div className="lowerdiv">
                            <div className='tushar3'>
                                <p className='timesof' style={{fontSize:"22px"}}>Time Reamining   </p>
                                <p className='timesof1' style={{fontSize:"22px"}} ><span style={{fontSize:"28px"}} id="timeremain"></span> mins</p>
                                <p style={{fontSize:"16px"}} className='timesof1'>Total Time Of Exam : {minutes} minutes </p>
                            </div>
                            <p style={{fontSize:"22px"}} className='saga'>Questions</p>
                            <div className="markingques">
                                {MyArray.map(animal => (
                                    <div id={"lowerques" + animal} key={animal} className={"innermarkingques"}>

                                        <p>{animal}</p>

                                    </div>
                                ))}
                            </div>
                        </div>



                    </div>
                </div>

            )

        }
        </>
    )
}

export default Exampage