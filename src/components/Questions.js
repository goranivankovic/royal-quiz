
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
          aBtnValue:['','Yen','England','Star City','Walt Whitman','1942','The explosion of a star','X-ray vision','Polygraph','Smooth Criminal','Basketball','Monaco','Tibet','Alexandr Graham Bell','Asmara','Libya','Ankara','Friedrich Nietzsche','Perro','0','Rha'],
          bBtnValue:['','Dinar','Spain','Metropolis','Leonardo da Vinci','1943','An intense lightning storm','Sixth sense','Seismograph','Remember the Time','Soccer','Vatican City','Nepal','Thomas Edison','Dakar','Finland','Burma','John Locke','Zorro','12','Demeter'],
          cBtnValue:['','Ngultrum','France','Gotham','Franz Kafka','1945','An underwater volcano','Echolocation','Teregraph','I Will Always Love You','Football','Liechtenstein','between Tibet and Nepal','Henry Ford','Nairobi','South Africa','Ceylon','Immanuel Kant','Lobo','42','Persephone'],
          dBtnValue:['','Dollar','Italy','Springfield','William Shakespeare','1947','The eye of a tornado','Inter-species communication','Omnigraph','Earth Song','Baseball','San Marino','Switzerland','Samuel Morse','Johannesburg','Mexico','Siam','Rene Descartes','Ballena','144','Hygiela'],
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
 

componentDidMount(){

  document.querySelector('.rez').style.display='none'
 




}


    changeQuestions(e){

        this.setState({
            q2:this.state.q2+1,
            gameScore:0
        })
   
        

        
        const btnClass =document.querySelector('.btnClass')
   
        const allBtns =document.querySelectorAll('.allBtns')
        const playBtn =document.querySelector('.playBtn').style.display='none'
        document.querySelector('.rez').style.display='none'

      
    
    

    

    }



    aBtnSendstate(e){
     
        const aBtnValue =document.querySelector('.aBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.aBtnValue[1]){

      

                 this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

          
   
 }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[6]){

    this.setState({
        gameScore:this.state.gameScore+5,
        q2:this.state.q2+1,
       
    })

 

        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[8]){
          
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })





        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[13]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

         
        

           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[19]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

          


        }else if(e.button =='0' && aBtnValue.textContent == this.state.aBtnValue[20]){
            document.querySelector('.playBtn').style.display='flex'
            document.querySelector('.rez').style.display='flex'


            this.setState({
              
                q2:0,
               
            })

          


        }
        
        else{
            this.setState({
        
                q2:this.state.q2+1,
                
            })
         


        }

    

    
     
    }




    bBtnSendstate(e){

       
        const aBtnValue =document.querySelector('.bBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.bBtnValue[11]){

            
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })
            
           


   
        }else if(e.button =='0' && aBtnValue.textContent == this.state.bBtnValue[18]){
            
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

          


        }else if(e.button =='0' && aBtnValue.textContent == this.state.bBtnValue[20]){
         

      
               document.querySelector('.playBtn').style.display='flex'
               document.querySelector('.rez').style.display='flex'

               this.setState({
                gameScore:this.state.gameScore+5,
                q2:0,
               
            })
      
      

        }else{
            this.setState({
        
                q2:this.state.q2+1,
                
            })


        }



    
    
  



    }



    
    cBtnSendstate(e){

      
        const aBtnValue =document.querySelector('.cBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')


        if(e.button=='0' &&  aBtnValue.textContent == this.state.cBtnValue[3]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

         

   
        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[5]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

          

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[7]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

          

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[9]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

       

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[12]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })


      
               
            



        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[14]){

            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })
      

           

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[15]){


            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })


        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[17]){


            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })

        }else if(e.button =='0' && aBtnValue.textContent == this.state.cBtnValue[20]){
            document.querySelector('.playBtn').style.display='flex'
            document.querySelector('.rez').style.display='flex'


            this.setState({
             
                q2:0,
               
            })
   



        }
        
        else{
            this.setState({
        
                q2:this.state.q2+1,
               
            })


        }

       

    
    
  



    }




    
   dBtnSendstate(d){

  
        const dBtnValue =document.querySelector('.dBtnValue')
        const allBtns =document.querySelectorAll('.allBtns')
        
   
     


        if(d.button =='0' &&  dBtnValue.textContent == this.state.dBtnValue[2]){
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })


           
         
   
        }else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[4]){
           
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })
               
            }else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[10]){
        

                this.setState({
                    gameScore:this.state.gameScore+5,
                    q2:this.state.q2+1,
                   
                })
               
            

        
        
         } else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[16]){

           
            this.setState({
                gameScore:this.state.gameScore+5,
                q2:this.state.q2+1,
               
            })
           


        }else if(d.button =='0' && dBtnValue.textContent == this.state.dBtnValue[20]){
            document.querySelector('.playBtn').style.display='flex'
            document.querySelector('.rez').style.display='flex'

           
            this.setState({
             
                q2:0,
               
            })
           


        }
        else{
            this.setState({
        
                q2:this.state.q2+1,
                
            })


        }

      
    
    



    }
       



    render() {
        const borderRadius={
            borderRadius:'7px',
            backgroundColor:"grey",
            marginBottom:"15px"
          
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
                            
                   <Col md={6} sm={12} className="">
                       
                   <Button style={borderRadius} className="w-100 allBtns" onClick={this.aBtnSendstate}><h6> <span className="float-left text-warning">a:</span>  <span className="text-center text-light aBtnValue t">{this.state.aBtnValue[`${this.state.q2}`]}</span></h6></Button>

               </Col>


                    <Col md={6} sm={12} className="">
                    <Button style={borderRadius} className="w-100 allBtns" onClick={this.bBtnSendstate}><h6><span className="float-left text-warning">b:</span> <span className="text-center text-light bBtnValue t">{this.state.bBtnValue[`${this.state.q2}`]}</span></h6></Button>
                    </Col>


                    </Row>
                </Container>
                <br></br>

                <Container>
                    <Row>
                        
                      <Col md={6} sm={12} className="b">
                      <Button style={borderRadius} className="w-100 allBtns" onClick={this.cBtnSendstate}> <h6><span className="float-left text-warning">c:</span> <span className="text-center text-light cBtnValue t">{this.state.cBtnValue[`${this.state.q2}`]}</span></h6></Button>

                       </Col>

                       <Col md={6} sm={12} className="b">

                       <Button style={borderRadius} className="w-100 allBtns" onClick={this.dBtnSendstate}><h6><span className="float-left text-warning">d:</span> <span className="text-center text-light dBtnValue t">{this.state.dBtnValue[`${this.state.q2}`]}</span></h6></Button>

                        </Col>
    
                         <Col xs={12} className="float-right">

                     <h3 className="float-right"><Button className="btnClass float-right playBtn"    onClick={this.changeQuestions}>Play</Button></h3>
                        </Col>
                    </Row>
                </Container>
           

                <Container>
                    <Row>
                        <Col xs={12} className="text-center rez"><h4>Winning percentage is:<span className="text-primary"> {this.state.gameScore}%</span></h4></Col>
                    </Row>
                </Container>



                
            </div>
        )
    }
}
