import {React ,useState } from "react";
import { Container, Row ,Col ,Button ,Modal ,Form} from "react-bootstrap";

import Avatar from "src/components/assets/img/avatar.png";
import R1B from "src/components/assets/img/r1B.png";
import R2B from "src/components/assets/img/r2B.png";
import R3B from "src/components/assets/img/r3B.png";
import R4B from "src/components/assets/img/r4B.png";
import R5B from "src/components/assets/img/r5B.png";
import R6B from "src/components/assets/img/r6B.png";
import R7B from "src/components/assets/img/r7B.png";
import R8B from "src/components/assets/img/r8B.png";
import R1G from "src/components/assets/img/r1G.png";
import R2G from "src/components/assets/img/r2G.png";
import R3G from "src/components/assets/img/r3G.png";
import R4G from "src/components/assets/img/r4G.png";
import R5G from "src/components/assets/img/r5G.png";
import R6G from "src/components/assets/img/r6G.png";
import R7G from "src/components/assets/img/r7G.png";
import R8G from "src/components/assets/img/r8G.png";
import { useTranslation } from 'react-i18next';

import { Link } from "react-router-dom";
import { Explicit } from "react-bootstrap-icons";
const RightPanelMenu = ({data}) =>{
    const Exit= async()=>{
        localStorage.setItem("CustomerID","")
    }
    const {t,i18n} = useTranslation();

    return(
        <div className="whiteBoxRight">
        <div className="rightBox1 d-flex align-items-center">
            <img src={Avatar}/>
            <div>
                <p className="userName">
                   {data[0]?.Name} {data[0]?.Family}
                </p>
                <p className="userNumber">
                    {data[0]?.Mobile}
                </p>
            </div>
        </div>
        <div className="rightBox2">
            <ul>
                <li>
                    <Link to={"/EditProfile"}>
                        <img src={R1B}/>
                        {t("اطلاعات کاربری")}
                    </Link>
                </li>
                <li>
                <Link to={"/IoTManagement"}>
                        <img src={R2B}/>
                        {t("مدیریت دستگاه های IoT")}
                    </Link>
                </li>
                <li>
                <Link to={"/IoTDashboard"}>
                        <img src={R3B}/>
                        {t("داشبورد IoT")}
                    </Link>
                </li>
                <li>
                <Link to={"/Wallet"}>
                        <img src={R4B}/>
                        {t("کیف پول")}
                    </Link>
                </li>
                <li>
                <Link to={"/UserHistory"}>
                        <img src={R5B}/>
                        {t("تاریخچه")}
                    </Link>
                </li>
                <li>
                <Link to={"/Favorite"}>
                        <img src={R6B}/>
                        {t("برگزیده ها")}
                    </Link>
                </li>
                <li>
                <Link to={"/TicketList"}>
                        <img src={R7B}/>
                        {t("تیکت ها")}
                    </Link>
                </li>
                <li>
                <Link to={"/Login"} onClick={()=>Exit()}>
                        <img src={R8B}/>
                        {t("خروج از حساب کاربری")}
                    </Link>
                </li>
            </ul>
        </div>

    </div>
    );
};
export default RightPanelMenu;