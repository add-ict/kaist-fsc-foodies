type Review = {
	id: number,
	tasteStar: number,
	priceStar: number,
	totalStar: number,
	contents: string,
	lang: "en"|"ko",
}
type Store = {
	name: {ko:string,en:string},
	kakaoMapId: string,
	location: {x:number, y:number},
	reviews: Review[],
	tags: number[]
}
type Tag = {
	id: number,
	name: {ko:string,en:string}
}
interface DB {
	tags: Tag[]
	stores: Store[]
}

const tagKo = ["어은동","궁동","가성비","분위기","한식","양식","중식","일식"];
const tagEn = ["Eoeun-dong","Gung-dong","Good Price","Mood","Korean","Western","Chinese","Japanese"];

const tags: Tag[]=[]
for(let i=0;i<tagKo.length;i++) {
    tags.push({
        id: i,
        name: {ko: tagKo[i], en: tagEn[i]}
    })
}
const rand = ()=>Math.floor(Math.random()*10)/2;

function getReview(i: number): Review|void {
    const lang = ['en','ko'][Math.floor(Math.random()*2)];
    const tag = lang=='en'?tagEn:tagKo;
    const n = Math.floor(Math.random()*20)+5
    const contents=Array(n).fill("").map(_=>tag[Math.floor(Math.random()*tag.length)]).join(' ')
    if (lang === 'en' || lang=='ko') {
    const ret: Review ={
            id:i,
        	tasteStar: rand(),
            priceStar: rand(),
            totalStar: rand(),
            contents,
            lang
    };  
    return ret;
    }
    else return;
}
const stores: Store[] = []
for(let i=0;i<10;i++) {
    const reviews:Review[]=[];
    const k=Math.floor(Math.random()*5)
    for (let j=0;j<k;j++) {
        const r = getReview(j);
        if (r) reviews.push(r)
    }
    stores.push({
        	name: {ko:`가게${i}`,en:`Store${i}`},
            kakaoMapId: "123123123123",
            location: {x:0.0, y:0.0},
            reviews,
            tags: Array(tagEn.length).fill(0).map((_,i)=>i).filter(x=>Math.random()<0.3)
    })
}
const db :DB = {tags,stores};
