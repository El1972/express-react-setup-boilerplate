import React, { useEffect, useState } from 'react'

function App() {

  const [item, setItem] = useState('')

  useEffect(() => {
    fetch('/things')
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
