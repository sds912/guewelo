import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Button } from "react-bootstrap"
import { faCar, faComputer,faTShirt, faBook, faTools, faHouse, faChevronDown, faChevronUp, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


const Options = ()=>{
   const [opened, setOpened] = useState(true);
   const [selected, setSelected] = useState(null);

    const [options, setOptions] = useState([
        {
           label: "Appartement",
           icon: faHouse,
           selected: false
        },
        {
            label: "Voiture",
            icon: faCar,
            selected: false
         },
         {
            label: "Electronique",
            icon: faComputer,
            selected: false
         },
         {
            label: "Mode",
            icon: faTShirt,
            selected: false
         },
         {
            label: "Emploi",
            icon: faBook,
            selected: false
         },
         {
            label: "Service",
            icon: faTools,
            selected: false
         }

         
    ]);

    const onSselect = (op)=>{
        setSelected(op)
    }


   return <Container fluid={true} className="px-0 shadow-sm">
           <div className="p-2 bg-white w-100">
                { selected ? <div className="border px-3 py-2 "> <Row>
                    
                    <Col xs="5">
                        <FontAwesomeIcon icon={selected.icon} size="xl" color="#be4d25" />
                    </Col>
                    <Col xs="5">
                        <h5 style={{fontWeight: 'bold'}} >{selected.label}</h5>
                    </Col>
                    <Col xs="2 text-right">
                     <button className="btn btn-outline px-2 py-0" onClick={() => setSelected(null)} >
                        <FontAwesomeIcon icon={faClose} />
                     </button>
                    </Col>
                </Row> </div>: ''}
                { opened ? 
                    <Row >
                        { options.map( op => <Col xs="6" sm="3"  key={op.label} >
                            <div className="rounded text-center p-3 mt-2 border" style={{backgroundColor: op === selected ? '#F4F4F4': 'transparent'}} onClick={() => onSselect(op)}>
                                <FontAwesomeIcon icon={op.icon} size="2xl" color="#be4d25" />
                                <div className="mt-2" />
                                <h5 style={{fontWeight: 'bold'}} >{op.label}</h5> 
                            </div>
                            </Col>)
                        }
                    </Row>: ''}

            <div>
                 <button className="btn btn-outline-muted" style={{width: '100%'}}>
                    {!opened ? <FontAwesomeIcon icon={faChevronDown} onClick={() => setOpened(true)} />:
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => setOpened(false)} />}

                 </button>
            </div>
           </div>
           
          </Container>
}

export default Options;