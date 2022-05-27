export const getUsers = async (value) => {
  if (value === '') {
    return {
      error: { id: 422, message: 'Please enter a value' },
    }
  }
  const response = await fetch(
    `https://api.github.com/search/users?q=${value}`
    /*, {
      headers: {
        authorization: 'token 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',
      },
    }*/
  )
  const result = await response.json()
  if (result.total_count === 0) {
    return {
      ...result,
      error: {
        id: 404,
        message: `No results found for: ${value}`,
      },
    }
  }
  return result
}

export const getInfo = async (login) => {
  const response = await fetch(
    `https://api.github.com/users/${login}`
    /*, {
    headers: {
      authorization: 'token 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',
    },
  }*/
  )
  const result = await response.json()
  return result
}
