import { memo } from 'react'

interface ProfileProps {
  firstname: string
  lastname: string
}

const Profile = memo(({ firstname, lastname }: ProfileProps) => {
  console.log("Rendered Profile Component")
  
  return (
    <div className="profile">
      <h3>User Profile</h3>
      <p>First Name: {firstname}</p>
      <p>Last Name: {lastname}</p>
    </div>
  )
})

Profile.displayName = 'Profile'

export default Profile