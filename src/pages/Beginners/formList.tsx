// CMC 37 list of movements

import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {  Grid, Button, Card, CardContent, CardActions, Paper } from '@material-ui/core';

import theme from "../../global/theme"
import VSeparator from "../../components/VSeparator/VSeparator"

import birdsTail from "../../images/birdsTail.jpg"
import crane from "../../images/crane2.jpg"
import monkey from "../../images/3Monkeys.jpg"
import squat from "../../images/squattingSingleWhip.jpg"
import snake from "../../images/snake.png"
import tiger1 from "../../images/tiger1.jpg"
import tiger2 from "../../images/tiger2.png"
import lady from "../../images/jadeWoman1.jpg"
import pipa from "../../images/pipa.jpg"
import rooster from "../../images/rooster.png"
import clouds from "../../images/clouds.jpg"
import bookCover from "../../images/ThirteenTreatisesBook.jpg"

export type EntryCount = number | boolean
export type Entry = {
  count: EntryCount;
  chinese: string;
  english: string;
  image?: string;
}
export type FormList = Entry[]

export const formListItems: FormList = [
  { 
    count: 1,
    chinese: "yù bèi shì",
    english: "Preparation posture"
  },
  {
    count: 2,
    chinese: "qǐ shì",
    english: "Beginning posture"
  },
  {
    count: false,
    chinese: "lán què wěi",
    english: "Grasp the sparrow’s tail, postures 3-7",
    image: birdsTail
  },
  {
    count: 3,
    chinese: "peng",
    english: "Ward off Left"
  },
  {
    count: 4,
    chinese: "peng",
    english: "Ward off Right"
  },
  {
    count: 5,
    chinese: "lu",
    english: "Roll back"
  },
  {
    count: 6,
    chinese: "ji",
    english: "Press"
  },
  {
    count: 7,
    chinese: "an",
    english: "Push"
  },
  {
    count: 8,
    chinese: "dān biān",
    english: "Single whip"
  },
  { 
    count: 9,
    chinese: "tí shǒu",
    english: "Lift hands"
  },
  {
    count: 10,
    chinese: "kào",
    english: "Shoulder",
  },
  {
    count: 11,
    chinese: "bái hè liàng chì",
    english: "White crane spreads wings",
    image: crane,
  },
  {
    count: 12,
    chinese: "lōu xī ào bù",
    english: "Brush knee left"
  },
  {
    count: 13,
    chinese: "shǒu huī pípá",
    english: "Play P'i P'a (Lute/Guitar)",
    image: pipa,
  }, 
  {
    count: false,
    chinese: "lōu xī ào bù",
    english: "Repeat brush knee left"
  },
  {
    count: 14,
    chinese: "jìn bù bān lán chuí",
    english: "Step forward, deflect downward and punch"
  },
  {
    count: 15,
    chinese: "rú fēng sì bì",
    english: "Withdraw and push (apparent close up)"
  },
  {
    count: 16,
    chinese: "shí zì shǒu",
    english: "Cross hands",
  },
  {
    count: false,
    chinese: "",
    english: "End of first section"
  },
  {
    count: 17,
    chinese: "bào hǔ guī shān",
    english: "Embrace tiger, return to mountain",
    image: tiger1
  },
  {
    count: false,
    chinese: "lán què wěi",
    english: "Grasp the sparrow’s tail"
  },
  {
    count: false,
    chinese: "xié dān biān",
    english: "Slanting(diagonal) single whip",
  },
  {
    count: 18,
    chinese: "zhǒu dǐ chuí",
    english: "(Look at) fist under elbow"
  },
  {
    count: 19,
    chinese: "dào niǎn hóu",
    english: "Step back to repulse the monkey, right side",
    image: monkey
  },
  {
    count: 20,
    chinese: "dào niǎn hóu",
    english: "Step back to repulse the monkey, left side",
  },
  {
    count: false,
    chinese: "dào niǎn hóu",
    english: "Step back to repulse the monkey, right side",
  },
  {
    count: 21,
    chinese: "xié fēi shì",
    english: "Diagonal flying",
  },
  {
    count: 22,
    chinese: "yún shǒu",
    english: "Cloudy hands, right",
    image: clouds
  },
  {
    count: 23,
    chinese: "yún shǒu",
    english: "Cloudy hands, left",
  },
  {
    count: false,
    chinese: "",
    english: "Repeat: Cloudy hands right, Cloudy hands left, single whip"
  },
  {
    count: 24,
    chinese: "shé shēn xià shì",
    english: "Descending(squatting) single whip (Snake creeps down)",
    image: squat
  },
  {
    count: 25,
    chinese: "jīn jī dú lì",
    english: "Golden pheasant (rooster) stands on one leg, right side",
  },
  {
    count: 26,
    chinese: "jīn jī dú lì",
    english: "Golden pheasant (rooster) stands on one leg, left side",
    image: rooster
  },
  {
    count: 27,
    chinese: "fēn jiǎo",
    english: "Separate right foot",
  },
  {
    count: 28,
    chinese: "fēn jiǎo",
    english: "Separate left foot",
  },
  {
    count: 29,
    chinese: "zhuǎn shēn dèng jiǎo",
    english: "Turn and kick with heel",
  },
  {
    count: false,
    chinese: "zuǒ yòu lōu xī ào bù",
    english: "Brush knee, left",
  },
  {
    count: 30,
    chinese: "",
    english: "Brush knee, right",
  },
  {
    count: 31,
    chinese: "jìn bù zāi chuí",
    english: "Step forward and strike with fist (low punch)",
  },
  {
    count: false,
    chinese: "shàng bù lán què wěi",
    english: "Step forward and ward off. Repeat Grasp the sparrow's tail",
  },
  {
    count: false,
    chinese: "dān biān",
    english: "Repeat Single whip",
  },
  {
    count: 32,
    chinese: "yù nǚ chuān suō",
    english: "Fair(Jade) lady weaves at the shuttle #1",
    image: lady,
  },
  {
    count: 33,
    chinese: "yù nǚ chuān suō",
    english: "Fair(Jade) lady weaves at the shuttle #2",
  },
  {
    count: false,
    chinese: "yù nǚ chuān suō",
    english: "Repeat, fair lady #3, fair lady #4"
  },
  {
    count: false,
    chinese: "lán què wěi",
    english: "Repeat: Grasp the sparrow's tail",
  },
  {
    count: false,
    chinese: "lán què wěi",
    english: "Repeat: Single whip",
  },
  {
    count: false,
    chinese: "shé shēn xià shì",
    english: "Repeat: Squatting single whip",
    image: snake,
  },
  {
    count: 34,
    chinese: "shàng bù qī xīng",
    english: "Step forward to seven stars",
  },
  {
    count: 35,
    chinese: "tuì bù kuà hǔ",
    english: "Step back and ride the Tiger",
  },
  {
    count: 36,
    chinese: "zhuǎn shēn bǎi lián",
    english: "Turn the body and sweep the Lotus with leg",
  },
  {
    count: 37,
    chinese: "wān gōng shè hǔ",
    english: "Bend bow, shoot Tiger",
    image: tiger2
  },
  {
    count: false,
    chinese: "jìn bù bān lán chuí",
    english: "Repeat: Step forward, deflect downward and punch",
  },
  {
    count: false,
    chinese: "rú fēng sì bì",
    english: "Repeat: Withdraw and push"
  },
  {
    count: false,
    chinese: "shí zì",
    english: "Repeat: Cross hands",
  },
  {
    count: false,
    chinese: "hé tài jí",
    english: "Ending T'ai Chi",
  },



  


]

