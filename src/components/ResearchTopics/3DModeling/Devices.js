import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class Devices extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Devices</h5>
                    <p>The Visible Heart Laboratories have established rich collaborations within the medical device community. Combining industry connections with our own anatomic library, we have generated computational models of medical device placements within human anatomy. These models help us to educate the community at-large about medical device therapy, while communicating the nuances of specific technologies with clinicians. Using 3D printing and virtual reality, we can fly through a stent in the left anterior descending coronary artery, follow a catheter through the femoral venous system, visualize a trans-septal puncture, appreciate the size of a leadless pacemaker, and much more.</p>

                    <p><strong>Cardiac Valves</strong></p>

                    <p>Transcatheter aortic valve replacement (TAVR) devices are implanted and visualized within reanimated human hearts using Visible Heart&reg; methodologies. These hearts are scanned using micro-computed tomography to obtain high-resolution images of the implanted TAVR frames. These scans are imported into a medical image processing system to develop computational models of the device. Subsequently, the computational reconstruction are 3D printed and developed as a virtual reality scene. A case study of an implanted CoreValve Evolut&trade; R and the 3D modeling process is shown in Figure 1.</p>

                    <div align="center">
                    <div className="col-lg-9">
                    <p align="left"><img src="images/research/3D_Modeling_Devices.png" alt="Figure 1" /><br />
                    Figure 1: 3D modeling of a CoreValve Evolut&trade; R implantation within a reanimated human heart using Visible Heart&reg; methodologies. The TAVR frame is visualized and analyzed through micro-CT scans (A), computational reconstructions (B,C), and 3D printing (D). (Adapted from Zhingre Sanchez, J. D.; Bateman, M.G.; Iaizzo, P.A. Multimodal imaging of a self-expanding transcatheter aortic valve replacement (TAVR) procedure in a reanimated human heart and post-implant analyses. The International Journal of Cardiovascular Imaging, November 2019, Volume 35, Issue 11, 2135-2137.</p>
                    </div></div>

                    <p>This 3D modeling process is important for studying the tissue-device interactions between the TAVR frame and real human aortic anatomy. The frame implant shape, evident through the imaging scans and 3D prints, can provide insight into strut deformations. The reconstructions detail how the device is positioned within the aortic root, which is important to analyze when minimizing paravalvular leakage and coronary obstruction. These analyses can educate both cardiologists about the implant process and medical device professionals with device design. </p>
                </div>
        </div>
        );
    }
}

export default Devices;