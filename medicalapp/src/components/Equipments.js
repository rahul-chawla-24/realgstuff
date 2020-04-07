import React from 'react';
import '../App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/reactToastify.css';
import { Modal, Button } from 'react-bootstrap'
toast.configure()
class Equipment extends React.Component{
 state={
     equipment:"",
     address:"",
     Lists: [],
     isCheckoutBtn: false,
     show: false,
     isAddress: false,
     isSubmit: false,
     price:0

 }

 open = () => {
    var obj = {
        equipment: this.state.equipment,
        address: this.state.address
    }
    toast.info('Booking is confirmed Thank you ):')
    this.setState({
        show: !this.state.show,
        Lists: [...this.state.Lists, ...obj],
        equipment: "",
        isAddress: false,
        isSubmit: false,
        isCheckoutBtn: false,

    }, () => console.log(this.state))
}
    render(){
        console.log(this.props.equipments[0].price)
        return(
            <div className="container mt-5"> 
             <Modal show={this.state.show}>
                    <Modal.Header >
                        <Modal.Title>Booking Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Click Yes to confirmed your  booking?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.close}>
                            No
                        </Button>
                        <Button variant="primary" onClick={() => this.open()} >
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <label className="home" htmlFor="home">Medical Equipment Services</label><br/>
               <select className="form-control" 
               onChange={(e)=>this.setState({equipment : e.target.value,isAddress:true})} 
               style={{width:"500px"}}>
                   <option>Please select</option>
                   { 
                       this.props.equipments.map((eservice,index)=>
                       <option key={index}>{eservice.service}, {''} Rs.{eservice.price}</option>)
                   }
               </select>
               {
                    this.state.isAddress &&
                    <div>
                        <label className="home" htmlFor="address">Address</label> <br />
                        <textarea onChange={(e) => { this.setState({address:e.target.value, isSubmit:true })}} />
                    </div>
                }
                 {
                    this.state.isSubmit &&
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => this.setState({ isCheckoutBtn: true })}
                            type="submit">Submit</button><br />
                    </div>
                }
                <br/>
                <br/>
                 {
                    this.state.isCheckoutBtn &&
                    <button className="btn btn-warning"
                        onClick={() => this.setState({ show: true })}>
                        Checkout <br />Rs{this.state.equipment.split('Rs.')[1]}</button>
                }
               <div class="container mt-4 w-4">
               <table className="table">
                    <thead>
                        <th>Equipment</th>
                        <th>Address</th>
                       
                    </thead>
                    <tbody>
                        {
                            this.state.Lists.map((eq,index) => {
                                return <tr key={index}>
                                    <td>{eq.equipment.split(',')[0]}</td>
                                    <td>{eq.address}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default Equipment