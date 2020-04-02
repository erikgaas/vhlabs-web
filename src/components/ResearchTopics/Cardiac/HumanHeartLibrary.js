import React, { Component } from 'react';
import '../../../styles/ResearchSubpages.css';

class HumanHeartLibrary extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-ca" className="researchSubPageBreadcrumb">Cardiac</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Human Heart Library</h5>
                    <p>The Visible Heart&reg; Library is an open resource for academics, students, and industry professionals to use for the study of cardiac anatomy and data analysis. The library holds over 600 human and animal hearts. We are very fortunate to partner with LifeSource to obtain human hearts not deemed viable for transplant from organ donors. It is a great privilege to be given the opportunity to study these wonderful gifts, and we try to return the favor by allowing open research of the hearts in our collection. We supply many pictures, videos, anatomy and physiology tutorials, and other information related to cardiac anatomy, as well as some data from the heart library, at the free Atlas of Human Cardiac Anatomy website <a href="http://www.vhlab.umn.edu/atlas">http://www.vhlab.umn.edu/atlas</a>.</p>

                    <p>We encourage individuals and groups to visit the laboratories to do research on the hearts. While hearts usually must be studied in the Lab, we can share scans of some hearts to researchers upon request within a reasonable timeframe. We perform CT, MRI, endoscope, and micro CT imaging within our operations. Common uses of the hearts include: structural analysis, device placement and delivery testing, comparative anatomy studies, and educational outreach. The hearts in the library are preserved in three main forms. We use a formalin fixation process for the majority of our hearts to preserve tissue properties as much as possible. Some hearts are further processed into a plastinated state so that they can be handled with bare hands. Plastinated hearts are often used for educational outreach programs due to their ease of handling.</p>

                    <p>We offer tours of the library with standard Laboratory visits, or library specific visits may be set up as well. For comments, questions, or interest in study please contact John Cole, library curator, at <a href="mailto:cole0882@umn.edu?Subject=Heart%20Library">cole0882@umn.edu</a>. If you would like more interest in the outreach programs sponsored by the Visible Heart&reg; Laboratories, please visit <a href="http://www.vhlab.umn.edu/outreach">http://www.vhlab.umn.edu/outreach</a>.</p>

                    <div align="center">
                    <div className="col-lg-8">
                    <p align="left"><img src="images/research/Cardiac_Library_PlastinateCabinet.jpg" alt="Plastinate Cabinet" /></p>
                    </div></div>

                </div>
            </div>
        );
    }
}

export default HumanHeartLibrary;