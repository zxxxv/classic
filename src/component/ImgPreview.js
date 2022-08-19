import { useState } from 'react';
import styled from 'styled-components';

let Preview = styled.div`
    width: 200px;
    height: 200px;
`

function ImgPreview() {

    const [imageSrc, setImageSrc] = useState('');

    const encodeFileToBase64 = (fileBlob) => {

        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    return (
        <main className="container">
            <h2>이미지 미리보기</h2>
            <input type="file" onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
            }} />
            <Preview>
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
            </Preview>
        </main>
    );
}

export default ImgPreview;
