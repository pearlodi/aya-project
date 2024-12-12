import icon1 from '../assets/images/icon.svg'
import icon2 from '../assets/images/icon2.svg'

import icon3 from '../assets/images/icon3.svg'

export type Member = {
    name: string
    points: number
    hackathon: string,
    userName?: string,
    icon: string
  }
  
  export const communityData: Member[] = [
    { name: "John Doe", points: 170, hackathon: "Hack1Futo ", userName: '@oliviacoledesigns', icon: icon1 },
    { name: "Jane Smith", points: 190, hackathon: "Hack2Futo ", userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Tom Brown", points: 280, hackathon: "Hack3Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Emma White", points: 70, hackathon: "Hack4Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Luke Green", points: 60, hackathon: "Hack5Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Lukas Green", points: 60, hackathon: "Hack6Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Alice Gray", points: 150, hackathon: "Hack7Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Bob Black", points: 140, hackathon: "Hack8Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Charlie Blue", points: 130, hackathon: "Hack9Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "David Red", points: 120, hackathon: "Hack10Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Michael Jordans", points: 102, hackathon: "Hack10Futo" , userName: '@oliviacoledesigns' ,icon: icon1},
  ]
  
  export const builderData: Member[] = [
   
    { name: "Dennis Pink", hackathon: "200", points: 10, userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "David White", hackathon: "200", points: 20 , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "serha blue", hackathon: "200", points: 50 , userName: '@oliviacoledesigns' ,icon: icon2},
    { name: "chaelwa Green", hackathon: "200", points: 40 , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Alice Gray", hackathon: "200", points: 30 , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Bob Black", hackathon: "200", points: 12 , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "Charlie Blue", hackathon: "200", points: 20 , userName: '@oliviacoledesigns' ,icon: icon1},
    { name: "David Red", hackathon: "200", points: 39 , userName: '@oliviacoledesigns' ,icon: icon3},
  ]
  