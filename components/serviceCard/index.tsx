import { FunctionComponent } from "react"
import { IService } from "../../type"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title}}) => {

  const createMarkup = () => {
    return {
      __html: about,
    }
  }
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon  className="text-blue-900 w-14 h-14"/>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  )
}

export default ServiceCard