const formListStyles = makeStyles({
  listBox: {
    display: 'grid',
    [theme.breakpoints.up('xs')]: {
      gridTemplateColumns: `repeat(${1}, minmax(250px, 400px))`,
      gridTemplateRows: `repeat(${Math.round((formListItems.length / 1) + 0.5)}, 1fr)`,
      columnGap: '0.5rem',
      rowGap: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: `repeat(${2}, minmax(300px, 450px))`,
      gridTemplateRows: `repeat(${Math.round((formListItems.length / 2) + 0.5)}, 1fr)`,
      columnGap: '1rem',
      rowGap: '0.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: `repeat(${3}, minmax(350px, 500px))`,
      gridTemplateRows: `repeat(${Math.round((formListItems.length / 3) + 0.5)}, 1fr)`,
      columnGap: '2rem',
      rowGap: '0.75rem',
    },
    
    gridAutoFlow: 'column',
  },
  itemBox: {
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '4px',
    borderColor: 'lightGrey',
    margin: '0.25rem',
    padding: '0.5rem',
    backgroundColor: 'white',

  },
  gridContainer: {
    // height: '100%',
    width: '85%',
    margin: '0.5rem',
  },
  numberBox: {
    fontSize: '1.75rem',
  },
  itemChinese: {
  },
  itemEnglish: {
    fontWeight: "bold",
  },
})

