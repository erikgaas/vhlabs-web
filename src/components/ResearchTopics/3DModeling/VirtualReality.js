import React, { Component } from 'react';

class VirtualReality extends Component {
    render() {
        return (
            <div className='container'>
                <h2><a href="/research" className="researchSubPageBreadcrumb"> Research</a> > <a href="/research-3d" className="researchSubPageBreadcrumb">3D Modeling</a></h2>
                <div className="subpageContainer">
                    <h5 className="subpageTitle">Virtual Reality</h5>
                    <p>The Visible Heart&reg; Laboratories prides itself for being at the forefront of cardiac visualization. This has led to the development of a virtual reality platform for anatomic learning. The platform was created using Unity3D software and custom C# scripts that allow users to navigate throughout the virtual environments and interact with the anatomical models. The anatomical models within the virtual environments are created from high resolution MRI and CT scans of actual human anatomies. This allows for the user to be immersed in highly detailed anatomical models that preserve the intricacies of the human anatomy. </p>

                    <div align="center">
                    <div className="col-lg-8">
                    <p align="left"><img src="images/research/3D_Modeling_VH_heart.jpg" alt="Human Heart in VR" /><br />
                    A user flying through the left ventricle of a human heart in virtual reality. The user is studying the mitral valve of the heart while viewing functional anatomical videos within the virtual environment to enhance their learning.</p>
                    </div></div>

                    <p>The virtual reality platform also encompasses the visible heart laboratories rich, fresh human cadaver database. These cadavers have been CT scanned and their anatomy was fully modeled in 3D before being imported into the platform. This yields the ability for users to study the anatomy of the entire body while understanding the differences of anatomical features in each person. </p>

                    <div align="center">
                    <div className="col-lg-5">
                    <p align="left"><img src="images/research/3D_Modeling_VH_cadaver.jpg" alt="Human Heart in VR" /><br />
                    A fully modeled cadaver in virtual reality.</p>
                    </div></div>


                </div>
            </div>
        );
    }
}

export default VirtualReality;