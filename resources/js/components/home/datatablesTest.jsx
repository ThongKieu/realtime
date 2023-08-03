import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
//For API Requests
import axios from 'axios';
export default class DataTableTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data });

        });
        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable();
            }, 1000);
        });
    }
    render() {
        return (
            <div className="mt-1">
                <table id="example" className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr className='font-semibold tracking-wide text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md'>
                            <th scope="col" className='px-6 py-3'>userId</th>
                            <th scope="col" className='px-6 py-3'>id</th>
                            <th scope="col" className='px-6 py-3'>title</th>
                            <th scope="col" className='px-6 py-3'>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((result) => {
                            return (
                                <tr key={result.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    <td className='w-4 p-4 border-b'>{result.userId}</td>
                                    <td className='w-4 p-4 border-b'>{result.id}</td>
                                    <td className='w-4 p-4 border-b'>{result.title}</td>
                                    <td className='w-4 p-4 border-b'>{result.body}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
