import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Board from 'react-trello'

import './dashpage.scss';


Chart.register(ArcElement);



function DashPage() {

    

    return(
        <div className="dashpage">
            <div className="dashpage-header">
                <div>
                    <b>Tổng quan</b>
                </div>
                <div onClick={() => {}}>
                    <RemoveOutlinedIcon sx={{fontWeight: "bold"}} />
                </div>
            </div>
            <hr />
            <div className="chart">
                <div className="chart-img">
                    <div className="chart-img-img">
                    <Doughnut
                        width={"50%"}
                        data={{
                            labels: [
                                "Đồ gia dụng",
                                "Dụng cụ học tập",
                                "Đồ ăn, đồ uống",
                                "Thực phẩm",
                            ],
                            datasets: [
                            {
                                label: "Population (millions)",
                                data: [200,200,200,209],
                                backgroundColor: [
                                    "#3e95cd",
                                    "#8e5ea2",
                                    "#cc33ff",
                                    "#993333",
                                ],
                                hoverOffset: 4,
                            }
                            ]
                        }}
                        style={
                            {
                                width: "50%",
                            }
                        }
                    />
                    </div>
                    <div className="chart-infor">
                        <div className="chart-infor-div">
                            <div style={{background: "#3e95cd", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Chưa làm</p>
                            <p>49 (70%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#8e5ea2", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Đang làm</p>
                            <p>49 (70%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#3e95cd", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Hoàn thành</p>
                            <p>49 (70%)</p>
                        </div>
                        <div className="chart-infor-div">
                            <div style={{background: "#cc33ff", width: 30 + "px", height: 30 + "px"}}></div>
                            <p>Khác</p>
                            <p>49 (70%)</p>
                        </div>
                    </div>
                </div>
                <div className="chart-analyst">
                    <div style={{color: "#3e95cd"}}>
                        <p>HT ĐÚNG HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>17% công việc</p>
                    </div>
                    <div style={{color: "#8e5ea2"}}>
                        <p>HT ĐÚNG HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>17% công việc</p>
                    </div>
                    <div style={{color: "#cc33ff"}}>
                        <p>HT ĐÚNG HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>17% công việc</p>
                    </div>
                    <div style={{color: "#993333"}}>
                        <p>HT ĐÚNG HẠN</p>
                        <p style={{fontWeight: "bold"}}>12</p>
                        <p>17% công việc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashPage;