import React from 'react'

function Title() {
    console.log('Rednering Title');
  return (
    <h1>
        useCallback example
    </h1>
)
}

export default React.memo(Title)