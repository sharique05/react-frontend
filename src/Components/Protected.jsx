import { Navigate } from 'react-router-dom'
function Protected({ isSignedIn, children }) {
  console.log("isSignedIn",isSignedIn)
  if (!isSignedIn) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected