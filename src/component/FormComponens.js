import { useState } from "react";

export default function FormComponens(props) {
    //const [nev, setNev] = useState("")
    //const [szulev, setSzulev] = useState(2000)

    const [obj, setObj] = useState({
        nev:"",
        szulEv:2000,
    })

    function valtozasKezeles(event) {
        console.log(event.target.value)
        //segéd változó
        let sv = {...obj}
        sv[event.target.id]=event.target.value
        setObj({...sv});
        //setNev(event.target.value)
    }

    function adatKuld(event){
        event.preventDefault()
        console.log(obj)
        props.adatKuld(obj)
    }

    return (
        <form onSubmit={adatKuld}>
            <div>
                <label htmlFor="nev">Név</label>
                <input
                    type="text"
                    id="nev"
                    name="nev"
                    value={obj.nev}
                    placeholder="Vezetéknév Keresztnév"
                    onChange={valtozasKezeles}
                ></input>
            </div>
            <div>
                <label htmlFor="szulEv">Év</label>
                <input
                    type="text"
                    id="szulEv"
                    name="szulEv"
                    value={obj.szulEv}
                    min="1900"
                    max="2024"
                    onChange={valtozasKezeles}
                ></input>
            </div>
            <input type="submit" id="submit" name="submit" value="Küld"></input>
        </form>
    );
}