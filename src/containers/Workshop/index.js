import NotFound from 'components/NotFound';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Workshops } from './workshops';
import marked from 'marked';

Workshop.propTypes = {
    match: PropTypes.object.isRequired
};

export default function Workshop({
  match: {
    params: { workshop }
  }
}) {
    const [desc, setDesc] = useState('a');
    useEffect(() => {
      if (!Workshops.hasOwnProperty(workshop)) return;
      setDesc(Workshops[workshop].desc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workshop]);
    return (!Workshops.hasOwnProperty(workshop) ? <NotFound /> : <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%'
    }}>
        <center>
          <iframe title='video' width="933" height="525"
          src={`https://www.youtube.com/embed/${Workshops[workshop].video}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen style={{
            marginTop: '5rem'
          }} />
          <div style={{
            width: '75%',
            marginTop: '5rem',
            border: '2px #30363d solid',
            borderRadius: '6px',
            padding: '1rem',
            marginBottom: '3rem'
          }}>
            <div style={{
                fontSize: '1.2rem',
                color: '#c9d1d9',
                width: '100%',
                textAlign: 'left'
            }} dangerouslySetInnerHTML={{
                __html: marked(desc)
            }} />
          </div>
          <div style={{
            marginBottom: '3rem',
            color: '#8b949e',
            fontSize: '1rem'
          }}>© 2021 다이트로 (주)</div>
        </center>
    </div>);
}

/*
<iframe width="933" height="525"
src="https://www.youtube.com/embed/4KVuipFpCv4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
allowfullscreen />
*/
