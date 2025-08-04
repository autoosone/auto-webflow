import { Navbar } from '../../devlink/Navbar'
import { Hero } from '../../devlink/Hero'
import { Showcase } from '../../devlink/Showcase'
import { Interior } from '../../devlink/Interior'
import { Specs } from '../../devlink/Specs'
import { Powertrain } from '../../devlink/Powertrain'
import { Slider } from '../../devlink/Slider'
import { Impact } from '../../devlink/Impact'
import { Freedom } from '../../devlink/Freedom'
import { Go } from '../../devlink/Go'
import { Footer2 } from '../../devlink/Footer2'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <Interior />
      <Specs />
      <Powertrain />
      <Slider />
      <Impact />
      <Freedom />
      <Go />
      <Footer2 />
    </main>
  )
}
