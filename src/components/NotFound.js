import React from 'react';

export default function NotFound() {
    return (<div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
        <div style={{
            marginTop: '20rem',
            fontSize: '10rem',
            fontWeight: 'bold'
        }}>오류 404</div>
        <div style={{
            marginTop: '5rem',
            fontSize: '3rem'
        }}>해당 페이지를 찾을 수 없습니다</div>
    </div>);
}
