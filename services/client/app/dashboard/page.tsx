import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('supabase_token')
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()
      if (res.ok) setUser(data)
      setLoading(false)
    }
    fetchUser()
  }, [])

  if (loading) return <p>Loading...</p>
  if (!user) return <p>Unauthorized. Please log in.</p>

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome, {user.email}!</p>
    </div>
  )
}
