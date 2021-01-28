
import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'react-bootstrap';


export default class Questions extends Component {
    constructor(props){
        super(props)
        this.state={
          q1:['','Name the currency used in Japan?','In which country is the Leaning Tower of Pisa located?',
          'Name the fictional city Batman calls home?','Who wrote Hamlet?','In what year did World War II end?',
          'What is a supernova?','How are bats able to fly in the dark?',"What'is the technical term for a lie detector?",
          'Which of these is NOT the name of a Michael Jackson song?','Babe Ruth is a legend of which sport?',"What's the smallest country in the world?",
          'Where is Mount Everest located?','Who is officially credited with the invention of the light bulb?',"What's the capital of Kenya?",
          "Which of the following countries is closest to the South Pole?",'What was the official name of Thailand before 1939?','Which philosopher said, "I think, therefore I am"?',
          "What's the Spanish word for fox?","How many bones are there in an elephant's trunk?",'In Greek mythology, who is the Goddess of Agriculture?'],
          aBtnValue:['','Taka','England','Star City','Walt Whitman','1942','The explosion of a star','X-ray vision','Polygraph','Smooth Criminal','Basketball','Monaco','Tibet','Alexandr Graham Bell','Asmara','Libya','Ankara','Friedrich Nietzsche','Perro','0','Rha'],
          bBtnValue:['','Dinar','Spain','Metropolis','Leonardo da Vinci','1943','An intense lightning storm','Sixth sense','Seismograph','Remember the Time','Soccer','Vatican City','Nepal','Thomas Edison','Dakar','Finland','Burma','John Locke','Zorro','12','Demeter'],
          cBtnValue:['','Ngultrum','France','Gotham','Franz Kafka','1945','An underwater volcano','Echolocation','Teregraph','I Will Always Love You','Football','Liechtenstein','between Tibet and Nepal','Henry Ford','Nairobi','South Africa','Ceylon','Immanuel Kant','Lobo','42','Persephone'],
          dBtnValue:['','Yen','Italy','Springfield','William Shakespeare','1947','The eye of a tornado','Inter-species communication','Omnigraph','Earth Song','Baseball','San Marino','Switzerland','Samuel Morse','Johannesburg','Mexico','Siam','Rene Descartes','Ballena','144','Hygiela'],
          q2:0,
          num7:7,
          gameScore:0
         

        }
        this.changeQuestions=this.changeQuestions.bind(this)

        this.aBtnSendstate =this.aBtnSendstate.bind(this)

        this.bBtnSendstate=this.bBtnSendstate.bind(this)

        this.cBtnSendstate=this.cBtnSendstate.bind(this)

        this.dBtnSendstate=this.dBtnSendstate.bind(this)
        
    
    }
 




    changeQuestions(){

        this.setState({
            q2:this.state.q2+1
        })
   
        

        

      

        const btnClass =document.querySelector('.btnClass')
   
        const allBtns =document.querySelectorAll('.allBtns')
        const playBtn =document.querySelector('.playBtn').style.display='none'

        const rez =document.querySelector('.rez')
    
    

     const ugasiInetrval= setInterval(()=>{
          this.setState({
              num7:this.state.num7-1
          })
          if(this.state.num7==0){

              this.setState({
                  num7:7
                 
              })
          
              for(let i = 0; i<allBtns.length;i++){
                allBtns[i].disabled = false;
               
               }
               

          }else if(this.state.q2>20){
            this.setState({
                num7:7
               
            })
            clearInterval(ugasiInetrval)
          }


      },1000)


   
const redTime= setInterval(()=>{


    if(this.state.q2>20){
        this.setState({
            q2:0,
            gameScore:0

          
         })
         const playBtn =document.querySelector('.playBtn').style.display='flex'
       

   
         clearInterval(redTime)
        


    }else{

        
        this.setState({
            q2:this.state.q2+1
        })



        }
    
    },7000)

    

    }



    aBtnSendstate(e){
     
        const aBtnValue =document.querySelector('.aBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.aBtnValue[1]){
            this.setState({
                gameScore:this.state.gameScore+5
            })

   
        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[6]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[8]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[13]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[19]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }

        for(let i=0;i<allBtns.length;i++){
            allBtns[i].disabled = true;
        }

    
     
    }




