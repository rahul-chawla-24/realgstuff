import React from 'react';
import '../App.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/reactToastify.css';
import { Modal, Button } from 'react-bootstrap'
toast.configure()
class HomeServices extends React.Component {
    state = {
        show: false,
        service: "",
        isDateVisible: false,
        isFromTimeVisible: false,
        isToTimeVisible: false,
        date: "",
        fromTime: "",
        toTime: "",
        List: [],
        price: 100,
        isCheckoutBtn: false,
        isSubmit:false
    }
    open = () => {
        var obj = {
            service: this.state.service,
            date: this.state.date,
            fromTime: this.state.fromTime,
            toTime: this.state.toTime
        }
        toast.info('Booking is confirmed Thank you ):')
        this.setState({
            show: !this.state.show,
            List: [...this.state.List, obj],
            service: "Please Select",
            isCheckoutBtn: false,
            isDateVisible: false,
            isFromTimeVisible: false,
            isToTimeVisible: false,
            isSubmit:false
        }, () => console.log(this.state))
    }
    home = (val) => {
        this.setState({
            service: val,
            isDateVisible: true
        })
    }
    handleDate = (val) => {
        this.setState({
            date: val,
            isFromTimeVisible: true
        })
    }
    handleToDate = (val) => {
        this.setState({
            toTime: val,
            isSubmit:true
        })
    }
    handleFromDate = (val) => {
        this.setState({
            fromTime: val,
            isToTimeVisible: true,
            
        })
    }
    close = () => {
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div className=" container mt-5">
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
                <label className="home" htmlFor="home">Home Care Services</label><br />
                <select
                    onChange={(e) => this.home(e.target.value)}
                    value={this.state.service}
                    className="form-control" style={{ width: "500px" }}>
                   <option>Please select</option>
                    {
                        this.props.homeServices.map((service, index) => {
                            return <option key={index}>{service}</option>
                        })
                    }
                </select><br />
                {
                    this.state.isDateVisible &&
                    <div>
                        <label className="home" htmlFor="home">Select Date</label><br />
                        <input type="date"
                            onChange={(e) => this.handleDate(e.target.value)}
                            className="form-control date" style={{ width: "500px" }} />
                    </div>
                }


                <br />

                {
                    this.state.isFromTimeVisible &&
                    <div>
                        <label className="home">Select time<br /> from</label>
                        <input type="time"
                            onChange={(e) => { this.handleFromDate(e.target.value) }}
                            className="form-control" style={{ width: "500px" }} />
                    </div>
                }

                {
                    this.state.isToTimeVisible &&
                    <div>
                        <label className="home">To</label>
                        <input type="time" onChange={(e) => { this.handleToDate(e.target.value) }}
                            className="form-control"
                            style={{ width: "500px" }} />
                    </div>
                }
                <br />
                {
                     this.state.isSubmit &&
                <div>
                    <button className="btn btn-primary"
                    onClick={() => this.setState({ isCheckoutBtn: true })}
                    type="submit">Submit</button><br />
                </div>
                }
                <br />
                {
                    this.state.isCheckoutBtn &&
                    <button className="btn btn-warning"
                        onClick={() => this.setState({ show: true })}>
                        Checkout <br /> Rs{this.state.price * (parseFloat(this.state.toTime)-parseFloat(this.state.fromTime))}</button>
                }
                <div className="container">
                <table className="table">
                    <thead>
                        <th>service</th>
                        <th>Date</th>
                        <th>FromTime</th>
                        <th>ToTime</th>
                    </thead>
                    <tbody>
                        {
                            this.state.List.map((home,index) => {
                                return <tr key={index}>
                                    <td>{home.service}</td>
                                    <td>{home.date}</td>
                                    <td>{home.fromTime}</td>
                                    <td>{home.toTime}</td>

                                </tr>
                            })
                        }

                    </tbody>
                </table>
                </div>
                <div className="container mt-5 ml-5">
                    <div className="row">
                        <div className="col-md-3 ml-3 mr-3 mt-5">
                            <img src="./src/nurse.jpg" alt="nurse" width="250px" height="300px" />
                        </div>
                        <div className="col-md-3 ml-5 mr-5 mt-5">
                            <img src="./src/physio.jpg" alt="physio" width="250px" height="300px" />
                        </div>
                        <div className="col-md-3 ml-3 mt-5">
                            <img src="./src/cook.jpg" alt="cook" width="250" height="300px" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default HomeServices