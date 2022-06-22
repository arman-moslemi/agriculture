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
const RightPanelMenu = () =>{
    
    return(
        <div className="whiteBoxRight">
        <div className="rightBox1 d-flex align-items-center">
            <img src={Avatar}/>
            <div>
                <p className="userName">
                    یاسمن طاهری
                </p>
                <p className="userNumber">
                    09120767676
                </p>
            </div>
        </div>
        <div className="rightBox2">
            <ul>
                <li>
                    <a href="#">
                        <img src={R1B}/>
                        اطلاعات کاربری
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R2B}/>
                       مدیریت دستگاه های IoT
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R3B}/>
                       داشبورد IoT
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R4B}/>
                        کیف پول
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R5B}/>
                        تاریخچه
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R6B}/>
                        برگزیده ها
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R7B}/>
                        تیکت ها
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={R8B}/>
                        خروج از حساب کاربری
                    </a>
                </li>
            </ul>
        </div>

    </div>
    );
};
export default RightPanelMenu;