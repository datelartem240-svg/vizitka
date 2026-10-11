import { Link } from 'react-router'

export default function NotFoundPage() {
    
    return<>
        <div>
            <p>404 error</p>
            <Link to='/'>go home</Link>
        </div>
    </>
}