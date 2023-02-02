import { useEffect, useState } from 'react'

function parseCategories(object) {
  // Convierte el objecto que viene del server, con el formato
  // Label: [category, category, category]
  // A un array como : [{label: 'label', value: 'category'}]
  // Si es una sola categoría, la toma como value
  // Si hay más de una categoría, elige la que tiene 'and' en el nombre
  return Object.entries(object).map(([key, value]) => ({
    label: key,
    value:
      value.length === 1
        ? value[0]
        : value.find((item) => item.includes('and')),
  }))
}

export default function useCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://the-trivia-api.com/api/categories')
      .then((response) => response.json())
      .then((object) => {
        const parsedCategories = [{ label: 'Any', value: '' }].concat(
          parseCategories(object)
        )
        setCategories(parsedCategories)
      })
  }, [])

  return categories
}
