import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table-unminify.css";

import columnJSON from "../json/FormerStudents/column.json";
import postdocJSON from "../json/FormerStudents/postdoc.json";
import doctoralJSON from "../json/FormerStudents/doctoral.json";

const gradcolumns = columnJSON["gradcolumns"];
const undergradcolumns = columnJSON["undergradcolumns"];
const postdoc = postdocJSON["postdoc"];
const doctoral = doctoralJSON["doctoral"];



class FormerStudents extends Component {
	render() {
		return (
			<div className='container'>
					<h2>Former Students</h2>

                    <h4>Research and Post-Doctoral Fellows</h4>	

            <div className='section-container'>
            <ReactTable
              data={postdoc}
              columns={gradcolumns}
              minRows = {0}
              defaultPageSize={1000}
              showPagination = {false}
              defaultSorted={[{
                id   : 'years',
                desc : true,
              }]}
              
            />
            </div>      

                    <h4>Doctoral Students</h4>	

            <div className='section-container'>
            <ReactTable
              data={doctoral}
              columns={gradcolumns}
              minRows = {0}
              defaultPageSize={1000}
              showPagination = {false}
              defaultSorted={[{
                id   : 'years',
                desc : true,
              }]}
              
            />
            </div>      


        </div>
            
    );
}
}


export default FormerStudents;