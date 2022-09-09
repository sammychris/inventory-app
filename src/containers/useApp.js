import React, { useState } from 'react';


const useApp = () => {
    const [story, setStory] = useState('');
    const handleChange = (e) => {
        const {value} = e.target;
        setStory(value);
    }
    return {handleChange};
  }


export default useApp;
