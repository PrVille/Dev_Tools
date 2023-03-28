export const SNIPPETS = [
  {
    language: "JavaScript",
    title: "Random item from array",
    code: "const item = items[Math.floor(Math.random()*items.length)]",
  },
  {
    language: "JavaScript",
    title: "Random item between two numbers",
    code: `const randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}`,
  },
  {
    language: "JavaScript",
    title: "Array sort ascending",
    code: `array.sort((a, b) => a - b)`,
  },
  {
    language: "JavaScript",
    title: "Array sort descending",
    code: `array.sort((a, b) => a + b)`,
  },
  {
    language: "JavaScript",
    title: "Array sum",
    code: `array.reduce((a, b) => a + b, 0)`,
  },
  {
    language: "React",
    title: "Functional component",
    code: `import React from 'react'
  
const MyComponent = () => {
    return (
        <div>MyComponent</div>
    )
}
    
export default MyComponent`,
  },
  {
    language: "React",
    title: "Custom useFetch hook",
    code: `import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setData(null)
        setError(null)

        axios
            .get(url)
            .then(({ data }) => {
                setData(data)
                setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setLoading(false)
        })
    }, [url])

    return [data, loading, error]
}

export default useFetch`,
  },
  {
    language: "Python",
    title: "Adding an item to a list",
    code: `# Statically defined list
my_list = [2, 5, 6]
# Appending using slice assignment
my_list[len(my_list):] = [5]  # [2, 5, 6, 5]
# Appending using append()
my_list.append(9)  # [2, 5, 6, 5, 9]
# Appending using extend()
my_list.extend([-4])  # [2, 5, 6, 5, 9, -4]
# Appending using insert()
my_list.insert(len(my_list), 3)  # [2, 5, 6, 5, 9, -4, 3]`,
  },
  {
    language: "Python",
    title: "Sorting a list of dictionaries",
    code: `csv_mapping_list = [
    {
        "Name": "Jeremy",
        "Age": 25,
        "Favorite Color": "Blue"
    },
    {
        "Name": "Ally",
        "Age": 41,
        "Favorite Color": "Magenta"
    },
    {
        "Name": "Jasmine",
        "Age": 29,
        "Favorite Color": "Aqua"
    }
]

# Custom sorting
size = len(csv_mapping_list)
for i in range(size):
    min_index = i
    for j in range(i + 1, size):
        if csv_mapping_list[min_index]["Age"] > csv_mapping_list[j]["Age"]:
            min_index = j
    csv_mapping_list[i], csv_mapping_list[min_index] = csv_mapping_list[min_index], csv_mapping_list[i]

# List sorting function
csv_mapping_list.sort(key=lambda item: item.get("Age"))

# List sorting using itemgetter
from operator import itemgetter
f = itemgetter('Name')
csv_mapping_list.sort(key=f)

# Iterable sorted function
csv_mapping_list = sorted(csv_mapping_list, key=lambda item: item.get("Age"))`,
  },
  {
    language: "JavaScript",
    title: "Shuffle an array",
    code: `const arr = [1, 2, 3, 4, 5]
for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1))
  [arr[i], arr[j]] = [arr[j], arr[i]]
}`,
  },
  {
    language: "JavaScript",
    title: "Currying",
    code: `const add = (x) => {
  return (y) => {
    return x + y
  }
}

const add5 = add(5)
console.log(add5(3)) // 8
`,
  },
  {
    language: "React",
    title: "Conditional rendering based on state",
    code: `const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
      {isLoggedIn ? <h1>Welcome user!</h1> : <button onClick={() => setIsLoggedIn(true)}>Log in</button>}
    </div>
  )
}
`,
  },
  {
    language: "React",
    title: "Using useRef to access DOM elements",
    code: `const TextInputWithFocusButton = () => {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
`,
  },
]

