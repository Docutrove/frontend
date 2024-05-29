import Service from '../../ui/service'

interface HomeSubscriptionProps {
  className?: string
}

export default function HomeSubscription({ className }: HomeSubscriptionProps) {
  return (
    <Service
      className={`home__subscription ${className}`}
      title="About Templars"
      description="TEMPLARS is at the forefront of law in Africa."
      description2="A leading African law firm, advising clients across sectors and geographies to provide innovative solutions to their most pressing business challenges. Our clients include global and regional business giants, market disruptors and some of Africa’s most exciting start-ups."
      imageURL="/images/subscription-banner.png"
      // path="/subscription"
      // buttonText="Discover our subscriptions services"
    />
  )
}
