import * as React from 'react';
import Button from '@mui/material/Button';
import "./Info.css";
import Box from '@mui/material/Box';

function getColorCode(star)
{
    if(star<=1)
        return "#f00";
    else if(star<=3)
        return "#ff7f00";
    return "#008000";
}

export default function Info({name, totalStar, tasteStar, priceStar, review}){
    return(
        <div id='Info--wrapper'>
            <div style={{width:"100%", height:"30vh", backgroundColor:"green"}}> 대충 지도 들어갈 자리</div>
            <div id="Info--upper">
                <div id="Info--name"> {/* 가게 이름*/}
                    {name}
                </div>
                <Button id="Info--review" variant="contained">후기 쓰기</Button>
                <Button id="Info--navigate" variant="contained">길찾기</Button>
            </div>
            <div id="Info--middle">
                <div class="Info--star" style={{color:getColorCode(totalStar)}}> {/*총점*/}
                    <div class="Info--title">총점</div>
                    <div class="Info--value">{totalStar}/5</div>
                </div>
                <div class="Info--star" style={{color:getColorCode(tasteStar)}}> {/*맛*/}
                    <div class="Info--title">맛</div>
                    <div class="Info--value">{tasteStar}/5</div>
                </div>
                <div class="Info--star" style={{color:getColorCode(priceStar)}}> {/*가격*/}
                    <div class="Info--title">가격</div>
                    <div class="Info--value">{priceStar}/5</div>
                </div>
            </div>
            <div id="Info--lower">
                <span id="Info--reviewtitle">후기</span> <br></br>
                {review.map(x=>{
                    return <p class="Info--reviewcontent">{x}</p>;})}
            </div>
        </div>
    )
}
