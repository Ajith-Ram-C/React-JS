import './card.css'
import Img1 from '../../images/cc1.jpeg'
import Img2 from'../../images/c2.jpg'
import Img3 from'../../images/cc2.jpg'
import Img4 from'../../images/c4.jpg'
import Main from'../reusable/Main';

function Card()
{
    return(
        <>
        <Main/>
        <div className='container'>
            <div className='col-12-lg col-sm-12'>
            <h1>Learn 4.0 Technologies</h1>
            <p>Get trained by alumni of IIT's and top companies like amazon,microsoft,intel,bivida,qualcomm,etc.
               Learn directly from professionals involved in project development. 
            </p>
            </div>
            <div className='row col-lg-12 text-left'>
                <div className="col-sm-6">
                    <div className="card bt1">
                    <div className="card-body">
                        <h5 className="card-title"><b>Data Scientist</b></h5>
                        <p className="card-text">Data Scientist gather and analyize large sets of structured and unstructured.</p>
                        <img src={Img1} className='im1 col-lg-12 col-sm-12'/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bt2">
                    <div className="card-body">
                        <h5 className="card-title"><b>IOT Developer</b></h5>
                        <p className="card-text">IOT development are professionals who can develop manage and monitor IOT devices.</p>
                        <img src={Img2} className='im2 col-lg-12 col-sm-12'/>
                    </div>
                    </div>
                </div>
            </div>
            <div className='row col-lg-12 p-3 text-left'>
                <div className="col-sm-6">
                    <div className="card bt3">
                    <div className="card-body">
                        <h5 className="card-title"><b>VR Developer</b></h5>
                        <p className="card-text">VR developer creates whole new digital settings that users can see through a device like the Oculus headset.</p>
                        <img src={Img3} className='im3 col-lg-12 col-sm-12'/>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card bt4">
                    <div className="card-body">
                        <h5 className="card-title"><b>ML Engineer</b></h5>
                        <p className="card-text">A machine learning engineer ML engineer is a person in IT who focuses on researching.</p>
                        <img src={Img4} className='im4 col-lg-12 col-sm-12'/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default  Card;