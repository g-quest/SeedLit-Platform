'use server'

export async function signUp(email: string, password: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/user/signup`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    },
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.detail || 'Signup failed')
  }

  return data
}

export async function signIn(email: string, password: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/v1/user/signin`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    },
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data?.detail || 'Login failed')
  }

  // ✅ Return user data
  return data
}
