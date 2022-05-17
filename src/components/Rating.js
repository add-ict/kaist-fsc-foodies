import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import "./Rating.css";

function getColorCode(star)
{
    if(star<=1)
        return "#f00";
    if(star<=3)
        return "#ff0";
    return "#008000";
}

export default function Rating({name, distance, totalStar, tasteStar, priceStar}){
    return (
        <div id='Rating--wrapper'>
            <div id="Rating--upper">
                <div id="Rating--name"> {/* 가게 이름*/}
                    {name}
                </div>
                <div id="Rating--distance">  {/*거리*/}
                    {distance}
                </div>
            </div>
            <div id="Rating--lower">
                <div class="Rating--star" style={{color:getColorCode(totalStar)}}> {/*총점*/}
                    <div class="Rating--title">총점</div>
                    <div class="Rating--value">{totalStar}/5</div>
                </div>
                <div class="Rating--star" style={{color:getColorCode(totalStar)}}> {/*맛*/}
                    <div class="Rating--title">맛</div>
                    <div class="Rating--value">{tasteStar}/5</div>
                </div>
                <div class="Rating--star" style={{color:getColorCode(totalStar)}}> {/*가격*/}
                    <div class="Rating--title">가격</div>
                    <div class="Rating--value">{priceStar}/5</div>
                </div>
            </div>
        </div>
    );
}