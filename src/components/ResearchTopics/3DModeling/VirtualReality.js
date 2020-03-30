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
                    <p align="left"><img src="images/research/3D_Modeling_VR_heart.jpg" alt="Human Heart in VR" /><br />
                    A user flying through the left ventricle of a human heart in virtual reality. The user is studying the mitral valve of the heart while viewing functional anatomical videos within the virtual environment to enhance their learning.</p>
                    </div></div>

                    <p>The virtual reality platform also encompasses the visible heart laboratories rich, fresh human cadaver database. These cadavers have been CT scanned and their anatomy was fully modeled in 3D before being imported into the platform. This yields the ability for users to study the anatomy of the entire body while understanding the differences of anatomical features in each person. </p>

                    <div align="center">
                    <div className="col-lg-5">
                    <p align="left"><img src="images/research/3D_Modeling_VR_cadaver.jpg" alt="Human Cadaver in VR" /><br />
                    A fully modeled cadaver in virtual reality.</p>
                    </div></div>

                    <p>One of the focuses of the 3D modeling in the Visible Heart&reg; laboratories is to enable virtual prototyping and deployment of medical devices within real human anatomy. Much can be learned about how a device is (or should be) designed by studying the device tissue interface. These virtual implantations can be studied within the virtual reality platform to gain insight about the device, its implantation position, and the device tissue interface within an immersive virtual environment. </p>

                    <div align="center">
                    <div className="col-lg-7">
                    <p align="left"><img src="images/research/3D_Modeling_VR_micra.jpg" alt="Micra in VR" /><br />
                    Micra Images.</p>
                    </div></div>

                    <p>Many of the cardiac specimens within the lab have devices already implanted in them. These specimens and their implanted devices can also be scanned, 3D modeled, and placed into the virtual reality platform. This unique opportunity allows the user to not only study the device tissue interface but reflect on the actual implant of the device and how it was truly deployed within the specimen. </p>

                    <div align="center">
                    <div className="col-lg-8">
                    <p align="left"><img src="images/research/3D_Modeling_VR_stent.jpg" alt="Bifurcation culotte stent in VR" /><br />
                    A bifurcation culotte stent in virtual reality.</p>
                    </div></div>

                    <p>The virtual reality platform contains a wide variety of features to enhance educational outcomes. These functions include the ability to change the scale of an anatomical model, the ability to hide or show the various models within a virtual environment, the ability to display the motion of a heart captured in a multi-phase CT scan, and many more. Additionally, the platform includes a custom anaglyph 3D output functionality to render the output display in 3D when using red/blue anaglyph 3D glasses. This allows one user to operate the virtual reality headset while a multitude of users can affordably experience the anatomical models in 3D. </p>

                    <div align="center">
                    <div className="col-lg-6">
                    <p align="left"><img src="images/research/3D_Modeling_VR_anaglyph.jpg" alt="Anaglyph functionality in VR" /><br />
                    Images of anaglyph functionality in virtual reality and being used by students wearing red/blue 3D glasses.</p>
                    </div></div>


                </div>
            </div>
        );
    }
}

export default VirtualReality;