import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './Home.css';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';


export default function Home(handler) {

    var NOMADA_KEY = 'ZTdkNDFkMGYtMWZkNi00ZWU5LThkYTgtYTRlN2UzODNjZGE1';
    var MOVIE_KEY= '30db1237b9167f8afaf9e065b90d16b8';

    
    const [image, setImage] = useState('')
    
    
    const { Dragger } = Upload;

    
    const props = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        accept: '.png, .PNG, .jpg, .JPG',
        action: `https://whois.nomada.cloud/upload?Nomada=${NOMADA_KEY}&file=${image}`,
        type:'file multipart/form-data',
        id: 'image',

        onChange(info) {
            const { status } = info.file;

            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`)
                setImage(info.file.originFileObj)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
                setImage(info.file.originFileObj)
            }
        },

        onDrop(info) {
            console.log('Dropped files', info.dataTransfer.files);
            setImage(info.file.originFileObj)
        },
    };

    return(
        <div>
            <h1>¿Quien es este actor?</h1>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined id='input'/>
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