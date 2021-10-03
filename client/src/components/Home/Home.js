import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';


export default function Home() {

    var NOMADA_KEY = 'ZTdkNDFkMGYtMWZkNi00ZWU5LThkYTgtYTRlN2UzODNjZGE1';
    var MOVIE_KEY= '30db1237b9167f8afaf9e065b90d16b8';


    //const [image, setImage] = useState('')

    const { Dragger } = Upload;
    
    const props = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        accept: '.png, .PNG, .jpg, .JPG',
        action: null,
        method: 'POST',
        file: '',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                //message.success(`${info.file.name} file uploaded successfully.`)
                console.log("Linea 31", info.file.uid)
            } else if (status === 'error') {
                //message.error(`${info.file.name} file upload failed.`);
                console.log("Linea 34", info.file.uid)
                axios.post( `https://whois.nomada.cloud/upload?nomada=${NOMADA_KEY}&file=${info.file.uid}`)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        },
        
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return(
        <div>
            <h1>¿Quien es este actor?</h1>
            <Dragger {...props} >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                    Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
        </div>
    );
}