    bBtnSendstate(e){

       
        const aBtnValue =document.querySelector('.bBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.bBtnValue[11]){
            this.setState({
                gameScore:this.state.gameScore+5
            })

   
        }else if(e.button =='0' && aBtnValue.textContent == this.state.bBtnValue[18]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.bBtnValue[20]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }

        for(let i=0;i<allBtns.length;i++){
            allBtns[i].disabled = true;
        }

    
    
  



    }



    
    cBtnSendstate(e){

      
        const aBtnValue =document.querySelector('.cBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.cBtnValue[3]){
            this.setState({
                gameScore:this.state.gameScore+5
            })

   
        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[5]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[7]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[9]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[12]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[14]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[15]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[17]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }

        for(let i=0;i<allBtns.length;i++){
            allBtns[i].disabled = true;
        }

    
    
  



    }




    
   dBtnSendstate(d){

  
        const dBtnValue =document.querySelector('.dBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')
        
   
     


        if(d.button =='0' &&  dBtnValue.textContent == this.state.dBtnValue[2]){
            this.setState({
                gameScore:this.state.gameScore+5
            })

   
        }else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[4]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[10]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }

        
        
        else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[16]){
            this.setState({
                gameScore:this.state.gameScore+5
            })
           

        }

        for(let i=0;i<allBtns.length;i++){
            allBtns[i].disabled = true;
        }

    
    



    }
       



    render() {
        const borderRadius={
            borderRadius:'7px',
            backgroundColor:"grey"
          
        }
        return (
            <div className="questionsMaincontainer">
                <Container className="">
                    <Row className="questionsMaincontainerRow">
                        
                        <Col  xs={12} className="text-center">
                        <h5 className="allQuestions text-primary t">{this.state.q1[`${this.state.q2}`]}</h5> 
                        </Col>
                       
                
                    </Row>

                </Container>
                <br></br>









                <Container>
                    <Row>
                            
                   <Col xs={5} className="">
                       
                   <Button style={borderRadius} className="w-100 allBtns" onClick={this.aBtnSendstate}><h6> <span className="float-left text-warning">a:</span>  <span className="text-center text-light aBtnValue t">{this.state.aBtnValue[`${this.state.q2}`]}</span></h6></Button>

               </Col>


                    <Col xs={5} className="">
                    <Button style={borderRadius} className="w-100 allBtns" onClick={this.bBtnSendstate}><h6><span className="float-left text-warning">b:</span> <span className="text-center text-light bBtnValue t">{this.state.bBtnValue[`${this.state.q2}`]}</span></h6></Button>
                    </Col>


                     <Col className="b">

                       <h4 className="float-right text-danger" xs={2}>{this.state.num7}</h4>
                    </Col>

                    </Row>
                </Container>
                <br></br>

                <Container>
                    <Row>
                        
                      <Col xs={5}  className="b">
                      <Button style={borderRadius} className="w-100 allBtns" onClick={this.cBtnSendstate}> <h6><span className="float-left text-warning">c:</span> <span className="text-center text-light cBtnValue t">{this.state.cBtnValue[`${this.state.q2}`]}</span></h6></Button>

                       </Col>

                       <Col xs={5}  className="b">

                       <Button style={borderRadius} className="w-100 allBtns" onClick={this.dBtnSendstate}><h6><span className="float-left text-warning">d:</span> <span className="text-center text-light dBtnValue t">{this.state.dBtnValue[`${this.state.q2}`]}</span></h6></Button>

                        </Col>
    
                         <Col xs={2}>

                     <h3 className="float-right"><Button className="btnClass float-right playBtn"   xs={2} onClick={this.changeQuestions}>Play</Button></h3>
                        </Col>
                    </Row>
                </Container>
                <br></br>

                <Container>
                    <Row>
                        <Col xs={12} className="text-center"><h4>Winning percentage is:<span className="text-primary rez"> {this.state.gameScore}%</span></h4></Col>
                    </Row>
                </Container>



                
            </div>
        )
    }
}
