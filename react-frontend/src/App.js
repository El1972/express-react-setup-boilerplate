
// express-react setup (Don't delete it!!!)

import React, { useEffect, useState } from 'react'

function App() {

  const [item, setItem] = useState('')

  useEffect(() => {
    fetch('/home')
      .then(response => response.json())
      .then(data => setItem(data))
  })

  return (
    <div>
      {item.talk}
    </div>
  );
}

export default App;

