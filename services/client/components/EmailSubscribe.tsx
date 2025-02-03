'use client'

import { Button } from '@/components/core-ui/button'
import { Input } from '@/components/core-ui/input'
import { Loader2 } from 'lucide-react'

import { useToast } from '@/hooks/use-toast'
import { useState } from 'react'

export default function EmailSubscribe({ listId }) {
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateEmail(email)) {
      toast({
        variant: 'destructive',
        title: 'Uh oh!',
        description: 'Please enter a valid email address.',
      })
      return
    }

    const url = process.env.NEXT_PUBLIC_API

    setLoading(true)

    try {
      const response = await fetch(`${url}/v1/email/list/${listId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      })

      if (!response.ok) {
        const { detail } = await response.json()
        throw new Error(detail || 'Failed to add client')
      }

      setEmail('')
      toast({
        variant: 'success',
        title: 'Thank you for joining!',
        description: `We'll keep you updated on our latest news, stories, and updates.`,
      })
    } catch (error) {
      console.error('Error:', error)
      toast({
        variant: 'destructive',
        title: 'Oops!',
        description:
          'There was an error processing your request. Please try again later.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="mt-4 flex gap-2" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {loading ? (
        <Button disabled className="w-24 rounded-r-lg">
          <Loader2 className="animate-spin w-24" />
        </Button>
      ) : (
        <Button className="bg-tertiary rounded-r-lg w-24" type="submit">
          Subscribe
        </Button>
      )}
    </form>
  )
}
