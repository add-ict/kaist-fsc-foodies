import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./Tags.css"

export default function Tags({lang, data}) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div id="Tags-outer">
      <Stack id="Tags-inner" direction="row" spacing={1}>
          {data.map(x=>{return <Chip label={x.name[lang]} onClick={handleClick}></Chip>;})}
      </Stack>
    </div>
  );
}
