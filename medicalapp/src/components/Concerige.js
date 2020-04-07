import React from 'react';
import '../App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/reactToastify.css';
import { Modal, Button } from 'react-bootstrap'
toast.configure()
class CONCIERGE extends React.Component {
    state = {
        concerigeService: "",
        address: "",
        Lists: [],
        isCheckoutBtn: false,
        show: false,
        isAddress: false,
        isSubmit: false
    }
    handleChange = (val) => {
        this.setState({
            concerigeService: val,
            isAddress: true
        })
    }
    handleAddress = (val) => {
        this.setState({
            address: val,
            isSubmit: true
        })
    }
    close = () => {
        this.setState({
            show: false
        })
    }
    open = () => {
        var obj = {
            concerigeService: this.state.concerigeService,
            address: this.state.address
        }
        console.log(obj)
        toast.info('Booking is confirmed Thank you ):')
        this.setState({
            show: !this.state.show,
            Lists: [...this.state.Lists, ...obj],
            concerigeService: "Please Select",
            isAddress: false,
            isSubmit: false,
            isCheckoutBtn: false,

        }, () => console.log(this.state))
    }
    render() {
        return (
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
                <label className="home" htmlFor="home">Concierge Services</label><br />
                <select onChange={(e) => this.handleChange(e.target.value)}
                    value={this.state.concerigeService}
                    className="form-control" style={{ width: "500px" }}>
                    <option>Please select</option>
                    {
                        this.props.concerigeServices.map((cservice, index) => {
                            return <option key={index}>{cservice}</option>
                        })
                    }
                </select>
                {
                    this.state.isAddress &&
                    <div>
                        <label className="home" htmlFor="address">Address</label> <br />
                        <textarea onChange={(e) => { this.handleAddress(e.target.value) }} />
                    </div>
                }
                {
                    this.state.isSubmit &&
                    <div>
                        <button className="btn btn-primary"
                            onClick={() => this.setState({  show: true})}
                            type="submit">Submit</button><br />
                    </div>
                }
                <br />
                <div className="container mt-4">
                <table className="table">
                    <thead>
                        <th>Concierge Service</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {
                            this.state.Lists.map((concierge,index) =><tr key={index}>
                                    <td>{concierge.concerigeService}</td>
                                    <td>{concierge.address}</td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default CONCIERGE