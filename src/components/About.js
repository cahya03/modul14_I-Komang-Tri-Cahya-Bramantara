import {useState} from "react";
const About= () => {
    const [me] = useState({
        name: "I Komang Tri Cahya Bramantara",
        province: "Bali",
        nationality: "Indonesian"
    });
    return (
      <body style={{
          color: 'black', textAlign: 'center'
      }}>
            <h1>About</h1>
            <p>"I am thou... Thou art I... From the sea of thy soul, I come..."</p>

            <h3 style={{marginTop:'200px', fontSize:'24px'}}>My name is {me.name}</h3>
            <p style={{marginBottom:'100px'}}> A humble {me.nationality} boy from {me.province}</p>
      </body>
    )
  }
  
  export default About;