export const FormList: React.FunctionComponent = () => {
  const classes = formListStyles()

  return (
  <div>
    <h4>List of postures for 37 movement Cheng man ching form</h4>
    <div className={classes.listBox}>
      {formListItems.map((item, index) => {
        const backgroundStyles = item.image ? (
          { 
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top',

          }) : ({})
        return (
          <Paper elevation={2} style={backgroundStyles}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={3} className={classes.numberBox}>
                {item.count && item.count}
              </Grid>
              <Grid item xs={9} >
                <div className={classes.itemEnglish}>
                  {item.english}
                </div>
                <div className={classes.itemChinese}>
                  <em>{item.chinese}</em>
                </div>
              </Grid>
            </Grid>
          </Paper>
          
        )})}
    </div>

    <VSeparator lines={1} />
    
    <p>
      The numbering and English naming of the postures varies from author to author, but there are always 37. 
      I have put in brackets some of the other names commonly used. It is important to know that the names themselves
      are not important, they are labels for the form postures - some are more poetic than others. There is no need to
      learn (or try to pronounce) the Chinese names. However , the components of Grasp the sparrow's tail are commonly 
      used. <em>Peng</em> - ward off, pronounced more like "pung". <em>Lu</em> - rollback, long 'u' sound. <em> Ji </em> - press,
      short 'i', more 'ee'. <em>An</em> - push, pronounced more like "aahn"
    </p>
    <p>
      Each labelled posture consists of several complete movements and changes of direction, with co-ordination of arms, waist and feet. So this simple list
      cannot be used to learn the form, but only as a reminder. It is helpful to know the names of movements, or at least a rough
      version of the name, to be able to ask questions about movements during class. I have also found this list useful in
      piecing together the form as a single movement
    </p>
    <p>
      The numbering and English translations are from this book by Cheng Man Ching
    </p>

    <Card raised={true} >
      <CardContent>
          <img src={bookCover} alt="Cheng Tzu's Thirteen Treatises on T'ai Chi Ch'uan" />
          <h3>Cheng Tzu's Thirteen Treatises on T'ai Chi Ch'uan</h3>
          <h4>Translated by Benjamin Pang Jeng Lo and Martin Inn</h4>
      </CardContent>

      <CardActions>
          <Button 
              variant="contained" size="large" color="secondary"
              href="https://www.amazon.com/s?k=cheng+tzu%27s+thirteen+treatises&ref=nb_sb_noss_2"
            >
            Find on Amazon
          </Button>
      </CardActions>
    </Card>

  </div>
  
  );
}

export const cardInfo = (
  <div >
    <h6>37 form list of postures</h6>
  </div>
)
/*
http://www.singongtaichi.com/cmc37form.html

Strange numbering

1	預備勢		preparation
•	起勢		commencement
2	攔雀尾	lán què wěi	
• ward - off(left side)
• ward - off(right side)
• roll back
• press
• push
3	單鞭		single whip
4	提手		raise arms
•	靠	kào	lean
5	白鶴亮翅	bái hè liàng chì	white crane spreads wings
6	摟膝拗步	lōu xī ào bù	brush knee twist step
7	手揮琵琶	shǒu huī pípá	hand strums the pipa
8	摟膝拗步	lōu xī ào bù	brush knee twist step
9	進步搬攔捶	jìn bù bān lán chuí	advance, deflect, parry and punch
10	如封似閉	rú fēng sì bì	apparently closing
11	十字手	shí zì shǒu	cross hands
Section Two

12	抱虎歸山	bào hǔ guī shān	embrace tiger, return to mountain
•	攔雀尾	lán què wěi	grasp the sparrow’s tail
• ward - off
• roll back
• press
• push
13	斜單鞭	xié dān biān	diagonal single whip
14	肘底捶	zhǒu dǐ chuí	fist under elbow
15	倒攆猴（五）	dào niǎn hóu	step back and repulse monkey(5)
16	斜飛勢	xié fēi shì	diagonal flying
17	雲手（四）	yún shǒu	cloud hands(4)
18	單鞭	dān biān	single whip



Section Three

19	蛇身下勢	shé shēn xià shì	snake creeps down
20	金雞獨立	jīn jī dú lì	golden rooster, single stance
• right side
• left side
21	分腳	fēn jiǎo	separate leg
• right side
• left side
22	轉身蹬腳	zhuǎn shēn dèng jiǎo	turn body and heel kick
23	左右摟膝拗步	zuǒ yòu lōu xī ào bù	left and right brush knee and twist step
24	進步栽捶	jìn bù zāi chuí	advance and plant punch
25	上步攔雀尾	shàng bù lán què wěi	rise up and grasp the sparrow’s tail
• ward - off
• roll back
• press
• push
26	單鞭	dān biān	single whip

Section Four

27	玉女穿梭（四）	yù nǚ chuān suō	fair lady weaving(4)
28	攔雀尾	lán què wěi	grasp the sparrow’s tail
• ward - off
• roll back
• press
• push
29	單鞭	dān biān	single whip
30	蛇身下勢	shé shēn xià shì	snake creeps down
31	上步七星	shàng bù qī xīng	rise up to the Seven Stars
32	退步跨虎	tuì bù kuà hǔ	step back and ride tiger
33	轉身擺蓮	zhuǎn shēn bǎi lián	turn body and swing over lotus
34	彎弓射虎	wān gōng shè hǔ	bend bow shoot tiger
35	進步搬攔捶	jìn bù bān lán chuí	advance, deflect, parry and punch
36	如封似閉	rú fēng sì bì	apparently closing
37	十字手	shí zì shǒu	cross hands
•	合太極	hé tài jí	conclude tai chi

*/

/* image attributions
tiger2

<strong>Image Credit</strong>:<a href="https://www.vectorhq.com/psd/white-tiger-psd-449773" title="white tiger PSD" target="_blank">white tiger PSD</a> from <a href="https://www.vectorhq.com/" target="_blank">VectorHQ.com</a>
*/

