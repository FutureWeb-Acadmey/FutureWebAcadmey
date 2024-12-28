import NavigationMenu from "@/Components/NavigationMenu/NavigationMenu"
import styles from './main.module.css'
import Footer from "@/Components/Footer/Footer"
export const metadata = {
  title: 'FutureWeb Academy',
  description: 'full stack development,front end development,back end development,future web academy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body style={{margin:0,padding:0}}>
       <div className='sticky'> <NavigationMenu /></div>
       {children}
       <Footer/>
        </body>
    </html>
  )
}
