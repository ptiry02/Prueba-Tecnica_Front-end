export const getUsers = async (value) => {
  if (value === '') {
    return { error: true, id: 422, message: 'Please enter a value' }
  }
  const response = await fetch(`https://api.github.com/search/users?q=${value}`)
  const result = await response.json()
  if (result.total_count === 0) {
    return {
      error: true,
      id: 404,
      message: `No results found for: ${value}`,
    }
  }
  return { ...result, error: false }
}

export const getInfo = async (login) => {
  const response = await fetch(`https://api.github.com/users/${login}`)
  const result = await response.json()
  return { ...result, error: false }
}
