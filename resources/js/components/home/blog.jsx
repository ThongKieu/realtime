import React, { useState } from 'react';

function Blog() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [relationship, setRelationship] = useState('');


        // Truy cập giá trị hiện tại của input và cập nhật state 'name'
        // setName(e.target.value);
        // setAge(e.target.value);
        // setAddress(e.target.value);
        // setNumberPhone(e.target.value);
        // setRelationship(e.target.value);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn"
            /><input
                type="number"
                value={age}

                onChange={(e) => setAge(e.target.value)}
                placeholder="Nhập tuổi của bạn"
            /><input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Nhập địa chỉ của bạn"
            /><input
                type="text"
                value={numberPhone}
                onChange={(e) => setNumberPhone(e.target.value)}
                placeholder="Nhập số điện thoại của bạn"
            /><input
                type="text"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                placeholder="Nhập mối quan hệ của bạn"
            />
            <p>Tên của bạn là: {name}</p>
            <p>Tuổi của bạn là: {age}</p>
            <p>Địa chỉ của bạn là: {address}</p>
            <p>Số điện thoại của bạn là: {numberPhone}</p>
            <p>Mối quan hệ của bạn là: {relationship}</p>
        </div>
    )
}

export default Blog
