import React, { Component } from 'react';

class ArtificialIntelligence extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Artificial Intelligence</h5>
                    <p>The Visible Heart&reg; Laboratories is on the forefront of utilizing artificial intelligence to solve problems in the medical field. The focus thus far has been the development of pipelines that utilize convolutional neural networks to automatically segment anatomical features from CT and MRI scans and produce 3D models of said anatomy. These automatic segmentation pipelines produce a high-quality 3D model of an anatomic feature in a MRI/CT scan in mere minutes, whereas a human would require many hours to produce a 3D model of similar quality. This work yields the opportunity for large annotated anatomical datasets to be produced in a fraction of the time and workforce previously required. Pipelines such as these will likely see use in the future for reducing the time required to develop patient specific 3D anatomical models for surgical planning and post procedure scans for analysis. </p>

                    <div align="center">
                    <div className="col-lg-5">
                    <p align="left"><img src="images/research/3D_Modeling_AI_segmenting.jpg" alt="AI Segmenting" /><br />
                    The four heart chambers segmented by an artificial intelligence pipeline (left) and a human segmenter (right).</p>
                    </div></div>

                    <p>The Visible Heart&reg; Laboratories are also using AI in a variety of ways outside of automatic anatomical segmentation. Other current research topics include developing object detection networks to automatically detect and locate the position of anatomical features within a DICOM scan and using AI to perform point cloud registration between different anatomical models to quickly produce highly accurate statistical shape modeling of anatomical features within a dataset. </p>


                </div>
            </div>
        );
    }
}

export default ArtificialIntelligence;